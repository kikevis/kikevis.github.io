import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../theme/ThemeProvider'

/* -----------------------------------------------------------
   Utilidades
   ----------------------------------------------------------- */

/** Distribuye N puntos de forma uniforme sobre una esfera (espiral de Fibonacci). */
function fibonacciSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3)
  const phases = new Float32Array(count)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    positions[i * 3] = Math.cos(theta) * r * radius
    positions[i * 3 + 1] = y * radius
    positions[i * 3 + 2] = Math.sin(theta) * r * radius
    phases[i] = Math.random() * Math.PI * 2
  }
  return { positions, phases }
}

function scrollProgress() {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  if (max <= 0) return 0
  return Math.min(1, Math.max(0, window.scrollY / max))
}

/* -----------------------------------------------------------
   Núcleo: esfera de puntos que respira
   ----------------------------------------------------------- */

function PulseSphere({ color, count = 2600 }: { color: string; count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const base = useMemo(() => fibonacciSphere(count, 2.05), [count])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(base.positions.slice(), 3))
    return g
  }, [base])

  const three = useMemo(() => new THREE.Color(color), [color])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const attr = geometry.getAttribute('position') as THREE.BufferAttribute
    const arr = attr.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const bx = base.positions[i3]
      const by = base.positions[i3 + 1]
      const bz = base.positions[i3 + 2]
      // Deformación tipo onda: la esfera "respira" y ondula.
      const wave =
        Math.sin(t * 0.85 + base.phases[i]) * 0.06 +
        Math.sin(by * 2.4 + t * 1.15) * 0.09 +
        Math.cos(bx * 1.9 - t * 0.75) * 0.06
      const k = 1 + wave
      arr[i3] = bx * k
      arr[i3 + 1] = by * k
      arr[i3 + 2] = bz * k
    }
    attr.needsUpdate = true
    if (ref.current) {
      ref.current.rotation.y = t * 0.075
      ref.current.rotation.x = Math.sin(t * 0.18) * 0.16
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color={three}
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.92}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/* -----------------------------------------------------------
   Estructura: dos anillos de alambre en contrarrotación
   ----------------------------------------------------------- */

function WireRings({ color }: { color: string }) {
  const a = useRef<THREE.LineSegments>(null)
  const b = useRef<THREE.LineSegments>(null)

  const geoA = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.9, 1)),
    [],
  )
  const geoB = useMemo(
    () => new THREE.EdgesGeometry(new THREE.TorusGeometry(3.5, 0.02, 3, 96)),
    [],
  )
  const three = useMemo(() => new THREE.Color(color), [color])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (a.current) {
      a.current.rotation.y = -t * 0.11
      a.current.rotation.z = t * 0.05
    }
    if (b.current) {
      b.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.2) * 0.2
      b.current.rotation.z = t * 0.16
    }
  })

  return (
    <group>
      <lineSegments ref={a} geometry={geoA}>
        <lineBasicMaterial color={three} transparent opacity={0.28} />
      </lineSegments>
      <lineSegments ref={b} geometry={geoB}>
        <lineBasicMaterial color={three} transparent opacity={0.4} />
      </lineSegments>
    </group>
  )
}

/* -----------------------------------------------------------
   Polvo ambiental
   ----------------------------------------------------------- */

function Dust({ color, count = 900 }: { color: string; count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [count])

  const three = useMemo(() => new THREE.Color(color), [color])

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime()
      ref.current.rotation.y = t * 0.018
      ref.current.position.y = Math.sin(t * 0.24) * 0.35
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color={three}
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  )
}

/* -----------------------------------------------------------
   Cámara: parallax de mouse + desplazamiento por scroll
   ----------------------------------------------------------- */

function Rig({ group }: { group: React.RefObject<THREE.Group> }) {
  const { camera, pointer } = useThree()
  const target = useRef({ x: 0, y: 0, z: 8 })

  useFrame(() => {
    const p = scrollProgress()
    target.current.x = pointer.x * 0.9
    target.current.y = pointer.y * 0.55 + p * 1.1
    target.current.z = 8 - p * 2.2

    camera.position.x += (target.current.x - camera.position.x) * 0.045
    camera.position.y += (target.current.y - camera.position.y) * 0.045
    camera.position.z += (target.current.z - camera.position.z) * 0.045
    camera.lookAt(0, 0, 0)

    if (group.current) {
      group.current.rotation.z = p * 0.5
      const s = 1 - p * 0.16
      group.current.scale.setScalar(s)
    }
  })
  return null
}

/* -----------------------------------------------------------
   Escena
   ----------------------------------------------------------- */

function SceneContent() {
  const { meta } = useTheme()
  const group = useRef<THREE.Group>(null)

  return (
    <>
      <fog attach="fog" args={[meta.scene.fog, 9, 21]} />
      <Rig group={group} />
      <group ref={group}>
        <PulseSphere color={meta.scene.primary} />
        <WireRings color={meta.scene.secondary} />
        <Dust color={meta.scene.particles} />
      </group>
    </>
  )
}

export default function Scene3D() {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // La escena manda en el hero y se retira cuando empieza a leerse el contenido.
  const { scrollY } = useScroll()
  const raw = useTransform(scrollY, [0, 620], [1, 0.26])
  const opacity = useSpring(raw, { stiffness: 90, damping: 26, mass: 0.4 })

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
        frameloop={reduced ? 'demand' : 'always'}
      >
        <SceneContent />
      </Canvas>
    </motion.div>
  )
}

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Image, Environment, Preload } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function GalleryItem({ url, position, index }: { url: string; position: [number, number, number], index: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <Suspense fallback={<mesh scale={[3, 4, 1]}><planeGeometry /><meshStandardMaterial color="#111" /></mesh>}>
          <Image 
            url={url} 
            scale={[3, 4, 1]} 
            zoom={1}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </Suspense>
        <Text
          position={[0, -2.5, 0.1]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          PROJECT 0{index + 1}
        </Text>
      </group>
    </Float>
  );
}

function GalleryScene() {
  const images = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      
      {images.map((url, i) => (
        <GalleryItem 
          key={url} 
          url={url} 
          index={i}
          position={[i * 5 - 7.5, 0, 0]} 
        />
      ))}
      <Preload all />
    </>
  );
}

export default function ThreeGallery() {
  return (
    <section className="relative h-screen bg-matte-black py-24">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Immersive</p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">3D Gallery</h2>
      </div>
      
      <div className="h-full w-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <Suspense fallback={null}>
            <GalleryScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.5em] text-white/20">
        Interactive Depth Experience
      </div>
    </section>
  );
}

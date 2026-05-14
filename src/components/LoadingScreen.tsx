import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PHRASES = [
  "Crafting Visual Experiences",
  "Designing Cinematic Stories",
  "Creating Beyond Ordinary",
  "Visual Storytelling in Motion"
];

function CinematicPortrait() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const { x, y } = state.mouse;
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.1, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.1, 0.05);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Background Glow */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#5B8CFF" transparent opacity={0.05} />
      </mesh>
      
      {/* Floating Glass Panels */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[-2, 1, 0.5]} rotation={[0, 0.2, 0]}>
          <planeGeometry args={[1, 2]} />
          <meshPhysicalMaterial 
            transparent 
            opacity={0.1} 
            roughness={0} 
            transmission={1} 
            thickness={0.5}
            color="#22D3EE"
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
        <mesh position={[2, -1, 0.8]} rotation={[0, -0.1, 0]}>
          <planeGeometry args={[1.5, 1.5]} />
          <meshPhysicalMaterial 
            transparent 
            opacity={0.1} 
            roughness={0} 
            transmission={1} 
            thickness={2}
            color="#8B5CF6"
          />
        </mesh>
      </Float>

      <Sparkles count={50} scale={5} size={1} speed={0.4} opacity={0.2} />
    </group>
  );
}

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(1);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Progress interval
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setPhase(5), 1000); // Transition to home
          setTimeout(onFinish, 2000);
          return 100;
        }
        return prev + 0.5;
      });
    }, 20);

    // Phase management based on progress
    if (progress > 5 && phase === 1) setPhase(2);
    if (progress > 30 && phase === 2) setPhase(3);
    if (progress > 50 && phase === 3) setPhase(4);

    // Phrase rotation
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearInterval(phraseInterval);
    };
  }, [progress, phase, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-matte-black overflow-hidden"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <CinematicPortrait />
        </Canvas>
      </div>

      {/* Main Portrait Container */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative h-[400px] w-[300px] md:h-[500px] md:w-[380px]">
          {/* Portrait Image with Effects */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 1.1, filter: "blur(40px)" }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  filter: "blur(0px)",
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="relative h-full w-full overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200"
                  alt="Tamim"
                  className="h-full w-full object-cover shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                
                {/* Subtle Glow edges */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(34,211,238,0.1)]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Text Overlays */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full text-center">
            <AnimatePresence mode="wait">
              {phase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-2"
                >
                  <h1 className="font-accent text-6xl font-bold tracking-tight text-white md:text-8xl">
                    Tamim
                  </h1>
                  <p className="font-sans text-xs uppercase tracking-[0.5em] text-white/40">
                    Visual Content Creator & Graphic Designer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Loading Progress & Rotating Phrasis */}
        <div className="mt-32 w-64 text-center">
          <div className="h-px w-full overflow-hidden bg-white/5">
            <motion.div
              className="h-full bg-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          
          <div className="mt-4 flex items-center justify-between font-sans text-[10px] uppercase tracking-widest text-white/20">
            <span>Progressing</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-white/60"
              >
                {PHRASES[phraseIndex]}
              </motion.span>
            </AnimatePresence>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Global Cinematic Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(13,13,13,0.4)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </motion.div>
  );
}

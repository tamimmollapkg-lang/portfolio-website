import { motion } from 'motion/react';
import ThreeScene from './ThreeScene';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 md:px-12">
      <ThreeScene />
      
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-accent text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
              Visual Content Creator
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl">
              Turning Ideas Into <br />
              <span className="text-gradient">Cinematic Stories</span>
            </h1>
            <p className="mt-8 max-w-xl font-sans text-lg text-white/50 md:text-xl">
              I create high-end visual content through graphic design, photography, 
              videography, branding, and creative direction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-3 rounded-full bg-neon-cyan px-8 py-4 font-display font-bold text-matte-black transition-all hover:scale-105 hover:glow-cyan"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full border border-white/10 glass px-8 py-4 font-display font-bold text-white transition-all hover:bg-white/10"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                <Play className="h-3 w-3 fill-white" />
              </div>
              Work with Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/10">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 h-2 w-1 rounded-full bg-neon-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}

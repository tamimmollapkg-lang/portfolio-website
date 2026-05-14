import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="font-accent text-xl font-bold tracking-tighter">NEON<span className="text-neon-cyan">.</span></h2>
            <p className="mt-2 text-sm text-white/40 font-medium">Crafting the visual future.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Copyright © 2024</a>
          </div>

          <div className="flex items-center gap-1 leading-none">
            <span className="h-2 w-2 rounded-full bg-neon-cyan glow-cyan" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Available for hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

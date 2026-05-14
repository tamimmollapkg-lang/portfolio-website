import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Play } from 'lucide-react';

const REELS = [
  { id: 1, title: 'Summer Collection', video: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Urban Motion', video: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Nike Campaign', video: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Tech Reveal', video: 'https://images.unsplash.com/photo-1526733158173-e1b251f290e2?auto=format&fit=crop&q=80&w=800' },
];

export default function VideoShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-matte-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-12">
          <div className="flex shrink-0 flex-col justify-center px-12">
            <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Cinematic</p>
            <h2 className="mt-4 font-display text-5xl font-bold md:text-7xl lg:text-8xl">Video Showcase</h2>
            <p className="mt-6 max-w-sm text-white/40">
              Capturing motion through high-end videography and storytelling.
            </p>
          </div>
          
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative h-[70vh] w-[450px] shrink-0 overflow-hidden rounded-3xl bg-soft-charcoal"
            >
              <img
                src={reel.video}
                alt={reel.title}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/0" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60">Selected Reel</p>
                <h3 className="mt-2 text-2xl font-bold">{reel.title}</h3>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl">
                  <Play className="h-8 w-8 fill-white" />
                </div>
              </div>
              
              <div className="absolute top-0 right-0 p-8">
                <span className="font-accent text-3xl font-bold opacity-10">0{reel.id}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

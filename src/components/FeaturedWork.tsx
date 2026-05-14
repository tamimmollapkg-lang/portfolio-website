import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PROJECTS } from '../constants';
import { X, ExternalLink } from 'lucide-react';

export default function FeaturedWork() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Showcase</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">Featured Work</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs text-sm text-white/40"
          >
            A collection of selected works ranging from cinematic brand films to experimental graphic design.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedId(project.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-soft-charcoal"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="flex translate-y-4 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-widest text-white/60">{project.category}</span>
                  <span className="font-accent text-xs font-bold">{project.year}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold transition-all duration-500 group-hover:text-neon-cyan">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-matte-black/90 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            
            <motion.div
              layoutId={selectedId}
              className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-soft-charcoal p-0 md:p-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-12 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-matte-black">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col p-8 md:p-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan">{selectedProject.category}</span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">{selectedProject.title}</h2>
                  <p className="mt-6 text-lg text-white/60 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-white/5 px-4 py-2 text-xs text-white/60">{tag}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-10">
                    <button className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display font-bold text-matte-black transition-transform hover:scale-105">
                      Case Study
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

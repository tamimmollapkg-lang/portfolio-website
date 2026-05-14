import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-soft-charcoal/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan">Our Expertise</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">Visual Solutions</h2>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.Zap;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:glow-cyan"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-neon-cyan transition-colors group-hover:bg-neon-cyan group-hover:text-matte-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{service.description}</p>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 transition-colors group-hover:text-neon-cyan">
                  Learn More
                  <Icons.ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-neon-cyan/5 blur-[120px] rounded-full" />
    </section>
  );
}

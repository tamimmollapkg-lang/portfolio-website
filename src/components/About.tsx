import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Years Exp.', value: '08+' },
    { label: 'Projects', value: '150+' },
    { label: 'Brands', value: '45+' },
    { label: 'Awards', value: '12' },
  ];

  const skills = [
    'Graphic Design', 'Product Photography', 'Video Editing', 
    'Motion Graphics', 'Lighting Setup', 'Camera Operation', 'Social Media Design'
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl grayscale transition-all duration-700 hover:grayscale-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 h-48 w-48 glass rounded-2xl p-6 hidden md:block">
              <p className="font-accent text-sm font-bold text-neon-cyan">CREATIVE VISION</p>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Blending technology with artistic intuition to create memorable digital experiences.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold md:text-5xl">
                Elevating Brands Through <br />
                <span className="text-neon-cyan">Visual Excellence</span>
              </h2>
              <p className="mt-8 text-lg font-sans text-white/60 leading-relaxed">
                With a deep focus on cinematic storytelling and modern design principles, 
                I help luxury brands and creative agencies stand out in the digital landscape. 
                Every project is a fusion of technical precision and creative soul.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan font-bold">Creative Arsenal</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

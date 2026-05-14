import { motion } from 'motion/react';
import { Mail, MessageSquare, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl font-bold md:text-7xl">
              Let's Build Something <br />
              <span className="text-neon-cyan">Visually Powerful</span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-white/50">
              Transform your vision into cinematic reality. Reach out for collaborations or project inquiries.
            </p>

            <div className="mt-12 space-y-6">
              <a href="mailto:hello@neonvisuals.com" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-neon-cyan transition-all group-hover:bg-neon-cyan group-hover:text-matte-black">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Email Me</p>
                  <p className="text-lg font-medium">hello@neonvisuals.com</p>
                </div>
              </a>
              <a href="https://wa.me/8801319643710" className="flex items-center gap-4 group" target="_blank" rel="noopener noreferrer">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-neon-cyan transition-all group-hover:bg-neon-cyan group-hover:text-matte-black">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">WhatsApp</p>
                  <p className="text-lg font-medium">+8801319643710</p>
                </div>
              </a>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/60 transition-all hover:border-white/20 hover:text-white hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-white/5 p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Name</label>
                  <input type="text" className="w-full rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-neon-cyan/50" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                  <input type="email" className="w-full rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-neon-cyan/50" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Service</label>
                <select className="w-full rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-white outline-none transition-all focus:border-neon-cyan/50 appearance-none">
                  <option className="bg-matte-black">Graphic Design</option>
                  <option className="bg-matte-black">Product Photography</option>
                  <option className="bg-matte-black">Cinematic Video</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-neon-cyan/50" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full rounded-full bg-white py-5 font-display font-bold text-matte-black transition-all hover:scale-[1.02] active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

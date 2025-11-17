import { Wand2, Sparkles, Code2, Rocket } from 'lucide-react';

const services = [
  {
    icon: Wand2,
    title: 'Brand & Visual Systems',
    desc: 'Identity, typography, and product-ready design languages that scale.',
  },
  {
    icon: Sparkles,
    title: 'Motion & Interaction',
    desc: 'Micro-interactions and 3D that make your product feel alive.',
  },
  {
    icon: Code2,
    title: 'Web Apps & Sites',
    desc: 'Blazing-fast, accessible, and SEO-friendly experiences.',
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'Analytics, A/B testing, and continuous iteration for impact.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Services</h2>
            <p className="mt-2 text-white/70 max-w-xl">Everything you need to go from idea to polished, performant web experience.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-md bg-white text-black font-medium">Start a project</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 flex items-center justify-center">
                <Icon className="text-cyan-300" size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

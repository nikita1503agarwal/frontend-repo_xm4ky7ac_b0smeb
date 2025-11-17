const projects = [
  {
    title: 'Nova Commerce',
    desc: 'Ecommerce experience focused on speed and clarity.',
    tag: 'Ecommerce',
  },
  {
    title: 'Synapse OS',
    desc: 'Interactive docs with playful motion and 3D.',
    tag: 'Docs',
  },
  {
    title: 'Halo Labs',
    desc: 'Product site with modular sections and CMS.',
    tag: 'Marketing',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected work</h2>
            <p className="mt-2 text-white/70 max-w-xl">A few projects that show our love for clean visuals and crisp interactions.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-md bg-white text-black font-medium">Start a project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              <div className="p-5">
                <span className="text-[11px] uppercase tracking-wide text-white/60">{p.tag}</span>
                <h3 className="mt-2 text-white font-medium">{p.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

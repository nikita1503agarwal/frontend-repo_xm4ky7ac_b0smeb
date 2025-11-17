import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs backdrop-blur border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tech-forward web studio
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              We craft clean, modern websites that feel alive
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              netomate blends design, motion, and code into playful, high-performing digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">Start a project</a>
              <a href="#work" className="px-5 py-3 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15 transition-colors">See our work</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
    </section>
  );
}

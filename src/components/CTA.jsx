export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Have a project in mind?</h2>
        <p className="mt-3 text-white/70">Tell us about your goals and timeline. We’ll get back within 24 hours.</p>
        <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
          <input className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
          <input type="email" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
          <input className="sm:col-span-2 w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company / Project" />
          <textarea rows={4} className="sm:col-span-2 w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="What are you building?" />
          <button className="sm:col-span-2 mt-2 px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">Send message</button>
        </form>
      </div>
    </section>
  );
}

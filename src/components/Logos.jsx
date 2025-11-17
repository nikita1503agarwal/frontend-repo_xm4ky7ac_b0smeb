const logos = [
  { name: 'Figma', text: 'Figma' },
  { name: 'Notion', text: 'Notion' },
  { name: 'Vercel', text: 'Vercel' },
  { name: 'Stripe', text: 'Stripe' },
  { name: 'Linear', text: 'Linear' },
  { name: 'Framer', text: 'Framer' },
];

export default function Logos() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/60 text-sm">Trusted by teams building modern web products</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center py-3 rounded-md border border-white/10 bg-white/5 text-white/80">
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

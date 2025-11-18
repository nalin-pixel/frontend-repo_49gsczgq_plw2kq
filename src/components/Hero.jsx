import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1020] via-[#0f1a3a] to-[#0b1020] shadow-2xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.25),transparent_60%)]" />
      </div>
      {/* Headline */}
      <div className="relative z-10 flex h-full items-end p-8 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_25px_rgba(56,189,248,0.35)]">
            Funky Todos
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-cyan-100/90">
            A playful, modern to‑do app with satisfying micro‑interactions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { accents, profile } from "../data/content";

export default function Hero({ accent, onAccentChange }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full bg-accent/35 blur-[120px] transition-colors duration-500" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent/15 blur-[100px] transition-colors duration-500" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-28">
        <p className="rise text-lg text-ink/70" style={{ animationDelay: "0.05s" }}>
          Hi, I'm {profile.firstName}. Welcome to my portfolio.
        </p>

        <h1 className="mt-4 font-display text-[clamp(3rem,11vw,9rem)] font-extrabold leading-[0.9] tracking-tight">
          <span className="rise block" style={{ animationDelay: "0.15s" }}>your vision</span>
          <span className="rise outline-text block" style={{ animationDelay: "0.3s" }}>we realize.</span>
        </h1>

        <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink/80" style={{ animationDelay: "0.5s" }}>
          I'm a graphic designer from Tanza, Cavite working in branding, layout and short-form content. I help brands and
          creators establish their look.
        </p>

        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.65s" }}>
          <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/30 transition hover:brightness-110 active:scale-95">
            View my projects
          </a>
          <a href={profile.cv} download="Busante-Resume.pdf" className="rounded-full border border-ink/40 px-6 py-3 font-medium transition hover:bg-ink hover:text-black active:scale-95">
            Download CV
          </a>
        </div>

        <div className="rise mt-14 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.8s" }}>
          <p className="text-sm text-ink/70" id="accent-label">Pick a shade of purple and the whole site follows:</p>
          <div role="radiogroup" aria-labelledby="accent-label" className="flex gap-3">
            {accents.map((a) => (
              <button
                key={a.value}
                type="button"
                role="radio"
                aria-checked={accent === a.value}
                aria-label={a.name}
                title={a.name}
                onClick={() => onAccentChange(a.value)}
                style={{ backgroundColor: a.value }}
                className={`h-9 w-9 rounded-full transition-transform hover:scale-110 ${accent === a.value ? "ring-2 ring-ink ring-offset-4 ring-offset-paper" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

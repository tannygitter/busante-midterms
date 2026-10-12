import { about } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-surface py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="About me" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-white/85">
            <p>{about.intro}</p>
            <p>{about.background}</p>

            <div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">Interests</h3>
              <ul className="flex flex-wrap gap-2">
                {about.interests.map((i) => (
                  <li key={i} className="rounded-full border border-white/30 px-4 py-1.5 text-base">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-display text-2xl font-bold">Skills</h3>
            {Object.entries(about.skills).map(([group, items]) => (
              <div key={group}>
                <h4 className="mb-3 text-base font-medium text-white/60">{group}</h4>
                <ul className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s} className="rounded-full bg-accent px-4 py-1.5 text-base font-medium transition-colors duration-500">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

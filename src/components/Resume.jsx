import { education, experience, about, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="border-y border-ink/10 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="Resume" />
          <a
            href={profile.cv}
            download="Busante-Resume.pdf"
            className="mb-10 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-110 active:scale-95"
          >
            Download CV (PDF)
          </a>
        </div>

        <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="mb-6 font-display text-2xl font-bold">Experience</h3>
            <ol className="space-y-8 border-l-2 border-ink/15 pl-6">
              {experience.map((job) => (
                <li key={job.role + job.period} className="relative">
                  <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-accent transition-colors duration-500" />
                  <p className="text-sm text-ink/60">{job.period}</p>
                  <h4 className="font-display text-xl font-bold">{job.role}</h4>
                  <p className="font-medium text-ink/75">{job.org}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink/80">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="mb-6 font-display text-2xl font-bold">Education</h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.school}>
                    <p className="font-medium">{e.school}</p>
                    <p className="text-sm text-ink/60">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 font-display text-2xl font-bold">Skills</h3>
              <div className="space-y-5">
                {Object.entries(about.skills).map(([group, items]) => (
                  <div key={group}>
                    <h4 className="text-sm font-medium text-ink/60">{group}</h4>
                    <p className="mt-1">{items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

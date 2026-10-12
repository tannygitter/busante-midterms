import { useState } from "react";
import Cover from "./Cover";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const panelId = `details-${project.id}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-ink/10 transition hover:-translate-y-1 hover:ring-accent">
      <div className="aspect-[5/3] overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <Cover palette={project.palette} variant={project.variant} title={project.title} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-accent-soft transition-colors duration-500">
          {project.category} · {project.year}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{project.title}</h3>
        <p className="mt-2 text-ink/75">{project.summary}</p>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/80">
              {project.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink/60">Tools: {project.tools.join(", ")}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-5 self-start rounded-full border border-ink/30 px-4 py-2 text-sm font-medium transition hover:bg-ink hover:text-black active:scale-95"
        >
          {open ? "Hide details" : "View details"}
        </button>
      </div>
    </article>
  );
}

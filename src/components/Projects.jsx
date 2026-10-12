import { useState } from "react";
import { categories, projects, profile } from "../data/content";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Projects and work samples">
        A selection of branding, esports, video and template work. Filter by type, then open a card for the details.
      </SectionHeading>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full px-5 py-2 text-sm font-medium transition active:scale-95 ${
              filter === c ? "bg-accent text-white" : "border border-ink/25 hover:bg-ink/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="text-ink/70">No projects in this category yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
      <p className="mt-10 text-ink/70">
        Want to see more?{" "}
        <a href={profile.behance} target="_blank" rel="noreferrer" className="font-medium text-accent-soft underline underline-offset-4">
          Browse my full Behance portfolio
        </a>
        .
      </p>
    </section>
  );
}

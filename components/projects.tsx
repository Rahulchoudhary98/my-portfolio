import { IconExternal, IconGithub } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const projects = [
  {
    title: "[Placeholder: Project Title]",
    description: "[Placeholder: brief description of the project, tech stack and outcome.]",
    tags: ["[Placeholder]", "[Placeholder]"],
    github: "#",
    demo: "#",
  },
  {
    title: "[Placeholder: Project Title]",
    description: "[Placeholder: brief description of the project, tech stack and outcome.]",
    tags: ["[Placeholder]", "[Placeholder]"],
    github: "#",
    demo: "#",
  },
  {
    title: "[Placeholder: Project Title]",
    description: "[Placeholder: brief description of the project, tech stack and outcome.]",
    tags: ["[Placeholder]", "[Placeholder]"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <article className="group h-full flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-5 text-muted">
                <a href={p.github} className="hover:text-foreground transition-colors" aria-label="GitHub">
                  <IconGithub className="w-5 h-5" />
                </a>
                <a href={p.demo} className="hover:text-foreground transition-colors" aria-label="Live demo">
                  <IconExternal className="w-5 h-5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="text-xs text-muted/70 mt-6 italic">
        [Placeholder: replace with actual projects, repositories and live links.]
      </p>
    </Section>
  );
}

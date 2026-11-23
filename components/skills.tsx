import { IconCode } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const skillGroups = [
  {
    title: "Engineering",
    items: ["Mechanical Design", "CAD", "Thermodynamics", "Manufacturing", "[Placeholder: add specific tools]"],
  },
  {
    title: "Software & Tech",
    items: ["TypeScript", "React", "Next.js", "Python", "[Placeholder: add languages/frameworks]"],
  },
  {
    title: "Soft Skills",
    items: ["Leadership", "Problem Solving", "Teamwork", "Communication", "Innovation"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Skills" title="Skills">
      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 100}>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-4">
                <IconCode className="w-5 h-5 text-accent-soft" />
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-full bg-background border border-border text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="text-xs text-muted/70 mt-6 italic">[Placeholder: refine skill list to reflect actual proficiency.]</p>
    </Section>
  );
}

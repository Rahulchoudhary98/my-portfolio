import { IconGraduation } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" eyebrow="02 — Education" title="Education">
      <Reveal>
        <div className="relative pl-8 border-l border-border">
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
            <IconGraduation className="w-3.5 h-3.5 text-accent-soft" />
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-colors">
            <h3 className="text-xl font-semibold text-foreground">B.Tech in Mechanical Engineering</h3>
            <p className="text-accent-soft mt-1">Indian Institute of Technology Bombay</p>
            <p className="text-sm text-muted mt-2">
              {/* TODO: Add graduation year, GPA/CGPA and relevant coursework */}
              <span className="italic">[Placeholder: add expected graduation year, CGPA and relevant coursework.]</span>
            </p>
            <ul className="mt-4 text-sm text-muted space-y-1 list-disc list-inside">
              <li>Core coursework in mechanical engineering fundamentals</li>
              <li>
                <span className="italic">[Placeholder: add specific courses, honors or achievements]</span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

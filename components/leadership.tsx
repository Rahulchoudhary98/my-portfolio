import { IconTrophy } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const experiences = [
  {
    role: "Sports Councillor",
    org: "Hostel 4, IIT Bombay",
    period: "[Placeholder: add tenure, e.g. 2024–2025]",
    points: [
      "Led sports activities and events for hostel residents.",
      "Coordinated teams, schedules and resources for inter-hostel competitions.",
      "[Placeholder: add specific achievements or initiatives.]",
    ],
  },
];

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="05 — Leadership & Experience" title="Leadership & Experience">
      <div className="space-y-6">
        {experiences.map((e, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <IconTrophy className="w-5 h-5 text-accent-soft" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{e.role}</h3>
                  <p className="text-accent-soft text-sm">{e.org}</p>
                  <p className="text-xs text-muted mt-1">{e.period}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted list-disc list-inside">
                    {e.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="text-xs text-muted/70 mt-6 italic">
        [Placeholder: add additional experiences, internships or roles.]
      </p>
    </Section>
  );
}

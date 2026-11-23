import { IconUser, IconCode, IconBriefcase } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const highlights = [
  { icon: IconUser, label: "Who I am", text: "A Mechanical Engineering undergraduate at IIT Bombay with a strong interest in technology and software." },
  { icon: IconCode, label: "What I do", text: "Build software solutions, solve problems, and explore the intersection of engineering and technology." },
  { icon: IconBriefcase, label: "Leadership", text: "Sports Councillor, Hostel 4, IIT Bombay — driving sports culture and student welfare." },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Hi, I&apos;m Rahul Choudhary, a Mechanical Engineering undergraduate at the Indian Institute of
              Technology Bombay. I enjoy exploring how engineering principles and modern technology come together to
              solve real-world problems.
            </p>
            <p>
              Beyond academics, I am deeply interested in software development, problem-solving, leadership and
              innovation. I like taking on responsibilities that create impact — most recently serving as the Sports
              Councillor of Hostel 4 at IIT Bombay.
            </p>
            <p>
              <span className="italic text-muted/70">[Placeholder: add a more detailed personal bio, current focus or career objective.]</span>
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <h.icon className="w-6 h-6 text-accent-soft shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{h.label}</h3>
                  <p className="text-sm text-muted leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

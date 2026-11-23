import { IconMail, IconPhone, IconLocation, IconGithub, IconLinkedin } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const contacts = [
  { icon: IconMail, label: "Email", value: "[Placeholder: your.email@example.com]", href: "mailto:placeholder@example.com" },
  { icon: IconPhone, label: "Phone", value: "[Placeholder: +91 XXXXX XXXXX]", href: "#" },
  { icon: IconLocation, label: "Location", value: "[Placeholder: City, Country]", href: "#" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="space-y-4">
            <p className="text-muted leading-relaxed">
              I&apos;m always open to discussing new opportunities, collaborations or just a friendly chat. Feel free to
              reach out through any of the channels below.
            </p>
            <div className="space-y-3 mt-6">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
                >
                  <c.icon className="w-5 h-5 text-accent-soft" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{c.label}</p>
                    <p className="text-foreground text-sm">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-6 text-muted">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub (placeholder)">
                <IconGithub className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn (placeholder)">
                <IconLinkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted/70 italic mt-2">
              [Placeholder: replace with actual contact details and social links.]
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <form className="space-y-4 p-6 rounded-2xl border border-border bg-card">
            <div>
              <label htmlFor="name" className="text-sm text-muted">Name</label>
              <input
                id="name"
                type="text"
                placeholder="[Placeholder]"
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-soft transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted">Email</label>
              <input
                id="email"
                type="email"
                placeholder="[Placeholder]"
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-soft transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="[Placeholder]"
                className="mt-1 w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-soft transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-soft transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-muted/70 italic">
              [Placeholder: wire up form submission to your email/backend.]
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

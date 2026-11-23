import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          {eyebrow && (
            <p className="text-accent-soft font-mono text-sm tracking-widest uppercase mb-3">{eyebrow}</p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>
        {children}
      </div>
    </section>
  );
}

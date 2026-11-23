import { IconArrowDown } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base text-accent-soft font-mono tracking-widest uppercase mb-6">
          Mechanical Engineering · IIT Bombay
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          Rahul Choudhary
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Mechanical Engineering undergraduate at IIT Bombay, passionate about technology, software development,
          problem-solving, leadership and innovation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-soft transition-colors shadow-lg shadow-accent/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border text-foreground font-medium hover:border-accent-soft hover:text-accent-soft transition-colors"
          >
            Contact Me
          </a>
        </div>
        <a href="#about" className="mt-16 inline-flex text-muted hover:text-foreground transition-colors" aria-label="Scroll down">
          <IconArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

"use client";

const techs = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "MariaDB",
  "Docker",
  "AWS",
  "GCP",
  "GraphQL",
  "Tailwind CSS",
  "SASS",
  "Figma",
];

export function TechMarquee() {
  const doubled = [...techs, ...techs];

  return (
    <div className="relative overflow-hidden py-6" aria-label="Technologies I work with">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max gap-4"
        style={{
          animation: "scroll-left 30s linear infinite",
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center rounded-full border border-border/30 bg-card/30 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

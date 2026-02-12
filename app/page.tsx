import { Github, Linkedin, FileText, Mail, ArrowUpRight } from "lucide-react";
import { FloatingParticles } from "@/components/floating-particles";
import { CursorGlow } from "@/components/cursor-glow";
import { GradientBlobs } from "@/components/gradient-blobs";
import { SocialLink } from "@/components/social-link";
import { StatusPill } from "@/components/status-pill";
import { TechMarquee } from "@/components/tech-marquee";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <GradientBlobs />
      <FloatingParticles />
      <CursorGlow />

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="flex w-full max-w-2xl flex-col gap-12">
          {/* Header section */}
          <header
            className="flex flex-col gap-6"
            style={{ animation: "fade-in-up 0.8s ease-out" }}
          >

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <span className="text-balance">
                  {"Hi, I'm "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Preet Shah
                  </span>
                </span>
              </h1>
              <p className="font-mono text-sm text-muted-foreground">
                Senior Software Engineer
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-secondary-foreground">
              I am an Engineering graduate from the University of Waterloo. Since then, I have been
              working as a Full Stack Engineer. I have worked on many different projects with a range of 
              tech stacks. From building complex shared front-end component libraries to scaling microservices
              in the back-end, I have vast experience solving real world problems with a deep technical mindset.
            </p>
          </header>

          {/* Links section */}
          <section
            className="flex flex-col gap-3"
            style={{ animation: "fade-in-up 0.8s ease-out 0.2s both" }}
            aria-label="Links"
          >
            <h2 className="sr-only">Links and profiles</h2>
            <SocialLink
              href="https://github.com/preetshah123"
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
              description="Check out my open source work"
            />
            <SocialLink
              href="https://www.linkedin.com/in/preet-shah/"
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
              description="Let's connect professionally"
            />
            <SocialLink
              href="/Preet_Shah_Resume.pdf"
              icon={<FileText className="h-5 w-5" />}
              label="Resume"
              description="Download my latest CV"
            />
            <SocialLink
              href="mailto:preetshah9808@gmail.com"
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              description="Drop me a message"
            />
          </section>

          {/* Currently building section */}
          <section
            className="flex flex-col gap-4"
            style={{ animation: "fade-in-up 0.8s ease-out 0.4s both" }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Currently Building At Konrad Group:
            </h2>
            <div className="group rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/80">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    Farmer Client US Application
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Building multiple new features for client app, ranging from complex dashboards/React components,
                    to developing back-end APIs and microservice for user data querying. 
                  </p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50 transition-all duration-300 group-hover:text-primary" />
              </div>
              <div className="mt-3 flex gap-2">
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                  React
                </span>
                <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                  NodeJS
                </span>
                <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                  TypeScript
                </span>
                <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                  AWS
                </span>
              </div>
            </div>
          </section>

          {/* Tech stack scrolling marquee */}
          <section
            style={{ animation: "fade-in-up 0.8s ease-out 0.6s both" }}
            aria-label="Technologies"
          >
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech I Work With
            </h2>
            <TechMarquee />
          </section>

          {/* Footer */}
          <footer
            className="border-t border-border/30 pt-6"
            style={{ animation: "fade-in-up 0.8s ease-out 0.8s both" }}
          >
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="font-mono text-xs text-muted-foreground">
                {"// crafted with care"}
              </p>
              <p className="text-xs text-muted-foreground/60">
                {"2026 Preet Shah"}
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

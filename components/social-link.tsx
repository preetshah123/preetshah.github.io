"use client";

import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  description: string;
}

export function SocialLink({ href, icon, label, description }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-[0_0_30px_-5px_hsl(200_100%_62%_/_0.15)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
          {label}
        </span>
        <span className="text-xs text-muted-foreground">
          {description}
        </span>
      </div>
      <svg
        className="ml-auto h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}

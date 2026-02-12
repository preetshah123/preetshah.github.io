export function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
          style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="text-xs font-medium text-muted-foreground">
        Open to opportunities
      </span>
    </div>
  );
}

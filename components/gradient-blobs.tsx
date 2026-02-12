export function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 62%) 0%, transparent 70%)",
          animation: "blob 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(168 80% 50%) 0%, transparent 70%)",
          animation: "blob 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 62%) 0%, transparent 70%)",
          animation: "blob 18s ease-in-out infinite 5s",
        }}
      />
    </div>
  );
}

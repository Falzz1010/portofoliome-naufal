export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[#141417] via-[#1c1c1f] to-[#141417] ${className}`}
    />
  );
} 
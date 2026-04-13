export default function Logo({ className = 'h-12 w-auto' }: { className?: string }) {
  return (
    <img
      src="/siulrecycling.png"
      alt="SIUL Recycling logo"
      className={className}
    />
  );
}

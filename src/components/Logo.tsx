export default function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <img
      src="/panamacats.png"
      alt="PanamaCats logo"
      className={className}
    />
  );
}

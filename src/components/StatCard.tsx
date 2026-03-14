interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <p className="text-4xl md:text-5xl font-extrabold text-primary">{number}</p>
      <p className="mt-2 text-gray-600 text-sm md:text-base">{label}</p>
    </div>
  );
}

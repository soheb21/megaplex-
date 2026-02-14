type SectionCardProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionCard({ id, title, children }: SectionCardProps) {
  return (
    <div
      id={id}
      className="bg-white p-6 rounded-xl shadow space-y-4 scroll-mt-24"
    >
      <h2 className="font-semibold text-lg">{title}</h2>
      {children}
    </div>
  );
}

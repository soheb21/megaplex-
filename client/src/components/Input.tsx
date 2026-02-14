type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>

      <input
        {...props}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
    </div>
  );
}

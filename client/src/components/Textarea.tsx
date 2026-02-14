type TextareaProps = {
  label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
    </div>
  );
}

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function RadioOption({ name, value, label, checked, onChange }: RadioOptionProps) {
  return (
    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group p-2 sm:p-0 -mx-2 sm:mx-0 rounded active:bg-gray-100 transition-colors">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="w-5 h-5 flex-shrink-0"
        style={{ accentColor: '#B8963A' }}
      />
      <span 
        className="text-sm sm:text-base lg:text-lg group-hover:opacity-100"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          color: '#162C46',
          opacity: 0.8
        }}
      >
        {label}
      </span>
    </label>
  );
}
interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'date';
}

export default function FormInput({ label, value, onChange, placeholder, type = 'text' }: FormInputProps) {
  return (
    <div>
      <label 
        className="block text-base sm:text-lg mb-2 sm:mb-3 font-semibold"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          color: '#162C46'
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 transition-all text-base sm:text-lg focus:outline-none"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          borderColor: '#B8963A',
          color: '#162C46'
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
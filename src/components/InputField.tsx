import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-2">
      <label className="block font-semibold text-white">{label}</label>
      <input
        type={type}
        name={name}
        className="input input-bordered w-full"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;

import { FC } from "react";

interface IFormElement {
  text: string;
  id: string;
  type: string;
  value: string | "";
  onChange: (val: string) => void;
}

export const FormElement: FC<IFormElement> = ({
  text,
  id,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-50" htmlFor={id}>
        {text}
      </label>
      <input
        className="px-2 h-10 rounded-md"
        type={type}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={text}
      />
    </div>
  );
};

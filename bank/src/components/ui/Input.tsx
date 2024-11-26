import { FC, ReactElement } from "react";
interface InputProps {
  value: string | number;
  handleInput: (val: string) => void;
  name: string;
  type?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  value,
  name,
  type = "text",
  handleInput,
  placeholder,
}): ReactElement => {
  return (
    <>
      <label className="block mb-2">{name}</label>
      <input
        className="mx-2 px-2 py-1 border rounded"
        value={value}
        type={type}
        onChange={(e) => handleInput(e.target.value)}
        placeholder={placeholder ? placeholder : ""}
      />
    </>
  );
};

export default Input;

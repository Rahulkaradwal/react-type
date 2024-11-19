import { FC, ReactElement } from "react";

interface IInput {
  type: "text" | "textarea";
  value: string;
  handleChange: (val: string) => void;
}

export const Input: FC<IInput> = ({
  type,
  value,
  handleChange,
}): ReactElement => {
  return (
    <>
      {type === "text" && (
        <input
          className="px-2 py-2 text-slate-800 w-full rounded-md"
          type="text"
          value={value}
          placeholder="Enter City"
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
      {type === "textarea" && (
        <textarea
          className="px-2 py-2 text-slate-800 w-full rounded-md"
          value={value}
          placeholder="Enter your notes"
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </>
  );
};

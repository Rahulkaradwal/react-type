import { FC, ReactElement } from "react";

interface OptionProps {
  option: string;
  index: number;
}

{
  /* <li className="py-2 px-6 ml-8 -mr-8 rounded-full bg-blue-300">React</li> */
}

export const Option: FC<OptionProps> = ({ option, index }): ReactElement => {
  return (
    <li
      className="py-2 px-6  rounded-full bg-blue-300"
      onClick={() => {
        console.log(option, index);
      }}
    >
      {option}
    </li>
  );
};

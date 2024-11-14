import { FC, ReactElement, useState } from "react";

interface CollapseProps {
  num: number;
}

export const Collapse: FC<CollapseProps> = ({ num }): ReactElement => {
  const [show, setShow] = useState(true);
  return (
    <li>
      <button onClick={() => setShow((s) => !s)}>Toggle{num} </button>
      {show && <div className="h-40 bg-gray-700"> Showing {num}</div>}
    </li>
  );
};

import { FC, ReactElement, ReactNode } from "react";
import { Button } from "../ui/Button";

interface BoxProps {
  children: ReactNode;
  isBoxOpen: boolean;
  setIsBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Box: FC<BoxProps> = ({
  children,
  isBoxOpen,
  setIsBoxOpen,
}): ReactElement => {
  const handleSubmit = () => {
    setIsBoxOpen((s) => !s);
  };
  return (
    <div className="w-2/4 bg-gray-800  rounded-lg p-5">
      <Button onClick={handleSubmit} />
      <div className={isBoxOpen ? "" : "hidden"}>{children}</div>
    </div>
  );
};

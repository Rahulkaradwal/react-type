import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { Button } from "../ui/Button";

interface WatchedBoxProps {
  isBoxOpen: boolean;
  setIsBoxOpen: Dispatch<SetStateAction<boolean>>;
}

export const WatchedBox: FC<WatchedBoxProps> = ({
  isBoxOpen,
  setIsBoxOpen,
}): ReactElement => {
  const handleSubmit = () => {
    setIsBoxOpen((s) => !s);
  };
  return (
    <div className="p-4 border w-2/4 rounded-lg">
      <Button onClick={handleSubmit} />
      <div className={isBoxOpen ? "" : "hidden"}>Watched box content</div>
    </div>
  );
};

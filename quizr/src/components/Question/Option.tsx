import { FC, ReactElement } from "react";
import { AppDispatch } from "../../TheReduxStore";
import { newAnswer } from "../../features/questionSlice";
import { useDispatch } from "react-redux";

interface OptionProps {
  option: string;
  index: number;
  answer: number | null;
  correctOption: number;
}

export const Option: FC<OptionProps> = ({
  option,
  index,
  answer,
  correctOption,
}): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

  const isAnswered = answer !== null;
  const isCorrect = correctOption === index;
  const isSelected = answer === index;

  const handleClick = (): void => {
    dispatch(newAnswer(index));
  };

  const getButtonClasses = (): string => {
    if (!isAnswered) return " ";

    if (isCorrect) return "bg-green-500 text-white";
    if (isSelected) return "bg-red-500 text-white";

    return "bg-yellow-600 text-white";
  };

  return (
    <button
      disabled={isAnswered}
      className={`py-2 px-6 border rounded-full transition-colors duration-200 ${
        isAnswered ? "cursor-not-allowed" : "cursor-pointer"
      } ${getButtonClasses()}`}
      onClick={handleClick}
    >
      {option}
    </button>
  );
};

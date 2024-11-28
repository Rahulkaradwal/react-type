import { FC, ReactElement } from "react";
import { Option } from "./Option";
import { IQuestion } from "../../types/Question";

interface QuestionProps {
  question: IQuestion;

  answer: number | null;
}

export const Question: FC<QuestionProps> = ({
  question,
  answer,
}): ReactElement => {
  return (
    <div>
      <p className="mb-4">{question.question}</p>
      <ul className="flex flex-col gap-4 cursor-pointer">
        {question.options.map((option: string, index: number) => (
          <Option
            correctOption={question.correctOption}
            key={index}
            index={index}
            option={option}
            answer={answer}
          />
        ))}
      </ul>
    </div>
  );
};

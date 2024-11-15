import { FC, ReactElement } from "react";
import { Action, IQuestion } from "../../TypeDefinations";
import { Option } from "./Option";

interface QuestionProps {
  question: IQuestion;
  dispatch: React.Dispatch<Action>;
  answer: number | null;
}

export const Question: FC<QuestionProps> = ({
  question,
  dispatch,
  answer,
}): ReactElement => {
  return (
    <div>
      <p className="mb-4">{question.question}</p>
      <ul className="flex flex-col gap-4 cursor-pointer">
        {question.options.map((option: string, index: number) => (
          <Option
            correctOption={question.correctOption}
            dispatch={dispatch}
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

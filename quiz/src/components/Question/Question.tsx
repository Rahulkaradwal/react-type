import { FC, ReactElement } from "react";
import { IQuestion } from "../../TypeDefinations";
import { Action } from "../Home/Home";
import { Option } from "./Option";

interface QuestionProps {
  question: IQuestion;
  dispatch: React.Dispatch<Action>;
}

export const Question: FC<QuestionProps> = ({ question }): ReactElement => {
  console.log(question);
  return (
    <div>
      <p className="mb-4">{question.question}</p>
      <ul className="flex flex-col gap-4 cursor-pointer">
        {question.options.map((option: string, index: number) => (
          <Option key={index} index={index} option={option} />
        ))}
      </ul>
    </div>
  );
};

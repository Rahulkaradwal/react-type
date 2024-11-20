import { createContext } from "react";
import { Action, IState } from "../TypeDefinations";

export interface IQuestionContext {
  dispatch: React.Dispatch<Action>;
  state: IState;
  totalQuestions: number;
  totalPoints: number;
}

const QuestionContext = createContext<IQuestionContext | undefined>(undefined);

export default QuestionContext;

export type Status = "" | "loading" | "error" | "start" | "active" | "finished";

export interface QuestionSliceState {
  status: Status;
  answer: number | null;
  points: number;
  index: number;
  questions: IQuestion[];
}

export interface IQuestion {
  status: Status;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
}

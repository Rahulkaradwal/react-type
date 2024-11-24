export interface IOptions {
  options: string[];
}

export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
}

type Status = "" | "loading" | "error" | "ready" | "active";

export interface IState {
  status: Status;
  answer: number | null;
  points: number;
  index: number;
  questions: IQuestion[];
  secondsRemaining: number | null;
}

export type Action =
  // | { type: "start" }
  | { type: "dataReceived"; payload: IQuestion[] }
  | { type: "dataFailed" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  // | { type: "finished" }
  | { type: "restart" };
// | { type: "tick" };

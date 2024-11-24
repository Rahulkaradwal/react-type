type Status =
  | ""
  | "start"
  | "loading"
  | "error"
  | "ready"
  | "active"
  | "finished";

export interface ITimerState {
  secondsRemaining: number;
  timerStatus: Status;
}
export type TimerAction =
  | { type: "start" }
  | { type: "finished" }
  | { type: "restart" }
  | { type: "tick" };

export interface TimerState {
  secondsRemaining: number;
  timerStatus: "idle" | "active" | "finished";
}

import { STATE, StateType } from "../../components/Label/Indicator";

export type Timings = {
  offset?: number;
  end?: number;
  start?: number;
};

export const DEFAULT_TIMINGS: Timings = { offset: 0, end: Number.MAX_VALUE, start: 60 };

export const useTimer = (
  cooldown: number,
  notifyBefore: number,
  currentTime: number,
  { offset = 0, end = Number.MAX_VALUE, start = 60 } = DEFAULT_TIMINGS
) => {
  if (currentTime < 0 || currentTime > end || currentTime < start) {
    return { active: false, timeToEvent: 0, state: undefined };
  }

  let timeToEvent = cooldown - (Math.abs(currentTime - offset) % cooldown);
  let active = notifyBefore - timeToEvent > 0;
  let state: StateType | undefined;

  if (timeToEvent !== undefined) {
    if (timeToEvent > notifyBefore * 2/3) {
      state = STATE.green;
    }
    if (timeToEvent <= notifyBefore * 2/3 && timeToEvent > notifyBefore * 1/3) {
      state = STATE.yellow;
    }
    if (timeToEvent <= notifyBefore * 1/3) {
      state = STATE.red;
    }
  }


  return { active, timeToEvent, state };
};

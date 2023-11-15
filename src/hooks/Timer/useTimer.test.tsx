import { STATE } from "../../components/Label/Indicator";
import { useTimer } from "./useTimer";

test("should work with edge", () => {
  expect(useTimer(120, 45, 121)).toEqual({
    active: false,
    timeToEvent: 119,
    state: STATE.green,
  });
  expect(useTimer(120, 45, 120)).toEqual({
    active: false,
    timeToEvent: 120,
    state: STATE.green,
  });
  expect(useTimer(120, 45, 119)).toEqual({
    active: true,
    timeToEvent: 1,
    state: STATE.red,
  });
});

test("should running on gold rune", () => {
  expect(useTimer(60 * 3, 45, 170)).toEqual({
    active: true,
    timeToEvent: 10,
    state: STATE.red,
  });
  expect(useTimer(60 * 3, 45, 320)).toEqual({
    active: true,
    timeToEvent: 40,
    state: STATE.green,
  });
});

test("should work with active runes", () => {
  expect(useTimer(60 * 2, 45, 100)).toEqual({
    active: true,
    timeToEvent: 20,
    state: STATE.yellow,
  });
});

test("should work siege creep", () => {
  expect(useTimer(60 * 5, 45, 280)).toEqual({
    active: true,
    timeToEvent: 20,
    state: STATE.yellow,
  });
});

test("should work stack & pull", () => {
  expect(useTimer(60, 45, 60 + 15, { offset: 45 })).toEqual({
    active: true,
    timeToEvent: 30,
    state: STATE.yellow,
  });
  expect(useTimer(60, 45, 90, { offset: 45 })).toEqual({
    active: true,
    timeToEvent: 15,
    state: STATE.red,
  });
});

test("should not display negative time", () => {
  expect(useTimer(60, 45, -15, { offset: 45 })).toEqual({
    active: false,
    timeToEvent: 0,
    state: undefined,
  });
});

test("should work in timings intervals", () => {
  expect(useTimer(60, 30, 75, { start: 0, end: 60 })).toEqual({
    active: false,
    timeToEvent: 0,
    state: undefined,
  });
  expect(useTimer(60 * 5, 30, 60 * 4 + 45, { start: 60, end: 900 })).toEqual({
    active: true,
    timeToEvent: 15,
    state: STATE.yellow,
  });
  expect(useTimer(60, 30, 75, { start: 900, end: 9000 })).toEqual({
    active: false,
    timeToEvent: 0,
    state: undefined,
  });
});

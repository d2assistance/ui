import React from "react";
import { useDotaState } from "../../hooks/DotaState/useDotaState";
import { Label } from "../Label/Label";
import { STATE } from "../Label/Indicator";

export const GoldRune = () => {
  let state = useDotaState();
  console.log(state);

  const time = state.data?.map?.clock_time;
  let goldRuneNotification = time && time % (60 * 5) > 270;

  if (!goldRuneNotification) {
    return null;
  }

  return <Label state={STATE.green}>Gold Rune</Label>;
};

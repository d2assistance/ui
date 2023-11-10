import React from "react";
import { Label } from "../Label/Label";
import { useNotification } from "../../hooks/Notification/useNotification";
import { NOTIFY_BEFORE, POWER_RUNE_COOLDOWN } from "../../constants/timings";

export const PowerRune = () => {
  const {eventIn, notification, colorState} = useNotification(POWER_RUNE_COOLDOWN, NOTIFY_BEFORE);

  if (!notification) {
    return null;
  }

  return <Label state={colorState}>Power rune {eventIn}</Label>;
};

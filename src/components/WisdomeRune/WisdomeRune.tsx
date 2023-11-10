import React from "react";
import { Label } from "../Label/Label";
import { useNotification } from "../../hooks/Notification/useNotification";
import { WIDSOME_RUNE_COOLDOWN, NOTIFY_BEFORE } from "../../constants/timings";

export const WisdomeRune = () => {
  const {eventIn, notification, colorState} = useNotification(WIDSOME_RUNE_COOLDOWN, NOTIFY_BEFORE);

  if (!notification) {
    return null;
  }

  return <Label state={colorState}>Wisdome rune {eventIn}</Label>;
};

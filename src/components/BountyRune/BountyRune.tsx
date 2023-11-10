import React from "react";
import { Label } from "../Label/Label";
import { useNotification } from "../../hooks/Notification/useNotification";
import { BOUNTY_RUNE_COOLDOWN, NOTIFY_BEFORE } from "../../constants/timings";

export const BountyRune = () => {
  const {eventIn, notification, colorState} = useNotification(BOUNTY_RUNE_COOLDOWN, NOTIFY_BEFORE);

  if (!notification) {
    return null;
  }

  return <Label state={colorState}>Bounty & lotus {eventIn}</Label>;
};

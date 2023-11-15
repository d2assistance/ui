import { NOTIFY_BEFORE } from "../../constants/timings";
import { useNotification } from "../../hooks/Notification/useNotification";
import { Timings } from "../../hooks/Timer/useTimer";
import { Label } from "../Label/Label";

type Props = {
  cooldown: number;
  label: string;
  timings?: Timings;
}

export function GameEvent({ cooldown, label, timings }: Props) {
  const { timeToEvent, active, state } = useNotification(
    cooldown,
    NOTIFY_BEFORE,
    timings
  );

  if (!active) {
    return null;
  }

  return <Label state={state}>{label} {timeToEvent}</Label>;
}

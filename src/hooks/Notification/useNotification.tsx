import useSound from "use-sound";
import notificationMp3 from "./notification.mp3";
import { useEffect, useState } from "react";
import { useDotaState } from "../DotaState/useDotaState";
import { STATE } from "../../components/Label/Indicator";

function calcInterval(time: number, intervalLength: number) {
  return Math.floor(time / intervalLength);
}

export function useNotification(cooldown: number, notifyBefore: number) {
  let state = useDotaState();

  const time = state.data?.map?.clock_time;
  const [play] = useSound(notificationMp3, { volume: 0.25 });
  const [prevInterval, setLastPlayedInterval] = useState<number | undefined>(undefined);
  const timeToNotify = cooldown - notifyBefore;

  let notification = time && time % cooldown > timeToNotify;
  const eventIn = time && notifyBefore - time % timeToNotify % notifyBefore;
  const currInterval = time ? calcInterval(time, cooldown) : undefined;

  useEffect(() => {
    if (notification && currInterval !== prevInterval) {
      play();
      setLastPlayedInterval(currInterval);
    }
  }, []);

  let colorState = undefined;

  if (eventIn !== undefined) {
    if (eventIn > notifyBefore * 2/3) {
      colorState = STATE.green;
    }
    if (eventIn <= notifyBefore * 2/3 && eventIn > notifyBefore * 1/3) {
      colorState = STATE.yellow;
    }
    if (eventIn <= notifyBefore * 1/3) {
      colorState = STATE.red;
    }
  }

  return { eventIn, notification, colorState };
}

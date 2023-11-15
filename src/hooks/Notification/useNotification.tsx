import useSound from "use-sound";
import notificationMp3 from "./notification.mp3";
import { useEffect, useState } from "react";
import { useDotaState } from "../DotaState/useDotaState";
import { STATE } from "../../components/Label/Indicator";
import { Timings, useTimer } from "../Timer/useTimer";

function calcInterval(time: number, intervalLength: number) {
  return Math.floor(time / intervalLength);
}



export function useNotification(
  cooldown: number,
  notifyBefore: number,
  timings?: Timings
) {
  const data = useDotaState();
  const [play] = useSound(notificationMp3, { volume: 0.25 });
  const time = data.data?.map?.clock_time || -1000;

  const { active, state, timeToEvent } = useTimer(
    cooldown,
    notifyBefore,
    time,
    timings
  );

  const [prevInterval, setLastInterval] = useState<boolean>(false);

  useEffect(() => {
    if (active !== prevInterval) {
      if (active) {
        play();
      }
      setLastInterval(active);
    }
  }, [active, prevInterval]);

  return { active, state, timeToEvent };
}

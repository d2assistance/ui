import { useQuery } from "react-query";
import { GameState } from "./types";
import { useEffect } from "react";

const REFRESH_TIME = 1000;

export function useDotaState() {
  let query = useQuery<GameState>("dotaState", async () =>
    fetch("http://localhost:3000/state").then((res) => res.json())
  );

  useEffect(() => {
    let interval = setInterval(() => {
      query.refetch();
    }, REFRESH_TIME);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return query;
}

import { useQuery } from "react-query";

export function useDotaState() {
  return useQuery("dotaState", async () =>
    fetch("http://localhost:3000/state").then((res) => res.json())
  );
}

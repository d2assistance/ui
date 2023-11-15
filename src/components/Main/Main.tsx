import React from "react";
import { useDotaState } from "../../hooks/DotaState/useDotaState";
import { Panel } from "../Panel/Panel";
import styled from "styled-components";
import { GameEvent } from "../GameEvent/GameEvent";

const Container = styled.div`
  box-sizing: border-box;
  width: 280px;
`;

export const Main = () => {
  let state = useDotaState();

  return (
    <Container>
      <Panel>
        <GameEvent cooldown={60} timings={{ offset: 45, end: 60 * 8 }} label="Pull" />
        <GameEvent cooldown={60} timings={{ offset: 13, end: 60 * 8 }} label="Pull" />
        <GameEvent cooldown={60} timings={{ offset: 55, end: 60 * 30 }} label="Stack" />
        <GameEvent cooldown={60 * 7} label="Wisdome" />
        <GameEvent cooldown={60 * 2} label="Power rune" />
        <GameEvent cooldown={60 * 3} label="Bounty & Lotus" />
      </Panel>
    </Container>
  );
};

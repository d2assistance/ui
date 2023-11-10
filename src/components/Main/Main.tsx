import React from "react";
import { useDotaState } from "../../hooks/DotaState/useDotaState";
import { Panel } from "../Panel/Panel";
import styled from "styled-components";
import { BountyRune } from "../BountyRune/BountyRune";
import { WisdomeRune } from "../WisdomeRune/WisdomeRune";
import { PowerRune } from "../PowerRune/PowerRune";

const Container = styled.div`
  box-sizing: border-box;
  width: 280px;
`;

export const Main = () => {
  let state = useDotaState();

  return (
    <Container>
      <Panel>
        <WisdomeRune />
        <PowerRune />
        <BountyRune />
      </Panel>
    </Container>
  );
};

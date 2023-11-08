import React from "react";
import { useDotaState } from "../../hooks/DotaState/useDotaState";
import { Button } from "../Button/Button";
import { Label } from "../Label/Label";
import { STATE } from "../Label/Indicator";
import { Panel } from "../Panel/Panel";
import styled from "styled-components";
import { GoldRune } from "../GoldRune/GoldRune";

const Container = styled.div`
  box-sizing: border-box;
  width: 280px;
`;

const Code = styled.pre`
margin-left: 300px;
`;

export const Main = () => {
  let state = useDotaState();
  console.log(state);

  return (
    <Container>
      <Panel>
        <Button>Button</Button>
        <Label state={STATE.red}>Hello world 2</Label>
        <GoldRune />
        <Code>
          {JSON.stringify(state.data, null, 2)}
        </Code>
      </Panel>
    </Container>
  );
};

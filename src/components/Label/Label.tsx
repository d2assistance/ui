import React from "react";
import styled from "styled-components";
import { EmptyIndicator, Indicator, STATE, StateType } from "./Indicator";

const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const Text = styled.p`
  color: #fff;

  /* Label */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

type Props = {
  state?: StateType;
  children: React.ReactNode;
};

export const Label = ({ children, state }: Props) => {
  return (
    <Box>
      {state !== undefined ? <Indicator state={state} /> : <EmptyIndicator />}
      <Text>{children}</Text>
    </Box>
  );
};

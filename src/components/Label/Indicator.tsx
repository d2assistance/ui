import styled, { css } from "styled-components";

export const STATE = {
  green: 0,
  yellow: 1,
  red: 2,
} as const;

export type StateType = (typeof STATE)[keyof typeof STATE];

const COLOR_MAP = {
  [STATE.red]: {
    background: "#F44336",
    shadow: "rgba(244, 67, 54, 0.60)",
  },
  [STATE.yellow]: {
    background: "#FFEB3B",
    shadow: "rgba(255, 235, 59, 0.60)",
  },
  [STATE.green]: {
    background: "#76ff03",
    shadow: "rgba(118, 255, 3, 0.6)",
  },
};

type Props = {
  state: StateType;
};

function colorByState({ state }: Props) {
  return css`
    background-color: ${COLOR_MAP[state].background};
    box-shadow: 0px 1px 2px 0px ${COLOR_MAP[state].shadow};
  `;
}

export const Indicator = styled.div<Props>`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 100%;

  ${colorByState}
`;

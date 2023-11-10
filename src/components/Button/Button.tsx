import styled from "styled-components";

export const Button = styled.button`
  border: 0px;
  display: inline-flex;
  padding: 6px 12px;
  align-items: center;
  justify-content: center;

  gap: 8px;

  border-radius: 2px;
  border-top: 1px solid #777;
  background: linear-gradient(180deg, #3a4245 0%, #60656b 100%);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.6);

  user-select: none;

  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:active {
    border-top: 0px;
    border-bottom: 1px solid #777;
    background: linear-gradient(180deg, #3a4245 0%, #60656b 100%);
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;

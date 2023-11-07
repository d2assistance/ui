import "@fontsource/roboto";
import "@fontsource/roboto/700.css"; // Specify weight
import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button/Button";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Label } from "./components/Label/Label";
import { STATE } from "./components/Label/Indicator";
import { Panel } from "./components/Panel/Panel";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    /* background: black; */
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 280px;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />

    <Container>
      <Panel>
        <Button>Button</Button>
        <Label state={STATE.red}>Hello world 2</Label>
      </Panel>
    </Container>
  </React.StrictMode>
);

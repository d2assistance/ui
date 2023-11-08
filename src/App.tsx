import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./components/Main/Main";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />

      <Main />
    </QueryClientProvider>
  </React.StrictMode>
);

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { CyclesContentProvider } from "./context/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContentProvider>
          <Router />
        </CyclesContentProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./components/home";
import GlobalStyle from "./theme/globalStyles";
import { lightMode, darkMode } from "./theme/theme";

function App() {
  const [isLightMode, setMode] = useState(true);
  return (
    <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
      <GlobalStyle />
      <div>
        <button onClick={() => setMode((prev) => !prev)}>
          {isLightMode ? "라이트" : "다크"}
        </button>
        <Home>hello</Home>
      </div>
    </ThemeProvider>
  );
}

export default App;

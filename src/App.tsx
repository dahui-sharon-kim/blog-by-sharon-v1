import { useState } from "react";
import { ThemeProvider } from "styled-components";
import MainHeader from "./components/Header/MainHeader";
import Home from "./pages/home";
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
        <MainHeader />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

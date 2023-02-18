import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from "./theme/globalStyles";
import { lightMode, darkMode } from "./theme/theme";

import TopBar from "./components/TopBar";
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import MyPage from "./pages/myPage";
import SignUpPage from "./pages/signUp";
import Board from "./pages/board";

function App() {
  const [isLightMode, setMode] = useState(true);
  const [isModalOpen, handleModalClose] = useState(false);
  const queryClient = new QueryClient();
    return (
      <>
      <GlobalStyle />
      <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <TopBar isLightMode={isLightMode} setMode={setMode} handleSignInModal={handleModalClose} />
            {!isModalOpen? null : <SignIn isOpen={isModalOpen} handleClose={handleModalClose}/>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
      </>
    );
  }

export default App;

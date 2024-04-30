import "./App.css";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReactWorksPage from "./pages/ReactWorksPage";
import JsWorksPage from "./pages/JsWorksPage";
import PublishingWorksPage from "./pages/PublishingWorksPage";
import AppLayout from "./component/AppLayout";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/react" element={<ReactWorksPage />} />
            <Route path="/javascript" element={<JsWorksPage />} />
            <Route path="/publishing" element={<PublishingWorksPage />} />
          </Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

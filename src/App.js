import styled from "styled-components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./component/AppLayout";
import Projects from "./pages/Projects";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/works" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

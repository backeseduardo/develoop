import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { CommingSoonPage } from "./pages/CommingSoon";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="comming-soon" element={<CommingSoonPage />} />
          <Route path="*" element={<CommingSoonPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;

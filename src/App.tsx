import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { CaseStudiesPage } from "./pages/CaseStudies";
import { CommingSoonPage } from "./pages/CommingSoon";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { OurServicesPage } from "./pages/OurServices";

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="our-services" element={<OurServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="comming-soon" element={<CommingSoonPage />} />
          <Route path="*" element={<CommingSoonPage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;

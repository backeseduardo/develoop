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
        <div id="home">
          <HomePage />
        </div>
        <div id="case-studies">
          <CaseStudiesPage />
        </div>
        <div id="our-services">
          <OurServicesPage />
        </div>
        <div id="blog">
          <CommingSoonPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </Content>
    </>
  );
}

export default App;

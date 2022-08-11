import { Container, ServiceCard } from "./styles";
import codeSlashLineImg from "../../assets/code-s-slash-line.svg";
import databaseLineImg from "../../assets/database-line.svg";
import refreshLineImg from "../../assets/refresh-line.svg";
import teamLineImg from "../../assets/team-line.svg";
import cloudLineImg from "../../assets/cloud-line.svg";
import terminalLineImg from "../../assets/terminal-window-line.svg";
import { Heading1 } from "../../styles/heading";

export function OurServicesPage() {
  return (
    <Container>
      <Heading1>Our Services</Heading1>

      <section>
        <div className="wrapper">
          <ServiceCard>
            <h2>Custom Software Development</h2>

            <ul>
              <li>Custom software solutions</li>
              <li>Web and mobile applications development</li>
              <li>Domain expertise</li>
              <li>Large-scaled tech stack</li>
            </ul>

            <img src={codeSlashLineImg} alt="" />
          </ServiceCard>

          <ServiceCard>
            <h2>Team Augmentation</h2>

            <ul>
              <li>Team members with the right skills and experience</li>
              <li>Temporary shortage or long-time engagement</li>
              <li>Team ramp-up</li>
            </ul>

            <img src={teamLineImg} alt="" />
          </ServiceCard>
        </div>

        <div className="wrapper">
          <ServiceCard>
            <h2>BI & Big Data Management</h2>

            <ul>
              <li>Big Data Analytics</li>
              <li>Data Warehouses for enhanced ETL operations</li>
              <li>Real-time reports of your business operations</li>
              <li>Data management costs optimization</li>
            </ul>

            <img src={databaseLineImg} alt="" />
          </ServiceCard>

          <ServiceCard>
            <h2>SaaS Development</h2>

            <ul>
              <li>Building a Saas product from scratch</li>
              <li>Tweaking an existing SaaS solution</li>
              <li>Successful app transormation into SaaS</li>
              <li>Expanding a localized SaaS app reach in new market</li>
            </ul>

            <img src={cloudLineImg} alt="" />
          </ServiceCard>
        </div>

        <div className="wrapper">
          <ServiceCard>
            <h2>Software Re-engineering</h2>

            <ul>
              <li>Legacy Software modernization</li>
              <li>Third-party data integration</li>
              <li>Functionality Expanding</li>
              <li>Infrastructure Setup</li>
            </ul>

            <img src={refreshLineImg} alt="" />
          </ServiceCard>

          <ServiceCard>
            <h2>IT Consulting and Digital advisory</h2>

            <ul>
              <li>Select the right technology for your business goal</li>
              <li>Validate your product idea before investing in it</li>
              <li>Attract investment with an elaborate product prototype</li>
              <li>Add scalability and flexibility to your business</li>
            </ul>

            <img src={terminalLineImg} alt="" />
          </ServiceCard>
        </div>
      </section>
    </Container>
  );
}

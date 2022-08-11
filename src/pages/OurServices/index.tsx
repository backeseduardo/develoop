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
              <li>
                <span>-</span>
                <span>Custom software solutions</span>
              </li>
              <li>
                <span>-</span>
                <span>Web and mobile applications development</span>
              </li>
              <li>
                <span>-</span>
                <span>Domain expertise</span>
              </li>
              <li>
                <span>-</span>
                <span>Large-scaled tech stack</span>
              </li>
            </ul>

            <img src={codeSlashLineImg} alt="" />
          </ServiceCard>

          <ServiceCard>
            <h2>Team Augmentation</h2>

            <ul>
              <li>
                <span>-</span>
                <span>Team members with the right skills and experience</span>
              </li>
              <li>
                <span>-</span>
                <span>Temporary shortage or long-time engagement</span>
              </li>
              <li>
                <span>-</span>
                <span>Team ramp-up</span>
              </li>
            </ul>

            <img src={teamLineImg} alt="" />
          </ServiceCard>
        </div>

        <div className="wrapper">
          <ServiceCard>
            <h2>BI & Big Data Management</h2>

            <ul>
              <li>
                <span>-</span>
                <span>Big Data Analytics</span>
              </li>
              <li>
                <span>-</span>
                <span>Data Warehouses for enhanced ETL operations</span>
              </li>
              <li>
                <span>-</span>
                <span>Real-time reports of your business operations</span>
              </li>
              <li>
                <span>-</span>
                <span>Data management costs optimization</span>
              </li>
            </ul>

            <img src={databaseLineImg} alt="" />
          </ServiceCard>

          <ServiceCard>
            <h2>SaaS Development</h2>

            <ul>
              <li>
                <span>-</span>
                <span>Building a Saas product from scratch</span>
              </li>
              <li>
                <span>-</span>
                <span>Tweaking an existing SaaS solution</span>
              </li>
              <li>
                <span>-</span>
                <span>Successful app transormation into SaaS</span>
              </li>
              <li>
                <span>-</span>
                <span>Expanding a localized SaaS app reach in new market</span>
              </li>
            </ul>

            <img src={cloudLineImg} alt="" />
          </ServiceCard>
        </div>

        <div className="wrapper">
          <ServiceCard>
            <h2>Software Re-engineering</h2>

            <ul>
              <li>
                <span>-</span>
                <span>Legacy Software modernization</span>
              </li>
              <li>
                <span>-</span>
                <span>Third-party data integration</span>
              </li>
              <li>
                <span>-</span>
                <span>Functionality Expanding</span>
              </li>
              <li>
                <span>-</span>
                <span>Infrastructure Setup</span>
              </li>
            </ul>

            <img src={refreshLineImg} alt="" />
          </ServiceCard>

          <ServiceCard>
            <h2>IT Consulting and Digital advisory</h2>

            <ul>
              <li>
                <span>-</span>
                <span>Select the right technology for your business goal</span>
              </li>
              <li>
                <span>-</span>
                <span>Validate your product idea before investing in it</span>
              </li>
              <li>
                <span>-</span>
                <span>
                  Attract investment with an elaborate product prototype
                </span>
              </li>
              <li>
                <span>-</span>
                <span>Add scalability and flexibility to your business</span>
              </li>
            </ul>

            <img src={terminalLineImg} alt="" />
          </ServiceCard>
        </div>
      </section>
    </Container>
  );
}

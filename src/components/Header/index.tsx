import { Container, Logo, Nav, Search } from "./styles";
import logoImg from "../../assets/logo.svg";
import menuImg from "../../assets/menu.svg";
import { Link } from "../Link";

export function Header() {
  return (
    <Container>
      <Logo to="home" className="logo">
        <img src={logoImg} alt="Logo" />

        <span>SOFTWARE DEVELOPMENT</span>
      </Logo>

      <Nav>
        <ul>
          <li>
            <Link to="case-studies">OUR CASE STUDIES</Link>
          </li>
          <li>
            <Link to="our-services">SERVICES</Link>
          </li>
          <li>
            <Link to="blog">BLOG</Link>
          </li>
          <li>
            <Link to="contact" variant="highlight">
              CONTACT US
            </Link>
          </li>
        </ul>
      </Nav>

      <Search>
        <input type="text" placeholder="MENU" />
        <img src={menuImg} alt="" />
      </Search>
    </Container>
  );
}

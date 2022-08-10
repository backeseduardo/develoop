import { Container, Nav, Search } from "./styles";
import logoImg from "../../assets/logo.svg";
import menuImg from "../../assets/menu.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to="/" className="logo">
        <img src={logoImg} alt="Logo" />

        <span>SOFTWARE DEVELOPMENT</span>
      </Link>

      <Nav>
        <ul>
          <li>
            <Link to="comming-soon">OUR CASE STUDIES</Link>
          </li>
          <li>
            <Link to="our-services">SERVICES</Link>
          </li>
          <li>
            <Link to="blog">BLOG</Link>
          </li>
          <li>
            <Link to="contact" className="highlight">
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

import { Container, ContainerLink, Reviews } from "./styles";
import { Link } from "../../components/Link";
import headlineArtImg from "../../assets/headline-art.svg";
import upReviewsImg from "../../assets/up-reviews.svg";
import coReviewsImg from "../../assets/co-reviews.svg";
import peepsImg from "../../assets/peeps.svg";

export function HomePage() {
  return (
    <Container>
      <h1>
        <div>
          <span>We turn ideas</span>
          <img src={headlineArtImg} alt="Headline art" />
        </div>
        <span>into your project</span>
      </h1>

      <div>
        <h2>
          Empowering your business by strategy and our experience.
          <br />
          We care about our employees.
        </h2>

        <ContainerLink>
          <Link to="/" variant="highlight">
            LET'S DISCUSS YOUR PROJECT
          </Link>

          <Link to="/" variant="button">
            CASE STUDIES
          </Link>
        </ContainerLink>

        <Reviews>
          <img src={upReviewsImg} alt="UP Reviews" />
          <img src={coReviewsImg} alt="Co Reviews" />
        </Reviews>
      </div>

      <img src={peepsImg} alt="People" className="peeps" />
    </Container>
  );
}

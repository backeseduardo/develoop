import { Link } from "../../components/Link";
import { Container, EmptyBox, Tape } from "./styles";

export function CommingSoonPage() {
  return (
    <Container>
      <EmptyBox>
        <Tape direction="down"></Tape>

        <Tape direction="up"></Tape>
      </EmptyBox>

      <h1>This page is on way to release</h1>

      <Link to="home" variant="highlight">
        GO BACK
      </Link>
    </Container>
  );
}

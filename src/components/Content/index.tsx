import { ReactNode } from "react";
import { Container } from "./styles";

interface ContentProps {
  children: ReactNode;
}

export function Content(props: ContentProps) {
  const { children } = props;

  return (
    <Container>
      <div className="content">{children}</div>
    </Container>
  );
}

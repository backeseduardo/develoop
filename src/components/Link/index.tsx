import { ReactNode } from "react";
import { Container } from "./styles";

interface LinkProps {
  children: ReactNode;
  highlight?: boolean;
  to: string;
}

export function Link(props: LinkProps) {
  const { children, highlight, to } = props;

  return (
    <Container to={to} highlight={highlight}>
      {children}
    </Container>
  );
}

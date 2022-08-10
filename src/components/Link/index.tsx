import { ReactNode } from "react";
import { Container } from "./styles";

interface LinkProps {
  children: ReactNode;
  to: string;
  highlight?: boolean;
  className?: string;
}

export function Link(props: LinkProps) {
  const { children, to, highlight, className } = props;

  return (
    <Container to={to} highlight={highlight ?? false} className={className}>
      {children}
    </Container>
  );
}

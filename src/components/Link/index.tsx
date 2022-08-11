import { ReactNode } from "react";
import { Container } from "./styles";

interface LinkProps {
  children: ReactNode;
  to: string;
  variant?: "highlight" | "button";
  className?: string;
}

export function Link(props: LinkProps) {
  const { children, to, variant, className } = props;

  return (
    <Container to={to} variant={variant} className={className}>
      {children}
    </Container>
  );
}

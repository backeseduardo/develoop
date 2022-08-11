import React, { ReactNode } from "react";
import { Container } from "./styles";

interface LinkProps {
  children: ReactNode;
  to: string;
  variant?: "highlight" | "button";
  className?: string;
}

export function Link(props: LinkProps) {
  const { children, to, variant, className } = props;

  function handleClick(e: React.MouseEvent): void {
    e.preventDefault();

    document.querySelector(`#${to}`)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Container variant={variant} className={className} onClick={handleClick}>
      {children}
    </Container>
  );
}

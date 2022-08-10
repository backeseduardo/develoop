import { Link } from "react-router-dom";
import styled from "styled-components";

interface ContainerProps {
	highlight: boolean;
}

export const Container = styled(Link)<ContainerProps>`
	color: ${(props) => (props.highlight ? "#141414" : "var(--white)")};
	background: ${(props) =>
		props.highlight
			? "linear-gradient(to right, #e2ff24, #24fe41)"
			: "#1f1f1f"};
	border-radius: 0.5rem;
	padding: 1.125rem 1.5rem;
	white-space: nowrap;
	text-decoration: none;
	font-weight: 600;
	font-size: 0.75rem;
	line-height: 1.25rem;

	display: flex;
	justify-content: center;

	transition: background 0.2s;

	&:hover {
		background: ${(props) =>
			props.highlight
				? "linear-gradient(to right, #24fe41, #e2ff24)"
				: "#141414"};
	}
`;

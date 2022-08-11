import { Link } from "react-router-dom";
import styled from "styled-components";
import { darken } from "polished";

interface ContainerProps {
	variant?: "highlight" | "button";
}

function getColor(props: ContainerProps): string {
	switch (props.variant) {
		case "highlight":
			return "#141414";

		default:
			return "var(--white)";
	}
}

function getBackground(props: ContainerProps): string {
	switch (props.variant) {
		case "highlight":
			return "linear-gradient(to right, #e2ff24, #24fe41)";

		case "button":
			return "#1f1f1f";

		default:
			return "";
	}
}

function getBackgroundHover(props: ContainerProps): string {
	switch (props.variant) {
		case "highlight":
			return "linear-gradient(to right, #24fe41, #e2ff24)";

		case "button":
			return darken(0.1, "#141414");

		default:
			return "#141414";
	}
}

export const Container = styled(Link)<ContainerProps>`
	color: ${getColor};
	background: ${getBackground};
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
		background: ${getBackgroundHover};
	}
`;

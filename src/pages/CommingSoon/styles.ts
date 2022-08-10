import styled from "styled-components";

interface TapeProps {
	direction: "up" | "down";
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: relative;

	h1 {
		color: #999999;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 1.5rem;
		margin-top: 2.5rem;
	}

	a {
		margin: 2rem 0;
	}
`;

export const EmptyBox = styled.div`
	background: #1a1a1a;
	height: 25rem;
	width: 41.875rem;
	border-radius: 1rem;
	margin-top: 7rem;
`;

export const Tape = styled.div<TapeProps>`
	height: 2.5rem;
	width: 100vw;
	background: #716d0c;

	position: absolute;
	left: -10px;
	top: calc(50% - 2.5rem);

	transform: rotate(
		${(props) => (props.direction === "up" ? "-5deg" : "8deg")}
	);

	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: "COMING SOON ||| COMING SOON ||| COMING SOON ||| COMING SOON ||| COMING SOON ||| COMING SOON ||| COMING SOON ||| COMING SOON ||| COMING SOON";
		color: #0a0a0a;
		font-weight: 600;
		font-size: 1.125rem;
		line-height: 1.5rem;
		white-space: nowrap;
		overflow: hidden;
	}
`;

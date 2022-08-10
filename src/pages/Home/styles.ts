import styled from "styled-components";

export const Container = styled.div`
	padding-top: 4rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		display: flex;
		flex-direction: column;
		align-items: end;

		span {
			font-size: 5rem;
			line-height: 5.75rem;
		}

		img {
			margin-left: 1.5rem;
		}
	}

	h2 {
		color: #999999;
		font-size: 1.125rem;
		font-weight: 400;
		margin-top: 2.5rem;
	}

	.peeps {
		width: 100%;
		position: absolute;
		bottom: 0;
	}
`;

export const ContainerLink = styled.div`
	margin-top: 2rem;

	display: grid;
	grid-template-columns: 2fr 1fr;

	a {
		&:first-child {
			margin-right: 0.5rem;
		}
	}
`;

export const Reviews = styled.div`
	margin-top: 2rem;

	img:first-child {
		margin-right: 1.5rem;
	}
`;

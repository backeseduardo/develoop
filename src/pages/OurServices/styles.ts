import styled from "styled-components";

export const Container = styled.div`
	padding: 4rem 1.5rem 1.5rem 1.5rem;

	h1 {
		font-weight: 600;
		font-size: 5rem;
		line-height: 5.75rem;
		letter-spacing: 0.04rem;
	}

	section {
		display: flex;
		gap: 0.5rem;
		padding-top: 2.5rem;

		.wrapper {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
`;

export const ServiceCard = styled.div`
	background: #1f1f1f;
	border-radius: 1rem;
	padding: 1.5rem;
	width: 100%;

	h2 {
		color: #f5f5f5;
		font-weight: 600;
		font-size: 1.5rem;
	}

	ul {
		margin-top: 2.5rem;
		list-style: none;

		li {
			color: #999999;
			margin-top: 1rem;

			display: flex;

			&:first-child {
				margin-top: 0;
			}

			> span:first-child {
				margin-right: 0.5rem;
			}
		}
	}

	img {
		padding-top: 2.5rem;
		float: right;
	}
`;

import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;

	.logo {
		width: 100%;
		max-width: 420px;
		border: 1px solid #1f1f1f;
		border-radius: 0.5rem;
		padding: 0.875rem 1.5rem;
		text-decoration: none;

		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			color: #999999;
		}
	}
`;

export const Nav = styled.nav`
	width: 100%;

	ul {
		list-style: none;

		display: flex;
		align-items: center;

		li {
			margin-left: 0.5rem;
		}
	}
`;

export const Search = styled.div`
	position: relative;

	input {
		padding: 1.125rem 1.5rem;
		border: 1px solid #1f1f1f;
		border-radius: 0.5rem;
		background: #141414;
		color: var(--white);
		font-weight: 600;

		&::placeholder {
			color: var(--white);
			font-weight: 600;
		}
	}

	img {
		position: absolute;
		right: 1.125rem;
		top: 1rem;
	}
`;

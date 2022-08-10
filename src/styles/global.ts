import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: #F5F5F5;

		--background: #0A0A0A;
		--content-background: #141414;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: var(--background);
		color: var(--white);
		padding: 1.5rem;
		-webkit-font-smoothing: antialiased;
		min-width: 1280px;
	}

	body, input, textarea, button {
		font-family: 'Manrope', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

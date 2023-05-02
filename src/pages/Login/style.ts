import styled from "styled-components";

export const StyledLoginPage = styled.main`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 1.25rem;
	padding: 1.25rem 0;

	.loginSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 0.875rem;

		.pageTitle,
		.pageTitle > big {
			font-family: "Fredericka the Great", cursive;
			font-size: 2.5rem;
			big {
				color: var(--secondary);
			}
		}
		.desktopImg {
			display: none;
		}
		.loginPhrase {
			font-family: "Bebas Neue", cursive;
			width: 90%;
			font-size: 1.5rem;
			text-align: center;
		}
	}
	@media (min-width: 768.1px) {
		flex-direction: row;
		justify-content: center;
		gap: 6.25rem;
		padding: 5rem;

		.loginSection {
			max-width: 36.25rem;
			gap: 0;

			.pageTitle,
			.pageTitle > big {
				font-size: 3rem;
			}
			.desktopImg {
				max-width: 27.5rem;
				display: block;
			}
			.mobileImg {
				display: none;
			}
			.loginPhrase {
				width: 100%;
				font-size: 2rem;
			}
		}
	}
`;

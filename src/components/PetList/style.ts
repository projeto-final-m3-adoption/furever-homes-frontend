import styled from "styled-components";

export const StyledPetList = styled.ul`
	overflow-y: hidden;
	overflow-x: auto;
	height: auto;
	width: calc(100% + 1.5rem);
	display: flex;
	gap: 1.5rem;
	padding-right: 1.5rem;
	padding-bottom: 1.5rem;

	/* li:hover {
		border: 2px solid var(--color-gray-1);
		transform: scale(1.1);
		transition: 0.9s;
	} */

	::-webkit-scrollbar {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		height: 0.875rem;
		min-width: 5rem;
		border-radius: var(--radius-20);
		background-color: var(--secondary);
	}
	::-webkit-scrollbar-track {
		margin-right: 1.5rem;
	}

	@media (min-width: 768.1px) {
		height: 31.25rem;
		overflow-y: auto;
		overflow-x: hidden;
		width: 100%;
		padding-right: 2.75rem;
		padding-bottom: 0;

		display: grid;
		justify-items: center;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 1.5rem;
		grid-row-gap: 2rem;

		::-webkit-scrollbar-track {
			margin-right: 0;
		}
	}
	@media (min-width: 1240px) {
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 2.25rem;
		grid-row-gap: 2.75rem;
	}
	@media (min-width: 1580px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

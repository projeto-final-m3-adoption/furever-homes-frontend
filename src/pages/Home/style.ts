import styled from "styled-components";

export const StyledHome = styled.main`
	padding: 2% 8%;
	display: flex;
	flex-direction: column;
	min-height: 39.75rem;
	gap: 0.5rem;
	margin-bottom: 1.125rem;
	.petListContainer {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1rem;
		background-color: var(--grey-0);
		border: 1px solid var(--grey-2);
		border-radius: var(--radius-30);
		padding: 1.5rem;
		.petListHeader {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.petListFilters {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 0.625rem;
			}
		}
	}
	@media (min-width: 768.1px) {
		min-height: 47.75rem;
		height: 108%;
		margin-bottom: 1.125rem;
		.petListContainer {
			align-items: center;
			gap: 1.5rem;
			padding: 2.25rem 2.75rem;
			@media (max-width: 880px) {
				padding: 1.75rem 2.125rem;
			}
			.petListFilters {
				gap: 1rem;
			}
		}
	}
`;

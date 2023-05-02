import styled from "styled-components";

export const StyledIconButton = styled.div`
	.roundButton {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--primary);
		width: 2.5rem;
		height: 2.5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		:hover {
			background-color: var(--secondary);
		}
	}
	.iconBtnImg {
		width: 1.375rem;
		height: auto;
	}
	@media (min-width: 768.1px) {
		.roundButton {
			width: ${({ size }) => size};
			height: ${({ size }) => size};
		}
		.iconBtnImg {
			width: ${({ size }) =>
				size === "4.5rem" ? "2.375rem" : size === "3.125rem" ? "1.875rem" : "1.5rem"};
			height: auto;
		}
	}
`;

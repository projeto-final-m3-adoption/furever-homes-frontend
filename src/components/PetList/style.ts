import styled from "styled-components";

export const StyledPetList = styled.ul`
  height: auto;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  gap: 2.5rem;

  /* li:hover {
    border: 2px solid var(--color-gray-1);
    transform: scale(1.1);
    transition: 0.9s;
  } */

  ::-webkit-scrollbar {
    height: 0.875rem;
    background: transparent;
    padding-right: 1.5rem;
  }
  ::-webkit-scrollbar-thumb {
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
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
`;

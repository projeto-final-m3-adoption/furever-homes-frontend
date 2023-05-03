import styled from "styled-components";

export const StyledPetCard = styled.div`
  height: 21.875rem;
  width: 16.813rem;
  border-radius: 1.875rem;
  overflow: hidden;
  cursor: pointer;

  .pet-img-container {
    height: 80%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .pet-description-container {
    height: 20%;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
  }

  .pet-description {
    font-weight: 600;
    font-size: 1.125rem;
    color: #ffffff;
  }
`;

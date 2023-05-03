import styled from "styled-components";

export const StyledPetCard = styled.div`
  height: 350px;
  width: 269px;
  border-radius: 30px;
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
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .pet-description {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
`;

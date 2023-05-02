import styled from "styled-components";

export const StyledListPets = styled.li`
  height: 100%;
  width: 200px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 4px;
  }
  div {
    display: flex;
    justify-content: space-around;
    background: #2eb3ce;
    width: 100%;
    height: 50px;
    align-items: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    p {
      font-family: "Open Sans";
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
    }
  }
`;

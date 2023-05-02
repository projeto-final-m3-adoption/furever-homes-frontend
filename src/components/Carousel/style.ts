import styled from "styled-components";

export const StyledCarousel = styled.div`
  .carousel-container {
    width: 100%;
    height: 92px;
    border-radius: 20px;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orange-container {
    background-color: #ffd0b3;
  }

  .green-container {
    background-color: #e2f5cb;
  }

  .blue-container {
    background-color: #c2ebff;
  }

  .carousel-paragraph {
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    text-align: center;
  }

  .alice-carousel__dots {
    margin: 8px 3px 5px;
  }

  @media (min-width: 768.1px) {
    .carousel-paragraph {
      font-size: 30px;
    }
  }
`;

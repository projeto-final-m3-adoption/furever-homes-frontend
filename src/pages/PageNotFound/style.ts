import styled from "styled-components";

export const StyledPageNotFound = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 0 2%;

  .pageNotFoundImages {
    .desktopImg {
      display: none;
    }

    .mobileImg {
    }
  }

  .pageNotFoundMessages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;

    big {
      color: var(--secondary);
      font-family: "Fredericka the Great", cursive;
      font-size: 128px;
    }

    h1 {
      font-size: 2.25rem;
    }

    a {
      font-size: 1.125rem;
      color: inherit;
      padding: 0.75rem 0;

      :hover {
        color: var(--secondary);
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768.1px) {
    flex-direction: row;
    min-height: fit-content;
    gap: 3.5rem;
    padding: 2rem;

    .pageNotFoundImages {
      .desktopImg {
        display: block;
      }

      .mobileImg {
        display: none;
      }
    }

    .pageNotFoundMessages {
      big {
        font-size: 8rem;
      }

      h1 {
        font-size: 2.25rem;
      }

      a {
        font-size: 1.125rem;
        padding: 0.75rem 0;
      }
    }
  }
`;

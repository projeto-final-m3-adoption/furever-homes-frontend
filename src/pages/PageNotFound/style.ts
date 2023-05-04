import styled from "styled-components";

export const StyledPageNotFound = styled.main`
  min-height: calc(100vh-1.25rem-1.25rem);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0;

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
    gap: 3.5rem;
    height: 100vh;

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

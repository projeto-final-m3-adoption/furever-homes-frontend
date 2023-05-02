import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 2% 8%;
  /* height: 350px;
  background: #fcfbfe;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  margin-left: 1rem;
  margin-top: 1rem; */

  .animal-list-container {
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;

    img {
      width: 30px;
    }

    .catIcon {
      background: #c2f4d0;
      border-radius: 32px;
      padding: 1px 2px;
    }

    .dogIcon {
      background: #c2ebff;
      border-radius: 32px;
      padding: 2px;
    }

    .rabbitIcon {
      background: #faa6ae;
      border-radius: 32px;
      padding: 2px;
    }

    .containerReset {
      .buttonReset {
        background: #c291ff;
        border-radius: 32px;
        padding: 2px;
      }
    }
  }

  .pets-list {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    overflow-y: scroll;
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;

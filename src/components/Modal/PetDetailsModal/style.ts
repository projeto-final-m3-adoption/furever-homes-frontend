import styled from "styled-components";

export interface IStyledPetModal {
  url?: string;
}

export const StyledPetModal = styled.div<IStyledPetModal>`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop);
  display: flex;
  justify-content: center;
  align-items: center;

  .petModal {
    position: relative;
    height: 33.75rem;
    width: 20rem;
    border-radius: var(--radius-30);

    .closeModal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.875rem;
      height: 1.875rem;
      background-color: var(--white);
      border-radius: 50%;
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      z-index: 999;
      img {
        width: 0.75rem;
      }
    }

    .petImg {
      height: 65%;
      border-radius: var(--radius-30) var(--radius-30) 0 0;
      background-image: url(${({ url }) => url});
      height: 80%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .petDescriptionContainer {
      position: absolute;
      bottom: 0;
      height: 35%;
      width: 100%;
      border-radius: 0 0 var(--radius-30) var(--radius-30);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      color: var(--white);

      .petInfo {
        display: flex;
        flex-direction: column;
        text-transform: capitalize;

        .petInfoOne,
        .petInfoTwo {
          display: flex;
          justify-content: space-between;
        }

        .petInfoOne {
          font-weight: 600;
          font-size: 1.125rem;
        }

        .petInfoTwo {
          font-size: 0.75rem;
        }
      }
      /* .petDescription {
				text-align: justify;
			} */
      /* .petAddress {
			} */
      .petAdopt {
        background-color: inherit;
        color: inherit;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

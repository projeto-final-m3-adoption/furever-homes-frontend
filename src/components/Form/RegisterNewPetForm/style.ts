import styled from "styled-components";

export const StyleModalNewPet = styled.div`
  background-color: gray;
  border-radius: 8px;
  position: fixed;
  top: 0;
  width: 270px;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;

    .buttonNewPet {
      font-weight: 600;
      font-size: 12px;
      color: white;
      background: #c291ff;
      border-radius: 20px;
      width: 90%;
      margin-left: 1rem;
      padding: 0.5rem;
      margin-top: 1rem;
      cursor: pointer;
    }
    .regularInput {
      width: 90%;
      height: 0;
      max-height: 100px;
      padding: 1rem;
      margin-left: 1rem;
      border-radius: 20px;
      font-weight: 400;
      font-size: 11px;
      color: #34495e;
    }
    .regularInput::placeholder {
      color: #34495e;
    }

    .selectNewPet {
      width: 90%;
      padding: 0.5rem;
      margin-left: 1rem;
      border-radius: 20px;
      font-weight: 400;
      font-size: 12px;
      color: #34495e;
      border: 0;
    }

    label {
      font-weight: 400;
      font-size: 12px;
      color: #34495e;
      margin: 0;
      padding: 0;
      padding-left: 1rem;
      margin-top: 1rem;
    }
    .label {
      font-weight: 400;
      font-size: 12px;
      color: #34495e;
      margin: 0;
      padding: 0;
      padding-left: 1rem;
      margin-top: 1rem;
    }
    .headerModal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      h2 {
      }
      button {
        height: 20px;
        font-weight: 600;
        font-size: 14px;
        color: white;
        background: #c291ff;
        border-radius: 500px;
        padding-left: 5px;
        padding-right: 5px;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 425px) {
    left: 60px;
  }
  @media (min-width: 768px) {
    left: 250px;
  }
  @media (min-width: 1024px) {
    left: 400px;
  }
  @media (min-width: 1440px) {
    left: 600px;
  }
`;

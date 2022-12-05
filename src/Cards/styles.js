import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .random-btn {
    padding: 10px;
    width: 110px;
    margin: 20px 0;
    background-color: #404c7b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #303f77;
      transition: 0.3s;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;

  .blackBk {
    background-color: #3c5679;
    transition: 0.5s;
    color: white;
  }
  .greyBk {
    background-color: #4a8a6c;
    transition: 0.5s;
    color: white;
  }
`;

export const Card = styled.div`
  max-width: 80%;
  width: auto;
  height: auto;
  padding: 15px;
  background-color: #eeee;
  cursor: pointer;
  border-radius: 3px;

  .none {
    display: none;
  }
  .title {
    display: block;
    font-size: 18px;
    font-weight: 600;
  }
  .description {
    display: block;
    font-size: 14px;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 15px;

  input {
    width: 80%;
    height: 25px;
    border-radius: 5px;
    box-shadow: 0 40px 50px rgba(0,0,0,0.25);
    border: none;
    padding: 10px;
    margin: 0 auto;
  }

  textarea {
    width: 80%;
    border-radius: 5px;
    box-shadow: 0 40px 50px rgba(0,0,0,0.25);
    border: none;
    padding: 10px;
    margin: 0 auto;
  }
  .buttons-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  button {
    width: auto;
    margin: 0 30px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 3px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;
  }

  button:hover {
    background-color: #25531e;
    transition: 0.5s;
  }

  @media only screen and (max-width: 800px) {
    width: 85%;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  max-width: 400px;
  height: 40px;
  border-radius: 5px;
  border: none;
  width: 80%;
  margin: 0 auto;
  margin-top: 20vh;
`;
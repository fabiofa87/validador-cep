import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: blue;
  box-sizing: border-box;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 12%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: "Roboto", sans-serif;
  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const ContentDiv = styled.div`
  font-family: "Roboto", sans-serif;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  background-color: #f8f7f9;
  margin-left: 25%;
  margin-top: 8%;
  border-style: double;
  border-radius: 12px;
  input {
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
    border-color: #756565;
    background-color: #ffffff;
    color: #000000;
    border-style: double;
    border-radius: 12px;
    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
    text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
    margin: 5px;
  }
  button {
    border-style: double;
    border-radius: 12px;
    padding: 0.8em 1.8em;
    border: 2px solid #17c3b2;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.3s;
    z-index: 1;
    font-family: inherit;
    color: #17c3b2;
  }

  button::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #17c3b2;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 105%;
  }

  button:hover {
    color: #111;
  }
  label {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 10%;
    margin-left: 20%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

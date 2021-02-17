import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background2.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

*{
  box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  width: 550px;
  margin-top: 20px;

  h1 {
    font-family: Fascinate Inline, sans-serif;
    background-image: linear-gradient(180deg, #d9ffb3, #73e600);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 0 0 10px 0;
  }

  .menu {
    display: flex;
    flex-direction: column;
  }

  select {
    margin: 10px 0;
    padding: 5px 10px;
    width: 200px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .game-params,
  .score {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
  }
`;

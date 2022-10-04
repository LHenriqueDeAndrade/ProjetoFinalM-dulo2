import styled from "styled-components";
import mainBackg from "../assets/MainBackground.jpeg";

export const mainDiv = styled.div`
  width: 100%;
  background: url(${mainBackg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  height: 40vh;
  hr {
    width: 20vw;
    height: 0.4vw;
    background-color: black;
    border-style: none;
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.9em;
    height: 25vh;
    color: #3574e1;
    text-align: center;
    hr {
      background-color: #3574e1;
      width: 40vw;
      height: 0.7vh;
      margin-top: 1vh;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  justify-content: space-evenly;
  background-color: transparent;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 96%;
    height: 1900px;
    margin-left: 1.7vw;
  }
`;

export const Work = styled.div`
  iframe {
    width: 100%;
    height: 49vh;
  }
  @media only screen and (max-width: 600px) {
    border: solid blue;
    margin-left: 2vw;
  }
`;

export const legenda = styled.details`
  width: 29vw;
  color: #fff;
  background-color: #3a0ca3;
  padding: 2vh 0 2vh 0.5vw;
  summary {
    font-size: 1.2em;
  }
  p {
    width: 98%;
    margin-top: 1vh;
    font-size: 1.2em;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

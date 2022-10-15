import styled from "styled-components";
import worksBackg from "../assets/WorksBackground.jpeg";

export const worksDiv = styled.div`
  background: url(${worksBackg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  @-webkit-keyframes slide-in-blurred-top {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-top {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
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

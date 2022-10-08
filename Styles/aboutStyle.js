import styled from "styled-components";
import Fire from "../assets/fire.gif";

export const aboutMainSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6800f0;
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

export const aboutDiv = styled.div`
  width: 90%;
  margin-top: 4em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 30%;
    border: 2px solid #ff0000;
    border-radius: 0px 20px 0px 20px;
    @media (max-width: 600px) {
      width: 50%;
    }
  }
  p {
    width: 30%;
    text-align: justify;
    font-size: 1.5em;
    font-family: "Brush Script MT", cursive;
    span {
      color: #ff0000;
      font-weight: bolder;
    }
    @media (max-width: 600px) {
      width: 40%;
      font-size: 0.9em;
    }
  }
`;

export const textGif = styled.h2`
  width: 70%;
  font-size: 3em;
  text-align: center;
  span {
    color: rgba(225, 225, 225, 0.01);
    background-image: url(${Fire});
    background-repeat: repeat;
    animation: animate 15s ease-in-out infinite;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    -webkit-background-clip: text;
    @media (max-width: 600px) {
      font-size: 1em;
    }
    @keyframes animate {
      0%,
      100% {
        background-position: left top;
      }
      25% {
        background-position: right bottom;
      }
      50% {
        background-position: left bottom;
      }
      75% {
        background-position: right top;
      }
    }
  }
  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

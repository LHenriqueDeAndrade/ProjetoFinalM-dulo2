import styled from "styled-components";
import { Link } from "react-router-dom";

export const odsTab = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 147, 233);
  background-image: linear-gradient(
    315deg,
    rgb(0, 147, 233) 0%,
    rgb(128, 193, 208) 100%
  );
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

export const aboutODS = styled.section`
  width: 80%;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #fff;
  margin: 2vh auto;
  h1 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    margin: 2vh 0 1vh 0;
  }
`;

export const Objectives = styled.p`
  font-size: 1.1rem;
  font-weight: 200;
  text-align: justify;
  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const sectionRoutes = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: rgb(36, 180, 180);
  background-image: linear-gradient(
    315deg,
    rgb(70, 160, 212) 30%,
    rgb(65, 172, 235) 100%
  );
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Linker = styled(Link)`
  list-style: none;
  color: brown;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  img {
    transition: 0.8s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  &:hover {
    cursor: pointer;
    color: gold;
  }
`;

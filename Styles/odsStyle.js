import styled from "styled-components";
import { Link } from "react-router-dom";

export const odsTab = styled.section`
  width: 100%;
  background-color: rgb(0, 147, 233);
  background-image: linear-gradient(
    315deg,
    rgb(0, 147, 233) 0%,
    rgb(128, 208, 199) 100%
  );
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
  justify-content: space-evenly;
  background-color: rgb(36, 180, 180);
  background-image: linear-gradient(
    315deg,
    rgb(42, 164, 235) 0%,
    rgb(61, 191, 214) 100%
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

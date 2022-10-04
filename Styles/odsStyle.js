import styled from "styled-components";
import { Link } from "react-router-dom";
// background: url(${M});

export const odsTab = styled.div`
  width: 100%;
  height: 700px;
  background-color: rgb(0, 147, 233);
  background-image: linear-gradient(
    315deg,
    rgb(0, 147, 233) 0%,
    rgb(128, 208, 199) 100%
  );
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
  p {
    color: white;
  }
`;

export const divRouter = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
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

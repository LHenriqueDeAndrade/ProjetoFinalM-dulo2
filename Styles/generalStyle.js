import styled from "styled-components";

export const divSustentabilidade = styled.section`
  width: 80%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }
  div {
    p {
      font-size: 1.3em;
      padding: 1vh 0 1vh 2vw;
      background-color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    img {
      height: 23vh;
    }
    div {
      p {
        font-size: 1.2em;
      }
    }
  }
`;

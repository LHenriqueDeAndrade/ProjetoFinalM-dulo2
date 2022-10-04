import React from "react";
import Home from "./Components/Home.js";
import * as S from "./Styles/homeStyle.js";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
`;

export default function App() {
  return (
    <Div>
      <S.GlobalStyle />
      <Home />
    </Div>
  );
}

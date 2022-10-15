import React from "react";
import * as S from "../Styles/worksStyle.js";
import "../darkMode.css";

export default function Works() {
  return (
    <S.worksDiv className="works">
      <S.titulo>
        <h1>Escolha um projeto para visualizar...</h1>
        <hr></hr>
      </S.titulo>
      <S.Div>
        <S.Work>
          <iframe src="https://codesandbox.io/embed/sad-frost-27oe6z"></iframe>
          <S.legenda className="legend">
            <summary>Star Wars</summary>
            <p>
              Site criado com design baseado no filme Star Wars: The Rise of
              Skywalker; somente com HTML5 and CSS como o desafio final do
              primeiro módulo do curso Vai na Web.
            </p>
          </S.legenda>
        </S.Work>
        <S.Work>
          <iframe src="https://codesandbox.io/embed/react-pair-programming-z7u6jc"></iframe>
          <S.legenda className="legend">
            <summary>Pair-Programming</summary>
            <p>
              Trabalho feito em dupla. Usando o framework React, nós construimos
              um pequeno e-commerce de receitas.
            </p>
          </S.legenda>
        </S.Work>
        <S.Work>
          <iframe src="https://codesandbox.io/embed/react-hooks-api-harry-potter-ysyty7"></iframe>
          <S.legenda className="legend">
            <summary>Api Harry Potter</summary>
            <p>
              Pequena Api feita React. Ao ultilizar os hooks useState, useEffect
              e o método map, eu fui capaz de mapear as diferentes casas de
              Hogwarts.
            </p>
          </S.legenda>
        </S.Work>
      </S.Div>
    </S.worksDiv>
  );
}

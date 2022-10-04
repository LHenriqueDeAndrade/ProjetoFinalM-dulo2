import React from "react";
import * as S from "../Styles/mainStyle.js";

export default function Main() {
  return (
    <S.mainDiv>
      <S.titulo>
        <h1>Choose a Project to View</h1>
        <hr></hr>
      </S.titulo>
      <S.Div>
        <S.Work>
          <iframe src="https://codesandbox.io/embed/sad-frost-27oe6z"></iframe>
          <S.legenda>
            <summary>Star Wars</summary>
            <p>
              Site created with a design based on the Star Wars movie, Star
              Wars: The Rise of Skywalker, with only HTML5 and CSS as the final
              challenge of the course's first module.
            </p>
          </S.legenda>
        </S.Work>
        <S.Work>
          <iframe src="https://codesandbox.io/embed/react-pair-programming-z7u6jc"></iframe>
          <S.legenda>
            <summary>Pair-Programming</summary>
            <p>
              Work done in pairs. Using React, we built a small recipe
              e-commerce.
            </p>
          </S.legenda>
        </S.Work>
        <S.Work>
          <iframe src="https://codesandbox.io/embed/react-hooks-api-harry-potter-ysyty7"></iframe>
          <S.legenda>
            <summary>Api Harry Potter</summary>
            <p>
              Small Api made with React. By using hooks useState, useEffect, and
              the method map, I was able to crop and map the page through the
              different Hogwarts houses.
            </p>
          </S.legenda>
        </S.Work>
      </S.Div>
    </S.mainDiv>
  );
}

import React from "react";
import odsEducacaoLarge from "../../assets/educacaoLarge.png";
import * as S from "../../Styles/generalStyle.js";

export default function Educacao() {
  return (
    <S.divSustentabilidade>
      <figure>
        <img src={odsEducacaoLarge} />
      </figure>
    </S.divSustentabilidade>
  );
}

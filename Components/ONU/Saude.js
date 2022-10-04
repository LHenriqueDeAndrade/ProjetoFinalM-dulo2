import React from "react";
import odsSaudeLarge from "../../assets/saudeLarge.png";
import * as S from "../../Styles/generalStyle.js";

export default function Saude() {
  return (
    <S.divSustentabilidade>
      <figure>
        <img src={odsSaudeLarge} />
      </figure>
    </S.divSustentabilidade>
  );
}

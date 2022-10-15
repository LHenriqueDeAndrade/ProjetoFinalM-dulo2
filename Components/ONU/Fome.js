import React from "react";
import odsFomeLarge from "../../assets/fomeZeroLarge.png";
import * as S from "../../Styles/generalStyle.js";
import "../../darkMode.css";

export default function Fome() {
  return (
    <S.divSustentabilidade className="Sustentabilidade">
      <img src={odsFomeLarge} alt="ODS Fome" />
      <div>
        <p className="text">
          1.1: Garantir cestas básicas aos moradores de bairros mais pobres,
          dando foco em locais mais marginalizados.
        </p>
        <p className="text">
          1.2: Apoiar lugares que entregam quentinhas em Volta Redonda, com
          alimentos ou qalquer valor, podendo ser feito por moradores com
          condições melhores.
        </p>
        <p className="text">
          1.3: Evitar o desperdício de comida, reaproveitando o máximo possível
          sempre, fazendo pratos e dando aos necessitados, ou até mesmo, dar aos
          animais domésticos ou de rua.
        </p>
        <p className="text">
          1.4: Incentivar o cultivo de hortaliças e frutas para consumo próprio.
        </p>
        <p className="text">
          1.5: Evitar remoção de grandes árvores frutíferas como: mangueira,
          bananeira, goiabeira etc.
        </p>
      </div>
    </S.divSustentabilidade>
  );
}

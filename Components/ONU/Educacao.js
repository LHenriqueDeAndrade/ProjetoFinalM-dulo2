import React from "react";
import odsEducacaoLarge from "../../assets/educacaoLarge.png";
import * as S from "../../Styles/generalStyle.js";

export default function Educacao() {
  return (
    <S.divSustentabilidade>
      <img src={odsEducacaoLarge} alt="ODS Educação" />
      <div>
        <p>
          1.1: Fazer grupos de estudos para pessoas dispostas a aprender e que
          buscam melhor qualidade de vida através do estudo.
        </p>
        <p>1.2: Criar cursos sociais como: pré-enem, pré-militar etc</p>
        <p>
          1.3: Buscar professores recém formados e investir em explicadoras.
        </p>
        <p>
          1.4: Promover ações locais feita pela própria comunidade com caráter
          educativo
        </p>
      </div>
    </S.divSustentabilidade>
  );
}

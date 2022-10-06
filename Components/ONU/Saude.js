import React from "react";
import odsSaudeLarge from "../../assets/saudeLarge.png";
import * as S from "../../Styles/generalStyle.js";

export default function Saude() {
  return (
    <S.divSustentabilidade>
      <img src={odsSaudeLarge} alt="ODS Saúde" />
      <div>
        <p>
          1.1: Participar das ações comunitárias ao combate de doenças e vetores
          de enfermidade.
        </p>
        <p>
          1.2: Evitar descarte de lixos em locais errados, evitando proliferação
          de pragas e consequentemente doenças.
        </p>
        <p>
          1.3: Aderir as campanhas de vacinação e manter a vacinação em dia.
        </p>
        <p>1.4: Manter consultas periódicas nos postos do SUS.</p>
      </div>
    </S.divSustentabilidade>
  );
}

import React from "react";
import odsSaudeLarge from "../../assets/saudeLarge.png";
import * as S from "../../Styles/generalStyle.js";
import "../../darkMode.css";

export default function Saude() {
  return (
    <S.divSustentabilidade className="Sustentabilidade">
      <img src={odsSaudeLarge} alt="ODS Saúde" />
      <div>
        <p className="text">
          1.1: Participar das ações comunitárias ao combate de doenças e vetores
          de enfermidade.
        </p>
        <p className="text">
          1.2: Evitar descarte de lixos em locais errados, evitando proliferação
          de pragas e consequentemente doenças.
        </p>
        <p className="text">
          1.3: Aderir as campanhas de vacinação e manter a vacinação em dia.
        </p>
        <p className="text">
          1.4: Manter consultas periódicas nos postos do SUS.
        </p>
      </div>
    </S.divSustentabilidade>
  );
}

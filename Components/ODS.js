import React from "react";
import ReactPlayer from "react-player";
import { Route, Routes } from "react-router-dom";
import * as S from "../Styles/odsStyle.js";
import Fome from "./ONU/Fome.js";
import Saude from "./ONU/Saude.js";
import Educacao from "./ONU/Educacao.js";
import odsFome from "../assets/fomeZeroSmall.png";
import odsSaude from "../assets/saudeSmall.png";
import odsEducacao from "../assets/educacaoSmall.png";
// import N from "../assets/N.jpg";

export default function ODS() {
  return (
    <S.odsTab>
      <h1>Desenvolvimento Sustentável em Volta Redonda</h1>
      <h2>Qual o objetivo dos Desenvolvimentos Sustentáveis?</h2>
      <p>
        Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação
        para acabar com a pobreza, proteger o meio ambiente e o clima e garantir
        que as pessoas, em todos os lugares, possam desfrutar de paz e de
        prosperidade. Estes são os objetivos para os quais as Nações Unidas
        estão contribuindo a fim de que possamos atingir a Agenda 2030 no
        Brasil.
      </p>
      <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=tkVAvkCF_ys&ab_channel=ProfessorLeandroFinger"
      />
      <div>
        <S.Section>
          <figure>
            <S.Linker to="Fome">
              <img src={odsFome} />
            </S.Linker>
          </figure>
          <figure>
            <S.Linker to="Saude">
              <img src={odsSaude} />
            </S.Linker>
          </figure>
          <figure>
            <S.Linker to="Educacao">
              <img src={odsEducacao} />
            </S.Linker>
          </figure>
        </S.Section>
      </div>
    </S.odsTab>
  );
}

function Outlet() {
  return (
    <S.divRouter>
      <Routes>
        <Route path="Fome" element={<Fome />} />
        <Route path="Saude" element={<Saude />} />
        <Route path="Educacao" element={<Educacao />} />
      </Routes>
    </S.divRouter>
  );
}

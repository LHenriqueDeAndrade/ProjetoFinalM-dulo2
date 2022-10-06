import React from "react";
import ReactPlayer from "react-player";
import { Outlet } from "react-router-dom";
import * as S from "../Styles/odsStyle.js";
import odsFome from "../assets/fomeZeroSmall.png";
import odsSaude from "../assets/saudeSmall.png";
import odsEducacao from "../assets/educacaoSmall.png";

export default function ODS() {
  return (
    <S.odsTab>
      <S.aboutODS>
        <h1>Desenvolvimento Sustentável em Volta Redonda</h1>
        <h3>Quais os objetivos do Desenvolvimento Sustentável?</h3>
        <S.Objectives>
          Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação
          para acabar com a pobreza, proteger o meio ambiente e o clima e
          garantir que as pessoas, em todos os lugares, possam desfrutar de paz
          e de prosperidade. Estes são os objetivos para os quais as Nações
          Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030
          no Brasil.
        </S.Objectives>
        <S.Objectives>
          Nesta agenda estão previstas ações mundiais nas áreas de erradicação
          da pobreza, segurança alimentar, agricultura, saúde, educação,
          igualdade de gênero, redução das desigualdades, energia, água e
          saneamento, padrões sustentáveis de produção e de consumo, mudança do
          clima, cidades sustentáveis, proteção e uso sustentável dos oceanos e
          dos ecossistemas terrestres, crescimento econômico inclusivo,
          infraestrutura, industrialização, entre outros.
        </S.Objectives>
      </S.aboutODS>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=tkVAvkCF_ys&ab_channel=ProfessorLeandroFinger"
          width="100%"
          height="100%"
        />
      </div>
      <S.sectionRoutes>
        <figure>
          <S.Linker to="a">
            <img src={odsFome} />
          </S.Linker>
        </figure>
        <figure>
          <S.Linker to="b">
            <img src={odsSaude} />
          </S.Linker>
        </figure>
        <figure>
          <S.Linker to="c">
            <img src={odsEducacao} />
          </S.Linker>
        </figure>
      </S.sectionRoutes>
      <Outlet />
    </S.odsTab>
  );
}

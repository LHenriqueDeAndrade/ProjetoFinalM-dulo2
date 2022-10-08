import React from "react";
import * as S from "../Styles/aboutStyle.js";
import Vr from "../assets/VoltaR.png";
import BatistaImg from "../assets/Batista.jpg";
import Ending from "../assets/Formado.png";

export default function About() {
  return (
    <S.aboutMainSection>
      <S.textGif>
        Olá, me chamo <span>Luiz Henrique de Souza Pinto</span>
        ...
      </S.textGif>
      <S.aboutDiv>
        <img src={Vr} alt="Foto da cidade de Volta Redonda" />
        <p>
          ...tenho 18 anos e nasci e cresci na cidade de{" "}
          <span>Volta Redonda/RJ</span>. Sou uma pessoa que se caracteriza pela
          calma, empatia e determinação. E com essa determinação, novos desafios
          não ficam nem um momento fora da cabeça, sempre pensando em como
          dominar-los.
        </p>
      </S.aboutDiv>
      <S.aboutDiv>
        <p>
          Comecei minha carreira como <span>Desenvolvedor</span>, fazendo ensino
          médio técnico no colégio Batista Americano, onde conheci diferentes
          pessoas com diferentes ideias. Ao terminar o Ensino Médio, eu não pude
          não me apaixonar pela tecnologia.
        </p>
        <img src={BatistaImg} alt="Foto do colégio Batista Americano" />
      </S.aboutDiv>
      <S.aboutDiv>
        <img src={Ending} alt="Foto de finalização" />
        <p>
          A partir daí me interessei profundamente pelo desenvolvimento{" "}
          <span>Front-end</span> e na infinidade de coisas que podem ser feitas
          através dele. Então busco me aprimorar para entrar no mercado de
          trabalho como <span>programador</span> e alcançar meus sonhos.
        </p>
      </S.aboutDiv>
    </S.aboutMainSection>
  );
}

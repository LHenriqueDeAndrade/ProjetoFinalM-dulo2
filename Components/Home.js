import * as S from "../Styles/homeStyle.js";
import "../darkMode.css";
import fotoPessoal from "../assets/reactsymbol2.png";
import zap from "../assets/watsapp.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Home() {
  return (
    <S.divHome className="home">
      <S.Title>Olá, bem vindo ao meu Blog</S.Title>
      <S.Profile>
        <S.aboutMe>
          <figure>
            <img src={fotoPessoal} />
          </figure>
        </S.aboutMe>

        <S.Profession>Desenvolvedor Front-End</S.Profession>
        <S.bottomPage>
          <p>
            ©️ Site criado por <span>Luiz Henrique de Souza Pinto</span>
          </p>
          <S.socialDiv>
            <a href="https://wa.me/+5524999375357">
              <S.socialLinks src={zap} alt="Logo Whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/luiz-henrique-340b93234/">
              <S.socialLinks src={linkedin} alt="Logo Linkedin" />
            </a>
            <a href="https://github.com/LHenriqueDeAndrade">
              <S.socialLinks src={github} alt="Logo Github" />
            </a>
          </S.socialDiv>
        </S.bottomPage>
      </S.Profile>
    </S.divHome>
  );
}

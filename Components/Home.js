import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ods from "./ODS.js";
import Main from "./Main.js";
import * as S from "../Styles/homeStyle.js";
import fotoPessoal from "../assets/me.png";
import zap from "../assets/watsapp.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Home() {
  const [open, setOpen] = useState(false);

  const Modal = () => {
    return (
      <S.miniMenu>
        <ul>
          <li>
            <S.Linker to="/Home">Home</S.Linker>
          </li>
          <li>
            <S.Linker to="/Main">Works</S.Linker>
          </li>
          <li>
            <S.Linker to="/ODS">ODS</S.Linker>
          </li>
        </ul>
      </S.miniMenu>
    );
  };

  return (
    <S.divHome>
      <BrowserRouter>
        <S.Title>Hi, I'm Luiz Henrique. Welcome to my Blog</S.Title>
        <div>
          <S.Modal
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open === true ? "↻" : "≡"}
          </S.Modal>
          {open && Modal()}
          <S.Nav>
            <ul>
              <li>
                <S.Linker to="/Home">Home</S.Linker>
              </li>
              <li>
                <S.Linker to="/Main">Works</S.Linker>
              </li>
              <li>
                <S.Linker to="/ODS">ODS</S.Linker>
              </li>
            </ul>
          </S.Nav>
          <S.Profile>
            <S.aboutMe>
              <figure>
                <img src={fotoPessoal} />
              </figure>
            </S.aboutMe>

            <S.Profession>Desenvolvedor Front-End</S.Profession>
            <S.bottomPage>
              <p>©️ Site desenvolvido por Luiz Henrique de Souza Pinto</p>
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
        </div>
        <Routes>
          <Route path="/Home" />
          <Route path="/Main" element={<Main />} />
          <Route path="/ODS" element={<Ods />} />
        </Routes>
      </BrowserRouter>
    </S.divHome>
  );
}

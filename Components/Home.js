import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactSwitch from "react-switch";
import "../App.css";
import About from "./About.js";
import Ods from "./ODS.js";
import Main from "./Main.js";
import * as S from "../Styles/homeStyle.js";
import fotoPessoal from "../assets/reactsymbol2.png";
import zap from "../assets/watsapp.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Fome from "./ONU/Fome.js";
import Saude from "./ONU/Saude.js";
import Educacao from "./ONU/Educacao.js";
import logo from "../assets/iniciaisBlack.jpg";
// import { BsWhatsapp } from "react-icons/bs";

export const ThemeContext = createContext(null);

export default function Home() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const Modal = () => {
    return (
      <S.miniMenu>
        <ul>
          <li>
            <S.Linker to="/Home">Home</S.Linker>
          </li>
          <li>
            <S.Linker to="/About">About</S.Linker>
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <S.divHome className="App" id={theme}>
        <BrowserRouter>
          <S.Nav>
            <img src={logo} alt="Logo LH" />
            <ul>
              <li>
                <S.Linker to="/Home">Home</S.Linker>
              </li>
              <li>
                <S.Linker to="/About">About</S.Linker>
              </li>
              <li>
                <S.Linker to="/Main">Works</S.Linker>
              </li>
              <li>
                <S.Linker to="/ODS">ODS</S.Linker>
              </li>
            </ul>
          </S.Nav>
          <S.Title>Olá, bem vindo ao meu Blog</S.Title>
          <div>
            <S.Modal
              className="Hamburguer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open === true ? "↻" : "≡"}
            </S.Modal>
            {open && Modal()}
            <div className="switch">
              <label>
                {" "}
                {theme === "light" ? "Brighter Theme" : "Darker Theme"}
              </label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
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
          </div>
          <Routes>
            <Route path="/Home" />
            <Route path="/About" element={<About />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/ODS" element={<Ods />}>
              <Route path="a" element={<Fome />} />
              <Route path="b" element={<Saude />} />
              <Route path="c" element={<Educacao />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </S.divHome>
    </ThemeContext.Provider>
  );
}

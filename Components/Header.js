import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from "../Styles/headerStyle.js";
import "../darkMode.css";
import ReactSwitch from "react-switch";
import Home from "./Home.js";
import About from "./About.js";
import Ods from "./ODS.js";
import Works from "./Works.js";
import Fome from "./ONU/Fome.js";
import Saude from "./ONU/Saude.js";
import Educacao from "./ONU/Educacao.js";
import logo from "../assets/iniciaisBlack.jpg";

export const ThemeContext = createContext(null);

export default function Header() {
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
            <S.Linker to="/">Home</S.Linker>
          </li>
          <li>
            <S.Linker to="/About">About</S.Linker>
          </li>
          <li>
            <S.Linker to="/Works">Works</S.Linker>
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
      <S.divHeader className="App" id={theme}>
        <BrowserRouter>
          <S.Nav>
            <img src={logo} alt="Logo LH" />
            <div className="switch">
              <label>
                {" "}
                {theme === "light" ? "Brighter Theme" : "Darker Theme"}
              </label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>

            <ul>
              <li>
                <S.Linker to="/">Home</S.Linker>
              </li>
              <li>
                <S.Linker to="/About">About</S.Linker>
              </li>
              <li>
                <S.Linker to="/Works">Works</S.Linker>
              </li>
              <li>
                <S.Linker to="/ODS">ODS</S.Linker>
              </li>
            </ul>
          </S.Nav>

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
            <div className="switch" id="modalSwitch">
              <label>
                {" "}
                {theme === "light" ? "Brighter Theme" : "Darker Theme"}
              </label>
              <ReactSwitch
                onChange={toggleTheme}
                uncheckedHandleIcon={
                  <svg
                    viewBox="-2 -5 14 20"
                    height="100%"
                    width="100%"
                    style={{ position: "absolute", top: 0 }}
                  >
                    <path
                      d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                  </svg>
                }
                checkedHandleIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="27"
                    fill="currentColor"
                    class="bi bi-moon-stars-fill"
                    viewBox="-2 0 18 16"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                  </svg>
                }
                checked={theme === "dark"}
              />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Works" element={<Works />} />
            <Route path="/ODS" element={<Ods />}>
              <Route path="a" element={<Fome />} />
              <Route path="b" element={<Saude />} />
              <Route path="c" element={<Educacao />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </S.divHeader>
    </ThemeContext.Provider>
  );
}

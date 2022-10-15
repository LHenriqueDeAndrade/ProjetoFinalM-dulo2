import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  *{
   margin:0;
   padding:0;
   box-sizing:border-box;
   ::-webkit-scrollbar { 
   width: 0.6vw;
  }
  ::-webkit-scrollbar-thumb{
    background: #8e0dff;
   }
   ::-webkit-scrollbar-track {
    background: #090909;
  }
}
`;

export const divHeader = styled.div`
  width: 100%;
  background-color: black;
`;

export const miniMenu = styled.nav`
  display: none;
  ul {
    display: flex;
    width: 100vw;
    position: absolute;
    left: 49.4vw;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Brush Script MT", cursive;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    height: 30vh;
    ul {
      display: inline-block;
      left: 0vw;
      width: 92vw;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Modal = styled.button`
  display: none;
  font-size: 0.1em;
  @media only screen and (max-width: 600px) {
    display: flex;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 3.5em;
    position: relative;
    left: 4vw;
  }
`;

export const Nav = styled.nav`
  display: flex;
  font-family: "Brush Script MT", cursive;
  height: 15vh;
  justify-content: space-between;
  background-color: black;
  box-shadow: rgba(240, 238, 238, 0.762) 0px -30px 36px -28px inset;
  img {
    display: flex;
    height: 8vh;
    margin-left: 2vw;
    margin-top: 2vh;
    &:hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
      height: 8em;
    }
  }
  ul {
    width: 40vw;
    height: 13vh;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    display: none;
    ul {
      width: 100vw;
    }
  }
`;

export const Linker = styled(Link)`
  color: #ffffffff;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  transition: 0.8s ease-in-out;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transition: box-shadow 0.9s;
    box-shadow: inset 150px 0px #1a27e2c2;
  }
`;

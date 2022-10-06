import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import homeBackg from "../assets/homeBG.jpg";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Gemunu+Libre:wght@200&family=Peralta&family=Quicksand&family=Source+Sans+Pro:wght@200&display=swap');
  *{
   margin:0;
   padding:0;
   box-sizing:border-box;
   font-family: 'Peralta', cursive;
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

export const miniMenu = styled.nav`
  display: none;
  position: relative;
  top: 6vw;
  ul {
    display: flex;
    width: 100vw;
    position: absolute;
    left: 49.4vw;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
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
    color: black;
    border: none;
    font-size: 2em;
    position: relative;
    left: 4vw;
  }
`;

export const divHome = styled.div`
  background-color: #1c033e;
  width: 100%;
  background: url(${homeBackg});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: black;
  @media only screen and (max-width: 600px) {
    background-size: cover;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    width: 30vw;
    height: 20vh;
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

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.4em;
  background-image: linear-gradient(
    -225deg,
    brown 0%,
    yellow 29%,
    brown 67%,
    yellow 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 7vw;
    letter-spacing: 2.88vw;
  }
`;

export const Linker = styled(Link)`
  color: brown;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: gold;
  }
`;

// <-------------------------------------------------------Profile------------------------------------------------------->

export const Profile = styled.div`
  width: 100%;
  height: 35em;
  position: relative;
`;
export const aboutMe = styled.section`
  display: flex;
  figure {
    img {
      width: 20vw;
      border-radius: 40px;
      margin-left: 2vw;
    }
    @media only screen and (max-width: 600px) {
      margin-left: 2vw;
      img {
        width: 90vw;
        height: 50vh;
      }
    }
  }
`;

export const Profession = styled.h2`
  font-size: 7em;
  font-family: "Koulen", cursive;
  letter-spacing: 5px;
  position: absolute;
  left: 2.6em;
  top: 1em;
  color: #4361ee;
  opacity: 0.7;
  position: absolute;
  @media only screen and (max-width: 600px) {
    font-size: 2em;
    letter-spacing: 3px;
    left: 2vw;
    top: 50vh;
  }
`;

export const bottomPage = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  height: 10vh;
  bottom: 1vw;
  right: 1vw;
  p {
    color: #4cc9f0;
  }
  @media only screen and (max-width: 600px) {
    p {
      margin-left: 5vw;
      margin-bottom: 3vh;
    }
  }
`;

export const socialDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  @media only screen and (max-width: 600px) {
    display: inline-block;
    width: 30%;
  }
`;

export const socialLinks = styled.img`
  display: flex;
  width: 2vw;
  border-radius: 20px;
  transition: 0.4s ease-in-out;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 5px white;
    transform: scale(1.2);
  }
  @media only screen and (max-width: 600px) {
    width: 10vw;
    margin-bottom: 1.2vh;
  }
`;

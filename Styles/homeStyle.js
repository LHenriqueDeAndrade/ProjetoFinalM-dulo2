import styled from "styled-components";
import homeBackg from "../assets/Front3.png";

export const divHome = styled.div`
  width: 100%;
  background: url(${homeBackg});
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
    background-position: center;
  }
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  @-webkit-keyframes slide-in-blurred-top {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-top {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
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
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 7vw;
    letter-spacing: 2.88vw;
    text-align: center;
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
      object-fit: contain;
      position: absolute;
      left: -40vw;
      width: 39vw;
      height: 70vh;
      -webkit-animation: slide 0.5s forwards;
      -webkit-animation-delay: 2s;
      animation: slide 0.8s ease-in forwards;
      animation-delay: 0.7s;
      @-webkit-keyframes slide {
        100% {
          left: 0;
        }
      }

      @keyframes slide {
        100% {
          left: 0;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      margin-left: 2vw;
      img {
        left: -90vw;
        width: 90vw;
        height: 40vh;
      }
    }
  }
`;

export const Profession = styled.h2`
  font-size: 7em;
  letter-spacing: 5px;
  font-family: "Koulen", cursive;
  position: absolute;
  left: 31vw;
  top: 0;
  color: #0004e3;
  position: absolute;
  @media only screen and (max-width: 600px) {
    font-size: 2.3em;
    left: 2vw;
    top: 50vh;
  }
`;

export const bottomPage = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: black;
  position: absolute;
  bottom: 0;
  p {
    color: #4cc9f0;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    span {
      font-family: "Brush Script MT", cursive;
      margin-left: 1vw;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 10vh;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 0.8em;
      margin-left: 3vw;
    }
  }
`;

export const socialDiv = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    width: 100%;
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
  }
`;

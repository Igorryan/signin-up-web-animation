import styled, { keyframes } from 'styled-components';
import 'animate.css';
import imgBackground from '../../assets/background.jpg'

const SectionRun = keyframes`
  0% {
    right: 35%;
  }

  100% {
    right: 0;
  }
`

const SectionBack = keyframes`
  0% {
    right: 0;
  }

  100% {
    right: 35%;
  }
`

const AsideRun = keyframes`
  0% {
    width: 35%;
    left: 65%;
  }

  45% {
    width: 50%;
  }

  100% {
    width: 35%;
    left: 0;
  }
`

const AsideBack = keyframes`
  0% {
    width: 35%;
    left: 0;
  }

  40% {
    width: 45%;
  }

  100% {
    width: 35%;
    left: 65%;
  }
`

const ButtonToggleWidth = keyframes`
  0% {
    width: 14rem;
  }

  50% {
    width: 20rem;
  }

  100% {
    width: 14rem;
  }
`

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

export const Section = styled.section`
  background: #fff;
  height: 100vh;

  display: flex;
  align-items:center;
  justify-content: center;
  width: 65%;
  position: absolute;

  &.animation {
    animation-name: ${SectionRun};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.2s;
  }

  &.animationBack {
    animation-name: ${SectionBack};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.2s;
  }

`

export const Aside = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;

  justify-content: center;
  position: absolute;
  transition: background-color 0.3s linear;
  overflow: hidden;

  width: 35%;
  height: 100vh;
  left: 65%;

  background-image: url(${imgBackground});
  background-position: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;

  transition: 2s;

  &.animation {
    animation-name: ${AsideRun};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.2s;
  }

  &.animationBack {
    animation-name: ${AsideBack};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: 0.2s;
  }

  #description {
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    animation-delay: 0.1s;
    animation-duration: 0.4s;

    h1 {
      color: #fff;
      font-size: 40px;
      font-weight: 700;
    }

   p {
      max-width: 270px;
      font-size: 16px;
      color: rgba(255, 255, 255,.7);
      line-height: 1.7rem;
      margin: 2.5rem 0 3rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #fff;

    width: 14rem;
    height: 3rem;

    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.08rem;

    padding: 1.15rem 0;
    border-radius: 10rem;
    border: 1px solid #fff;

    span {
      position: absolute;
      padding: 0 1rem;
      animation-duration: 0.5s;
      animation-delay: 0.4s;

      &.signInSpan {
        display: none;
      }
    }

    &.animation {
    animation-name: ${ButtonToggleWidth};
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease;
    animation-delay: 0.2s;
  }
  }
`

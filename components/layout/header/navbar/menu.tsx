import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Button from "../../../button";

interface Props {
  open: boolean;
}

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button<Props>`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  z-index: 10;
  margin-right: -15px;
  padding: 15px;
  border: 0px;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  cursor: pointer;

  &:focus:not(:focus-visible){
    outline: none;
    outline-offset: 0px;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition: ${({ open }) =>
      open
        ? "transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;"
        : "transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;"}
    transform: ${({ open }) => (open ? "rotate(225deg);" : "rotate(0deg);")}

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0px;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &::before {
      width: ${({ open }) => (open ? "100%;" : "120%;")} 
      top: ${({ open }) => (open ? "0px;" : "-10px;")} 
      opacity: ${({ open }) => (open ? "0;" : "1;")}
      transition: var(--ham-before);
    }

    &::after {
      width: ${({ open }) => (open ? "100%;" : "80%;")} 
      bottom: ${({ open }) => (open ? "0px;" : "-10px;")} 
      transform: ${({ open }) => (open ? "rotate(-90deg);" : "rotate(0deg);")}
      transition: var(--ham-after);
    }
  }
`;

const StyledSideBar = styled.aside<Props>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: #0B1114;
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: ${({ open }) =>
      open ? "translateX(0vw);" : "translateX(100vw);"} 
    visibility: ${({ open }) => (open ? "visible;" : "hidden;")} 
    transition: var(--transition);
  }

  nav {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }
  ol {
    padding: 0px;
    margin: 0px;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0px auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: var(--transition);
      width: 100%;
      padding: 3px 20px 20px;

      &:hover {
          color: var(--green)
        }

      &::before {
        content: "*";
        margin-right: 5px;
        color: var(--green);
        font-size: var(--fz-xxs);
        text-align: right;
      }
    }
  }
}
`;

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledMenu>
      <div>
        <StyledHamburgerButton
          open={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="ham-box">
            <div className="ham-box-inner"></div>
          </div>
        </StyledHamburgerButton>
        <StyledSideBar open={isMenuOpen}>
          <nav>
            <ol>
              <li>
                <Link href="#about">
                  <a onClick={() => setIsMenuOpen(!isMenuOpen)}>Sobre mi</a>
                </Link>
              </li>
              <li>
                <Link href="#jobs">
                  <a onClick={() => setIsMenuOpen(!isMenuOpen)}>Experiencia</a>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <a onClick={() => setIsMenuOpen(!isMenuOpen)}>Trabajo</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a onClick={() => setIsMenuOpen(!isMenuOpen)}>Contacto</a>
                </Link>
              </li>
              <Button text="Resume" />
            </ol>
          </nav>
        </StyledSideBar>
      </div>
    </StyledMenu>
  );
}

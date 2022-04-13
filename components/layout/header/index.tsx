import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./navbar";

interface Props {
  scrollUp: boolean;
}

const StyledHeader = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  @media (max-width: 1080px) {
    padding: 0px 40px;
  }

  @media (prefers-reduced-motion: no-preference){
    height: var(--nav-scroll-height);
    transform: ${({ scrollUp }) =>
      scrollUp
        ? "translateY(0px);"
        : "translateY(calc(var(--nav-scroll-height) * -1));"} 
    background: ${({scrollUp}) => scrollUp ? "var(--background);" : ""}
    box-shadow: 0 10px 30px -10px var(--navy-shadow);
`;

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);

  if (typeof window !== "undefined") {
    let scrollPosition = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPosition = window.pageYOffset;
      if (scrollPosition > currentScrollPosition) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
      scrollPosition = currentScrollPosition;
    };
  }

  return (
    <StyledHeader scrollUp={scrollUp} >
      <Navbar />
    </StyledHeader>
  );
}

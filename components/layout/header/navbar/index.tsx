import styled from "styled-components";
import Logo from "./logo";
import Nav from "./nav"
import Menu from './menu'

const StyledNavbar = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <Nav />
      <Menu /> 
    </StyledNavbar>
  )
}

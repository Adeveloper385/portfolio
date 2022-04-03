import styled from "styled-components";
import Navbar from "./navbar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: "";
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  @media (max-width: 1080px) {
    padding: 0px 40px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
}

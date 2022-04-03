import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  a {
    color: var(--green);
    width: 42px px;
    height: 42px;
    fill: none;
    user-select: none;
    transition: var(--transition)
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border: 2px solid var(--green);
    border-radius: 50%;
    text-decoration: none;
    font-size: 2rem;
    padding: .3rem 1rem;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      <a href="/">
       A
      </a>
    </StyledLogo>
  );
}

import styled from "styled-components";
import Button from "../button";

const StyledIntroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;
  min-height: 100vh;
  padding: 0;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h2 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
  }

  h3 {
    margin: 10px 0;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(40px, 8vw, 80px);
  }

  p {
    margin: 20px 0 0;
    max-width: 700px;
  }
`;

export default function Intro() {
  return (
    <StyledIntroSection>
      <div>
        <h1>Hola, mi nombre es</h1>
      </div>
      <div>
        <h2>André Izarra.</h2>
      </div>
      <div>
        <h3>Desarrollo aplicaciones para la web.</h3>
      </div>
      <div>
        <p>
          Soy programador, me dedico principalmente a crear o mejorar la lógica
          y funcionamiento de una página web y en ocaciones a crear excelentes
          experiencias digitales.
        </p>
      </div>
    </StyledIntroSection>
  );
}

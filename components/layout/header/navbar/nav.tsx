import Link from "next/link";
import styled from "styled-components";
import Button from "../../../button";

const StyledLinks = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  ol {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;

    li {
      margin: 0px 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

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

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Nav() {
  return (
    <StyledLinks>
      <ol>
        <li>
          <Link href="#about">
            <a>Sobre mi</a>
          </Link>
        </li>
        <li>
          <Link href="#jobs">
            <a>Experiencia</a>
          </Link>
        </li>
        <li>
          <Link href="projects">
            <a>Trabajo</a>
          </Link>
        </li>
        <li>
          <Link href="contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ol>
      <Button text="Resumen CV" />
    </StyledLinks>
  );
}

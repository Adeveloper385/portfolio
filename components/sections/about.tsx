import Link from "next/link";
import styled from "styled-components";

import Heading from "../heading";
import { data } from "../../database";

const StyledAbout = styled.section`
  max-width: 900px;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
  }
`;

const StyledText = styled.div`
  ul.skill-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    padding: 0;
    margin: 20px 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-size: var(--fz-md);
      color: var(--slate);
    }

    li::before {
      content: "▹";
      position: absolute;
      margin-top: 2px;
      left: 0px;
      color: var(--green);
      font-size: var(--fz--sm);
      line-height: 12px;
    }
  }

  a {
    color: var(--green);
  }
`;

const StyledPhoto = styled.div`
  position: relative;
  max-width: 300px;

  .wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 20px;
    background-color: var(--green);
  }
`;

export default function About() {
  return (
    <StyledAbout id="about">
      <Heading>Sobre mi</Heading>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Mi nombre es André Izarra y disfruto creando aplicaciones y
              paginas web. Empecé a interesarme por el desarrollo web en enero
              de 2021 y desde entonces me he dedicado a aprender programación.
            </p>
            <p>
              Al día de hoy he tenido el privilegio de trabajar con una{" "}
              <Link href={data[0].bussiness.link}>
                <a>agencia de sofware</a>
              </Link> y ayudar a la creación de un{" "}
              <Link href={data[1].bussiness.link}>
                <a>ecommerce.</a>
              </Link>{" "}
              Actualmente estoy enfocado en seguir mejorando mi habilidades y
              pulir mi lógica de programación mientras busco otras oportunidades
              laborales.
            </p>
            <p>Estas son las tecnologías con las que estoy mas familiarizado</p>
          </div>
          <ul className="skill-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>NodeJs</li>
            <li>NextJs</li>
            <li>Python</li>
            <li>Django Rest Framework</li>
          </ul>
        </StyledText>
        <div></div>
      </div>
    </StyledAbout>
  );
}

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Heading from "../heading";

const StyledProjectSection = styled.section`
  @(media-width: 768px){
      padding: 80px 0;
  }
`;

const StyledProjectsGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  .content {
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
  }

  .image {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
    z-index: 1;

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0px;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }
  }

  .overline {
    margin: 10px 0px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
  }

  .description {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
  }

  .tools {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;

    li {
      margin: 0px 20px 5px 0px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
  }

  .links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
  }

  &:nth-of-type(2n + 1) {
    .content {
      grid-column: 7 / -1;
      text-align: right;
    }

    .image {
      grid-column: 1 / 8;
    }

    .tools {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;
      }
    }

    .links {
      justify-content: flex-end;
      margin-left: 0px;
      margin-right: -10px;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;
  }

  @media (max-width: 1080px) {
    .content {
      grid-column: 1 / 9;
    }

    &:nth-of-type(2n + 1) {
      .content {
        grid-column: 5 / -1;
      }
    }
  }

  @media (max-width: 768px) {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    .image {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    .title {
      color: var(--white);
    }

    .description {
      padding: 20px 0px;
      background-color: transparent;
      box-shadow: none;
    }

    .tools {
      margin: 10px 0;
    }

    &:not(:last-of-type) {
      margin-bottom: 70px;
    }

    &:nth-of-type(2n + 1) {
      .content {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }

      .image {
        grid-column: 1 / -1;
      }

      .tools {
        justify-content: flex-start;
      }

      .links {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0px;
      }
    }
  }
`;

export default function Projects() {
  return (
    <StyledProjectSection id="projects">
      <Heading
        style={{
            visibility: 'visible',
            opacity: 1,
            transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
          }}
      >
        Algunos Proyectos
      </Heading>
      <StyledProjectsGrid>
        <StyledProject
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition:
              "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
          }}
        >
          <div className="content">
            <div>
              <p className="overline"></p>
              <h3 className="title">
                <Link href="">
                  <a href=""></a>
                </Link>
              </h3>
              <div className="description">
                <p>Description</p>
              </div>
              <ul className="tools">
                <li>react</li>
                <li>node</li>
                <li>mongodb</li>
              </ul>
              <div className="links">
                <Link href="/">
                  <a>links</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="image">
            <Link href="/">
              <a>
                <div></div>
              </a>
            </Link>
          </div>
        </StyledProject>
      </StyledProjectsGrid>
    </StyledProjectSection>
  );
}

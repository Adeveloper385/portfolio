import Link from "next/link";
import styled from "styled-components";

const StyledRepositoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .repositories-grid {
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledRepositorie = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  a {
    position: relative;
    z-index: 1;
  }

  .repositorie-inner {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    &:hover {
        box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }

    @media (prefers-reduced-motion: no-preference){
      &:hover {
        transform: translateY(-7px);
      }
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    .folder {
      color: var(--green);
    }

    .links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 7px;
      }
    }
  }

  .title {
    margin: 0px 0px 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
        position: static;

      &::before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }

  .description {
    color: var(--light-slate);
    font-size: 17px;
  }

  .tools {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type){
        margin-right: 15px; 
      }
    }
  }

`

export default function Repositories() {
  return (
    <StyledRepositoriesSection>
      <h2
        styled={{
          visibility: "visible",
          opacity: 1,
          transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          transition:
            "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
        }}
      >
        Otros proyectos
      </h2>
      <Link href="/">
        <a style={{
            visibility: 'visible',
            opacity: 1
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s'
          }}>Ver los archivos</a>
      </Link>
      <ul className="repositories-grid">
        <li 
          styled={{
            visibility: "visible",
            opacity: 1,
            transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition:
              "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
          }}
        >
          <div className="repositorie-inner">
            <header>
              <div className="top">
                <div className="folder">
                  icons
                </div>
                <div className="links">
                  <Link href="/">
                    <a></a>
                  </Link>
                </div>
              </div>
              <h3 className="title">
                <Link href="/">
                  <a></a>
                </Link>
              </h3>
              <div className="description">
                <p></p>
              </div>
            </header>
            <footer>
              <ul className="tools">
                <li>React</li>
              </ul>
            </footer>
          </div>
        </li>
      </ul>
    </StyledRepositoriesSection>
  );
}

import { useState } from "react";
import styled from "styled-components";
import Heading from "../heading";
import { data } from "../../database";

interface PanelProps {
  id?: string;
  show?: boolean;
}

interface TabButton {
  selected: boolean;
}

const StyledSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 700px) {
      min-heigth: 340px;
    }

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-styled: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
`;

const StyledTabPanels = styled.div<PanelProps>`
  ${({ id }) =>
    id
      ? `
  height: auto;
  padding: 10px 5px;
  `
      : `
  margin-left: 20px;
  position: relative;
  `}
  width: 100%;

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .bussiness {
      color: var(--green);
    }
  }

  .date {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      color: var(--slate);

      &::before {
        content: "▹";
        position: absolute;
        margin-top: 4px;
        left: 0px;
        color: var(--green);
        font-size: var(--fz--sm);
        line-height: 12px;
      }
    }
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabButton = styled.button<TabButton>`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: var(--transition);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0px 20px 2px;
  border: 0;
  border-left: ${({ selected }) =>
    selected ? "2px solid var(--green);" : "2px solid var(--lightest-navy);"} 
  background-color: transparent;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }

  color: ${({ selected }) => selected && "var(--green);"}

  &:hover,
  &:active,
  &:focus {
    color: var(--green);
    outline: 0;
  }

  @media (max-width: 600px){
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    padding: 0px 15px;
    border-left: 0px;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }
`;

export default function Jobs() {
  const [panel, setPanel] = useState<number>(1);

  return (
    <StyledSection id="jobs">
      <Heading>He trabajado en</Heading>
      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {data.map(({ bussiness, id }) => (
            <StyledTabButton
              key={id}
              role="tab"
              id={`tab-${id}`}
              tabIndex={panel == id ? 0 : -1}
              aria-selected={panel == id ? true : false}
              selected={panel == id ? true : false}
              aria-controls={`panel-${id}`}
              onClick={() => setPanel(id)}
            >
              <span>{bussiness.name}</span>
            </StyledTabButton>
          ))}
        </StyledTabList>
        <StyledTabPanels>
          {data.map(({ id, job, bussiness, date, activities }) => (
            <StyledTabPanels
              key={id}
              id={`panel-${id}`}
              role="tabpabel"
              tabIndex={panel == id ? 0 : -1}
              aria-labelledby={`tab-${id}`}
              aria-hidden={panel == id ? false : true}
              hidden={panel == id ? false : true}
            >
              <h3>
                <span>{job}</span> -{" "}
                <span className="bussiness">
                  <a href={bussiness.link}>{bussiness.name}</a>
                </span>
              </h3>
              <p className="date">{date}</p>
              <div>
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </StyledTabPanels>
          ))}
        </StyledTabPanels>
      </div>
    </StyledSection>
  );
}

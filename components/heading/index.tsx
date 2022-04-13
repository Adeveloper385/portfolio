import styled from "styled-components";

interface Props {
  children: string;
}

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    position: relative;
    width: 600px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy)
  }
`;

export default function Heading({ children }: Props) {
  return <StyledH2>{children}</StyledH2>;
}

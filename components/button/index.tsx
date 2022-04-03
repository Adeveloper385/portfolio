import styled from "styled-components";

declare interface IButtonProps {
  text: string;
  ref?: string
}

const StyledButton = styled.div`
  trainsition-delay: 400ms;

  a {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

export default function Button({ text, ref = "/" }: IButtonProps) {
  return (
    <StyledButton>
      <a href={ref}>{text}</a>
    </StyledButton>
  );
}

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  rigth: auto;
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: 20px;
    right: auto;
  }

  @media (max-width: 786px) {
    display: none;
  }
`;

const StyledSocial = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    a {
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;

        &:hover {
          color: var(--green);
        }
      }
    }
  }
`;

export default function Side() {
  return (
    <StyledSideElement>
      <StyledSocial>
        <li>
          <Link href="/">
            <a>
              <FaGithub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaLinkedin />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaTwitter />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaInstagram />
            </a>
          </Link>
        </li>
      </StyledSocial>
    </StyledSideElement>
  );
}

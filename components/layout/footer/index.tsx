import styled from "styled-components";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;
    color: var(--light-slate);
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;

    svg {
      width: 20px;
      height: 20px;

      &:hover {
        color: var(--green);
      }
    }

    a {
      pading: 10px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
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
        </ul>
      </StyledSocialLinks>
    </StyledFooter>
  );
}

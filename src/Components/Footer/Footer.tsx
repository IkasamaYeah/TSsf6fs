import Logo from "./f_logo.png";
import Twitter from "../../images/ballpython_1.png";
import styled from "@emotion/styled"
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  max-width: 100%;
  background-color: #000;
  position: relative;
  z-index: 100;
`

const StyledFooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 500px;
`

const StyledTwitterIcon = styled.img`
  width: 100%;
  max-width: 300px;
`

export function Footer() {
  return (
      <StyledFooter>
          <StyledFooterInner>
              <Link to='/'>
                  <StyledLogo src={Logo} alt="SF6FS"/>
              </Link>
              <a  href='https://twitter.com/ccgtlst'
                  target='_blank'
                  rel='noreferrer noopener'
              >
                  <StyledTwitterIcon src={Twitter} alt="Twitter"/>
              </a>
          </StyledFooterInner>
      </StyledFooter>
  )
}
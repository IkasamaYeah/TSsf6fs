import Logo from "./f_logo.png";
import Twitter from "../../images/ballpython_1.png";
import styled from "@emotion/styled"
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  width: 100%;
  background-color: #000;
  padding-left: 3vw;
  padding-right: 3vw;
  position: relative;
  z-index: 100;
  overflow: hidden;
`

const StyledFooterInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLogoWrapper = styled.div`
width: 20%;
height: 100%;
padding-top: 1.5vw;
`

const StyledTwitterIconWrapper = styled.div`
  width: 10%;
  height: 100%;
`

const StyledLogo = styled.img`
`

const StyledTwitterIcon = styled.img`
`

const StyledCopyRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledCopyRight = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 1vw;
  text-align: center;
`

export function Footer() {
  return (
      <StyledFooter>
          <StyledFooterInner>
            <StyledLogoWrapper>
              <Link to='/'>
                  <StyledLogo src={Logo} alt="SF6FS"/>
              </Link>
              </StyledLogoWrapper>
              <StyledCopyRightWrapper>
                <StyledCopyRight>©CAPCOM CO., LTD. ALL RIGHTS RESERVED.</StyledCopyRight>
              </StyledCopyRightWrapper>
              <StyledTwitterIconWrapper>
                  <a  href='https://twitter.com/ccgtlst'
                      target='_blank'
                      rel='noreferrer noopener'>
                      <StyledTwitterIcon src={Twitter} alt="Twitter"/>
                  </a>
                </StyledTwitterIconWrapper>
          </StyledFooterInner>
      </StyledFooter>
  )
}
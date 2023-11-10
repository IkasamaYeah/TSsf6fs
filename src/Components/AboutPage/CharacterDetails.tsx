import styled from "@emotion/styled"
import backgroundImage from "./top-background.jpg"

type Details = {
  details:{
    name:string
    strongpoints:string[]
    weakpoints:string[]
    topImage:string
    p1Image:string
    p2Image:string
  }
}

const StyledArticle = styled.article`
  position: relative;
  background: url(${backgroundImage});
  background-size: cover;
  font-family: "Anton",sans-serif;
`

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: min(50.5638vw,2700px);
  margin: 0 auto;
  padding: min(8vw,160px) min(4vw,100px) 0;
  text-shadow: 3px 1px 5vw #080b1f;
`

const StyledTopImageWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 25vw;
  width: min(50vw,1300px);
  height: 100%;
  z-index: 0;
  overflow: hidden;
  @media(max-width:900px){
    left: 40vw;
  }
`

const StyledTopImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
`

const StyledCharacterIndex = styled.h1`
  position: relative;
  font-size: min(1.6vw,24px);
  margin: 0 0 min(7vw,95px);
  text-align: left;
  &::after{
  content: "";
  position: absolute;
  display: block;
  background-color: #ffffff;
  width: min(2vw,50px);
  height: 1px;
  margin-top: 0.6vw;
  }
  @media(max-width:900px){
    font-size: 2vw;
  }
`

const StyledCharacterName = styled.h2`
  position: relative;
  font-size: min(10vw,200px);
  z-index: 1;
  margin-top: 4vw;
  position: relative;
  padding: 2vw;
  background:rgba(0, 0, 0, 0.6);
  &::before,
  &:after{
    content: '';
    width: 1vw;
    height: 2vw;
    position: absolute;
    display: inline-block;
  }
  &::before{
    border-left: solid 1px #fffb0092;
    border-top: solid 1px #fffb0092;
    top: 0;
    left: 0;
  }
  &::after{
    border-right: solid 1px #fffb0092;
    border-bottom: solid 1px #fffb0092;
    bottom: 0;
    right: 0;
  }
  @media (max-width:900px){
    margin-top: 0;
    font-size: 15vw;
    letter-spacing: 1vw;
  }
`

const StyledCharacterTips = styled.section`
  position: relative;
  z-index: 10;
  margin-top: 3vw;
  @media(max-width:900px){
    display: none;
  }
`

const StyledStrongpoints = styled.div`
  position: relative;
  font-size: min(10vw,200px);
  z-index: 1;
  position: relative;
  padding: 2vw;
  background:rgba(0, 0, 0, 0.6);
  &::before,
  &:after{
    content: '';
    width: 1vw;
    height: 2vw;
    position: absolute;
    display: inline-block;
  }
  &::before{
    border-left: solid 1px #fffb0092;
    border-top: solid 1px #fffb0092;
    top: 0;
    left: 0;
  }
  &::after{
    border-right: solid 1px #fffb0092;
    border-bottom: solid 1px #fffb0092;
    bottom: 0;
    right: 0;
  }
`

const StyledWeakpoints = styled.div`
  margin-top: 4vw;
  position: relative;
  padding: 1vw 2vw 1vw 2vw;
  background:rgba(0, 0, 0, 0.6);
  &::before,
  &:after{
    content: '';
    width: 1vw;
    height: 2vw;
    position: absolute;
    display: inline-block;
  }
  &::before{
    border-left: solid 1px #fffb0092;
    border-top: solid 1px #fffb0092;
    top: 0;
    left: 0;
  }
  &::after{
    border-right: solid 1px #fffb0092;
    border-bottom: solid 1px #fffb0092;
    bottom: 0;
    right: 0;
  }
`

const StyledTipsH3 = styled.h3`
  font-size: min(3vw,200px);
`

const StyledTipsParagram = styled.p`
  position: relative;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  margin-top: 2vw;
  margin-bottom: 2vw;
  font-weight: bold;
  font-size:0.8vw;
  &::after{
  content: "";
  position: absolute;
  left: 0.8vw;
  display: block;
  background-color: #fffb0092;
  width: min(2vw,50px);
  height: 1px;
  margin-top: 0.2vw;
  }
`

const StyledAboutSection = styled.section`
  @media(max-width:900px){
    margin:5vw 0 0 8vw;
  }
`

export function CharacterDetails ({ details }:Details) {
  return (<>
      <StyledArticle key={details.name}>
        <StyledAbout>
          <StyledAboutSection>
            <StyledCharacterIndex>CHARACTER</StyledCharacterIndex>
            <StyledCharacterName>{details.name}</StyledCharacterName>
          </StyledAboutSection>
          <StyledCharacterTips>
            <StyledStrongpoints>
              <StyledTipsH3>STRONG POINTS</StyledTipsH3>
              <StyledTipsParagram>{details.strongpoints[0]}</StyledTipsParagram>
              <StyledTipsParagram>{details.strongpoints[1]}</StyledTipsParagram>
              <StyledTipsParagram>{details.strongpoints[2]}</StyledTipsParagram>
            </StyledStrongpoints>
            <StyledWeakpoints>
              <StyledTipsH3>WEAK POINTS</StyledTipsH3>
              <StyledTipsParagram>{details.weakpoints[0]}</StyledTipsParagram>
              <StyledTipsParagram>{details.weakpoints[1]}</StyledTipsParagram>
              <StyledTipsParagram>{details.weakpoints[2]}</StyledTipsParagram>
            </StyledWeakpoints>
          </StyledCharacterTips>
        </StyledAbout>
        <StyledTopImageWrapper>
          <StyledTopImage src={details.topImage} alt={details.name}/>
        </StyledTopImageWrapper>
      </StyledArticle>
  </>)
}
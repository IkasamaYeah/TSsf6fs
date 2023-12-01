import styled from "@emotion/styled"

export const StyledWholeResultWrapper = styled.div`
  padding-bottom: 1vw;
`

export const StyledResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1vw 15vw 0vw 15vw;
  position: relative;
  background:rgba(0, 0, 0, 0.6);
  padding: 1vw;
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

export const StyledH1 = styled.h1`
  font-size: 2vw;
  letter-spacing: 0.3vw;
`

export const StyledP = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 1vw;
  padding-bottom: 1vw;
`

export const StyledMovesKinds = styled.h2`
  margin-top: 2vw;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 1.8vw;
  text-align: start;
`

export const StyledMovesName = styled.h3`
  border-right: 1px solid rgba( 255, 255, 255, 0.7);
  padding: 1vw;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  background: rgba( 0, 102, 153,0.7);
`

export const StyledStartup = styled.span`
  padding: 1vw;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-right: 3vw;
  text-align: center;
  background: rgba( 59, 175, 117, 0.7);
`

export const StyledMovesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 1vw;
  text-align: start;
  margin-top: 1vw;
`

export const ResultCalculateWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  font-size: 1vw;
  padding-bottom: 2vw;
`

export const StyledWrapper = styled.div`
  position: relative;
  padding: 2em;
  background:rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
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
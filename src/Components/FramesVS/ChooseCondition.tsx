/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Arrow from "../../images/yellow-arrow.png"

const StyledCharacterPickWrapper = styled.div`
  padding-top: 2vw;
  display: grid;
  grid-template-columns: repeat( 3, 25vw);
  align-items: center;
  margin-left: 15vw;
  margin-right: 15vw;
  margin-bottom: 2vw;
`

const StyledSelectWrapper = styled.div`
  position: relative;
  background:rgba(0, 0, 0, 0.6);
  padding: 1vw;
	text-align: center;
  display: flex;
  flex-direction: column;
  width: 20vw;
  justify-content: center;
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

const StyledArrowWrapper = styled.div`
	text-align: center;
  width: 20vw;
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

const StyledSelectLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
`

const StyledP1SelectLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  text-align:center;
`

const StyledP2SelectLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  text-align:center;
`

const StyledP1Select = styled.select`
  font-family: 'M PLUS 1p', sans-serif;
	background-color: rgba( 0, 102, 153,0.7);
  color: white;
	width: 100%;
	padding: 0.5vw 0 0.5vw 0;
	font-size: 2vw;
  font-weight: bold;
  letter-spacing: 0.2vw;
  text-align: center;
	border: none;
  border-radius: 1vw;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 1vw;
  cursor: pointer;
  &:focus{
    outline: none;
    border-bottom: 1px solid rgb(255,255,255);
  }
`

const StyledP2Select = styled.select`
  font-family: 'M PLUS 1p', sans-serif;
	background-color: rgba( 215, 29, 59,0.7);
  color: white;
	width: 100%;
	padding: 0.5vw 0 0.5vw 0;
  font-size: 2vw;
  font-weight: bold;
  letter-spacing: 0.2vw;
  text-align: center;
	border: none;
  border-radius: 1vw;
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 1vw;
  cursor: pointer;
  &:focus{
    outline: none;
    border-bottom: 1px solid rgb(255,255,255);
  }
`

const StyledArrow = css`
  display: block;
  width: 30%;
  margin: auto;
  cursor: pointer;
`

const ReversedArrow = css`
 transform: scale(-1, 1);
`

type Props= {
  CharacterHandler:{
    p1CharacterHandler: (e:React.ChangeEvent<HTMLSelectElement>) => void
    p2CharacterHandler: (e:React.ChangeEvent<HTMLSelectElement>) => void
  }
  reverseAttacker:boolean
  reverseAttackerHandler: (e:React.MouseEvent<HTMLImageElement>) => void
}

export function ChooseCondition ({ CharacterHandler , reverseAttacker , reverseAttackerHandler}:Props) {
  return (<>
        <StyledCharacterPickWrapper>
          <StyledSelectWrapper>
            <StyledP1SelectLabel>
              1Pキャラを選択
            </StyledP1SelectLabel>
            <StyledP1Select defaultValue={"Ryu"} onChange={CharacterHandler.p1CharacterHandler}>
              <option value="Rashid">Rashid</option>
              <option value="Cammy">Cammy</option>
              <option value="Lily">Lily</option>
              <option value="Zangief">Zangief</option>
              <option value="JP">JP</option>
              <option value="Marisa">Marisa</option>
              <option value="Manon">Manon</option>
              <option value="DeeJay">DeeJay</option>
              <option value="Honda">E.Honda</option>
              <option value="Dhalsim">Dhalsim</option>
              <option value="Blanka">Blanka</option>
              <option value="Ken">Ken</option>
              <option value="Juri">Juri</option>
              <option value="Kimberly">Kimberly</option>
              <option value="Guile">Guile</option>
              <option value="ChunLi">Chun-Li</option>
              <option value="Jamie">Jamie</option>
              <option value="Luke">Luke</option>
              <option value="Ryu">Ryu</option>
            </StyledP1Select>
          </StyledSelectWrapper>
          <StyledArrowWrapper>
            <StyledSelectLabel>攻撃側を選択してください</StyledSelectLabel>
            <img src={Arrow} alt="Arrow" onClick={reverseAttackerHandler} css={[StyledArrow , reverseAttacker&&ReversedArrow]}/>
          </StyledArrowWrapper>
          <StyledSelectWrapper>
            <StyledP2SelectLabel>
              2Pキャラを選択
            </StyledP2SelectLabel>
            <StyledP2Select defaultValue={"Ryu"} onChange={CharacterHandler.p2CharacterHandler}>
              <option value="Rashid">Rashid</option>
              <option value="Cammy">Cammy</option>
              <option value="Lily">Lily</option>
              <option value="Zangief">Zangief</option>
              <option value="JP">JP</option>
              <option value="Marisa">Marisa</option>
              <option value="Manon">Manon</option>
              <option value="DeeJay">DeeJay</option>
              <option value="Honda">E.Honda</option>
              <option value="Dhalsim">Dhalsim</option>
              <option value="Blanka">Blanka</option>
              <option value="Ken">Ken</option>
              <option value="Juri">Juri</option>
              <option value="Kimberly">Kimberly</option>
              <option value="Guile">Guile</option>
              <option value="ChunLi">Chun-Li</option>
              <option value="Jamie">Jamie</option>
              <option value="Luke">Luke</option>
              <option value="Ryu">Ryu</option>
            </StyledP2Select>
          </StyledSelectWrapper>
      </StyledCharacterPickWrapper>
  </>)
}
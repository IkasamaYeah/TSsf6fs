/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Arrow from "../../images/yellow-arrow.png"

const StyledCharacterPickWrapper = styled.div`
  padding-top: 2vw;
  display: flex;
  justify-content: space-around;
  margin-left: 7vw;
  margin-right: 7vw;
`

const StyledSelectWrapper = styled.div`
	text-align: center;
  display: flex;
  flex-direction: column;
  width: 20vw;
`

const StyledArrowWrapper = styled.div`
	text-align: center;
  display: flex;
  flex-direction: column;
  width: 20vw;
`

const StyledSelectLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-family: "PT Sans",sans-serif;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
`

const StyledP1SelectLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-family: "PT Sans",sans-serif;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  margin-left: 12vw;
`

const StyledP2SelectLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-family: "PT Sans",sans-serif;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  margin-right: 12vw;
`

const StyledP1Select = styled.select`
	background-color: rgba( 0, 102, 153,0.7);
  color: white;
	width: 100%;
	padding: 0.5vw 0.5vw 0.5vw 0;
  font-family: 'PT Sans', sans-serif;
	font-size: 2vw;
  font-weight: bold;
  letter-spacing: 0.2vw;
  text-align: center;
	border-radius: 0;
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
	background-color: rgba( 215, 29, 59,0.7);
  color: white;
	width: 100%;
	padding: 0.5vw 0.5vw 0.5vw 0;
  font-size: 2vw;
  font-weight: bold;
  letter-spacing: 0.2vw;
  text-align: center;
	border-radius: 0;
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
  width: 50%;
  margin: auto;
  padding-top: 0.6vw;
  cursor: pointer;
`

const ReversedArrow = css`
  rotate: 180deg;
`

type Props= {
  p1CharacterHandler: (e:React.ChangeEvent<HTMLSelectElement>) => void
  p2CharacterHandler: (e:React.ChangeEvent<HTMLSelectElement>) => void
  reverseAttacker:boolean
  toggleReverse: (e:React.MouseEvent<HTMLImageElement>) => void
}

export function ChooseCondition ({ p1CharacterHandler , p2CharacterHandler , reverseAttacker , toggleReverse}:Props) {
  return (<>
        <StyledCharacterPickWrapper>
          <StyledSelectWrapper>
            <StyledP1SelectLabel>
              Pick 1P Character
            </StyledP1SelectLabel>
            <StyledP1Select onChange={p1CharacterHandler}>
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
              <option value="Ryu" selected>Ryu</option>
            </StyledP1Select>
          </StyledSelectWrapper>
          <StyledArrowWrapper>
            <StyledSelectLabel>Which one is attacking?</StyledSelectLabel>
            <img src={Arrow} alt="Arrow" onClick={toggleReverse} css={[StyledArrow , reverseAttacker&&ReversedArrow]}/>
          </StyledArrowWrapper>
          <StyledSelectWrapper>
            <StyledP2SelectLabel>
              Pick 2P Character
            </StyledP2SelectLabel>
            <StyledP2Select onChange={p2CharacterHandler}>
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
              <option value="Ryu" selected>Ryu</option>
            </StyledP2Select>
          </StyledSelectWrapper>
      </StyledCharacterPickWrapper>
  </>)
}
/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { useState } from "react"

const StyledNarrowDownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8vw;
  margin-right: 8vw;
`

const StyledP1Input = styled.input`
  display: none;
`

const StyledP2Input = styled.input`
  display: none;
 `

const StyledP1Label = css`
  display: inline-block;
  background-color: rgba( 0, 102, 153,0.2);
  color: white;
  padding: 0.5vw;
  text-align: center;
  font-size: 1vw;
  width: 10vw;
  border: none;
  border-radius: 15px;
  line-height: 3vw;
  cursor: pointer;
`

const StyledCheckedP1Label = css`
  ${StyledP1Label}
  background-color: rgba( 0, 102, 153,0.7);
`

const StyledP2Label = css`
  display: inline-block;
  background-color: rgba( 215, 29, 59,0.2);
  color: white;
  padding: 1vw;
  text-align: center;
  font-size: 1.5vw;
  width: 5vw;
  border: none;
  border-radius: 15px;
  margin-left: 0.5vw;
  &:first-child{
    margin-left: 0;
  }
`

const StyledCheckedP2Label = css`
  ${StyledP2Label}
  background-color: rgba( 215, 29, 59,0.7);
`

const StyledP1ConditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1vw;
  row-gap: 1vw;
`

const StyledP2ConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledP2MoveKindsWrapper = styled.div`
`

const StyledP2MovesSelect = styled.select`
  background-color: rgba( 215, 29, 59,0.7);
  color: white;
  border: none;
  border-radius: 25px;
  text-align: center;
  width: 25vw;
  padding: 0.5vw;
  font-size: 1.5vw;
  margin-top: 1vw;
  margin-left: 1.8vw;
`

const StyledConditionLabel = styled.label`
  display: inline-block;
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-family: "PT Sans",sans-serif;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  line-height: 2vw;
  margin-left: 5.5vw;
  margin-top: 3vw;
  text-align: center;
`

type Props = {
  reverseAttacker:boolean
  p1ConditionHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  p2MovesHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  pickedP2Moves:{
    [key:string]: string|string[]|number|number[],
    type:string
    commands:string[]
    movesName:string
    movesCondition:string
    startup:any
    active:any
    recovery:any
    hit:any
    block:any
    cancel:any
    tips:string[]
    hitboxImage:string 
  }[]
  p2Moves:string[]
}


export function NarrowDownConditions ({reverseAttacker , p1ConditionHandler , p2MovesHandler , pickedP2Moves , p2Moves}:Props) {
  const [selectedRadio , setSelectedRadio ] = useState("")
  const selectRadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => setSelectedRadio(e.target.value)
  const radioHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    p1ConditionHandler(e);
    selectRadioHandler(e);
  }

  if (reverseAttacker){
    return (<>
      <StyledNarrowDownWrapper>
        <StyledP1ConditionWrapper>
            <StyledP1Input  type="radio"
                            name="conditions"
                            id="condition-block"
                            value="block"
                            checked={selectedRadio === "block"}
                            onChange={radioHandler}/>
              <label htmlFor="condition-block" css={selectedRadio === "block" ? StyledCheckedP1Label:StyledP1Label}>
                ガード
              </label>
            <StyledP1Input  type="radio"
                            name="conditions"
                            id="condition-hit"
                            value="hit"
                            checked={selectedRadio === "hit"}
                            onChange={radioHandler}/>
              <label htmlFor="condition-hit" css={selectedRadio === "hit" ? StyledCheckedP1Label:StyledP1Label}>
                ヒット
              </label>
            <StyledP1Input  type="radio"
                            name="conditions"
                            id="condition-counter"
                            value="chit"
                            checked={selectedRadio === "chit"}
                            onChange={radioHandler}/>
              <label htmlFor="condition-counter" css={selectedRadio === "chit" ? StyledCheckedP1Label:StyledP1Label}>
                カウンター
              </label>
            <StyledP1Input  type="radio"
                            name="conditions"
                            id="condition-punishcounter"
                            value="pchit"
                            checked={selectedRadio === "pchit"}
                            onChange={radioHandler}/>
              <label htmlFor="condition-punishcounter" css={selectedRadio === "pchit" ? StyledCheckedP1Label:StyledP1Label}>
                PC
              </label>
        </StyledP1ConditionWrapper>
        <StyledConditionLabel>Settle conditions<br/>and view result below</StyledConditionLabel>
        <StyledP2ConditionWrapper>
          <StyledP2MoveKindsWrapper>
            <StyledP2Input  type='checkbox'
                            value='通常技'
                            id='normal'
                            onChange={p2MovesHandler}
                            defaultChecked
            />
              <label css={p2Moves.includes("通常技")? StyledCheckedP2Label:StyledP2Label} htmlFor='normal'>
                通常
              </label>
            <StyledP2Input  type='checkbox'
                            value='特殊技'
                            id='unique'
                            onChange={p2MovesHandler}
                            defaultChecked
            />
              <label css={p2Moves.includes("特殊技")? StyledCheckedP2Label:StyledP2Label} htmlFor='unique'>
                特殊
              </label>
            <StyledP2Input  type='checkbox'
                            value='必殺技'
                            id='special'
                            onChange={p2MovesHandler}
                            defaultChecked
            />
              <label css={p2Moves.includes("必殺技")? StyledCheckedP2Label:StyledP2Label} htmlFor='special'>
                必殺
              </label>
            <StyledP2Input  type='checkbox'
                            value='スーパーアーツ'
                            id='sa'
                            onChange={p2MovesHandler}
                            defaultChecked
            />
              <label css={p2Moves.includes("スーパーアーツ")? StyledCheckedP2Label:StyledP2Label} htmlFor='sa'>
                SA
              </label>
            <StyledP2Input  type='checkbox'
                            value='投げ'
                            id='throw'
                            onChange={p2MovesHandler}
                            defaultChecked
            />
              <label css={p2Moves.includes("投げ")? StyledCheckedP2Label:StyledP2Label} htmlFor='throw'>
                投げ
              </label>
          </StyledP2MoveKindsWrapper>
          <StyledP2MovesSelect>
            {pickedP2Moves?.filter(pickedP2Move => p2Moves.includes(pickedP2Move.type))
            .map(pickedP2Move =>
              <option value={pickedP2Move.movesName}>{pickedP2Move.movesName}</option>
              )}
          </StyledP2MovesSelect>
        </StyledP2ConditionWrapper>
      </StyledNarrowDownWrapper>
    </>)
  } else {
    return (<>
    <p>untyoooooooooo</p>
    </>)
  }
}
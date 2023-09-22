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

const StyledP1AttackConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledP1BlockConditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5vw;
  row-gap: 0.5vw;
  margin-left: 2.8vw;
`

const StyledInput = styled.input`
  display: none;
`

const StyledAttackP1Label = css`
  display: inline-block;
  background-color: rgba( 0, 102, 153,0.2);
  color: white;
  padding: 1vw;
  text-align: center;
  font-size: 1.5vw;
  width: 5vw;
  height: 3.3vw;
  border: none;
  border-radius: 1vw;
  margin-right: 0.5vw;
  cursor: pointer;
  &:first-child{
    margin-right: 0;
  }
`

const StyledBlockP1Label = css`
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

const StyledCheckedAttackP1Label = css`
  ${StyledAttackP1Label}
  background-color: rgba( 0, 102, 153,0.7);
`

const StyledCheckedBlockP1Label = css`
  ${StyledBlockP1Label}
  background-color: rgba( 0, 102, 153,0.7);
`

const StyledP2AttackConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledP2BlockConditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5vw;
  row-gap: 0.5vw;
  margin-right: 3vw;
`

const StyledAttackP2Label = css`
  display: inline-block;
  background-color: rgba( 215, 29, 59,0.2);
  color: white;
  padding: 1vw;
  text-align: center;
  font-size: 1.5vw;
  width: 5vw;
  height: 3.3vw;
  border: none;
  border-radius: 1vw;
  margin-left: 0.5vw;
  cursor: pointer;
`

const StyledBlockP2Label = css`
  display: inline-block;
  background-color: rgba( 215, 29, 59,0.2);
  color: white;
  padding: 0.5vw;
  text-align: center;
  font-size: 1vw;
  width: 10vw;
  border: none;
  border-radius: 1vw;
  line-height: 3vw;
  cursor: pointer;
`

const StyledCheckedAttackP2Label = css`
  ${StyledAttackP2Label}
  background-color: rgba( 215, 29, 59,0.7);
`

const StyledCheckedBlockP2Label = css`
  ${StyledBlockP2Label}
  background-color: rgba( 215, 29, 59,0.7);
`

const StyledP1MovesSelect = styled.select`
  background-color: rgba( 0, 102, 153,0.7);
  color: white;
  border: none;
  border-radius: 2vw;
  text-align: center;
  width: 27vw;
  padding: 0.5vw;
  font-size: 1.5vw;
  margin-top: 1vw;
  margin-right: 3.9vw;
`

const StyledP2MovesSelect = styled.select`
  background-color: rgba( 215, 29, 59,0.7);
  color: white;
  border: none;
  border-radius: 2vw;
  text-align: center;
  width: 27vw;
  padding: 0.5vw;
  font-size: 1.5vw;
  margin-top: 1vw;
  margin-left: 0.7vw;
`

const StyledP1AttackArrow = styled.label`
  display: inline-block;
  color: rgba(255, 255, 255, 0.9);
	font-size: 1vw;
  font-family: "PT Sans",sans-serif;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  line-height: 2vw;
  margin-right: 5.5vw;
  margin-top: 3vw;
  text-align: center;
`

const StyledP2AttackArrow = styled.label`
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
  p2ConditionHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  p1MoveKindsHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  p2MoveKindsHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  pickedP1Moves:{
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
  p1MoveKinds:string[]
  p2MoveKinds:string[]
  p1MoveHandler:(e:React.ChangeEvent<HTMLSelectElement>) => void
  p2MoveHandler:(e:React.ChangeEvent<HTMLSelectElement>) => void
}


export function NarrowDownConditions ({reverseAttacker , p1ConditionHandler ,p2ConditionHandler , p1MoveKindsHandler , p2MoveKindsHandler , pickedP1Moves , pickedP2Moves , p1MoveKinds , p2MoveKinds , p1MoveHandler , p2MoveHandler}:Props) {
  const [selectedRadio , setSelectedRadio ] = useState("")
  const selectRadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => setSelectedRadio(e.target.value)
  const p1RadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    p1ConditionHandler(e);
    selectRadioHandler(e);
  }
  const p2RadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    p2ConditionHandler(e);
    selectRadioHandler(e);
  }

  if (reverseAttacker){
    return (<>
      <StyledNarrowDownWrapper>
        <StyledP1BlockConditionWrapper>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-block"
                            value="block"
                            checked={selectedRadio === "block"}
                            onChange={p1RadioHandler}
                            />
              <label htmlFor="condition-block" css={selectedRadio === "block" ? StyledCheckedBlockP1Label:StyledBlockP1Label}>
                ガード
              </label>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-hit"
                            value="hit"
                            checked={selectedRadio === "hit"}
                            onChange={p1RadioHandler}/>
              <label htmlFor="condition-hit" css={selectedRadio === "hit" ? StyledCheckedBlockP1Label:StyledBlockP1Label}>
                ヒット
              </label>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-counter"
                            value="chit"
                            checked={selectedRadio === "chit"}
                            onChange={p1RadioHandler}/>
              <label htmlFor="condition-counter" css={selectedRadio === "chit" ? StyledCheckedBlockP1Label:StyledBlockP1Label}>
                カウンター
              </label>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-punishcounter"
                            value="pchit"
                            checked={selectedRadio === "pchit"}
                            onChange={p1RadioHandler}/>
              <label htmlFor="condition-punishcounter" css={selectedRadio === "pchit" ? StyledCheckedBlockP1Label:StyledBlockP1Label}>
                PC
              </label>
        </StyledP1BlockConditionWrapper>
        <StyledP2AttackArrow>
          Settle conditions
        </StyledP2AttackArrow>
        <StyledP2AttackConditionWrapper>
          <div>
            <StyledInput  type='checkbox'
                            value='通常技'
                            id='normal'
                            onChange={p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={p2MoveKinds.includes("通常技")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='normal'>
                通常
              </label>
            <StyledInput  type='checkbox'
                            value='特殊技'
                            id='unique'
                            onChange={p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={p2MoveKinds.includes("特殊技")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='unique'>
                特殊
              </label>
            <StyledInput  type='checkbox'
                            value='必殺技'
                            id='special'
                            onChange={p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={p2MoveKinds.includes("必殺技")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='special'>
                必殺
              </label>
            <StyledInput  type='checkbox'
                            value='スーパーアーツ'
                            id='sa'
                            onChange={p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={p2MoveKinds.includes("スーパーアーツ")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='sa'>
                SA
              </label>
            <StyledInput  type='checkbox'
                            value='投げ'
                            id='throw'
                            onChange={p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={p2MoveKinds.includes("投げ")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='throw'>
                投げ
              </label>
          </div>
          <StyledP2MovesSelect onChange={p2MoveHandler}>
            {pickedP2Moves?.filter(pickedP2Move => p2MoveKinds.includes(pickedP2Move.type))
            .map(pickedP2Move =>
              <option value={pickedP2Move.movesName} >{pickedP2Move.movesName}</option>
              )}
          </StyledP2MovesSelect>
        </StyledP2AttackConditionWrapper>
      </StyledNarrowDownWrapper>
    </>)
  } else {
    return (<>
      <StyledNarrowDownWrapper>
      <StyledP1AttackConditionWrapper>
          <div>
            <StyledInput  type='checkbox'
                            value='通常技'
                            id='normal'
                            onChange={p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={p1MoveKinds.includes("通常技")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='normal'>
                通常
              </label>
            <StyledInput  type='checkbox'
                            value='特殊技'
                            id='unique'
                            onChange={p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={p1MoveKinds.includes("特殊技")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='unique'>
                特殊
              </label>
            <StyledInput  type='checkbox'
                            value='必殺技'
                            id='special'
                            onChange={p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={p1MoveKinds.includes("必殺技")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='special'>
                必殺
              </label>
            <StyledInput  type='checkbox'
                            value='スーパーアーツ'
                            id='sa'
                            onChange={p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={p1MoveKinds.includes("スーパーアーツ")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='sa'>
                SA
              </label>
            <StyledInput  type='checkbox'
                            value='投げ'
                            id='throw'
                            onChange={p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={p1MoveKinds.includes("投げ")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='throw'>
                投げ
              </label>
          </div>
          <StyledP1MovesSelect onChange={p1MoveHandler}>
            {pickedP1Moves?.filter(pickedP1Move => p1MoveKinds.includes(pickedP1Move.type))
            .map(pickedP1Move =>
              <option value={pickedP1Move.movesName}>{pickedP1Move.movesName}</option>
              )}
          </StyledP1MovesSelect>
        </StyledP1AttackConditionWrapper>
        <StyledP1AttackArrow>
          Settle conditions<br/>and view result below
        </StyledP1AttackArrow>
        <StyledP2BlockConditionWrapper>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-block"
                            value="block"
                            checked={selectedRadio === "block"}
                            onChange={p2RadioHandler}/>
              <label htmlFor="condition-block" css={selectedRadio === "block" ? StyledCheckedBlockP2Label:StyledBlockP2Label}>
                ガード
              </label>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-hit"
                            value="hit"
                            checked={selectedRadio === "hit"}
                            onChange={p2RadioHandler}/>
              <label htmlFor="condition-hit" css={selectedRadio === "hit" ? StyledCheckedBlockP2Label:StyledBlockP2Label}>
                ヒット
              </label>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-counter"
                            value="chit"
                            checked={selectedRadio === "chit"}
                            onChange={p2RadioHandler}/>
              <label htmlFor="condition-counter" css={selectedRadio === "chit" ? StyledCheckedBlockP2Label:StyledBlockP2Label}>
                カウンター
              </label>
            <StyledInput  type="radio"
                            name="conditions"
                            id="condition-punishcounter"
                            value="pchit"
                            checked={selectedRadio === "pchit"}
                            onChange={p2RadioHandler}/>
              <label htmlFor="condition-punishcounter" css={selectedRadio === "pchit" ? StyledCheckedBlockP2Label:StyledBlockP2Label}>
                PC
              </label>
        </StyledP2BlockConditionWrapper>
      </StyledNarrowDownWrapper>
    </>)
  }
}
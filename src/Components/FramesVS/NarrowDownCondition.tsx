/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { useState } from "react"

const StyledNarrowDownWrapper = styled.div`
  display: grid;
  grid-template-columns: 25vw 25vw;
  column-gap: 15vw;
  justify-content: space-between;
  margin-left: 15vw;
  margin-right: 15vw;
  align-items: center;
`

const StyledP1AttackConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const StyledP1BlockConditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5vw;
  row-gap: 0.5vw;
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

const StyledInput = styled.input`
  display: none;
`

const StyledAttackP1Label = css`
  display: inline-block;
  background-color: rgba( 0, 102, 153,0.2);
  color: white;
  padding: 1vw;
  text-align: center;
  font-size: 1vw;
  width: 4vw;
  height: 3vw;
  border: none;
  border-radius: 1vw;
  margin-right: 0.5vw;
  cursor: pointer;
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
  border-radius: 1vw;
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

const StyledP2BlockConditionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5vw;
  row-gap: 0.5vw;;
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

const StyledAttackP2Label = css`
  display: inline-block;
  background-color: rgba( 215, 29, 59,0.2);
  color: white;
  padding: 1vw;
  text-align: center;
  font-size: 1vw;
  width: 4vw;
  height: 3vw;
  border: none;
  border-radius: 1vw;
  margin-right: 0.5vw;
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
  font-family: 'M PLUS 1p', sans-serif;
  background-color: rgba( 0, 102, 153,0.7);
  color: white;
  border: none;
  border-radius: 2vw;
  text-align: center;
  width: 22.5vw;
  padding: 0.5vw;
  font-size: 1.5vw;
  margin-top: 1vw;
`

const StyledP2MovesSelect = styled.select`
  font-family: 'M PLUS 1p', sans-serif;
  background-color: rgba( 215, 29, 59,0.7);
  color: white;
  border: none;
  border-radius: 2vw;
  text-align: center;
  width: 22.5vw;
  padding: 0.5vw;
  font-size: 1.5vw;
  margin-top: 1vw;
`

const StyledP1AttackArrow = styled.label`
  display: flex;
  color: rgba(255, 255, 255, 0.9);
	font-size: 0.8vw;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  line-height: 2vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background:rgba(0, 0, 0, 0.6);
  padding: 1vw;
  height: 50%;
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
  @media (max-width: 900px){
    display: none;
  }
`

const StyledP2AttackArrow = styled.label`
  display: flex;
  color: rgba(255, 255, 255, 0.9);
	font-size: 0.8vw;
  font-weight: bold;
  letter-spacing: 0.1vw;
	pointer-events: none;
  line-height: 2vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50%;
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
  @media (max-width: 900px){
    display: none;
  }
`


type Props = {
  reverseAttacker:boolean
  ConditionHandler:{
    p1ConditionHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
    p2ConditionHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  }
  MoveKindsHandler:{
    p1MoveKindsHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
    p2MoveKindsHandler:(e:React.ChangeEvent<HTMLInputElement>) => void
  }
  CharacterMoves:{
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
  }
  MoveKinds:{
    p1MoveKinds:string[]
    p2MoveKinds:string[]
  }
  MoveHandler:{
    p1MoveHandler:(e:React.ChangeEvent<HTMLSelectElement>) => void
    p2MoveHandler:(e:React.ChangeEvent<HTMLSelectElement>) => void
  }

}


export function NarrowDownConditions ({reverseAttacker , ConditionHandler , MoveKindsHandler , CharacterMoves , MoveKinds , MoveHandler}:Props) {
  const [selectedRadio , setSelectedRadio ] = useState("")
  const selectRadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => setSelectedRadio(e.target.value)
  const p1RadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    ConditionHandler.p1ConditionHandler(e);
    selectRadioHandler(e);
  }
  const p2RadioHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    ConditionHandler.p2ConditionHandler(e);
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
        <StyledP2AttackConditionWrapper>
          <div>
            <StyledInput  type='checkbox'
                            value='通常技'
                            id='normal'
                            onChange={MoveKindsHandler.p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p2MoveKinds.includes("通常技")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='normal'>
                通常
              </label>
            <StyledInput  type='checkbox'
                            value='特殊技'
                            id='unique'
                            onChange={MoveKindsHandler.p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p2MoveKinds.includes("特殊技")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='unique'>
                特殊
              </label>
            <StyledInput  type='checkbox'
                            value='必殺技'
                            id='special'
                            onChange={MoveKindsHandler.p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p2MoveKinds.includes("必殺技")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='special'>
                必殺
              </label>
            <StyledInput  type='checkbox'
                            value='スーパーアーツ'
                            id='sa'
                            onChange={MoveKindsHandler.p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p2MoveKinds.includes("スーパーアーツ")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='sa'>
                SA
              </label>
            <StyledInput  type='checkbox'
                            value='投げ'
                            id='throw'
                            onChange={MoveKindsHandler.p2MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p2MoveKinds.includes("投げ")? StyledCheckedAttackP2Label:StyledAttackP2Label} htmlFor='throw'>
                投げ
              </label>
          </div>
          <StyledP2MovesSelect defaultValue={""} onChange={MoveHandler.p2MoveHandler}>
            <option value="">Pick 2P Move</option>
            {CharacterMoves.pickedP2Moves?.filter(pickedP2Move => MoveKinds.p2MoveKinds.includes(pickedP2Move.type))
            .map(pickedP2Move => (<>
              <option value={pickedP2Move.movesName} >{pickedP2Move.movesName}</option>
              </>)
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
                            onChange={MoveKindsHandler.p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p1MoveKinds.includes("通常技")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='normal'>
                通常
              </label>
            <StyledInput  type='checkbox'
                            value='特殊技'
                            id='unique'
                            onChange={MoveKindsHandler.p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p1MoveKinds.includes("特殊技")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='unique'>
                特殊
              </label>
            <StyledInput  type='checkbox'
                            value='必殺技'
                            id='special'
                            onChange={MoveKindsHandler.p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p1MoveKinds.includes("必殺技")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='special'>
                必殺
              </label>
            <StyledInput  type='checkbox'
                            value='スーパーアーツ'
                            id='sa'
                            onChange={MoveKindsHandler.p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p1MoveKinds.includes("スーパーアーツ")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='sa'>
                SA
              </label>
            <StyledInput  type='checkbox'
                            value='投げ'
                            id='throw'
                            onChange={MoveKindsHandler.p1MoveKindsHandler}
                            defaultChecked
            />
              <label css={MoveKinds.p1MoveKinds.includes("投げ")? StyledCheckedAttackP1Label:StyledAttackP1Label} htmlFor='throw'>
                投げ
              </label>
          </div>
          <StyledP1MovesSelect defaultValue={""} onChange={MoveHandler.p1MoveHandler}>
            <option value="">技の選択</option>
            {CharacterMoves.pickedP1Moves?.filter(pickedP1Move => MoveKinds.p1MoveKinds.includes(pickedP1Move.type))
            .map(pickedP1Move =>(<>
              <option value={pickedP1Move.movesName}>{pickedP1Move.movesName}</option>
              </>)
              )}
          </StyledP1MovesSelect>
        </StyledP1AttackConditionWrapper>
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
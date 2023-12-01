/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { useState } from 'react'
import { characterDataMap } from '../Components/CharacterData/CharacterDataMap'
import { VSImageWrapper } from '../Components/FramesVS/VSImageWrapper'
import { ChooseCondition } from '../Components/FramesVS/ChooseCondition'
import { NarrowDownConditions } from '../Components/FramesVS/NarrowDownCondition'
import { P1AttackingResult } from '../Components/FramesVS/P1AttackingResult'
import { P2AttackingResult } from '../Components/FramesVS/P2AttackingResult'
import FramesVSContext from '../Context/AppContexts'
import FramesVSTop from '../Components/FramesVS/2.jpg'


const StyledFramesVS = styled.div`
  background: url(${FramesVSTop});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-family: 'PT Sans', sans-serif;
  &::after{
    display: block;
    content: "";
    height: 1vw;
    width: 0;
  }
`

const StyledViewResult = styled.h1`
  background:rgba(0, 0, 0, 0.6);
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 2vw;
  text-align: center;
  letter-spacing: 0.3em;
  margin-top: 1vw;
  padding: 0.3vw 0.3vw;
  border-top: 1px solid #fffb0092;
  border-bottom: 1px solid #fffb0092;
  cursor: pointer;
`

export default function FramesVS() {
  const [open, setOpen] = useState(false)
  const openHandler = (e: React.MouseEvent<HTMLInputElement>) => setOpen(!open)
  const [p1Character, setP1Character] = useState("Ryu")
  const p1CharacterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setP1Character(e.target.value)
  const [p2Character, setP2Character] = useState("Ryu")
  const p2CharacterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setP2Character(e.target.value)
  const [reverseAttacker, setReverseAttacker] = useState(false)
  const reverseAttackerHandler = () => setReverseAttacker(!reverseAttacker)
  const [p1Condition, setP1Condition] = useState("")
  const p1ConditionHandler = (e: React.ChangeEvent<HTMLInputElement>) => setP1Condition(e.target.value)
  const [p2Condition, setP2Condition] = useState("")
  const p2ConditionHandler = (e: React.ChangeEvent<HTMLInputElement>) => setP2Condition(e.target.value)
  const [p1MoveKinds, setP1MoveKinds] = useState(["通常技", "特殊技", "必殺技", "スーパーアーツ", "投げ"])
  const p1MoveKindsHandler = (e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setP1MoveKinds([...p1MoveKinds, e.target.value]) : setP1MoveKinds(p1MoveKinds.filter(p1MoveKind => p1MoveKind.match(e.target.value) === null))
  const [p2MoveKinds, setP2MoveKinds] = useState(["通常技", "特殊技", "必殺技", "スーパーアーツ", "投げ"])
  const p2MoveKindsHandler = (e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setP2MoveKinds([...p2MoveKinds, e.target.value]) : setP2MoveKinds(p2MoveKinds.filter(p2MoveKind => p2MoveKind.match(e.target.value) === null))
  const [p1Move, setP1Move] = useState("")
  const p1MoveHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setP1Move(e.target.value)
  const [p2Move, setP2Move] = useState("")
  const p2MoveHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setP2Move(e.target.value)

  const selectedP1CharacterData = characterDataMap[p1Character.toLowerCase()]
  const selectedP2CharacterData = characterDataMap[p2Character.toLocaleLowerCase()]

  const pickedP1Details = selectedP1CharacterData.details
  const pickedP1Moves = selectedP1CharacterData.moves

  const pickedP2Details = selectedP2CharacterData.details
  const pickedP2Moves = selectedP2CharacterData.moves

  const CharacterHandler = {
    p1CharacterHandler,
    p2CharacterHandler,
  }

  const CharacterDetails = {
    pickedP1Details,
    pickedP2Details,
  }

  const CharacterMoves = {
    pickedP1Moves,
    pickedP2Moves,
  }

  const ConditionHandler = {
    p1ConditionHandler,
    p2ConditionHandler,
  }

  const MoveKindsHandler = {
    p1MoveKindsHandler,
    p2MoveKindsHandler
  }

  const MoveKinds = {
    p1MoveKinds,
    p2MoveKinds,
  }

  const MoveHandler = {
    p1MoveHandler,
    p2MoveHandler,
  }

  return (<>
    <FramesVSContext.Provider value={{ p1Character, p2Character, p1Condition, p2Condition, p1Move, p2Move, pickedP1Moves, pickedP2Moves }}>
      <StyledFramesVS>
        {pickedP1Details && pickedP2Details &&
          <VSImageWrapper CharacterDetails={CharacterDetails} />}
        {pickedP1Moves && pickedP2Moves &&
          <ChooseCondition CharacterHandler={CharacterHandler}
            reverseAttacker={reverseAttacker}
            reverseAttackerHandler={reverseAttackerHandler} />}
        <NarrowDownConditions reverseAttacker={reverseAttacker}
          ConditionHandler={ConditionHandler}
          MoveKindsHandler={MoveKindsHandler}
          CharacterMoves={CharacterMoves}
          MoveKinds={MoveKinds}
          MoveHandler={MoveHandler} />
        <StyledViewResult onClick={openHandler}>VIEW RESULT!</StyledViewResult>

        {open && !reverseAttacker &&
          <>
            <P1AttackingResult p1Move={p1Move}
              pickedP1Moves={pickedP1Moves}
              p2Condition={p2Condition} />
          </>}
        {open && reverseAttacker &&
          <>
            <P2AttackingResult p1Condition={p1Condition}
              p2Move={p2Move}
              pickedP2Moves={pickedP2Moves} />
          </>}
      </StyledFramesVS>
    </FramesVSContext.Provider>
  </>)
}
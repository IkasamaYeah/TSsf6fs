/** @jsxImportSource @emotion/react */

import { rashidDetails , rashidMoves } from '../Components/CharacterData/Rashid/RashidData'
import { cammyDetails , cammyMoves } from '../Components/CharacterData/Cammy/CammyData'
import { lilyDetails , lilyMoves } from '../Components/CharacterData/Lily/LilyData'
import { zangiefDetails , zangiefMoves } from '../Components/CharacterData/Zangief/ZangiefData'
import { jpDetails , jpMoves } from '../Components/CharacterData/JP/JPData'
import { marisaDetails , marisaMoves } from '../Components/CharacterData/Marisa/MarisaData'
import { manonDetails , manonMoves } from '../Components/CharacterData/Manon/ManonData'
import { deejayDetails , deejayMoves } from '../Components/CharacterData/DeeJay/DeeJayData'
import { ehondaDetails , ehondaMoves } from '../Components/CharacterData/E.Honda/E.HondaData'
import { dhalsimDetails , dhalsimMoves } from '../Components/CharacterData/Dhalsim/DhalsimData'
import { blankaDetails , blankaMoves } from '../Components/CharacterData/Blanka/BlankaData'
import { kenDetails, kenMoves } from '../Components/CharacterData/Ken/KenData'
import { juriDetails, juriMoves } from '../Components/CharacterData/Juri/JuriData'
import { kimberlyDetails , kimberlyMoves } from '../Components/CharacterData/Kimberly/KimberlyData'
import { guileDetails , guileMoves } from '../Components/CharacterData/Guile/GuileData'
import { chunliDetails , chunliMoves } from '../Components/CharacterData/Chun-Li/ChunLiData'
import { jamieDetails , jamieMoves } from '../Components/CharacterData/Jamie/JamieData'
import { lukeDetails , lukeMoves } from '../Components/CharacterData/Luke/LukeData'
import { ryuDetails , ryuMoves } from '../Components/CharacterData/Ryu/RyuData'
import styled from '@emotion/styled'
import { useState } from 'react'
import { VSImageWrapper } from '../Components/FramesVS/VSImageWrapper'
import { ChooseCondition } from '../Components/FramesVS/ChooseCondition'
import { NarrowDownConditions } from '../Components/FramesVS/NarrowDownCondition'
import { P1AttackingResult } from '../Components/FramesVS/P1AttackingResult'
import { P2AttackingResult } from '../Components/FramesVS/P2AttackingResult'


const StyledFramesVS = styled.div`
  background: #00000f;
  color: white;
`

const StyledViewResult = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2vw;
  text-align: center;
  letter-spacing: 0.3em;
  margin-top: 1vw;
  padding: 0.3vw 0.3vw;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  cursor: pointer;
`

export default function FramesVS(){
  const [ open , setOpen ] = useState(false)
  const openHandler = (e:React.MouseEvent<HTMLInputElement>) => setOpen(!open)
  const [p1Character ,setP1Character] = useState("Ryu")
  const p1CharacterHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP1Character(e.target.value)
  const [p2Character , setP2Character ] = useState("Ryu")
  const p2CharacterHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP2Character(e.target.value)
  const [reverseAttacker , setReverseAttacker] = useState(false)
  const toggleReverse = () => setReverseAttacker(!reverseAttacker)
  const [ p1Condition , setP1Condition] = useState("block")
  const p1ConditionHandler = (e:React.ChangeEvent<HTMLInputElement>) => setP1Condition(e.target.value)
  const [ p2Condition , setP2Condition] = useState("block")
  const p2ConditionHandler = (e:React.ChangeEvent<HTMLInputElement>) => setP2Condition(e.target.value)
  const [ p1MoveKinds , setP1MoveKinds ] = useState(["通常技","特殊技","必殺技","スーパーアーツ","投げ"])
  const p1MoveKindsHandler = (e:React.ChangeEvent<HTMLInputElement>) => e.target.checked? setP1MoveKinds([...p1MoveKinds,e.target.value]) : setP1MoveKinds(p1MoveKinds.filter(p1MoveKind => p1MoveKind.match(e.target.value) === null))
  const [ p2MoveKinds , setP2MoveKinds ] = useState(["通常技","特殊技","必殺技","スーパーアーツ","投げ"])
  const p2MoveKindsHandler = (e:React.ChangeEvent<HTMLInputElement>) => e.target.checked? setP2MoveKinds([...p2MoveKinds , e.target.value]) : setP2MoveKinds(p2MoveKinds.filter(p2MoveKind => p2MoveKind.match(e.target.value) === null))
  const [p1Move , setP1Move ] = useState("")
  const p1MoveHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP1Move(e.target.value)
  const [p2Move , setP2Move ] = useState("")
  const p2MoveHandler = (e:React.ChangeEvent<HTMLSelectElement>) => setP2Move(e.target.value)
  
  type CharacterData = {
    details:{
      name:string;
      strongpoints:string[];
      weakpoints:string[];
      topImage:string;
      p1Image:string;
      p2Image:string;
    }
    moves:{
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

  const characterDataMap:Record<string , CharacterData> = {
    juri: { details: juriDetails, moves: juriMoves },
    ken: { details: kenDetails, moves: kenMoves },
    cammy: { details: cammyDetails, moves: cammyMoves },
    jp: { details: jpDetails, moves: jpMoves },
    zangief: { details: zangiefDetails, moves: zangiefMoves },
    lily: { details: lilyDetails, moves: lilyMoves },
    manon: { details: manonDetails, moves: manonMoves },
    marisa: { details: marisaDetails, moves: marisaMoves },
    deejay: { details: deejayDetails, moves: deejayMoves },
    honda: { details: ehondaDetails, moves: ehondaMoves },
    dhalsim: { details: dhalsimDetails, moves: dhalsimMoves },
    blanka: { details: blankaDetails, moves: blankaMoves },
    kimberly: { details: kimberlyDetails, moves: kimberlyMoves },
    guile: { details: guileDetails, moves: guileMoves },
    chunli: { details: chunliDetails, moves: chunliMoves },
    jamie: { details: jamieDetails, moves: jamieMoves },
    luke: { details: lukeDetails, moves: lukeMoves },
    ryu: { details: ryuDetails, moves: ryuMoves },
    rashid: { details: rashidDetails, moves: rashidMoves },
  }

  const selectedP1CharacterData = characterDataMap[p1Character.toLowerCase()]
  const selectedP2CharacterData = characterDataMap[p2Character.toLocaleLowerCase()]

  const pickedP1Details = selectedP1CharacterData.details
  const pickedP1Moves = selectedP1CharacterData.moves

  const pickedP2Details = selectedP2CharacterData.details
  const pickedP2Moves = selectedP2CharacterData.moves

  return(<>
    <StyledFramesVS>
      {pickedP1Details&&pickedP2Details&&
      <VSImageWrapper pickedP1Details={pickedP1Details}
                      pickedP2Details={pickedP2Details}/>}
      {p1CharacterHandler&&p2CharacterHandler&&pickedP1Moves&&pickedP2Moves&&
      <ChooseCondition  p1CharacterHandler={p1CharacterHandler}
                        p2CharacterHandler={p2CharacterHandler}
                        reverseAttacker={reverseAttacker}
                        toggleReverse={toggleReverse}/>}
      <NarrowDownConditions reverseAttacker={reverseAttacker}
                            p1ConditionHandler={p1ConditionHandler}
                            p2ConditionHandler={p2ConditionHandler}
                            p1MoveKindsHandler={p1MoveKindsHandler}
                            p2MoveKindsHandler={p2MoveKindsHandler}
                            pickedP1Moves={pickedP1Moves}
                            pickedP2Moves={pickedP2Moves}
                            p1MoveKinds={p1MoveKinds}
                            p2MoveKinds={p2MoveKinds}
                            p1MoveHandler={p1MoveHandler}
                            p2MoveHandler={p2MoveHandler}/>
      <StyledViewResult onClick={openHandler}>VIEW RESULT!</StyledViewResult>
      {open && !reverseAttacker&&
      <>
        <P1AttackingResult  p1Character={p1Character}
                            p2Character={p2Character}
                            p1Move={p1Move}
                            pickedP1Moves={pickedP1Moves}
                            p2Condition={p2Condition}/>
      </>}
      {open && reverseAttacker &&
      <>
        <P2AttackingResult  p1Character={p1Character}
                            p2Character={p2Character}
                            p1Condition={p1Condition}
                            p2Move={p2Move}
                            pickedP2Moves={pickedP2Moves}/>
      </>}
    </StyledFramesVS>
  </>)
}
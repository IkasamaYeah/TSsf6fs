/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css } from "@emotion/react"

type Props = {
  p1Character:string
  p2Character:string
  p1Condition:string
  p2Move:string
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

const StyledP1BlockResult = styled.div`
`

const StyledP1HitResult = styled.div`
`

const StyledP1CHitResult = styled.div`
`

const StyledP1PCHitResult = styled.div`
`



export function P2AttackingResult ({ p1Character , p2Character , p1Condition , p2Move , pickedP2Moves}:Props) {

  const pickedP2MoveData = pickedP2Moves.find(pickedP2Move => pickedP2Move.movesName === p2Move)

  console.log(pickedP2MoveData)

  if (p1Condition === "block"){
    let resultP1Block;
    if (pickedP2MoveData && typeof pickedP2MoveData.block === "string"){
      resultP1Block = <h1>ヒットした状況等によるため計算不可能</h1>
    }else if (pickedP2MoveData && pickedP2MoveData.block >= 0){
      resultP1Block = <h1>{p2Character} GOT {pickedP2MoveData.block} FRAMES</h1>
    } else if (pickedP2MoveData && pickedP2MoveData.block < 0){
      resultP1Block = <h1>{p1Character} GOT {pickedP2MoveData.block * -1} FRAMES</h1>
    } else {
      resultP1Block = <h1>Oops!Anexcepted error has occured.</h1>
    }
    return (<>
      <StyledP1BlockResult>
          <h1>
            {resultP1Block}
          </h1>
      </StyledP1BlockResult>
    </>)
  } else if (p1Condition === "hit") {
    let resultP1Hit;
    if ( pickedP2MoveData && pickedP2MoveData.hit === "Down"){
      resultP1Hit = <h1>{p1Character} GOT DOWNED</h1>
    } else if (pickedP2MoveData && typeof pickedP2MoveData.hit === "string") {
      resultP1Hit = <h1>ヒットした状況等によるため計算不可能</h1>
    }else if (pickedP2MoveData && pickedP2MoveData.hit >= 0){
      resultP1Hit = <h1>{p2Character} GOT {pickedP2MoveData.hit} FRAMES</h1>
    } else if (pickedP2MoveData && pickedP2MoveData.hit < 0){
      resultP1Hit = <h1>{p1Character} GOT {pickedP2MoveData.hit * -1} FRAMES</h1>
    } else {
      resultP1Hit = <h1>Oops!Anexcepted error has occured.</h1>
    }
    return (<>
      <StyledP1HitResult>
        <h1>{resultP1Hit}</h1>
      </StyledP1HitResult>
    </>)
  } else if (p1Condition === "chit") {
    let resultP1CHit;
    if ( pickedP2MoveData && pickedP2MoveData.hit === "Down"){
      resultP1CHit = <h1>{p2Character} GOT DOWNED</h1>
    } else if (pickedP2MoveData && typeof pickedP2MoveData.hit === "string") {
      resultP1CHit = <h1>ヒットした状況等によるため計算不可能</h1>
    }else if (pickedP2MoveData && (pickedP2MoveData.hit + 2) >= 0){
      resultP1CHit = <h1>{p2Character} GOT {pickedP2MoveData.hit + 2} FRAMES</h1>
    } else if (pickedP2MoveData && (pickedP2MoveData.hit + 2) < 0){
      resultP1CHit = <h1>{p1Character} GOT {(pickedP2MoveData.hit + 2) * -1} FRAMES</h1>
    } else {
      resultP1CHit = <h1>Oops!Anexcepted error has occured.</h1>
    }
    return (<>
      <StyledP1CHitResult>
        <h1>{resultP1CHit}</h1>
      </StyledP1CHitResult>
      </>)
  } else if (p1Condition === "pchit") {
    let resultP1PCHit;
    if ( pickedP2MoveData && pickedP2MoveData.hit === "Down"){
      resultP1PCHit = <h1>{p2Character} GOT DOWNED</h1>
    } else if (pickedP2MoveData && typeof pickedP2MoveData.hit === "string") {
      resultP1PCHit = <h1>ヒットした状況等によるため計算不可能</h1>
    }else if (pickedP2MoveData && (pickedP2MoveData.hit + 4) >= 0){
      resultP1PCHit = <h1>{p2Character} GOT {pickedP2MoveData.hit + 4} FRAMES</h1>
    } else if (pickedP2MoveData && (pickedP2MoveData.hit + 4) < 0){
      resultP1PCHit = <h1>{p1Character} GOT {(pickedP2MoveData.hit + 4) * -1} FRAMES</h1>
    } else {
      resultP1PCHit = <h1>Oops!Anexcepted error has occured.</h1>
    }
    return (<>
      <StyledP1PCHitResult>
        <h1>{resultP1PCHit}</h1>
      </StyledP1PCHitResult>
      </>)
  } else {
    return (<>
      <h1>Oops!Anexcepted error has occured.</h1>
      <p>Please settle and check all conditions.</p>
    </>)
  }
}
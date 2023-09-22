import styled from "@emotion/styled"
import { css } from "@emotion/react"

type Props = {
  p1Character:string
  p2Character:string
  p1Move:string
  p2Condition:string
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
}

const StyledP2BlockResult = styled.div`
  text-align: center;
  margin-top: 2vw;
  font-family: "PT Sans",sans-serif;
`

const StyledP2HitResult = styled.div`
  text-align: center;
  margin-top: 2vw;
  font-family: "PT Sans",sans-serif;
`

const StyledP2CHitResult = styled.div`
  text-align: center;
  margin-top: 2vw;
  font-family: "PT Sans",sans-serif;
`

const StyledP2PCHitResult = styled.div`
  text-align: center;
  margin-top: 2vw;
  font-family: "PT Sans",sans-serif;
`

const StyledError = styled.div`
  text-align: center;
  margin-top: 2vw;
  font-family: "PT Sans",sans-serif;
`

const StyledH1 = styled.h1`
  font-size: 3vw;
  letter-spacing: 0.3vw;
`

const StyledP = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 1vw;
`

export function P1AttackingResult ({ p1Character , p2Character , p1Move , p2Condition , pickedP1Moves}:Props) {
  const pickedP1MoveData = pickedP1Moves.find(pickedP1Move => pickedP1Move.movesName === p1Move)

  if (p2Condition === "block") {
    let resultBlock;
    if (pickedP1MoveData && typeof pickedP1MoveData.block === "string"){
      resultBlock = <StyledH1>ヒットした状況等によるため計算不可能</StyledH1>
    }else if (pickedP1MoveData && pickedP1MoveData.block >= 0){
      resultBlock = <StyledH1>{p1Character} GOT {pickedP1MoveData.block} FRAMES</StyledH1>
    } else if (pickedP1MoveData && pickedP1MoveData.block < 0){
      resultBlock = <StyledH1>{p2Character} GOT {pickedP1MoveData.block * -1} FRAMES</StyledH1>
    } else {
      resultBlock = <StyledH1>Oops!Anexcepted error has occured.</StyledH1>
    }
    return (<>
      <StyledP2BlockResult>
          <StyledP>
            When {p1Character} attack with {p1Move}
          </StyledP>
          {resultBlock}
      </StyledP2BlockResult>
    </>
    )

  } else if (p2Condition === "hit") {
    let resultHit;
    if ( pickedP1MoveData && pickedP1MoveData.hit === "Down"){
      resultHit = <StyledH1>{p2Character} GOT DOWNED</StyledH1>
    } else if (pickedP1MoveData && typeof pickedP1MoveData.hit === "string") {
      resultHit = <StyledH1>ヒットした状況等によるため計算不可能</StyledH1>
    }else if (pickedP1MoveData && pickedP1MoveData.hit >= 0){
      resultHit = <StyledH1>{p1Character} GOT {pickedP1MoveData.hit} FRAMES</StyledH1>
    } else if (pickedP1MoveData && pickedP1MoveData.hit < 0){
      resultHit = <StyledH1>{p2Character} GOT {pickedP1MoveData.hit * -1} FRAMES</StyledH1>
    } else {
      resultHit = <StyledH1>Oops!Anexcepted error has occured.</StyledH1>
    }
    return (<>
      <StyledP2HitResult>
        <StyledP>
          When {p1Character} attack with {p1Move}
        </StyledP>
        {resultHit}
      </StyledP2HitResult>
    </>
    )

  } else if (p2Condition === "chit") {
    let resultCHit;
    if ( pickedP1MoveData && pickedP1MoveData.hit === "Down"){
      resultCHit = <StyledH1>{p2Character} GOT DOWNED</StyledH1>
    } else if (pickedP1MoveData && typeof pickedP1MoveData.hit === "string") {
      resultCHit = <StyledH1>ヒットした状況等によるため計算不可能</StyledH1>
    }else if (pickedP1MoveData && (pickedP1MoveData.hit + 2) >= 0){
      resultCHit = <StyledH1>{p1Character} GOT {pickedP1MoveData.hit + 2} FRAMES</StyledH1>
    } else if (pickedP1MoveData && (pickedP1MoveData.hit + 2) < 0){
      resultCHit = <StyledH1>{p2Character} GOT {(pickedP1MoveData.hit + 2) * -1} FRAMES</StyledH1>
    } else {
      resultCHit = <StyledH1>Oops!Anexcepted error has occured.</StyledH1>
    }
    return (<>
      <StyledP2CHitResult>
        <StyledP>
          When {p1Character} attack with {p1Move}
        </StyledP>
        {resultCHit}
      </StyledP2CHitResult>
    </>
    )

  }else if (p2Condition === "pchit") {
    let resultPCHit;
    if ( pickedP1MoveData && pickedP1MoveData.hit === "Down"){
      resultPCHit = <StyledH1>{p2Character} GOT DOWNED</StyledH1>
    } else if (pickedP1MoveData && typeof pickedP1MoveData.hit === "string") {
      resultPCHit = <StyledH1>ヒットした状況等によるため計算不可能</StyledH1>
    }else if (pickedP1MoveData && (pickedP1MoveData.hit + 4) >= 0){
      resultPCHit = <StyledH1>{p1Character} GOT {pickedP1MoveData.hit + 4} FRAMES</StyledH1>
    } else if (pickedP1MoveData && (pickedP1MoveData.hit + 4) < 0){
      resultPCHit = <StyledH1>{p2Character} GOT {(pickedP1MoveData.hit + 4) * -1} FRAMES</StyledH1>
    } else {
      resultPCHit = <StyledH1>Oops!Anexcepted error has occured.</StyledH1>
    }
    return (<>
      <StyledP2PCHitResult>
        <StyledP>
          When {p1Character} attack with {p1Move}
        </StyledP>
        {resultPCHit}
      </StyledP2PCHitResult>
    </>
    )

  } else {
    return (<>
      <StyledError>
        <StyledH1>Oops!Anexcepted error has occured</StyledH1>
        <StyledP>Please settle and check all conditions.</StyledP>
      </StyledError>
    </>
    )

  }
}
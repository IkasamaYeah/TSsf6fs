/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css } from "@emotion/react"

type Props = {
  p1Character:string
  p2Character:string
  p1Condition:string
  p2Move:string
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

const StyledP2AttackingResultWrapper = styled.div`
  text-align: center;
  padding-top: 1vw;
  font-family: "PT Sans",sans-serif;
`

const StyledH1 = styled.h1`
  font-size: 2vw;
  letter-spacing: 0.3vw;
  padding-bottom: 1vw;
`

const StyledP = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 1vw;
`

const StyledMovesKinds = styled.h2`
  margin-top: 2vw;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 1.8vw;
  text-align: start;
`

const StyledMovesName = styled.h3`
  border-right: 1px solid rgba( 255, 255, 255, 0.7);
  padding: 1vw;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  background: rgba( 0, 102, 153,0.7);
`

const StyledStartup = styled.span`
  padding: 1vw;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-right: 3vw;
  text-align: center;
  background: rgba( 59, 175, 117, 0.7);
`

const StyledMovesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 1vw;
  text-align: start;
  margin-top: 1vw;
`

const ResultCalculateWrapper = styled.div`
  margin-left: 25vw;
  margin-right: 25vw;
  font-size: 1vw;
  font-family: 'M PLUS 1p', sans-serif;
  padding-bottom: 2vw;
`

export function P2AttackingResult ({ p1Character , p2Character , p1Condition , p2Move , pickedP1Moves , pickedP2Moves}:Props) {

  const pickedP2MoveData = pickedP2Moves.find(pickedP2Move => pickedP2Move.movesName === p2Move)

  console.log(pickedP2MoveData)

  if (p2Move !== "" && p1Condition === "block"){
    let resultP1Block;
    let resultFrames;

    if (pickedP2MoveData && typeof pickedP2MoveData.block === "string"){
      resultP1Block = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP2MoveData && pickedP2MoveData.block >= 0){
      resultP1Block = `${p2Character} GOT ${pickedP2MoveData.block}`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= pickedP2MoveData.block && pickedP2Move.startup !== "")
    } else if (pickedP2MoveData && pickedP2MoveData.block < 0){
      resultP1Block = `${p1Character} GOT ${pickedP2MoveData.block * -1} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP2MoveData.block * -1 && pickedP1Move.startup !== "")
    } else {
      resultP1Block = undefined
      resultFrames =undefined
    }

    
    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")

    return (<>
      <StyledP2AttackingResultWrapper>
        {pickedP2MoveData?.block > 0 &&
        <StyledP>
          {p2Character}の{p2Move}がガードされたときのフレーム結果は+{pickedP2MoveData?.block}
        </StyledP>
        }
        {pickedP2MoveData?.block < 0 &&
        <StyledP>
          {p2Character}の{p2Move}がガードされたときのフレーム結果は{pickedP2MoveData?.block}
        </StyledP>
        }
        {pickedP2MoveData?.block === 0 &&
        <StyledP>
          {p2Character}の{p2Move}がガードされたときのフレーム結果は±0
        </StyledP>
        }
        <StyledH1>
          {resultP1Block}
        </StyledH1>
        {resultNormal && resultNormal.length > 0 &&
          (<>
          <ResultCalculateWrapper>
            <StyledMovesKinds>通常技</StyledMovesKinds>
            <StyledMovesWrapper>
              {resultNormal.map(resultNormalMove=>
                (<>
                  <StyledMovesName>{resultNormalMove.movesName}</StyledMovesName><StyledStartup>発生{resultNormalMove.startup}F</StyledStartup>
                </>)
              )}
            </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}

          {resultUnique && resultUnique.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>特殊技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultUnique.map(resultUniqueMove=>
                (<>  
                  <StyledMovesName>{resultUniqueMove.movesName}</StyledMovesName><StyledStartup>発生{resultUniqueMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSpecial && resultSpecial.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>必殺技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSpecial.map(resultSpecialMoves=>
                (<>                
                  <StyledMovesName>{resultSpecialMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSpecialMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSA && resultSA.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>スーパーアーツ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSA.map(resultSAMoves=>
                (<>
                  <StyledMovesName>{resultSAMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSAMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}

            {resultThrow && resultThrow.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>投げ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultThrow.map(resultThrowMove=>
                (<>
                  <StyledMovesName>{resultThrowMove.movesName}</StyledMovesName><StyledStartup>発生{resultThrowMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
      </StyledP2AttackingResultWrapper>
    </>)

  } else if (p2Move !== "" && p1Condition === "hit") {
    let resultP1GotHit;
    let resultFrames;

    if ( pickedP2MoveData && pickedP2MoveData.hit === "Down"){
      resultP1GotHit = `${p1Character} GOT DOWNED`
      resultFrames = undefined
    } else if (pickedP2MoveData && typeof pickedP2MoveData.hit === "string") {
      resultP1GotHit = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP2MoveData && pickedP2MoveData.hit >= 0){
      resultP1GotHit = `${p2Character} GOT ${pickedP2MoveData.hit} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= pickedP2MoveData.hit && pickedP2Move.startup !== "")
    } else if (pickedP2MoveData && pickedP2MoveData.hit < 0){
      resultP1GotHit = `${p1Character} GOT ${pickedP2MoveData.hit * -1} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP2MoveData.hit * -1 && pickedP1Move.startup !== "")
    } else {
      resultP1GotHit = undefined
      resultFrames = undefined
    }

    
    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")

    return (<>
      <StyledP2AttackingResultWrapper>
        {pickedP2MoveData?.hit > 0 &&
        <StyledP>
          {p2Character}の{p2Move}がヒットしたときのフレーム結果は+{pickedP2MoveData?.hit}
        </StyledP>
        }
        {pickedP2MoveData?.hit < 0 &&
        <StyledP>
          {p2Character}の{p2Move}がヒットしたときのフレーム結果は{pickedP2MoveData?.hit}
        </StyledP>
        }
        {pickedP2MoveData?.hit === 0 &&
        <StyledP>
          {p2Character}の{p2Move}がヒットしたときのフレーム結果は±0
        </StyledP>
        }
        <StyledH1>
          {resultP1GotHit}
        </StyledH1>
        {resultNormal && resultNormal.length > 0 &&
          (<>
          <ResultCalculateWrapper>
            <StyledMovesKinds>通常技</StyledMovesKinds>
            <StyledMovesWrapper>
              {resultNormal.map(resultNormalMove=>
                (<>
                  <StyledMovesName>{resultNormalMove.movesName}</StyledMovesName><StyledStartup>発生{resultNormalMove.startup}F</StyledStartup>
                </>)
              )}
            </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}

          {resultUnique && resultUnique.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>特殊技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultUnique.map(resultUniqueMove=>
                (<>  
                  <StyledMovesName>{resultUniqueMove.movesName}</StyledMovesName><StyledStartup>発生{resultUniqueMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSpecial && resultSpecial.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>必殺技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSpecial.map(resultSpecialMoves=>
                (<>                
                  <StyledMovesName>{resultSpecialMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSpecialMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSA && resultSA.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>スーパーアーツ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSA.map(resultSAMoves=>
                (<>
                  <StyledMovesName>{resultSAMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSAMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}

            {resultThrow && resultThrow.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>投げ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultThrow.map(resultThrowMove=>
                (<>
                  <StyledMovesName>{resultThrowMove.movesName}</StyledMovesName><StyledStartup>発生{resultThrowMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}
      </StyledP2AttackingResultWrapper>
    </>)

  } else if (p2Move !== "" && p1Condition === "chit") {
    let resultP1CHit;
    let resultFrames;

    if ( pickedP2MoveData && pickedP2MoveData.hit === "Down"){
      resultP1CHit = `${p2Character} GOT DOWNED`
      resultFrames = undefined
    } else if (pickedP2MoveData && typeof pickedP2MoveData.hit === "string") {
      resultP1CHit = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP2MoveData && (pickedP2MoveData.hit + 2) >= 0){
      resultP1CHit = `${p2Character} GOT ${pickedP2MoveData.hit + 2} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= pickedP2MoveData.hit + 2 && pickedP2Move.startup !== "")
    } else if (pickedP2MoveData && (pickedP2MoveData.hit + 2) < 0){
      resultP1CHit = `${p1Character} GOT ${(pickedP2MoveData.hit + 2) * -1} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= (pickedP2MoveData.hit +2) * -1 && pickedP1Move.startup !== "")
    } else {
      resultP1CHit = undefined
      resultFrames = undefined
    }
    
    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")

    return (<>
      <StyledP2AttackingResultWrapper>
        {pickedP2MoveData?.hit + 2 > 0 &&
        <StyledP>
          {p2Character}の{p2Move}がカウンターヒットしたときのフレーム結果は+{pickedP2MoveData?.hit + 2}
        </StyledP>
        }
        {pickedP2MoveData?.hit + 2 < 0 &&
        <StyledP>
          {p2Character}の{p2Move}がカウンターヒットしたときのフレーム結果は{pickedP2MoveData?.hit + 2}
        </StyledP>
        }
        {pickedP2MoveData?.hit + 2 === 0 &&
        <StyledP>
          {p2Character}の{p2Move}がカウンターヒットしたときのフレーム結果は±0
        </StyledP>
        }
        <StyledH1>
          {resultP1CHit}
        </StyledH1>
        {resultNormal && resultNormal.length > 0 &&
          (<>
          <ResultCalculateWrapper>
            <StyledMovesKinds>通常技</StyledMovesKinds>
            <StyledMovesWrapper>
              {resultNormal.map(resultNormalMove=>
                (<>
                  <StyledMovesName>{resultNormalMove.movesName}</StyledMovesName><StyledStartup>発生{resultNormalMove.startup}F</StyledStartup>
                </>)
              )}
            </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}

          {resultUnique && resultUnique.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>特殊技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultUnique.map(resultUniqueMove=>
                (<>  
                  <StyledMovesName>{resultUniqueMove.movesName}</StyledMovesName><StyledStartup>発生{resultUniqueMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSpecial && resultSpecial.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>必殺技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSpecial.map(resultSpecialMoves=>
                (<>                
                  <StyledMovesName>{resultSpecialMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSpecialMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSA && resultSA.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>スーパーアーツ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSA.map(resultSAMoves=>
                (<>
                  <StyledMovesName>{resultSAMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSAMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}

            {resultThrow && resultThrow.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>投げ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultThrow.map(resultThrowMove=>
                (<>
                  <StyledMovesName>{resultThrowMove.movesName}</StyledMovesName><StyledStartup>発生{resultThrowMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}
      </StyledP2AttackingResultWrapper>
      </>)

  } else if (p2Move !== "" && p1Condition === "pchit") {
    let resultP1GotPCHit;
    let resultFrames;

    if ( pickedP2MoveData && pickedP2MoveData.hit === "Down"){
      resultP1GotPCHit = `${p2Character} GOT DOWNED`
      resultFrames = undefined
    } else if (pickedP2MoveData && typeof pickedP2MoveData.hit === "string") {
      resultP1GotPCHit = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP2MoveData && (pickedP2MoveData.hit + 4) >= 0){
      resultP1GotPCHit = `${p2Character} GOT ${pickedP2MoveData.hit + 4} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= pickedP2MoveData.hit + 4 && pickedP2Move.startup !== "")
    } else if (pickedP2MoveData && (pickedP2MoveData.hit + 4) < 0){
      resultP1GotPCHit = `${p1Character} GOT ${(pickedP2MoveData.hit + 4) * -1} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= (pickedP2MoveData.hit + 4) * -1 && pickedP1Move.startup !== "")
    } else {
      resultP1GotPCHit = undefined
      resultFrames = undefined
    }
    
    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")

    return (<>
      <StyledP2AttackingResultWrapper>
        {pickedP2MoveData?.hit + 4 > 0 &&
        <StyledP>
          {p2Character}の{p2Move}がPCヒットしたときのフレーム結果は+{pickedP2MoveData?.hit + 4}
        </StyledP>
        }
        {pickedP2MoveData?.hit + 4 < 0 &&
        <StyledP>
          {p2Character}の{p2Move}がPCヒットしたときのフレーム結果は{pickedP2MoveData?.hit + 4}
        </StyledP>
        }
        {pickedP2MoveData?.hit + 4 === 0 &&
        <StyledP>
          {p2Character}の{p2Move}がPCヒットしたときのフレーム結果は±0
        </StyledP>
        }
        <StyledH1>
          {resultP1GotPCHit}
        </StyledH1>
        {resultNormal && resultNormal.length > 0 &&
          (<>
          <ResultCalculateWrapper>
            <StyledMovesKinds>通常技</StyledMovesKinds>
            <StyledMovesWrapper>
              {resultNormal.map(resultNormalMove=>
                (<>
                  <StyledMovesName>{resultNormalMove.movesName}</StyledMovesName><StyledStartup>発生{resultNormalMove.startup}F</StyledStartup>
                </>)
              )}
            </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}

          {resultUnique && resultUnique.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>特殊技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultUnique.map(resultUniqueMove=>
                (<>  
                  <StyledMovesName>{resultUniqueMove.movesName}</StyledMovesName><StyledStartup>発生{resultUniqueMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSpecial && resultSpecial.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>必殺技</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSpecial.map(resultSpecialMoves=>
                (<>                
                  <StyledMovesName>{resultSpecialMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSpecialMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}
            
            {resultSA && resultSA.length > 0 &&(<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>スーパーアーツ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultSA.map(resultSAMoves=>
                (<>
                  <StyledMovesName>{resultSAMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSAMoves.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
            </ResultCalculateWrapper>
            </>)}

            {resultThrow && resultThrow.length > 0 &&
            (<>
            <ResultCalculateWrapper>
              <StyledMovesKinds>投げ</StyledMovesKinds>
              <StyledMovesWrapper>
                {resultThrow.map(resultThrowMove=>
                (<>
                  <StyledMovesName>{resultThrowMove.movesName}</StyledMovesName><StyledStartup>発生{resultThrowMove.startup}F</StyledStartup>
                </>)
                )}
              </StyledMovesWrapper>
          </ResultCalculateWrapper>
          </>)}
      </StyledP2AttackingResultWrapper>
      </>)

  } else {
    return (<>
      <StyledP2AttackingResultWrapper>
        <StyledP>Oops! Anexcepted error has occured.</StyledP>
        <StyledH1>Please check and settle all conditions correctly.</StyledH1>
      </StyledP2AttackingResultWrapper>
    </>)
  }
}
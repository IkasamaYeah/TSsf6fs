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

const StyledP1AttackingResultWrapper = styled.div`
  text-align: center;
  padding-top: 1vw;
  font-family: "PT Sans",sans-serif;
`

const StyledH1 = styled.h1`
  font-size: 2vw;
  letter-spacing: 0.3vw;
`

const StyledP = styled.p`
  color: rgba(255,255,255,0.4);
  font-size: 1vw;
  padding-bottom: 0.5vw;
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
  padding-bottom: 2vw;
  font-size: 1vw;
  font-family: 'M PLUS 1p', sans-serif;
`




export function P1AttackingResult ({ p1Character , p2Character , p1Move , p2Condition , pickedP1Moves , pickedP2Moves }:Props) {
  const pickedP1MoveData = pickedP1Moves.find(pickedP1Move => pickedP1Move.movesName === p1Move)

  if (p1Move !== "" && p2Condition === "block") {
    let resultP2Block;
    let resultFrames;

    if (pickedP1MoveData && typeof pickedP1MoveData.block === "string"){
      resultP2Block = "ヒットした状況等によるため計算出来ません"
      resultFrames = undefined
    }else if (pickedP1MoveData && pickedP1MoveData.block >= 0){
      resultP2Block = `${p1Character} GOT ${pickedP1MoveData.block} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP1MoveData.block && pickedP1Move.startup !== "")
    } else if (pickedP1MoveData && pickedP1MoveData.block < 0){
      resultP2Block = `${p2Character} GOT ${pickedP1MoveData.block * -1} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= pickedP1MoveData.block * -1 && pickedP2Move.startup !== "")
    } else {
      resultP2Block = undefined
      resultFrames = undefined
    }

    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")


    return (<>
      <StyledP1AttackingResultWrapper>
          {pickedP1MoveData?.block > 0 &&
          <StyledP>
            {p1Character}の{p1Move}がガードされたときのフレーム結果は+{pickedP1MoveData?.block}
          </StyledP>
          }
          {pickedP1MoveData?.block < 0 &&
          <StyledP>
            {p1Character}の{p1Move}がガードされたときのフレーム結果は{pickedP1MoveData?.block}
          </StyledP>
          }
          {pickedP1MoveData?.block === 0 &&
          <StyledP>
            {p1Character}の{p1Move}がガードされたときのフレーム結果は±0
          </StyledP>
          }
          <StyledH1>
            {resultP2Block}
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
      </StyledP1AttackingResultWrapper>
    </>
    )

  } else if (p1Move !== ""&&p2Condition === "hit") {
    let resultP2GotHit;
    let resultFrames;
    
    if ( pickedP1MoveData && pickedP1MoveData.hit === "Down"){
      resultP2GotHit = `${p2Character} GOT DOWNED`
      resultFrames = undefined
    } else if (pickedP1MoveData && typeof pickedP1MoveData.hit === "string") {
      resultP2GotHit = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP1MoveData && pickedP1MoveData.hit >= 0){
      resultP2GotHit = `${p1Character} GOT ${pickedP1MoveData.hit} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP1MoveData.hit && pickedP1Move.startup !== "")
    } else if (pickedP1MoveData && pickedP1MoveData.hit < 0){
      resultP2GotHit = `${p2Character} GOT ${pickedP1MoveData.hit * -1} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= pickedP1MoveData.hit * -1 && pickedP2Move.startup !== "")
    } else {
      resultP2GotHit = ""
    }

    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")


    return (<>
      <StyledP1AttackingResultWrapper>
      {pickedP1MoveData?.hit > 0 &&
      <StyledP>
        {p1Character}の{p1Move}がヒットしたときのフレーム結果は+{pickedP1MoveData?.hit}
      </StyledP>
      }
      {pickedP1MoveData?.hit < 0 &&
      <StyledP>
        {p1Character}の{p1Move}がヒットしたときフレーム結果は{pickedP1MoveData?.hit}
      </StyledP>
      }
      {pickedP1MoveData?.hit === 0 &&
      <StyledP>
        {p1Character}の{p1Move}がヒットしたときのフレーム結果は±0
      </StyledP>
      }
        <StyledH1>
          {resultP2GotHit}
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
      </StyledP1AttackingResultWrapper>
    </>
    )

  } else if (p1Move !== ""&&p2Condition === "chit") {
    let resultP2GotCHit;
    let resultFrames;

    if ( pickedP1MoveData && pickedP1MoveData.hit === "Down"){
      resultP2GotCHit = `${p2Character} GOT DOWNED`
      resultFrames = undefined
    } else if (pickedP1MoveData && typeof pickedP1MoveData.hit === "string") {
      resultP2GotCHit = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP1MoveData && (pickedP1MoveData.hit + 2) >= 0){
      resultP2GotCHit = `${p1Character} GOT ${pickedP1MoveData.hit + 2} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP1MoveData.hit + 2 && pickedP1Move.startup !== "")
    } else if (pickedP1MoveData && (pickedP1MoveData.hit + 2) < 0){
      resultP2GotCHit = `${p2Character} GOT ${(pickedP1MoveData.hit + 2) * -1} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= (pickedP1MoveData.hit + 2) * -1 && pickedP2Move.startup !== "")
    } else {
      resultP2GotCHit = ""
    }

    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")

    return (<>
      <StyledP1AttackingResultWrapper>
        {pickedP1MoveData?.hit + 2 > 0 &&
        <StyledP>
          {p1Character}の{p1Move}がカウンターヒットしたときのフレーム結果は+{pickedP1MoveData?.hit + 2}
        </StyledP>
        }
        {pickedP1MoveData?.hit + 2 < 0 &&
        <StyledP>
          {p1Character}の{p1Move}がカウンターヒットしたときフレーム結果は{pickedP1MoveData?.hit + 2}
        </StyledP>
        }
        {pickedP1MoveData?.hit + 2 === 0 &&
        <StyledP>
          {p1Character}の{p1Move}がカウンターヒットしたときのフレーム結果は±0
        </StyledP>
        }
        <StyledH1>
          {resultP2GotCHit}
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
      </StyledP1AttackingResultWrapper>
    </>
    )

  }else if (p1Move !== ""&&p2Condition === "pchit") {
    let resultP2GotPCHit;
    let resultFrames;

    if ( pickedP1MoveData && pickedP1MoveData.hit === "Down"){
      resultP2GotPCHit = `${p2Character} GOT DOWNED`
      resultFrames = undefined
    } else if (pickedP1MoveData && typeof pickedP1MoveData.hit === "string") {
      resultP2GotPCHit = "ヒットした状況等によるため計算不可能"
      resultFrames = undefined
    }else if (pickedP1MoveData && (pickedP1MoveData.hit + 4) >= 0){
      resultP2GotPCHit = `${p1Character} GOT ${pickedP1MoveData.hit + 4} FRAMES`
      resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP1MoveData.hit + 4 && pickedP1Move.startup !== "")
    } else if (pickedP1MoveData && (pickedP1MoveData.hit + 4) < 0){
      resultP2GotPCHit = `${p2Character} GOT ${(pickedP1MoveData.hit + 4) * -1} FRAMES`
      resultFrames = pickedP2Moves.filter(pickedP2Move => pickedP2Move.startup <= (pickedP1MoveData.hit + 4) * -1 && pickedP2Move.startup !== "")
    } else {
      resultP2GotPCHit = ""
    }

    let resultNormal = resultFrames?.filter(resultFrame => resultFrame.type === "通常技")
    let resultUnique = resultFrames?.filter(resultFrame => resultFrame.type === "特殊技")
    let resultSpecial = resultFrames?.filter(resultFrame => resultFrame.type === "必殺技")
    let resultSA = resultFrames?.filter(resultFrame => resultFrame.type === "スーパーアーツ")
    let resultThrow = resultFrames?.filter(resultFrame => resultFrame.type === "投げ")

    return (<>
      <StyledP1AttackingResultWrapper>
        {pickedP1MoveData?.hit + 4 > 0 &&
        <StyledP>
          {p1Character}の{p1Move}がPCヒットしたときのフレーム結果は+{pickedP1MoveData?.hit + 4}
        </StyledP>
        }
        {pickedP1MoveData?.hit + 4 < 0 &&
        <StyledP>
          {p1Character}の{p1Move}がPCヒットしたときフレーム結果は{pickedP1MoveData?.hit + 4}
        </StyledP>
        }
        {pickedP1MoveData?.hit + 4 === 0 &&
        <StyledP>
          {p1Character}の{p1Move}がPCヒットしたときのフレーム結果は±0
        </StyledP>
        }
        <StyledH1>
          {resultP2GotPCHit}
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
      </StyledP1AttackingResultWrapper>
    </>
    )

  } else {
    return (<>
      <StyledP1AttackingResultWrapper>
        <StyledP>Oops! Anexcepted error has occured.</StyledP>
        <StyledH1>Please check and settle all conditions correctly.</StyledH1>
      </StyledP1AttackingResultWrapper>
    </>
    )
  }
}
import { useContext } from "react";
import FramesVSContext from "../../Context/AppContexts";
import { P1AttackingResultProps } from "../../Types/FramesVSType";
import { StyledResultWrapper, StyledP, StyledH1, StyledMovesKinds, StyledMovesWrapper, StyledMovesName, StyledStartup, ResultCalculateWrapper } from "../Styled/StyledFramesVS";

type Props = {
  pickedP1MoveData: {
    [key: string]: string | string[] | number | number[],
    type: string
    commands: string[]
    movesName: string
    movesCondition: string
    startup: any
    active: any
    recovery: any
    hit: any
    block: any
    cancel: any
    tips: string[]
    hitboxImage: string
  }
}

export function P1AttackBlockedResult({ pickedP1MoveData }: Props) {
  const { p1Character, p2Character, p1Move, pickedP1Moves, pickedP2Moves }: P1AttackingResultProps = useContext(FramesVSContext)
  let resultP2Block;
  let resultFrames;

  if (pickedP1MoveData && typeof pickedP1MoveData.block === "string") {
    resultP2Block = "ヒットした状況等によるため計算出来ません"
    resultFrames = undefined
  } else if (pickedP1MoveData && pickedP1MoveData.block >= 0) {
    resultP2Block = `${p1Character} GOT ${pickedP1MoveData.block} FRAMES`
    resultFrames = pickedP1Moves.filter(pickedP1Move => pickedP1Move.startup <= pickedP1MoveData.block && pickedP1Move.startup !== "")
  } else if (pickedP1MoveData && pickedP1MoveData.block < 0) {
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
    <StyledResultWrapper>
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
              {resultNormal.map(resultNormalMove =>
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
              {resultUnique.map(resultUniqueMove =>
              (<>
                <StyledMovesName>{resultUniqueMove.movesName}</StyledMovesName><StyledStartup>発生{resultUniqueMove.startup}F</StyledStartup>
              </>)
              )}
            </StyledMovesWrapper>
          </ResultCalculateWrapper>
        </>)}

      {resultSpecial && resultSpecial.length > 0 && (<>
        <ResultCalculateWrapper>
          <StyledMovesKinds>必殺技</StyledMovesKinds>
          <StyledMovesWrapper>
            {resultSpecial.map(resultSpecialMoves =>
            (<>
              <StyledMovesName>{resultSpecialMoves.movesName}</StyledMovesName><StyledStartup>発生{resultSpecialMoves.startup}F</StyledStartup>
            </>)
            )}
          </StyledMovesWrapper>
        </ResultCalculateWrapper>
      </>)}

      {resultSA && resultSA.length > 0 && (<>
        <ResultCalculateWrapper>
          <StyledMovesKinds>スーパーアーツ</StyledMovesKinds>
          <StyledMovesWrapper>
            {resultSA.map(resultSAMoves =>
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
              {resultThrow.map(resultThrowMove =>
              (<>
                <StyledMovesName>{resultThrowMove.movesName}</StyledMovesName><StyledStartup>発生{resultThrowMove.startup}F</StyledStartup>
              </>)
              )}
            </StyledMovesWrapper>
          </ResultCalculateWrapper>
        </>)}
    </StyledResultWrapper>
  </>
  )
}
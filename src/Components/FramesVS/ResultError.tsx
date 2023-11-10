import {StyledWholeResultWrapper , StyledResultWrapper, StyledP, StyledH1 } from "../Styled/StyledFramesVS"

export function ResultError() {
  return (<>
  <StyledWholeResultWrapper>
    <StyledResultWrapper>
      <StyledP>エラーが発生しました。</StyledP>
      <StyledH1>全ての項目が設定されているか確認してください。</StyledH1>
    </StyledResultWrapper>
  </StyledWholeResultWrapper>
  </>)
}
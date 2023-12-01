import React from "react"
import styled from "@emotion/styled"

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

const StyledOpenListWrapper = styled.div`
  position: relative;
  background:linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.3));
  border-bottom: 1px solid #fffb0092;
  padding: 10px;
  &:hover{
    background-color:rgba(55,55,55,0.5);
    cursor: pointer;
  }
`

const StyledOpenListButton = styled.h3`
  font-family:  'Anton', sans-serif;
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.4vw;
`

export function OpenList ({ onClick }:Props) {
  return (<>
    <StyledOpenListWrapper>
      <StyledOpenListButton onClick={onClick}>COMMANDS LIST</StyledOpenListButton>
    </StyledOpenListWrapper>
  </>)
}
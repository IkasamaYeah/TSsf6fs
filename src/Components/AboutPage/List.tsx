import { useState } from "react"
import styled from "@emotion/styled"

type Props = {
  data:{
    [key:string]: any,
    type:string
    commands:string[]
    movesName:string
    movesCondition:string
    startup:string
    active:string|number,
    recovery:string|number
    hit:string|number
    block:string|number
    cancel:string
    tips:string[]
    hitboxImage:string
  }[],
  moveKinds:string[],
  frameKinds:string,
  amounts:number|string,
  highLow:string,
  sortNums:string,
}

const StyledTableWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  cursor:default;
  background-color: #000;
  z-index: 10;
  @media(max-width:900px){
    display: block;
  }
`

const StyledCommandsImage = styled.img`
  width: 3vw;
  max-width: 20px;
`

const StyledMovesNameHeader = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`

const StyledMovesNameData = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
  &:hover{
    background-color: #2b2b2b;
    cursor: pointer;
  }
`

const StyledRecoveryHeader = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`

const StyledRecoveryData = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`

const StyledBlockHeader = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`

const StyledBlockData = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`

const StyledStartupHeader = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #2c2c2c;
`

const StyledStartupData = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #2c2c2c;
`

const StyledActiveHeader = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #2c2c2c;
`

const StyledActiveData = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #2c2c2c;
`

const StyledHitHeader = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #2c2c2c;
`

const StyledHitData = styled.th`
  padding: 5px;
  font-size: 1vw;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid #c5c5c5;
  border-right: 1px solid #2c2c2c;
`

const StyledHitboxWrapper = styled.div`
  position: sticky;
  width: 100%;
  top: 60px;
  z-index: 30;
  @media(max-width:900px){
    position: fixed;
    top:0;
  }
`

const StyledHitboxTips = styled.p`
  font-size: min(5vw,60px);
  text-align: center;
  @media(max-width:900px){
    display: none;
  }
`

const StyledTable = styled.table`
  width: 100%;
`

const StyledFontsRed = styled.span`
  color: red;
`

const StyledFontsGreen = styled.span`
  color: green;
`

export function List ({ data , moveKinds , frameKinds , amounts , highLow , sortNums }:Props) {
  const [ hitbox , setHitbox ] = useState("")
  return (<>
    <StyledTableWrapper>
        <StyledTable>
          <thead>
            <tr className='frames-cell-head'>
              <StyledMovesNameHeader>
                技名
                <p>コマンド</p>
              </StyledMovesNameHeader>
              <StyledStartupHeader>
                発生
              </StyledStartupHeader>
              <StyledActiveHeader>
                持続
              </StyledActiveHeader>
              <StyledRecoveryHeader>
                硬直
              </StyledRecoveryHeader>
              <StyledHitHeader>
                ヒット時
              </StyledHitHeader>
              <StyledBlockHeader>
                ガード時
              </StyledBlockHeader>
            </tr>
          </thead>
          <tbody>
            {data.filter(datum => moveKinds.includes(datum.type))
              .filter(datum => {
                if (!frameKinds || !amounts || !highLow)
                return true
                if (isNaN(datum[frameKinds]))
                return false
                if (highLow === 'High'){
                return datum[frameKinds] >= amounts
                } else if (highLow === 'Low'){
                  return datum[frameKinds] <= amounts
                } else {
                  return false
                }
              })
              .sort( (x,y)  => sortNums === "ascending" ? x[frameKinds] - y[frameKinds] : y[frameKinds] - x[frameKinds])
              .map(datum => 
              <tr className='frames-cell' key={datum.index}>
                <StyledMovesNameData onClick={() => setHitbox(datum.hitboxImage)}>
                  {datum.movesName}
                  <p>{datum.movesCondition} {datum.commands.map((command,index) => <StyledCommandsImage key={index} src={command} alt={datum.movesName} />)}</p>
                </StyledMovesNameData>
                <StyledStartupData>
                  {datum.startup}
                </StyledStartupData>
                <StyledActiveData>
                  {datum.active}
                </StyledActiveData>
                <StyledRecoveryData>
                  {datum.recovery}
                </StyledRecoveryData>
                <StyledHitData>
                  {datum.hit}
                </StyledHitData>
                <StyledBlockData>
                  {datum.block}
                </StyledBlockData>
              </tr>)}
          </tbody>
        </StyledTable>
        <div>
          <StyledHitboxWrapper>
            <img src={hitbox} alt='hitbox' />
            <StyledHitboxTips><StyledFontsGreen>GREEN Box</StyledFontsGreen> means Hurtbox</StyledHitboxTips>
            <StyledHitboxTips><StyledFontsRed>RED Box</StyledFontsRed> means Hitbox</StyledHitboxTips>
          </StyledHitboxWrapper>
        </div>
    </StyledTableWrapper>
  </>)
}
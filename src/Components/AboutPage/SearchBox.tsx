import React from "react"
import styled from "@emotion/styled"

type Props = {
  handleOnChangeMoveKinds: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleOnChangeFrameKinds: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handleOnChangeAmounts: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleOnChangeHighLow: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handleOnChangeSortNums: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const StyledFilterWrapper = styled.div`
  padding-top: 10px;
  background: linear-gradient(90deg,rgba(0, 0, 0, 0),rgba(0, 0, 20, 0.6) ,rgba(0, 0, 50, 0.6) ,rgba(0, 0, 80, 0.6),rgba(0, 0, 50, 0.6) ,rgba(0, 0, 20, 0.6) ,rgba(0, 0, 0, 0));
  position: relative;
  z-index: 10;
`

const StyledFilterCheckbox = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  display: flex;
  margin-top: 1vw;
  margin-bottom: 1vw;
  justify-content:center;
  font-size: 1vw;
`

const StyledCheckboxWrapper = styled.div`
  display: flex;
  padding-left: 3vw;
  &:first-child{
    padding-left: 0;
  }
`

const StyledSortWrapper = styled.div`
  display: flex;
  padding-bottom: 1.5vw;
  text-align: center;
  justify-content: center;
`

export function SearchBox ({ handleOnChangeMoveKinds , handleOnChangeFrameKinds , handleOnChangeAmounts , handleOnChangeHighLow , handleOnChangeSortNums }:Props) {
  return (<>
    <StyledFilterWrapper>
      <StyledFilterCheckbox>
        <StyledCheckboxWrapper>
          <input type='checkbox' value='通常技' id='normal' onChange={handleOnChangeMoveKinds} defaultChecked/>
          <label htmlFor='normal'>通常技</label>
        </StyledCheckboxWrapper>
        <StyledCheckboxWrapper>
          <input type='checkbox' value='特殊技' id='unique' onChange={handleOnChangeMoveKinds} defaultChecked/>
          <label htmlFor='unique'>特殊技</label>
        </StyledCheckboxWrapper>
        <StyledCheckboxWrapper>
          <input type='checkbox' value='必殺技' id='special' onChange={handleOnChangeMoveKinds} defaultChecked/>
          <label htmlFor='special'>必殺技</label>
        </StyledCheckboxWrapper>
        <StyledCheckboxWrapper>
          <input type='checkbox' value='スーパーアーツ' id='sa' onChange={handleOnChangeMoveKinds} defaultChecked/>
          <label htmlFor='sa'>SA</label>
        </StyledCheckboxWrapper>
        <StyledCheckboxWrapper>
          <input type='checkbox' value='投げ' id='throwing' onChange={handleOnChangeMoveKinds} defaultChecked/>
          <label htmlFor='throwing'>投げ</label>
        </StyledCheckboxWrapper>
      </StyledFilterCheckbox>
      <StyledSortWrapper>
        <select className='sort-framekinds' onChange={handleOnChangeFrameKinds}>
          <option value="">状況</option>
          <option value='startup'>発生</option>
          <option value='hit'>ヒット時</option>
          <option value='block'>ガード時</option>
        </select>
        <input className='amounts' type='number' onChange={handleOnChangeAmounts}/>
        <select className='high-low' onChange={handleOnChangeHighLow}>
          <option value="">以上･以下</option>
          <option value='High'>以上</option>
          <option value='Low'>以下</option>
        </select>
        <select onChange={handleOnChangeSortNums}>
          <option value="">ソート</option>
          <option value="ascending">昇順</option>
          <option value="descending">降順</option>
        </select>
      </StyledSortWrapper>
    </StyledFilterWrapper>
  </>)
}
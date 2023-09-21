import styled from "@emotion/styled";

const StyledVSImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  width: 100%;
  padding-left: 15vw;
  padding-right: 15vw;
`

const StyledImageWrapper = styled.div`
  width: 40%;
`


type Props = {
  pickedP1Details:{
    name:string
    strongpoints:string[]
    weakpoints:string[]
    topImage:string
    p1Image:string
    p2Image:string
  }
  pickedP2Details:{
    name:string
    strongpoints:string[]
    weakpoints:string[]
    topImage:string
    p1Image:string
    p2Image:string
  }
}

export function VSImageWrapper ({ pickedP1Details , pickedP2Details }:Props) {
  return (<>
  <StyledVSImageWrapper>
    <StyledImageWrapper>
      <img src={pickedP1Details.p1Image}/>
    </StyledImageWrapper>
    <StyledImageWrapper>
      <img src={pickedP2Details.p2Image}/>
    </StyledImageWrapper>
  </StyledVSImageWrapper>
</>)
}
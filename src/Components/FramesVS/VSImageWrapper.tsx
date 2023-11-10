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
  width: 35.9%;
  position: relative;
  background:rgba(0, 0, 0, 0.6);
  padding: 1vw;
  &::before,
  &:after{
    content: '';
    width: 1vw;
    height: 2vw;
    position: absolute;
    display: inline-block;
  }
  &::before{
    border-left: solid 1px #fffb0092;
    border-top: solid 1px #fffb0092;
    top: 0;
    left: 0;
  }
  &::after{
    border-right: solid 1px #fffb0092;
    border-bottom: solid 1px #fffb0092;
    bottom: 0;
    right: 0;
  }
`

const StyledCharacterImage = styled.img`
`


type Props = {
  CharacterDetails:{
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
}

export function VSImageWrapper ({CharacterDetails}:Props) {
  return (<>
  <StyledVSImageWrapper>
    <StyledImageWrapper>
      <StyledCharacterImage src={CharacterDetails.pickedP1Details.p1Image} alt={CharacterDetails.pickedP1Details.name}/>
    </StyledImageWrapper>
    <StyledImageWrapper>
      <StyledCharacterImage src={CharacterDetails.pickedP2Details.p2Image} alt={CharacterDetails.pickedP2Details.name}/>
    </StyledImageWrapper>
  </StyledVSImageWrapper>
</>)
}
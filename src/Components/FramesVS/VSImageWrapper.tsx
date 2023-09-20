import styled from "@emotion/styled";
import { useState } from "react";

const StyledVSImageWrapper = styled.div`
`

const StyledP1Image = styled.img`
`

const StyledP2Image = styled.img`
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
    <StyledP1Image src={pickedP1Details.p1Image}/>
    <StyledP2Image src={pickedP2Details.p2Image}/>
  </StyledVSImageWrapper>
</>)
}
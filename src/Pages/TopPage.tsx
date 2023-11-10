import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import Top from '../images/sf6-recommended-pcs-kv.png'
import AboutSample from '../images/About_sample.jpg'
import FramesVSSample from '../images/FramesVS_sample.jpg'

const StyledTopPage = styled.div`
  padding-top: 80px;
  padding-bottom: 4vw;
  background-image: url(${Top});
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  text-shadow: 3px 3px 10px #000000;
`

const StyledColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.8vw;
  row-gap: 2vw;
  margin-left:2vw;
  margin-right: 2vw;
  margin-top: 5vw;
`

const StyledTopH1 = styled.h1`
  text-align: center;
  font-size: 3vw;
  font-family: "Anton",sans-serif;
`

const StyledTopH2 = styled.h2`
  text-align: center;
  font-size: 1.6vw;
  font-family: "Anton",sans-serif;
  padding-top: 1.5vw;
`

const StyledTopCharacters = styled.h3`
position: relative;
font-family: "Anton",sans-serif;
letter-spacing: 0.3vw;
margin-bottom: 1vw;
font-size: 2vw;
text-align: center;
color: #fffb00;
&:hover{
  color: #afac01;
}
&::first-letter{
  font-size:120%;
}
&:after{
  content: "";
  position: absolute;
  bottom: -0.4vw;
  left: 36.5%;
  width:2vw;
  height: 0.1vw;
  border-radius: 3px;
  background: #ffffff;
}
`
const StyledTopFramesVS = styled.h3`
position: relative;
font-family: "Anton",sans-serif;
letter-spacing: 0.3vw;
margin-bottom: 1vw;
font-size: 2vw;
text-align: center;
color: #fffb00;
&:hover{
  color: #afac01;
}
&::first-letter{
  font-size:120%;
}
&:after{
  content: "";
  position: absolute;
  bottom: -0.4vw;
  left: 38%;
  width:2vw;
  height: 0.1vw;
  border-radius: 3px;
  background: #ffffff;
}
`

const StyledTopP = styled.p`
text-align: center;
font-size: 0.8vw;
font-family: "Noto Sans JP",sans-serif;
padding-top: 1.2vw;
`

const StyledColumnP = styled.p`
line-height: 2vw;
font-size: 1vw;
font-family: "Noto Sans JP",sans-serif;
margin-bottom: 1vw;
text-align: center;
overflow: auto;
@media(max-width:900px){
  line-height: 3vw;
}
`

const StyledSubheading = styled.div`
  position: relative;
  padding: 2vw;
  background:rgba(0, 0, 0, 0.6);
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

const StyledSampleImage = styled.img`
  vertical-align: bottom;
`

function TopPage() {
  return (
    <StyledTopPage>
      <StyledSubheading>
        <StyledTopH1>Welocome to SF6FS</StyledTopH1>
        <StyledTopH2>About this website</StyledTopH2>
        <StyledTopP>SF6のフレームやヒットボックス等、確認が面倒だったりすぐに確認しづらいデータを簡略にまとめ閲覧することが可能な攻略系ウェブサイトです。</StyledTopP>
      </StyledSubheading>
      <StyledColumnWrapper>
        <StyledSubheading>
          <Link to="/characters">
            <StyledTopCharacters>Characters</StyledTopCharacters>
          </Link>
          <StyledColumnP>キャラクターを一覧から選択し<br/>通常技等のフレームデータを確認できます。<br/>また、技名部分をクリックすることで<br/>その技のヒットボックスの参照GIFを閲覧することも可能です。</StyledColumnP>
          <StyledSampleImage src={AboutSample} alt='AboutPage'/>
        </StyledSubheading>
        <StyledSubheading>
          <Link to="/framesvs">
            <StyledTopFramesVS>FramesVS</StyledTopFramesVS>
          </Link>
          <StyledColumnP>防御側キャラクターと攻撃側キャラクターを選択し<br/>防御側の状況(ヒットやガード等)、<br/>攻撃側の行動(立ち弱P等)を選択することで<br/>不利フレームから確定する技を一覧表示させることができます。</StyledColumnP>
          <StyledSampleImage src={FramesVSSample} alt='FramesVS'/>
        </StyledSubheading>
      </StyledColumnWrapper>
    </StyledTopPage>
  );
}

export default TopPage;

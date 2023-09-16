import React from 'react';
import styled from '@emotion/styled'

const StyledTopPage = styled.div`
  padding-top: 60px;
`

const StyledTopH1 = styled.h1`
`

const StyledTopH2 = styled.h2`
`

const StyledTopH3 = styled.h3`
`

const StyledTopP = styled.p`
`


function TopPage() {
  return (
    <StyledTopPage>
      <StyledTopH1>Welocome to SF6FS</StyledTopH1>
      <StyledTopH2>About this website</StyledTopH2>
      <StyledTopP>STREET FIGHTER6のフレームやヒットボックス等、確認が面倒だったりすぐに表示されないデータを簡略にまとめ閲覧することが可能な攻略系ウェブサイトです。</StyledTopP>
      <StyledTopH3>Characters</StyledTopH3>
      <StyledTopP>キャラクターを一覧から選択し、通常技や特殊技等のフレームデータを確認できます。</StyledTopP>
      <StyledTopP>また、技名部分をクリックすることでその技のヒットボックスの参照GIFを閲覧することも可能です。</StyledTopP>
      <StyledTopH3>FramesVS</StyledTopH3>
      <StyledTopP>防御側キャラクターと攻撃側キャラクターを選択し、攻撃側の行動(立ち弱P等)を選択することで不利フレームから確定する技を一覧表示することができます。</StyledTopP>
      <StyledTopH3>Tier</StyledTopH3>
      <StyledTopP>最新の情報を参考にキャラクターのTierランキングを表示します。</StyledTopP>
      <StyledTopH3>Tips</StyledTopH3>
      <StyledTopP>SF6をプレイするにあたって便利な知識等を掲載していくページです。</StyledTopP>
    </StyledTopPage>
  );
}

export default TopPage;

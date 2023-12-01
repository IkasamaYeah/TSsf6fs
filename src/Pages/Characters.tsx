import rashidImg from '../images/rashid.png'
import cammyImg from '../images/cammy.png'
import lilyImg from '../images/lily.png'
import zangiefImg from '../images/zangief.png'
import jpImg from '../images/jp.png'
import marisaImg from '../images/marisa.png'
import manonImg from '../images/manon.png'
import deejayImg from '../images/deejay.png'
import hondaImg from '../images/ehonda.png'
import dhalsimImg from '../images/dhalsim.png'
import blankaImg from '../images/blanka.png'
import kenImg from '../images/ken.png'
import juriImg from '../images/juri.png'
import kimberlyImg from '../images/kimberly.png'
import guileImg from '../images/guile.png'
import chunliImg from '../images/chunli.png'
import jamieImg from '../images/jamie.png'
import lukeImg from '../images/luke.png'
import ryuImg from '../images/ryu.png'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import CharactersBackground from '../images/wallpaper_00028.jpg'

const StyledCharactersTop = styled.div`
  padding-top: 100px;
  justify-content: center;
  overflow: hidden;
  background: url(${CharactersBackground});
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledCharactersH1 = styled.h1`
  position: relative;
  color: #dfdfdf;
  padding: 3vw;
  background:rgba(0, 0, 0, 0.6);
  text-align: center;
  margin: 0 5vw 3vw 5vw;
  font-family: "Anton",sans-serif;
  font-size: 3vw;
  text-shadow: 3px 3px 10px #4d4d4d;
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

const StyledColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1vw;
  row-gap: 0.5vw;
  margin: 0 10vw 0 10vw;
`

const StyledChatactersWrapper = styled.div`
  background: rgba( 100, 100, 0, 0.6);
  border: 5px solid rgba(255,255,255,0.3);
  transform:skewX(30deg);
  overflow: hidden;
  width: 100%;
`

const StyledCharactersImage = styled.img`
  width:100%;
  transform:skewX(-30deg);
`

export default function Characters() {
  return (<>
    <StyledCharactersTop>
      <StyledCharactersH1>PICK AND VIEW DETAILS</StyledCharactersH1>
      <StyledColumnWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=rashid"><StyledCharactersImage src={rashidImg} alt='Rashid' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=cammy"><StyledCharactersImage src={cammyImg} alt='Cammy' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=lily"><StyledCharactersImage src={lilyImg} alt='Lily' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=zangief"><StyledCharactersImage src={zangiefImg} alt='Zangief' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=jp"><StyledCharactersImage src={jpImg} alt='JP' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=marisa"><StyledCharactersImage src={marisaImg} alt='Marisa' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=manon"><StyledCharactersImage src={manonImg} alt='Manon' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=deejay"><StyledCharactersImage src={deejayImg} alt='Deejay' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=e-honda"><StyledCharactersImage src={hondaImg} alt='E.Honda' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=dhalsim"><StyledCharactersImage src={dhalsimImg} alt='Dhalsim' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=blanka"><StyledCharactersImage src={blankaImg} alt='Blanka' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=ken"><StyledCharactersImage src={kenImg} alt='Ken' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=juri"><StyledCharactersImage src={juriImg} alt='Juri' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=kimberly"><StyledCharactersImage src={kimberlyImg} alt='Kimberly' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=guile"><StyledCharactersImage src={guileImg} alt='Guile' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=chunli"><StyledCharactersImage src={chunliImg} alt='Chun-Li' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=jamie"><StyledCharactersImage src={jamieImg} alt='Jamie' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=luke"><StyledCharactersImage src={lukeImg} alt='Luke' /></Link>
        </StyledChatactersWrapper>
        <StyledChatactersWrapper>
          <Link to="/about?name=ryu"><StyledCharactersImage src={ryuImg} alt='Ryu' /></Link>
        </StyledChatactersWrapper>
      </StyledColumnWrapper>
    </StyledCharactersTop>
  </>)
}
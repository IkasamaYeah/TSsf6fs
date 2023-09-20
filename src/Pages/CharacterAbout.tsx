import { useState } from 'react'
import styled from '@emotion/styled';
import {  Params, useSearchParams, } from "react-router-dom";
import { rashidDetails , rashidMoves } from '../Components/CharacterData/Rashid/RashidData'
import { cammyDetails , cammyMoves } from '../Components/CharacterData/Cammy/CammyData'
import { lilyDetails , lilyMoves } from '../Components/CharacterData/Lily/LilyData'
import { zangiefDetails , zangiefMoves } from '../Components/CharacterData/Zangief/ZangiefData'
import { jpDetails , jpMoves } from '../Components/CharacterData/JP/JPData'
import { marisaDetails , marisaMoves } from '../Components/CharacterData/Marisa/MarisaData'
import { manonDetails , manonMoves } from '../Components/CharacterData/Manon/ManonData'
import { deejayDetails , deejayMoves } from '../Components/CharacterData/DeeJay/DeeJayData'
import { ehondaDetails , ehondaMoves } from '../Components/CharacterData/E.Honda/E.HondaData'
import { dhalsimDetails , dhalsimMoves } from '../Components/CharacterData/Dhalsim/DhalsimData'
import { blankaDetails , blankaMoves } from '../Components/CharacterData/Blanka/BlankaData'
import { kenDetails, kenMoves } from '../Components/CharacterData/Ken/KenData'
import { juriDetails, juriMoves } from '../Components/CharacterData/Juri/JuriData'
import { kimberlyDetails , kimberlyMoves } from '../Components/CharacterData/Kimberly/KimberlyData'
import { guileDetails , guileMoves } from '../Components/CharacterData/Guile/GuileData'
import { chunliDetails , chunliMoves } from '../Components/CharacterData/Chun-Li/ChunLiData'
import { jamieDetails , jamieMoves } from '../Components/CharacterData/Jamie/JamieData'
import { lukeDetails , lukeMoves } from '../Components/CharacterData/Luke/LukeData'
import { ryuDetails , ryuMoves } from '../Components/CharacterData/Ryu/RyuData'
import { CharacterDetails } from '../Components/AboutPage/CharacterDetails';
import { OpenList } from '../Components/AboutPage/OpenList';
import { SearchBox } from '../Components/AboutPage/SearchBox';
import { List } from '../Components/AboutPage/List';

const AboutPage = styled.div`
  background-color: #000000;
  color:#ffffff;
`




export function CharacterAbout () {
  const [open,setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const [moveKinds,setMoveKinds] = useState(['通常技','特殊技','必殺技','スーパーアーツ','投げ'])
  const handleOnChangeMoveKinds = (e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setMoveKinds([...moveKinds,e.target.value]) : setMoveKinds(moveKinds.filter(moveKind => moveKind.match(e.target.value) === null ))
  const [frameKinds,setFrameKinds] = useState("")
  const handleOnChangeFrameKinds = (e: React.ChangeEvent<HTMLSelectElement>) => setFrameKinds(e.target.value)
  const [amounts,setAmounts] = useState("")
  const handleOnChangeAmounts = (e: React.ChangeEvent<HTMLInputElement>) => setAmounts(e.target.value)
  const [highLow,setHighLow] = useState("")
  const handleOnChangeHighLow = (e: React.ChangeEvent<HTMLSelectElement>) => setHighLow(e.target.value)
  const [sortNums,setSortNums] = useState("")
  const handleOnChangeSortNums = (e: React.ChangeEvent<HTMLSelectElement>) => setSortNums(e.target.value)
  
  const [searchParams] = useSearchParams();
  
  type CharacterData = {
    details:{
      name:string;
      strongpoints:string[];
      weakpoints:string[];
      topImage:string;
      p1Image:string;
      p2Image:string;
    }
    moves:{
      [key:string]: string|string[]|number|number[],
      type:string
      commands:string[]
      movesName:string
      movesCondition:string
      startup:any
      active:any
      recovery:any
      hit:any
      block:any
      cancel:any
      tips:string[]
      hitboxImage:string 
    }[]
  }


  const characterDataMap:Record<string , CharacterData> = {
    juri: { details: juriDetails, moves: juriMoves },
    ken: { details: kenDetails, moves: kenMoves },
    cammy: { details: cammyDetails, moves: cammyMoves },
    jp: { details: jpDetails, moves: jpMoves },
    zangief: { details: zangiefDetails, moves: zangiefMoves },
    lily: { details: lilyDetails, moves: lilyMoves },
    manon: { details: manonDetails, moves: manonMoves },
    marisa: { details: marisaDetails, moves: marisaMoves },
    deejay: { details: deejayDetails, moves: deejayMoves },
    honda: { details: ehondaDetails, moves: ehondaMoves },
    dhalsim: { details: dhalsimDetails, moves: dhalsimMoves },
    blanka: { details: blankaDetails, moves: blankaMoves },
    kimberly: { details: kimberlyDetails, moves: kimberlyMoves },
    guile: { details: guileDetails, moves: guileMoves },
    chunli: { details: chunliDetails, moves: chunliMoves },
    jamie: { details: jamieDetails, moves: jamieMoves },
    luke: { details: lukeDetails, moves: lukeMoves },
    ryu: { details: ryuDetails, moves: ryuMoves },
    rashid: { details: rashidDetails, moves: rashidMoves },
  }
  
  const characterName = searchParams.get("name")||""
  
  const selectedCharacterData = characterDataMap[characterName.toLowerCase()]
  
  const { details, moves } = selectedCharacterData

  return(<>
    <AboutPage>
      <CharacterDetails details={details}/>
      <OpenList onClick={ () => toggle() }/>
      {open&&<>
        <SearchBox  handleOnChangeMoveKinds={handleOnChangeMoveKinds}
                    handleOnChangeFrameKinds={handleOnChangeFrameKinds}
                    handleOnChangeAmounts={handleOnChangeAmounts}
                    handleOnChangeHighLow={handleOnChangeHighLow}
                    handleOnChangeSortNums={handleOnChangeSortNums}
        />
        <List data={moves}
              frameKinds={frameKinds}
              moveKinds={moveKinds}
              amounts={amounts}
              highLow={highLow}
              sortNums={sortNums}/>
      </>}
    </AboutPage>
  </>)
}
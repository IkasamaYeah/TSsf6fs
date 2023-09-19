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
  
  let details = ryuDetails
  let moves = ryuMoves

  if (searchParams.get("name") === "juri"){
    details = juriDetails
    moves = juriMoves
  } else if (searchParams.get("name") === "ken"){
    details = kenDetails
    moves = kenMoves
  } else if (searchParams.get("name") === "cammy"){
    details = cammyDetails
    moves = cammyMoves
  } else if (searchParams.get("name") === "jp"){
    details = jpDetails
    moves = jpMoves
  } else if (searchParams.get("name") === "zangief"){
    details = zangiefDetails
    moves = zangiefMoves
  } else if (searchParams.get("name") === "lily"){
    details = lilyDetails
    moves = lilyMoves
  } else if (searchParams.get("name") === "manon"){
    details = manonDetails
    moves = manonMoves
  } else if (searchParams.get("name") === "marisa"){
    details = marisaDetails
    moves = marisaMoves
  } else if (searchParams.get("name") === "deejay"){
    details = deejayDetails
    moves = deejayMoves
  } else if (searchParams.get("name") === "honda"){
    details = ehondaDetails
    moves = ehondaMoves
  } else if (searchParams.get("name") === "dhalsim"){
    details = dhalsimDetails
    moves = dhalsimMoves
  } else if (searchParams.get("name") === "blanka"){
    details = blankaDetails
    moves = blankaMoves
  } else if (searchParams.get("name") === "kimberly"){
    details = kimberlyDetails
    moves = kimberlyMoves
  } else if (searchParams.get("name") === "guile"){
    details = guileDetails
    moves = guileMoves
  } else if (searchParams.get("name") === "chunli"){
    details = chunliDetails
    moves = chunliMoves
  } else if (searchParams.get("name") === "jamie"){
    details = jamieDetails
    moves = jamieMoves
  } else if (searchParams.get("name") === "luke"){
    details = lukeDetails
    moves = lukeMoves
  } else if (searchParams.get("name") === "ryu"){
    details = ryuDetails
    moves = ryuMoves
  } else if (searchParams.get("name") === "rashid"){
    details = rashidDetails
    moves = rashidMoves
  } 

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
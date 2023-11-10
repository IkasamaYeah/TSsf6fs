import { useState } from 'react'
import styled from '@emotion/styled';
import { useSearchParams } from "react-router-dom";
import { characterDataMap } from '../Components/CharacterData/CharacterDataMap';
import { CharacterDetails } from '../Components/AboutPage/CharacterDetails';
import { OpenList } from '../Components/AboutPage/OpenList';
import { SearchBox } from '../Components/AboutPage/SearchBox';
import { List } from '../Components/AboutPage/List';

const AboutPage = styled.div`
  background-color: #000000;
  color:#ffffff;
`

export function CharacterAbout() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const [moveKinds, setMoveKinds] = useState(['通常技', '特殊技', '必殺技', 'スーパーアーツ', '投げ'])
  const handleOnChangeMoveKinds = (e: React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setMoveKinds([...moveKinds, e.target.value]) : setMoveKinds(moveKinds.filter(moveKind => moveKind.match(e.target.value) === null))
  const [frameKinds, setFrameKinds] = useState("")
  const handleOnChangeFrameKinds = (e: React.ChangeEvent<HTMLSelectElement>) => setFrameKinds(e.target.value)
  const [amounts, setAmounts] = useState("")
  const handleOnChangeAmounts = (e: React.ChangeEvent<HTMLInputElement>) => setAmounts(e.target.value)
  const [highLow, setHighLow] = useState("")
  const handleOnChangeHighLow = (e: React.ChangeEvent<HTMLSelectElement>) => setHighLow(e.target.value)
  const [sortNums, setSortNums] = useState("")
  const handleOnChangeSortNums = (e: React.ChangeEvent<HTMLSelectElement>) => setSortNums(e.target.value)

  const [searchParams] = useSearchParams();

  const characterName = searchParams.get("name") || ""

  const selectedCharacterData = characterDataMap[characterName.toLowerCase()]

  const { details, moves } = selectedCharacterData

  return (<>
    <AboutPage>
      <CharacterDetails details={details} />
      <OpenList onClick={() => toggle()} />
      {open && <>
        <SearchBox handleOnChangeMoveKinds={handleOnChangeMoveKinds}
          handleOnChangeFrameKinds={handleOnChangeFrameKinds}
          handleOnChangeAmounts={handleOnChangeAmounts}
          handleOnChangeHighLow={handleOnChangeHighLow}
          handleOnChangeSortNums={handleOnChangeSortNums} />
        <List data={moves}
          frameKinds={frameKinds}
          moveKinds={moveKinds}
          amounts={amounts}
          highLow={highLow}
          sortNums={sortNums} />
      </>}
    </AboutPage>
  </>)
}
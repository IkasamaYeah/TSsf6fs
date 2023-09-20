import styled from "@emotion/styled";

const StyledCharacterPickWrapper = styled.div`
`

const StyledP1Select = styled.select`
`

const StyledP2Select = styled.select`
`

type Props= {
  p1CharacterHandler: (e:React.ChangeEvent<HTMLSelectElement>) => void
  p2CharacterHandler: (e:React.ChangeEvent<HTMLSelectElement>) => void
  pickedP1Moves:{
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
  pickedP2Moves:{
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

export function ChooseCondition ({ pickedP1Moves , pickedP2Moves , p1CharacterHandler , p2CharacterHandler }:Props) {
  return (<>
        <StyledCharacterPickWrapper>
        <StyledP1Select onChange={p1CharacterHandler}>
          <option value="Rashid">Rashid</option>
          <option value="Cammy">Cammy</option>
          <option value="Lily">Lily</option>
          <option value="Zangief">Zangief</option>
          <option value="JP">JP</option>
          <option value="Marisa">Marisa</option>
          <option value="Manon">Manon</option>
          <option value="DeeJay">DeeJay</option>
          <option value="E.Honda">E.Honda</option>
          <option value="Dhalsim">Dhalsim</option>
          <option value="Blanka">Blanka</option>
          <option value="Ken">Ken</option>
          <option value="Juri">Juri</option>
          <option value="Kimberly">Kimberly</option>
          <option value="Guile">Guile</option>
          <option value="Chun-Li">Chun-Li</option>
          <option value="Jamie">Jamie</option>
          <option value="Luke">Luke</option>
          <option value="Ryu">Ryu</option>
        </StyledP1Select>
        <StyledP2Select onChange={p2CharacterHandler}>
          <option value="Rashid">Rashid</option>
          <option value="Cammy">Cammy</option>
          <option value="Lily">Lily</option>
          <option value="Zangief">Zangief</option>
          <option value="JP">JP</option>
          <option value="Marisa">Marisa</option>
          <option value="Manon">Manon</option>
          <option value="DeeJay">DeeJay</option>
          <option value="E.Honda">E.Honda</option>
          <option value="Dhalsim">Dhalsim</option>
          <option value="Blanka">Blanka</option>
          <option value="Ken">Ken</option>
          <option value="Juri">Juri</option>
          <option value="Kimberly">Kimberly</option>
          <option value="Guile">Guile</option>
          <option value="Chun-Li">Chun-Li</option>
          <option value="Jamie">Jamie</option>
          <option value="Luke">Luke</option>
          <option value="Ryu">Ryu</option>
        </StyledP2Select>
      </StyledCharacterPickWrapper>
  </>)
}
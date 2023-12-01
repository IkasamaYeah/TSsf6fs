import { rashidDetails , rashidMoves } from './Rashid/RashidData'
import { cammyDetails , cammyMoves } from './Cammy/CammyData'
import { lilyDetails , lilyMoves } from './Lily/LilyData'
import { zangiefDetails , zangiefMoves } from './Zangief/ZangiefData'
import { jpDetails , jpMoves } from './JP/JPData'
import { marisaDetails , marisaMoves } from './Marisa/MarisaData'
import { manonDetails , manonMoves } from './Manon/ManonData'
import { deejayDetails , deejayMoves } from './DeeJay/DeeJayData'
import { ehondaDetails , ehondaMoves } from './E.Honda/E.HondaData'
import { dhalsimDetails , dhalsimMoves } from './Dhalsim/DhalsimData'
import { blankaDetails , blankaMoves } from './Blanka/BlankaData'
import { kenDetails, kenMoves } from './Ken/KenData'
import { juriDetails, juriMoves } from './Juri/JuriData'
import { kimberlyDetails , kimberlyMoves } from './Kimberly/KimberlyData'
import { guileDetails , guileMoves } from './Guile/GuileData'
import { chunliDetails , chunliMoves } from './Chun-Li/ChunLiData'
import { jamieDetails , jamieMoves } from './Jamie/JamieData'
import { lukeDetails , lukeMoves } from './Luke/LukeData'
import { ryuDetails , ryuMoves } from './Ryu/RyuData'
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


export const characterDataMap:Record<string , CharacterData> = {
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
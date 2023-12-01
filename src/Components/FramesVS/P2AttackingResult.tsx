import { P2AttackBlockedResult } from "./P2AttackBlockedResult";
import { P2AttackHittedResult } from "./P2AttackHittedResult";
import { P2AttackCounterHittedResult } from "./P2AttackCounterHittedResult";
import { P2AttackPCHittedResult } from "./P2AttackPCHittedResult";
import { ResultError } from "./ResultError";

type Props = {
  p1Condition: string
  p2Move: string
  pickedP2Moves: {
    [key: string]: string | string[] | number | number[],
    type: string
    commands: string[]
    movesName: string
    movesCondition: string
    startup: any
    active: any
    recovery: any
    hit: any
    block: any
    cancel: any
    tips: string[]
    hitboxImage: string
  }[]
}

export function P2AttackingResult({ p1Condition, p2Move, pickedP2Moves }: Props) {
  const pickedP2MoveData = pickedP2Moves.find(pickedP2Move => pickedP2Move.movesName === p2Move)

  if (pickedP2MoveData && p2Move !== "" && p1Condition === "block") {
    if (pickedP2MoveData) {
      return (<P2AttackBlockedResult pickedP2MoveData={pickedP2MoveData} />)
    }
  } else if (p2Move !== "" && p1Condition === "hit") {
    if (pickedP2MoveData) {
      return (pickedP2MoveData && <P2AttackHittedResult pickedP2MoveData={pickedP2MoveData} />)
    }
  } else if (p2Move !== "" && p1Condition === "chit") {
    if (pickedP2MoveData) {
      return (pickedP2MoveData && <P2AttackCounterHittedResult pickedP2MoveData={pickedP2MoveData} />)
    }
  } else if (p2Move !== "" && p1Condition === "pchit") {
    if (pickedP2MoveData) {
      return (pickedP2MoveData && <P2AttackPCHittedResult pickedP2MoveData={pickedP2MoveData} />)
    }
  }

  return <ResultError />
}
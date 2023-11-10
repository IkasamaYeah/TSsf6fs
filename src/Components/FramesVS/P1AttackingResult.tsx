import { P1AttackBlockedResult } from "./P1AttackBlockedResult"
import { P1AttackHittedResult } from "./P1AttackHittedResult"
import { P1AttackCounterHittedResult } from "./P1AttackCounterHittedResult"
import { P1AttackPCHittedResult } from "./P1AttackPCHittedResult"
import { ResultError } from "./ResultError"

type Props = {
  p2Condition: string
  p1Move: string
  pickedP1Moves: {
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

export function P1AttackingResult({ p1Move, p2Condition, pickedP1Moves }: Props) {
  const pickedP1MoveData = pickedP1Moves.find(pickedP1Move => pickedP1Move.movesName === p1Move)

  if (p1Move !== "" && p2Condition === "block") {
    if (pickedP1MoveData) {
      return (<P1AttackBlockedResult pickedP1MoveData={pickedP1MoveData} />)
    }
  } else if (p1Move !== "" && p2Condition === "hit") {
    if (pickedP1MoveData) {
      return (<P1AttackHittedResult pickedP1MoveData={pickedP1MoveData} />)
    }
  } else if (p1Move !== "" && p2Condition === "chit") {
    if (pickedP1MoveData) {
      return (<P1AttackCounterHittedResult pickedP1MoveData={pickedP1MoveData} />)
    }
  } else if (p1Move !== "" && p2Condition === "pchit") {
    if (pickedP1MoveData) {
      return (<P1AttackPCHittedResult pickedP1MoveData={pickedP1MoveData} />)
    }
  }

  return <ResultError />
}

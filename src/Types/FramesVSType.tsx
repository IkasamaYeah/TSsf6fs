export type CharacterData = {
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

export type P1AttackingResultProps = {
  p1Character:string
  p2Character:string
  p2Condition:string
  p1Move:string
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

export type P2AttackingResultProps = {
  p1Character:string
  p2Character:string
  p1Condition:string
  p2Condition:string
  p1Move:string
  p2Move:string
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
  pickedP1MoveData:{
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
  }
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
  pickedP2MoveData:{
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
  }
}
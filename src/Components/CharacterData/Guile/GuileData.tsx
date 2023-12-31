import guileImage from './guile-top.png'
import p1Image from './guil-1p-image.png'
import p2Image from './guil-2p-image.png'
import anyPunch from '../CommandImages/p-any-icon.png'
import lPunch from '../CommandImages/p-l-icon.png'
import mPunch from '../CommandImages/p-m-icon.png'
import hPunch from '../CommandImages/p-h-icon.png'
import anyKick from '../CommandImages/k-any-icon.png'
import lKick from '../CommandImages/k-l-icon.png'
import mKick from '../CommandImages/k-m-icon.png'
import hKick from '../CommandImages/k-h-icon.png'
import keyPlus from '../CommandImages/plus-icon.png'
import keyUp from '../CommandImages/up-icon.png'
import keyDown from '../CommandImages/down-icon.png'
import keyRight from '../CommandImages/right-icon.png'
import keyLeft from '../CommandImages/left-icon.png'
import keyDR from '../CommandImages/down-right-icon.png'
import keyDL from '../CommandImages/down-left-icon.png'
import keyHoldL from '../CommandImages/hold-left-icon.png'
import keyHoldD from '../CommandImages/hold-down-icon.png'
import keyNutral from '../CommandImages/nutral-icon.png'
import keyNext from '../CommandImages/key-next.png'
import keyOr from '../CommandImages/or-icon.png'


export const guileDetails:{
  name:string;
  strongpoints:string[];
  weakpoints:string[];
  topImage:string;
  p1Image:string;
  p2Image:string;
} = {
  name:"GUILE",
  strongpoints:["aaaaa","bbbbb","ccccc"],
  weakpoints:["ddddd","eeeee","fffff"],
  topImage:guileImage,
  p1Image:p1Image,
  p2Image:p2Image,
}

export const guileMoves:{
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
}[] = [{
  type:"通常技",
  commands:[lPunch],
  movesName:"立ち弱P(ジャブ)",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:7,
  hit:4,
  block:-2,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[lKick],
  movesName:"立ち弱K(ムエタイキック)",
  movesCondition:"",
  startup:5,
  active:"5-6",
  recovery:12,
  hit:3,
  block:-1,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[mPunch],
  movesName:"立ち中P(フック)",
  movesCondition:"",
  startup:7,
  active:"7-9",
  recovery:15,
  hit:6,
  block:0,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[mKick],
  movesName:"立ち中K(トラースキック)",
  movesCondition:"",
  startup:7,
  active:"7-11",
  recovery:18,
  hit:1,
  block:-4,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[hPunch],
  movesName:"立ち強P(サイクロンフック)",
  movesCondition:"",
  startup:7,
  active:"7-9",
  recovery:23,
  hit:-1,
  block:-6,
  cancel:"〇",
  tips:["PC時+14F"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[hKick],
  movesName:"立ち強K(ヘビースタブキック)",
  movesCondition:"",
  startup:13,
  active:"13-15",
  recovery:21,
  hit:3,
  block:-4,
  cancel:"SA",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,lPunch],
  movesName:"しゃがみ弱P(ジャブ)",
  movesCondition:"",
  startup:4,
  active:"4-6",
  recovery:8,
  hit:5,
  block:-2,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,lKick],
  movesName:"しゃがみ弱K(キック)",
  movesCondition:"",
  startup:5,
  active:"5-6",
  recovery:13,
  hit:1,
  block:-5,
  cancel:"×",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,mPunch],
  movesName:"しゃがみ中P(ストレート)",
  movesCondition:"",
  startup:6,
  active:"6-8",
  recovery:13,
  hit:4,
  block:-2,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,mKick],
  movesName:"しゃがみ中K(ストライドスイープ)",
  movesCondition:"",
  startup:8,
  active:"8-10",
  recovery:18,
  hit:4,
  block:-5,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,hPunch],
  movesName:"しゃがみ強P(リフトアッパー)",
  movesCondition:"",
  startup:9,
  active:"9-13",
  recovery:20,
  hit:0,
  block:-9,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,hKick],
  movesName:"しゃがみ強K(ドラゴンスイープ)",
  movesCondition:"",
  startup:9,
  active:"9-29",
  recovery:21,
  hit:"Down",
  block:-12,
  cancel:"×",
  tips:["初段PC時吹き飛びダウン"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,mPunch],
  movesName:"フルブレットマグナム",
  movesCondition:"",
  startup:20,
  active:"20-22",
  recovery:19,
  hit:2,
  block:-3,
  cancel:"×",
  tips:["空中ヒット時叩きつけダウン"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyLeft,keyPlus,hPunch],
  movesName:"バーンストレート",
  movesCondition:"",
  startup:9,
  active:"9-11",
  recovery:21,
  hit:1,
  block:-4,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,hPunch],
  movesName:"スピニングバックナックル",
  movesCondition:"",
  startup:16,
  active:"16-18",
  recovery:20,
  hit:5,
  block:3,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyLeft,keyPlus,lKick],
  movesName:"ニーバズーカ",
  movesCondition:"",
  startup:8,
  active:"8-11",
  recovery:15,
  hit:0,
  block:-4,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyLeft,keyPlus,mKick],
  movesName:"[後退]ローリングソバット",
  movesCondition:"",
  startup:11,
  active:"11-13",
  recovery:18,
  hit:3,
  block:-6,
  cancel:"×",
  tips:["7-17F 足元無敵"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,mKick],
  movesName:"[前進]ローリングソバット",
  movesCondition:"",
  startup:11,
  active:"11-13",
  recovery:18,
  hit:3,
  block:-6,
  cancel:"×",
  tips:["7-17F 足元無敵","空振り時硬直21F/全体34F"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,hKick],
  movesName:"リバーススピンキック",
  movesCondition:"",
  startup:17,
  active:"17-19",
  recovery:26,
  hit:-1,
  block:-8,
  cancel:"×",
  tips:["4F-28F 投げ無敵/足元無敵","C時吹き飛びダウン","PC時膝崩れ"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDR,keyPlus,hKick],
  movesName:"ガイルハイキック",
  movesCondition:"",
  startup:10,
  active:"10-12",
  recovery:23,
  hit:0,
  block:-9,
  cancel:"〇",
  tips:["PC時吹き飛びダウン"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[mPunch,keyNext,keyDown,keyPlus,],
  movesName:"リコイルキャノン",
  movesCondition:"",
  startup:16,
  active:"16-18",
  recovery:26,
  hit:"Down",
  block:-9,
  cancel:"〇",
  tips:["8-9F 必殺技、SAで空振りキャンセル可能"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,mPunch,keyPlus,keyDown,mPunch],
  movesName:"ダブルバレット",
  movesCondition:"",
  startup:12,
  active:"12-14",
  recovery:16,
  hit:"Down",
  block:-6,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,mKick,keyPlus,keyRight,keyPlus,mPunch],
  movesName:"ドレイクファング",
  movesCondition:"",
  startup:20,
  active:"20-22",
  recovery:21,
  hit:1,
  block:-5,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,hKick,keyNext,keyDR,keyPlus,hKick],
  movesName:"ファントムカッター",
  movesCondition:"",
  startup:10,
  active:"10-12",
  recovery:25,
  hit:"Down",
  block:-12,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,lPunch],
  movesName:"弱 ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体40",
  hit:3,
  block:-3,
  cancel:"SA3",
  tips:["12-20F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,lPunch],
  movesName:"[ジャスト]弱 ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体40",
  hit:4,
  block:-3,
  cancel:"SA3",
  tips:["12-20F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,mPunch],
  movesName:"中 ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体40",
  hit:3,
  block:-3,
  cancel:"SA3",
  tips:["12-20F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,mPunch],
  movesName:"[ジャスト]中 ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体40",
  hit:4,
  block:-3,
  cancel:"SA3",
  tips:["12-20F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,hPunch],
  movesName:"強 ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体40",
  hit:3,
  block:-3,
  cancel:"SA3",
  tips:["12-20F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,hPunch],
  movesName:"[ジャスト]強 ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体40",
  hit:4,
  block:-3,
  cancel:"SA3",
  tips:["12-20F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldL,keyRight,keyPlus,anyPunch,anyPunch],
  movesName:"OD ソニックブーム",
  movesCondition:"",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"",
  block:3,
  cancel:"SA2",
  tips:["12-20F OD版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,lKick],
  movesName:"弱 サマーソルトキック",
  movesCondition:"",
  startup:5,
  active:"5-10",
  recovery:"26+着地後15",
  hit:"Down",
  block:-30,
  cancel:"SA3",
  tips:["1-7F 空中判定の攻撃に対して無敵","8-36F 空中判定","持続の3F目以降は個別ダメージ(800)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,lKick],
  movesName:"[ジャスト]弱 サマーソルトキック",
  movesCondition:"",
  startup:5,
  active:"5-10",
  recovery:"26+着地後15",
  hit:"Down",
  block:-30,
  cancel:"SA3",
  tips:["1-7F 空中判定の攻撃に対して無敵","8-36F 空中判定","持続の3F目以降は個別ダメージ(1000)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,mKick],
  movesName:"中 サマーソルトキック",
  movesCondition:"",
  startup:6,
  active:"6-11",
  recovery:"27+着地後15",
  hit:"Down",
  block:-31,
  cancel:"SA3",
  tips:["1-8F 空中判定の攻撃に対しては無敵","8-38F 空中判定","持続の3F目以降は個別ダメージ(800)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,mKick],
  movesName:"[ジャスト]中 サマーソルトキック",
  movesCondition:"",
  startup:6,
  active:"6-11",
  recovery:"27+着地後15",
  hit:"Down",
  block:-31,
  cancel:"SA3",
  tips:["1-8F 空中判定の攻撃に対しては無敵","8-38F 空中判定","持続の3F目以降は個別ダメージ(1000)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,hKick],
  movesName:"強 サマーソルトキック",
  movesCondition:"",
  startup:7,
  active:"7-12",
  recovery:"28+着地後15",
  hit:"Down",
  block:-33,
  cancel:"SA3",
  tips:["1-9F 空中判定の攻撃に対して無敵","8-40F 空中判定","持続の3F目以降は個別ダメージ(800)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,hKick],
  movesName:"[ジャスト]強 サマーソルトキック",
  movesCondition:"",
  startup:7,
  active:"7-12",
  recovery:"28+着地後15",
  hit:"Down",
  block:-33,
  cancel:"SA3",
  tips:["1-9F 空中判定の攻撃に対して無敵","8-40F 空中判定","持続の3F目以降は個別ダメージ(1000)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyHoldD,keyUp,keyPlus,anyKick,anyKick],
  movesName:"OD サマーソルトキック",
  movesCondition:"",
  startup:6,
  active:"6-11",
  recovery:"26+着地後20",
  hit:"Down",
  block:-33,
  cancel:"×",
  tips:["1-11F 完全無敵","8-37F 空中判定","持続の3-4F目は個別ダメージ(700)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyDown,keyDL,keyLeft,keyPlus,lPunch],
  movesName:"弱ソニックブレイド",
  movesCondition:"",
  startup:16,
  active:"16-60",
  recovery:"全体42",
  hit:-3,
  block:-4,
  cancel:"SA3",
  tips:["35-40F 各種ソニッククロスへ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyDown,keyDL,keyLeft,keyPlus,mPunch],
  movesName:"中 ソニックブレイド",
  movesCondition:"",
  startup:21,
  active:"21-105",
  recovery:"全体50",
  hit:-6,
  block:-7,
  cancel:"SA3",
  tips:["40-46F 各種ソニッククロスへ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyDown,keyDL,keyLeft,keyPlus,hPunch],
  movesName:"強 ソニックブレイド",
  movesCondition:"",
  startup:31,
  active:"31-130",
  recovery:"全体54",
  hit:1,
  block:-1,
  cancel:"SA3",
  tips:["50-54F 各種ソニッククロスへ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyDown,keyDL,keyLeft,keyPlus,anyPunch,anyPunch],
  movesName:"OD ソニックブレイド",
  movesCondition:"",
  startup:15,
  active:"15-114",
  recovery:"全体39",
  hit:"Down",
  block:-4,
  cancel:"SA2",
  tips:["34-39F 各種ODソニッククロスへ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyPlus,lPunch],
  movesName:"弱 ソニッククロス",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-1,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyPlus,lPunch],
  movesName:"[ジャスト]弱 ソニッククロス",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-1,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyPlus,mPunch],
  movesName:"中 ソニッククロス",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-1,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyPlus,mPunch],
  movesName:"[ジャスト]中 ソニッククロス",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-1,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyPlus,hPunch],
  movesName:"強 ソニッククロス",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-1,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyPlus,hPunch],
  movesName:"[ジャスト]強 ソニッククロス",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-1,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch,anyPunch],
  movesName:"OD ソニッククロス1(通常派生)",
  movesCondition:"(ソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:6,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch],
  movesName:"OD ソニッククロス1(OD派生)",
  movesCondition:"(ODソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:6,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch,anyPunch],
  movesName:"OD ソニッククロス2",
  movesCondition:"(ODソニックブレイド中に)",
  startup:10,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:6,
  cancel:"×",
  tips:["ヒット後壁やられ"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch,anyPunch],
  movesName:"ソニックブレイク(単発)",
  movesCondition:"",
  startup:11,
  active:"",
  recovery:"全体36",
  hit:2,
  block:-2,
  cancel:"×",
  tips:["13-21F通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch],
  movesName:"ソニックブレイク(派生)",
  movesCondition:"(ソリッドパンチャー中のソニックブームorソニックブレイク中に)",
  startup:11,
  active:"",
  recovery:"全体36",
  hit:2,
  block:-2,
  cancel:"×",
  tips:["13-21F 通常版ソニックブレイク(SA2発動中発動可能技)へ派生可能(3回まで)","派生最終段のみ、硬直1F減少"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch],
  movesName:"ODソニックブレイク",
  movesCondition:"(ソリッドパンチャー中のODソニックブームorODソニックブレイク中に)",
  startup:11,
  active:"",
  recovery:"全体35",
  hit:"Down",
  block:3,
  cancel:"×",
  tips:["13-21F OD版ソニックブレイク (SA2発動中発動可能技)へ派生可能(1回のみ)"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyHoldL,keyRight,keyLeft,keyRight,keyPlus,hPunch],
  movesName:"[上]ソニックハリケーン",
  movesCondition:"",
  startup:7,
  active:"7-58",
  recovery:"全体75",
  hit:"",
  block:-2,
  cancel:"×",
  tips:["1F目 打撃/投げに対して無敵","最低保障ダメージ30%","C/PCで数値が変動しない"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyHoldL,keyRight,keyLeft,keyRight,keyPlus,lPunch,keyOr,mPunch],
  movesName:"[横]ソニックハリケーン",
  movesCondition:"",
  startup:8,
  active:"8-58",
  recovery:"全体89",
  hit:"Down",
  block:-26,
  cancel:"×",
  tips:["1-8F 打撃/投げに対して無敵","最低保障ダメージ30%","C/PCで数値が変動しない"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyDown,keyDL,keyLeft,keyDown,keyDL,keyLeft,keyPlus,anyPunch],
  movesName:"SA2 ソリッドパンチャー",
  movesCondition:"",
  startup:"",
  active:"",
  recovery:"全体6",
  hit:"",
  block:"",
  cancel:"×",
  tips:["発動後ソニックブレイク(SA2発動中使用可能技)が発動可能。"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyHoldL,keyRight,keyLeft,keyRight,keyPlus,anyKick],
  movesName:"SA3 クロスファイアサマーソルト",
  movesCondition:"",
  startup:9,
  active:"9-14",
  recovery:"30+着地後40",
  hit:"Down",
  block:-59,
  cancel:"×",
  tips:["1-14F 完全無敵","12-44F 空中判定","最低保障ダメージ50%","C/PCで数値が変動しない","持続の3F目以降は個別ダメージ(3000)","必殺技キャンセル時のみ即時補正10%","HP25%以下で性能変化"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyHoldL,keyRight,keyLeft,keyRight,keyPlus,anyKick],
  movesName:"CA クロスファイアサマーソルト",
  movesCondition:"(HP25%以下で)",
  startup:9,
  active:"9-14",
  recovery:"30+着地後40",
  hit:"Down",
  block:-59,
  cancel:"×",
  tips:["1-14F 完全無敵","12-44F 空中判定","最低保障ダメージ50%","C/PCで数値が変動しない","持続の3F目以降は個別ダメージ(3000)","必殺技キャンセル時のみ即時補正10%"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyNutral,keyOr,keyRight,keyPlus,lPunch,lKick],
  movesName:"ドラゴンスープレックス",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyLeft,keyPlus,lPunch,lKick],
  movesName:"ジュードースルー",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyNutral,keyOr,keyRight,keyPlus,lPunch,lKick],
  movesName:"フライングメイヤー",
  movesCondition:"(ジャンプ中に)",
  startup:5,
  active:"5-7",
  recovery:"着地後3",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyLeft,keyPlus,lPunch,lKick],
  movesName:"フライングバスタードロップ",
  movesCondition:"(ジャンプ中に)",
  startup:5,
  active:"5-7",
  recovery:"着地後3",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
  hitboxImage:"",
}]
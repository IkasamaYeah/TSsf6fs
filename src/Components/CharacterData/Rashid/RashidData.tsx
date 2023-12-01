import rashidImage from './rashid-top.png'
import p1Image from './random-icon.png'
import p2Image from './random-icon.png'
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
import keyNutral from '../CommandImages/nutral-icon.png'
import keyNext from '../CommandImages/key-next.png'
import keyOr from '../CommandImages/or-icon.png'
import rashidLPunch from './lPunch.gif'

export const rashidDetails:{
  name:string;
  strongpoints:string[];
  weakpoints:string[];
  topImage:string;
  p1Image:string;
  p2Image:string;
} = {
  name:"RASHID",
  strongpoints:["aaaa","bbbb","ccccc"],
  weakpoints:["ddddd","eeeee","fffff"],
  topImage:rashidImage,
  p1Image:p1Image,
  p2Image:p2Image,
}

export const rashidMoves:{
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
    type: "通常技",
    commands:[lPunch],
    movesName:"立ち弱P(スタンドスラップ)",
    movesCondition:"",
    startup:4,
    active:"4-5",
    recovery:9,
    hit:4,
    block:-1,
    cancel:"〇",
    tips:["連打キャンセル対応"],
    hitboxImage:rashidLPunch,
  }, {
    type: "通常技",
    commands:[lKick],
    movesName:"立ち弱K(ニースマッシュ)",
    movesCondition:"",
    startup:4,
    active:"4-6",
    recovery:10,
    hit:3,
    block:-1,
    cancel:"〇",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[mPunch],
    movesName:"立ち中P(スタップエルボー)",
    movesCondition:"",
    startup:6,
    active:"6-8",
    recovery:14,
    hit:5,
    block:1,
    cancel:"〇",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[mKick],
    movesName:"立ち中K(スコーピオンテイル)",
    movesCondition:"",
    startup:8,
    active:"8-10",
    recovery:17,
    hit:6,
    block:-3,
    cancel:"×",
    tips:["空振り時硬直2F増加"],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[hPunch],
    movesName:"立ち強P(ウィンドスラスト)",
    movesCondition:"",
    startup:9,
    active:"9-11",
    recovery:21,
    hit:1,
    block:-4,
    cancel:"〇",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[hKick],
    movesName:"立ち強K(レッグツイスター)",
    movesCondition:"",
    startup:13,
    active:"13-20",
    recovery:18,
    hit:-1,
    block:-5,
    cancel:"×",
    tips:["空中ヒット時吹き飛びダウン","PC時吹き飛びダウン"],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[keyDown, keyPlus, lPunch],
    movesName:"しゃがみ弱P(グランドスラップ)",
    movesCondition:"",
    startup:5,
    active:"5-7",
    recovery:7,
    hit:5,
    block:-1,
    cancel:"〇",
    tips:["連打キャンセル対応"],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[keyDown, keyPlus, lKick],
    movesName:"しゃがみ弱K(スティングロー)",
    movesCondition:"",
    startup:5,
    active:"5-7",
    recovery:8,
    hit:3,
    block:-1,
    cancel:"×",
    tips:["連打キャンセル対応"],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[keyDown, keyPlus, mPunch],
    movesName:"しゃがみ中P(ライジングピーク)",
    movesCondition:"",
    startup:6,
    active:"6-9",
    recovery:13,
    hit:4,
    block:1,
    cancel:"〇",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[keyDown, keyPlus, mKick],
    movesName:"しゃがみ中K(ファルコンキック)",
    movesCondition:"",
    startup:7,
    active:"7-9",
    recovery:18,
    hit:-1,
    block:-5,
    cancel:"〇",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[keyDown, keyPlus, hPunch],
    movesName:"しゃがみ強P(グランドスラスト)",
    movesCondition:"",
    startup:12,
    active:"12-14",
    recovery:21,
    hit:5,
    block:-6,
    cancel:"SA",
    tips:["空振り時硬直2F増加"],
    hitboxImage:"",
  }, {
    type: "通常技",
    commands:[keyDown, keyPlus, hKick],
    movesName:"しゃがみ強K(サイクロンスライサー)",
    movesCondition:"",
    startup:9,
    active:"9-11",
    recovery:24,
    hit:"Down",
    block:-11,
    cancel:"×",
    tips:["C/PC時ダウン時間延長"],
    hitboxImage:"",
  },{
    type: "特殊技",
    commands:[keyRight, keyRight],
    movesName:"ラン",
    movesCondition:"",
    startup:"-",
    active:"-",
    recovery:"-",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["2F-60F間で移動の停止が可能","8F-60F 専用技、前方ジャンプに派生可","停止時は5Fの硬直","1F-60F 気流干渉可"],
    hitboxImage:"",
  },{
    type: "特殊技",
    commands:[keyRight,keyPlus,anyPunch],
    movesName:"バックアップ",
    movesCondition:"(ラン中に)",
    startup:8,
    active:"8-17",
    recovery:17,
    hit:7,
    block:-10,
    cancel:"×",
    tips:["1F-17F 気流干渉可"],
    hitboxImage:"",
  }, {
    type: "特殊技",
    commands:[keyRight,keyPlus,anyKick],
    movesName:"テンペスト･ムーン",
    movesCondition:"(ラン中に)",
    startup:16,
    active:"16-24",
    recovery:21,
    hit:3,
    block:-4,
    cancel:"×",
    tips:["2-4F 気流干渉により性能変化","6-21F 空中判定"],
    hitboxImage:"",
  }, {
    type: "特殊技",
    commands:[keyRight,keyPlus,anyKick],
    movesName:"[気流強化]テンペスト・ムーン",
    movesCondition:"(気流接触中にランから)",
    startup:9,
    active:"9-40",
    recovery:22,
    hit:"Down",
    block:-5,
    cancel:"×",
    tips:["20-35F 空中判定"],
    hitboxImage:"",
  }, {
    type: "特殊技",
    commands:[keyRight, keyPlus, mPunch],
    movesName:"フラップスピン",
    movesCondition:"",
    startup:8,
    active:"8-25",
    recovery:18,
    hit:1,
    block:-3,
    cancel:"〇",
    tips:["初段空中ヒット時吹き飛びダウン","3-10F 気流干渉可"],
    hitboxImage:"",
  }, {
    type: "特殊技",
    commands:[keyRight, keyPlus, hPunch],
    movesName:"アサルト・ビーク",
    movesCondition:"",
    startup:22,
    active:"22-24",
    recovery:21,
    hit:3,
    block:-3,
    cancel:"×",
    tips:["4-25F 気流干渉可"],
    hitboxImage:"",
  }, {
    type: "特殊技",
    commands:[keyRight, keyPlus, hKick],
    movesName:"クレセントキック",
    movesCondition:"",
    startup:16,
    active:"16-19",
    recovery:20,
    hit:2,
    block:-3,
    cancel:"×",
    tips:["空振り時硬直3F増加","6-19F 気流干渉可"],
    hitboxImage:"",
  },{
    type: "特殊技",
    commands:[keyDown,keyPlus,hPunch],
    movesName:"ブリッツストライク",
    movesCondition:"(前ジャンプ中に)",
    startup:10,
    active:"10-14",
    recovery:"着地後3",
    hit:"-",
    block:"-",
    cancel:"〇",
    tips:["ヒット、ガード時12-23F 空中での必殺技へ派生可","24-着地まで 空中での通常技及び必殺技へ派生可","空中ヒット時床バウンド"],
    hitboxImage:"",
  },{
    type: "特殊技",
    commands:[keyUp,keyPlus,hKick],
    movesName:"エリアルシュート",
    movesCondition:"(垂直ジャンプ中に)",
    startup:8,
    active:"8-12",
    recovery:"着地後3",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["空中ヒット時吹き飛びダウン"],
    hitboxImage:"",
  },  {
    type: "特殊技",
    commands:[mPunch, keyNext, hKick],
    movesName:"ライジング･キック",
    movesCondition:"",
    startup:13,
    active:"13-16",
    recovery:36,
    hit:"Down",
    block:-20,
    cancel:"〇",
    tips:[""],
    hitboxImage:"",
  },{
    type:"特殊技",
    commands:[keyRight,keyPlus,anyKick,anyKick],
    movesName:"サイド･フリップ",
    movesCondition:"",
    startup:"-",
    active:"-",
    recovery:"全体32",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["18-24F フロント・フリップへ派生可","2F-20F 気流干渉可"],
    hitboxImage:"",
  },{
    type:"特殊技",
    commands:[keyLeft,keyOr,keyNutral,keyOr,keyRight,keyPlus,anyKick,anyKick],
    movesName:"フロント･フリップ",
    movesCondition:"(サイド･フリップ中に)",
    startup:"-",
    active:"-",
    recovery:"着地後8",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["11-43F 空中判定","22-40F 空中での通常技、特殊技及び必殺技へ派生可","1F-36F 気流干渉可"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, lPunch],
    movesName:"弱 スピニング・ミキサー",
    movesCondition:"",
    startup:8,
    active:"8-23",
    recovery:19,
    hit:2,
    block:-3,
    cancel:"SA3",
    tips:["2-17F 気流干渉により性能変化","空振り時硬直5F増加"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, lPunch],
    movesName:"[気流強化]弱 スピニング・ミキサー",
    movesCondition:"(気流接触中に)",
    startup:6,
    active:"6-59",
    recovery:15,
    hit:4,
    block:2,
    cancel:"SA3",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, mPunch],
    movesName:"中 スピニング・ミキサー",
    movesCondition:"",
    startup:8,
    active:"8-26",
    recovery:"着地後11",
    hit:"Down",
    block:-45,
    cancel:"SA3",
    tips:["6-10F 空中判定の攻撃に対して無敵","13-60F 空中判定","2-9F 気流干渉により性能変化","ヒット時のみ、着地硬直11F間を必殺技、SAでキャンセル可"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, mPunch],
    movesName:"[気流強化]中 スピニング・ミキサー",
    movesCondition:"(気流接触中に)",
    startup:5,
    active:"5-59",
    recovery:"着地後11",
    hit:"Down",
    block:-78,
    cancel:"SA3",
    tips:["10-97F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, hPunch],
    movesName:"強 スピニング・ミキサー",
    movesCondition:"",
    startup:6,
    active:"6-39",
    recovery:"着地後14",
    hit:"Down",
    block:-55,
    cancel:"×",
    tips:["6-12F 空中判定の攻撃に対して無敵","13-63F 空中判定","2-6F 気流干渉により性能変化"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, hPunch],
    movesName:"[気流強化]強 スピニング・ミキサー",
    movesCondition:"(気流接触中に)",
    startup:5,
    active:"5-51",
    recovery:"着地後14",
    hit:2,
    block:"-83",
    cancel:"×",
    tips:["6-12F 空中判定の攻撃に対して無敵","8-91F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, anyPunch, anyPunch],
    movesName:"OD スピニング・ミキサー",
    movesCondition:"",
    startup:6,
    active:"6-48",
    recovery:"着地後15",
    hit:"Down",
    block:-42,
    cancel:"×",
    tips:["1-8F 完全無敵","2-9F 気流干渉により性能変化"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, anyPunch, anyPunch],
    movesName:"[気流強化]OD スピニング・ミキサー",
    movesCondition:"(気流接触中に)",
    startup:4,
    active:"4-59",
    recovery:"着地後15",
    hit:"Down",
    block:-36,
    cancel:"×",
    tips:["1-8F 完全無敵","10-97F 空中判定","67-71F 空中での必殺技へ派生可"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, lKick],
    movesName:"弱 イーグル・スパイク",
    movesCondition:"",
    startup:15,
    active:"15-27",
    recovery:31,
    hit:"Down",
    block:-36,
    cancel:"×",
    tips:["4-15F 気流干渉により性能変化","9-38F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, lKick],
    movesName:"[気流強化]弱 イーグル・スパイク",
    movesCondition:"(気流接触中に)",
    startup:14,
    active:"14-26",
    recovery:33,
    hit:"Down",
    block:-24,
    cancel:"×",
    tips:["9-38F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, mKick],
    movesName:"中 イーグル・スパイク",
    movesCondition:"",
    startup:21,
    active:"21-33",
    recovery:26,
    hit:"Down",
    block:-36,
    cancel:"×",
    tips:["6-28F 気流干渉により性能変化","12-38F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, mKick],
    movesName:"[気流強化]中 イーグル・スパイク",
    movesCondition:"(気流接触中に)",
    startup:17,
    active:"17-31",
    recovery:50,
    hit:"Down",
    block:-15,
    cancel:"×",
    tips:["17-45F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, hKick],
    movesName:"強 イーグル・スパイク",
    movesCondition:"",
    startup:26,
    active:"26-38",
    recovery:27,
    hit:"Down",
    block:-36,
    cancel:"×",
    tips:["6-31F 気流干渉により性能変化","15-44F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, hKick],
    movesName:"[気流強化]強 イーグル・スパイク",
    movesCondition:"(気流接触中に)",
    startup:17,
    active:"17-31",
    recovery:50,
    hit:"Down",
    block:-15,
    cancel:"×",
    tips:["8-45F 空中判定"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, anyKick, anyKick],
    movesName:"OD イーグル・スパイク",
    movesCondition:"",
    startup:21,
    active:"21-33",
    recovery:26,
    hit:"Down",
    block:-36,
    cancel:"×",
    tips:["6-30F 気流干渉により性能変化","12-40F 空中判定"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, anyKick, anyKick],
    movesName:"[気流強化]OD イーグル・スパイク",
    movesCondition:"(気流接触中に)",
    startup:18,
    active:"18-31",
    recovery:22,
    hit:"Down",
    block:-24,
    cancel:"×",
    tips:["12-40F 空中判定","1-40F 飛び道具に対して無敵"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, lKick],
    movesName:"弱 ワールウィンド・ショット",
    movesCondition:"",
    startup:17,
    active:"-",
    recovery:"全体52",
    hit:-1,
    block:-9,
    cancel:"SA3",
    tips:["29-48Fでボタンを放すとホールド版へ派生","48F以降はホールドMAXへ派生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, lKick],
    movesName:"弱 ワールウィンド・ショット(ホールド)",
    movesCondition:"",
    startup:34,
    active:"-",
    recovery:"-",
    hit:5,
    block:0,
    cancel:"SA3",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, lKick],
    movesName:"弱 ワールウィンド・ショット(ホールドMAX)",
    movesCondition:"",
    startup:53,
    active:"-",
    recovery:"-",
    hit:16,
    block:8,
    cancel:"SA3",
    tips:["動作後、60F間気流が発生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, mKick],
    movesName:"中 ワールウィンド・ショット",
    movesCondition:"",
    startup:17,
    active:"-",
    recovery:"全体52",
    hit:-1,
    block:-9,
    cancel:"SA3",
    tips:["29-48Fでボタンを放すとホールド版へ派生","48F以降はホールドMAXへ派生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, mKick],
    movesName:"中 ワールウィンド・ショット(ホールド)",
    movesCondition:"",
    startup:34,
    active:"-",
    recovery:"-",
    hit:5,
    block:0,
    cancel:"SA3",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, mKick],
    movesName:"中 ワールウィンド・ショット(ホールドMAX)",
    movesCondition:"",
    startup:53,
    active:"-",
    recovery:"-",
    hit:16,
    block:8,
    cancel:"SA3",
    tips:["動作後、60F間気流が発生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, hKick],
    movesName:"強 ワールウィンド・ショット",
    movesCondition:"",
    startup:17,
    active:"-",
    recovery:"全体52",
    hit:-1,
    block:-9,
    cancel:"SA3",
    tips:["29-48Fでボタンを放すとホールド版へ派生","48F以降はホールドMAXへ派生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, hKick],
    movesName:"強 ワールウィンド・ショット(ホールド)",
    movesCondition:"",
    startup:34,
    active:"-",
    recovery:"-",
    hit:5,
    block:0,
    cancel:"SA3",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, hKick],
    movesName:"強 ワールウィンド・ショット(ホールドMAX)",
    movesCondition:"",
    startup:53,
    active:"-",
    recovery:"-",
    hit:16,
    block:8,
    cancel:"SA3",
    tips:["動作後、60F間気流が発生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, anyKick, anyKick],
    movesName:"OD ワールウィンド・ショット",
    movesCondition:"",
    startup:17,
    active:"-",
    recovery:"全体52",
    hit:"Down",
    block:-2,
    cancel:"SA3",
    tips:["36Fまでボタンホールドでホールド版へ派生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDR, keyRight, keyPlus, anyKick, anyKick],
    movesName:"OD ワールウィンド・ショット(ホールド)",
    movesCondition:"",
    startup:44,
    active:"-",
    recovery:"-",
    hit:"Down",
    block:10,
    cancel:"SA3",
    tips:["動作後、60F間気流が発生"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, lPunch],
    movesName:"弱 アラビアン・サイクロン",
    movesCondition:"",
    startup:15,
    active:"15-17",
    recovery:28,
    hit:"Down",
    block:-9,
    cancel:"SA3",
    tips:["21-22F 専用技へ派生可","飛び道具相殺判定あり"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, mPunch],
    movesName:"中 アラビアン・サイクロン",
    movesCondition:"",
    startup:20,
    active:"20-22",
    recovery:26,
    hit:"Down",
    block:-7,
    cancel:"SA3",
    tips:["26-27F 専用技へ派生可","飛び道具相殺判定あり"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, hPunch],
    movesName:"強 アラビアン・サイクロン",
    movesCondition:"",
    startup:27,
    active:"27-29",
    recovery:"全体69",
    hit:"Down",
    block:-2,
    cancel:"SA3",
    tips:["33-34F 専用技へ派生可","飛び道具相殺判定あり"],
    hitboxImage:"",
  }, {
    type: "必殺技",
    commands:[keyDown, keyDL, keyLeft, keyPlus, anyPunch, anyPunch],
    movesName:"OD アラビアン・サイクロン",
    movesCondition:"",
    startup:20,
    active:"20-22",
    recovery:"全体53",
    hit:"Down",
    block:-10,
    cancel:"SA3",
    tips:["26-27F 専用技へ派生可","ガード時硬直3F増加","動作後、60F間気流が発生","飛び道具相殺判定あり"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyLeft,keyPlus,anyKick],
    movesName:"ウィンド･ストローク",
    movesCondition:"(アラビアン･サイクロン中に)",
    startup:"-",
    active:"-",
    recovery:"着地後6",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["22-61F 空中判定","32-51F 空中での通常技へ派生可","23F-47F 気流干渉可"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyRight,keyPlus,anyKick],
    movesName:"アサルト･ロール",
    movesCondition:"(アラビアン･サイクロン中に)",
    startup:"-",
    active:"-",
    recovery:"着地後33",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["17-20F 専用技へ派生可","8F-25F 気流干渉可"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[anyKick],
    movesName:"アサルト・ネイル",
    movesCondition:"(アサルト･ロール中に)",
    startup:17,
    active:"17-19",
    recovery:26,
    hit:"Down",
    block:-9,
    cancel:"SA3",
    tips:[""],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyDown,keyDL,keyLeft,keyPlus,lKick],
    movesName:"弱 アラビアン･スカイハイ",
    movesCondition:"(前ジャンプ中に)",
    startup:13,
    active:"13-21",
    recovery:"着地後3",
    hit:"-",
    block:"-",
    cancel:"×",
    tips:["1F-13F 気流干渉可","51F-着地まで 空中での通常技、特殊技及び必殺技へ派生可","14-21F コンボ中以外にもヒットする"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyDown,keyDL,keyLeft,keyPlus,mKick],
    movesName:"中 アラビアン･スカイハイ",
    movesCondition:"(前ジャンプ中に)",
    startup:18,
    active:"18-26",
    recovery:"着地後3",
    hit:"Down",
    block:"-",
    cancel:"×",
    tips:["1F-18F 気流干渉可","9F-着地まで 空中での通常技、特殊技及び必殺技へ派生可","19-26F コンボ中以外にもヒットする"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyDown,keyDL,keyLeft,keyPlus,hKick],
    movesName:"強 アラビアン･スカイハイ",
    movesCondition:"(前ジャンプ中に)",
    startup:21,
    active:"21-29",
    recovery:"着地後3",
    hit:"Down",
    block:"-",
    cancel:"×",
    tips:["1F-21F 気流干渉可","65F-着地まで 空中での通常技、特殊技及び必殺技へ派生可","22-29F コンボ中以外にもヒットする"],
    hitboxImage:"",
  },{
    type: "必殺技",
    commands:[keyDown,keyDL,keyLeft,keyPlus,anyKick,anyKick],
    movesName:"OD アラビアン･スカイハイ",
    movesCondition:"(前ジャンプ中に)",
    startup:13,
    active:"13-21",
    recovery:"着地後3",
    hit:"Down",
    block:"-",
    cancel:"×",
    tips:["1F-13F 気流干渉可","ガード、空振り時のみ 47F-着地まで 空中での通常技、特殊技及び必殺技へ派生可","14-21F コンボ中以外にもヒットする"],
    hitboxImage:"",
  },{
    type: "スーパーアーツ",
    commands:[keyDown, keyDR, keyRight, keyDown, keyDR, keyRight, keyPlus, anyKick],
    movesName:"SA1 スーパー･ラシード･キック",
    movesCondition:"",
    startup:9,
    active:"9-15",
    recovery:76,
    hit:"Down",
    block:-53,
    cancel:"×",
    tips:["1-16F 打撃・投げに対して無敵","攻撃持続3-7Fのヒット時、攻撃判定全ての空中ヒット時は非ロックに性能が変化する/ダメージ1800","10-36F 空中判定","最低保障ダメージ30%","カウンター/パニッシュカウンターで数値が変動しない"],
    hitboxImage:"",
  }, {
    type: "スーパーアーツ",
    commands:[keyDown, keyDL, keyLeft, keyDown, keyDL, keyLeft, keyPlus, anyKick],
    movesName:"SA2 イウサール",
    movesCondition:"",
    startup:11,
    active:"-",
    recovery:"全体33",
    hit:"Down",
    block:33,
    cancel:"×",
    tips:["攻撃持続中全て、持続終了後100F間は気流の干渉判定が発生","攻撃持続中、アラビアン・サイクロン初段部分を干渉させるとイウサールを加速させる","最低保障ダメージ40%","カウンター/パニッシュカウンターで数値が変動しない"],
    hitboxImage:"",
  }, {
    type: "スーパーアーツ",
    commands:[keyDown, keyDR, keyRight, keyDown, keyDR, keyRight, keyPlus, anyPunch],
    movesName:"SA3 アルタイル",
    movesCondition:"",
    startup:11,
    active:10 - 28,
    recovery:82,
    hit:"Down",
    block:-75,
    cancel:"×",
    tips:["1-16F 完全無敵","最低保障ダメージ50%","カウンター/パニッシュカウンターで数値が変動しない","HP25%以下で性能変化"],
    hitboxImage:"",
  }, {
    type: "スーパーアーツ",
    commands:[keyDown, keyDR, keyRight, keyDown, keyDR, keyRight, keyPlus, anyPunch],
    movesName:"CA アルタイル",
    movesCondition:"(HP25%以下で)",
    startup:11,
    active:10 - 28,
    recovery:82,
    hit:"Down",
    block:-75,
    cancel:"×",
    tips:["1-16F 完全無敵","最低保障ダメージ50%","カウンター/パニッシュカウンターで数値が変動しない"],
    hitboxImage:"",
  }, {
    type: "投げ",
    commands:[keyNutral,keyOr,keyRight,keyPlus, lPunch, lKick],
    movesName:"ライディング･グライド",
    movesCondition:"",
    startup:5,
    active:"5-7",
    recovery:23,
    hit:"Down",
    block:"-",
    cancel:"×",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "投げ",
    commands:[keyLeft, keyPlus, lPunch, lKick],
    movesName:"サンセット･ドロップ",
    movesCondition:"",
    startup:5,
    active:"5-7",
    recovery:23,
    hit:"Down",
    block:"-",
    cancel:"×",
    tips:[""],
    hitboxImage:"",
  }, {
    type: "投げ",
    commands:[lPunch, lKick],
    movesName:"デザート･スライダー",
    movesCondition:"(ジャンプ中に)",
    startup:5,
    active:"5-7",
    recovery:"着地後3",
    hit:"Down",
    block:"-",
    cancel:"×",
    tips:[""],
    hitboxImage:"",
  }]
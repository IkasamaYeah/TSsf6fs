import zangiefImage from './zangief-top.png'
import p1Image from './zangief-1p-image.png'
import p2Image from './zangief-2p-image.png'
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
import keyCircle from '../CommandImages/circle-icon.png'
import keyNutral from '../CommandImages/nutral-icon.png'
import keyNext from '../CommandImages/key-next.png'

export const zangiefDetails:{
  name:string;
  strongpoints:string[];
  weakpoints:string[];
  topImage:string;
  p1Image:string;
  p2Image:string;
} = {
  name:"ZANGIEF",
  strongpoints:["aaaaa","bbbbb","ccccc"],
  weakpoints:["ddddd","eeeee","fffff"],
  topImage:zangiefImage,
  p1Image:p1Image,
  p2Image:p2Image,
}

export const zangiefMoves:{
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
  movesName:"立ち弱P(ブレーンチョップ)",
  movesCondition:"",
  startup:7,
  active:"7-9",
  recovery:9,
  hit:4,
  block:2,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[lPunch],
  movesName:"[連打]立ち弱P(ブレーンチョップ)",
  movesCondition:"",
  startup:4,
  active:4-6,
  recovery:9,
  hit:4,
  block:2,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[lKick],
  movesName:"立ち弱K(ローキック)",
  movesCondition:"",
  startup:7,
  active:7-8,
  recovery:17,
  hit:-2,
  block:-4,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[mPunch],
  movesName:"立ち中P(カウンターチョップ)",
  movesCondition:"",
  startup:9,
  active:"9-12",
  recovery:17,
  hit:2,
  block:-2,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[mKick],
  movesName:"立ち中K(ミドルキック)",
  movesCondition:"",
  startup:10,
  active:"10-13",
  recovery:19,
  hit:1,
  block:-4,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[hPunch],
  movesName:"立ち強P(ダイナマイトパンチ)",
  movesCondition:"",
  startup:16,
  active:"16-18",
  recovery:22,
  hit:3,
  block:-3,
  cancel:"×",
  tips:["C/PC時吹き飛びダウン","空振り時硬直2F増加","ホールド時、4F~上半身アーマー判定(1回)","23F以上ホールドで性能変化"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[hPunch],
  movesName:"立ち強P(ダイナマイトパンチ)(ホールド)",
  movesCondition:"",
  startup:32,
  active:"32-34",
  recovery:22,
  hit:"Down",
  block:3,
  cancel:"×",
  tips:["4-34上半身アーマー(1回)","PC時吹き飛び時間増加","空振り時硬直2F増加"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[hKick],
  movesName:"立ち強K(ロシアンハイキック)",
  movesCondition:"",
  startup:13,
  active:"13-16",
  recovery:21,
  hit:3,
  block:1,
  cancel:"×",
  tips:["空中ヒット時吹き飛びダウン","PC時吹き飛びダウン&吹き飛び時間増加"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,lPunch],
  movesName:"しゃがみ弱P(ヘルフィンガー)",
  movesCondition:"",
  startup:6,
  active:"6-7",
  recovery:8,
  hit:6,
  block:1,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,lPunch],
  movesName:"[連打]しゃがみ弱P(ヘルフィンガー)",
  movesCondition:"",
  startup:3,
  active:3-4,
  recovery:8,
  hit:6,
  block:1,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,lKick],
  movesName:"しゃがみ弱K(ショートスタンプ)",
  movesCondition:"",
  startup:3,
  active:"3-5",
  recovery:12,
  hit:0,
  block:-3,
  cancel:"×",
  tips:["連打キャンセル対応"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,mPunch],
  movesName:"しゃがみ中P(ロシアンフィスト)",
  movesCondition:"",
  startup:8,
  active:"8-10",
  recovery:16,
  hit:3,
  block:-1,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,mKick],
  movesName:"しゃがみ中K(ダイナマイトキック)",
  movesCondition:"",
  startup:9,
  active:"9-11",
  recovery:18,
  hit:2,
  block:-2,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,hPunch],
  movesName:"しゃがみ強P(ダイナマイトエルボー)",
  movesCondition:"",
  startup:12,
  active:"12-19",
  recovery:35,
  hit:"Down",
  block:-19,
  cancel:"×",
  tips:["PC時吹き飛び時間増加"],
  hitboxImage:"",
},{
  type:"通常技",
  commands:[keyDown,keyPlus,hKick],
  movesName:"しゃがみ強K(ビッグスタンプ)",
  movesCondition:"",
  startup:12,
  active:"12-14",
  recovery:27,
  hit:"Down",
  block:-13,
  cancel:"×",
  tips:["PC時吹き飛び変化","PC時ダウン時間増加"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDR,keyPlus,mPunch],
  movesName:"ヘルスタブ",
  movesCondition:"",
  startup:7,
  active:"7-9",
  recovery:21,
  hit:-1,
  block:-3,
  cancel:"〇",
  tips:["強制立ち効果"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,mKick],
  movesName:"ニーバット",
  movesCondition:"",
  startup:14,
  active:"14-20",
  recovery:14,
  hit:0,
  block:-4,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,hPunch],
  movesName:"ヘッドバッド",
  movesCondition:"",
  startup:14,
  active:"14-18",
  recovery:15,
  hit:6,
  block:4,
  cancel:"〇",
  tips:["空振り時硬直2F増加"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,hKick],
  movesName:"サイクロンニールキック",
  movesCondition:"",
  startup:22,
  active:"22-28",
  recovery:25,
  hit:"Down",
  block:-12,
  cancel:"×",
  tips:["PC時床バウンド"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDR,keyPlus,hKick],
  movesName:"スメタナドロップキック",
  movesCondition:"",
  startup:16,
  active:"16-19",
  recovery:40,
  hit:"Down",
  block:-18,
  cancel:"×",
  tips:["5-26F投げ無敵","PC時壁張り付け効果"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,keyPlus,hPunch],
  movesName:"フライングボディプレス",
  movesCondition:"(ジャンプ中に)",
  startup:9,
  active:"9-17",
  recovery:"着地後8",
  hit:"",
  block:"",
  cancel:"×",
  tips:["めくり性能"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyUp,hPunch],
  movesName:"フライングヘッドバッド",
  movesCondition:"(垂直ジャンプ中に)",
  startup:8,
  active:"8-11",
  recovery:"着地後3",
  hit:"",
  block:"",
  cancel:"〇",
  tips:["空中ヒット時吹き飛びダウン"],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[mPunch,keyNext,mPunch],
  movesName:"マシンガンチョップ(2段目)",
  movesCondition:"",
  startup:9,
  active:"9-12",
  recovery:20,
  hit:2,
  block:-6,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[mPunch,keyNext,mPunch,keyNext,mPunch],
  movesName:"マシンガンチョップ(3段目)",
  movesCondition:"",
  startup:15,
  active:"15-17",
  recovery:32,
  hit:"Down",
  block:-17,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,keyDown,keyPlus,mKick],
  movesName:"ストンピング(1段目)",
  movesCondition:"",
  startup:9,
  active:"9-11",
  recovery:17,
  hit:4,
  block:-3,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,keyDown,keyPlus,mKick,keyNext,mKick],
  movesName:"ストンピング(2段目)",
  movesCondition:"",
  startup:9,
  active:"9-11",
  recovery:19,
  hit:-3,
  block:-4,
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"特殊技",
  commands:[keyDown,keyDown,keyPlus,mKick,keyNext,mKick,keyNext,mKick],
  movesName:"ストンピング(3段目)",
  movesCondition:"",
  startup:10,
  active:"10-12",
  recovery:24,
  hit:-2,
  block:-10,
  cancel:"〇",
  tips:[""],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[anyPunch,anyPunch],
  movesName:"ダブルラリアット",
  movesCondition:"",
  startup:15,
  active:"15-45",
  recovery:27,
  hit:"Down",
  block:-12,
  cancel:"SA3",
  tips:["6-45F飛び道具無敵","攻撃動作中、左右に移動可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[lPunch,mPunch,hPunch],
  movesName:"OD ダブルラリアット",
  movesCondition:"",
  startup:12,
  active:"12-36",
  recovery:26,
  hit:"Down",
  block:-11,
  cancel:"SA2",
  tips:["1-36F飛び道具無敵","6-12F空中無敵","攻撃動作中、左右に移動可能"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyCircle,keyPlus,lPunch],
  movesName:"弱 スクリューパイルドライバー",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:54,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(2875)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyCircle,keyPlus,mPunch],
  movesName:"中 スクリューパイルドライバー",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:54,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3335)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyCircle,keyPlus,hPunch],
  movesName:"強 スクリューパイルドライバー",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:54,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3795)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyCircle,keyPlus,anyPunch,anyPunch],
  movesName:"OD スクリューパイルドライバー",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:54,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3910)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyCircle,anyKick],
  movesName:"ボルシチダイナマイト",
  movesCondition:"(ジャンプ中に)",
  startup:4,
  active:"4-6",
  recovery:"着地後16",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["空中の相手にのみヒットする","PC時個別ダメージ3260"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyCircle,anyKick,anyKick],
  movesName:"OD ボルシチダイナマイト",
  movesCondition:"(ジャンプ中に)",
  startup:4,
  active:"4-6",
  recovery:"着地後16",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["空中の相手にのみヒットする","PC時個別ダメージ3375"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyDR,keyDown,keyDL,keyLeft,keyPlus,anyKick],
  movesName:"ロシアンスープレックス",
  movesCondition:"(至近距離で)",
  startup:10,
  active:"10-11",
  recovery:50,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3335)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyDR,keyDown,keyDL,keyLeft,keyPlus,anyKick,anyKick],
  movesName:"ロシアンスープレックス",
  movesCondition:"(至近距離で)",
  startup:10,
  active:"10-11",
  recovery:50,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3680)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyDR,keyDown,keyDL,keyLeft,keyPlus,anyKick],
  movesName:"[近距離]シベリアンエクスプレス",
  movesCondition:"(近距離で)",
  startup:28,
  active:"28-29",
  recovery:41,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3105)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyDR,keyDown,keyDL,keyLeft,keyPlus,anyKick,anyKick],
  movesName:"[近距離]シベリアンエクスプレス",
  movesCondition:"(近距離で)",
  startup:23,
  active:"23-24",
  recovery:44,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["PC時個別ダメージ(3450)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyDR,keyDown,keyDL,keyLeft,keyPlus,anyKick],
  movesName:"[遠距離]シベリアンエクスプレス",
  movesCondition:"(遠距離で)",
  startup:55,
  active:"55-56",
  recovery:40,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["3-55Fアーマー判定(2回)","相手との間合いによって移動距離が変化","PC時個別ダメージ(3105)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyRight,keyDR,keyDown,keyDL,keyLeft,keyPlus,anyKick,anyKick],
  movesName:"[遠距離]OD シベリアンエクスプレス",
  movesCondition:"(遠距離で)",
  startup:54,
  active:"54-55",
  recovery:40,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["3-55Fアーマー判定(2回)","相手との間合いによって移動距離が変化","PC時個別ダメージ(3450)"],
  hitboxImage:"",
},{
  type:"必殺技",
  commands:[keyDown,keyDown,keyPlus,hKick],
  movesName:"ツンドラストーム",
  movesCondition:"",
  startup:5,
  active:"5-55",
  recovery:23,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["当身判定は地上の蹴り技にのみ反応"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyDown,keyDR,keyRight,keyDown,keyDR,keyRight,keyPlus,anyKick],
  movesName:"SA1 エリアルロシアンスラム",
  movesCondition:"",
  startup:11,
  active:"11-17",
  recovery:60,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["1-17F完全無敵","2-30F空中判定","空中の相手にのみヒットする","最低保証ダメージ30%","C/PCで数値が変動しない","簡易入力時個別ダメージ(2100)"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyDown,keyDR,keyRight,keyDown,keyDR,keyRight,keyPlus,anyPunch],
  movesName:"[ホールド]SA2 サイクロンラリアット",
  movesCondition:"",
  startup:18,
  active:"18-122",
  recovery:52,
  hit:"Down",
  block:"-35",
  cancel:"×",
  tips:["1-18F完全無敵","19-122F飛び道具無敵","ホールドなしの場合投げに移行","最低保証ダメージ40%","C/PCで数値が変動しない"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyDown,keyDR,keyRight,keyDown,keyDR,keyRight,keyPlus,anyPunch],
  movesName:"[その場]SA2 サイクロンラリアット",
  movesCondition:"",
  startup:"",
  active:"",
  recovery:"",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyDown,keyDR,keyRight,keyDown,keyDR,keyRight,keyPlus,anyPunch],
  movesName:"[移動]SA2 サイクロンラリアット",
  movesCondition:"",
  startup:"",
  active:"",
  recovery:"",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["左右入力で移動方向を指定可能"],
  hitboxImage:"",
},{
  type:"スーパーアーツ",
  commands:[keyCircle,keyCircle,anyPunch],
  movesName:"SA3 ボリジョイストームバスター",
  movesCondition:"",
  startup:6,
  active:"6-7",
  recovery:116,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:["最低保証ダメージ50%","C/PCで数値が変動しない"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyNutral,keyPlus,lPunch,lKick],
  movesName:"ボディスラム",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"",
  block:"",
  cancel:"×",
  tips:["PCヒット時性能変化","動作中ボタンホールドで追加ダメージ"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyLeft,keyPlus,lPunch,lKick],
  movesName:"キャプチュード",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"",
  block:"",
  cancel:"×",
  tips:["PCヒット時性能変化"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyRight,keyPlus,lPunch,lKick],
  movesName:"ジャーマンスープレックス",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"",
  block:"",
  cancel:"×",
  tips:["PCヒット時性能変化"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyDR,keyPlus,lPunch,lKick],
  movesName:"スパインバスター",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"",
  block:"",
  cancel:"×",
  tips:["PCヒット時性能変化"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyDL,keyPlus,lPunch,lKick],
  movesName:"ロシアンドロップ",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"",
  block:"",
  cancel:"×",
  tips:["PCヒット時性能変化"],
  hitboxImage:"",
},{
  type:"投げ",
  commands:[keyDown,keyPlus,lPunch,lKick],
  movesName:"ブレーンバスター",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"",
  block:"",
  cancel:"×",
  tips:["PCヒット時性能変化"],
  hitboxImage:"",
},]
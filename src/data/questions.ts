import { Scores } from '../store/useTestStore';

export type Answer = {
  text: string;
  axis: keyof Scores;
  value: number;
};

export type Question = {
  id: number;
  chapter: string;
  text: string;
  answers: Answer[];
};

export const questions: Question[] = [
  // --- 제 1장: 강호 출두 ---
  {
    id: 1, chapter: "제 1장: 강호 출두",
    text: "무림에 갓 출두한 당신. 가장 먼저 챙기고 싶은 것은?",
    answers: [
      { text: "나침반과 지도. 목적지까지의 경로를 확실히 파악해야 안심이 된다.", axis: 'order', value: 1 },
      { text: "일단 발길 닿는 대로 가본다. 여정 자체에서 새로운 길을 찾을 것이다.", axis: 'order', value: -1 },
      { text: "두둑한 은자와 식량. 어딜 가든 결국 가장 필요한 건 현실적인 자원이다.", axis: 'ideology', value: -1 },
      { text: "유명한 협객들의 전기. 그들의 발자취를 따라가며 마음가짐을 다잡는다.", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 2, chapter: "제 1장: 강호 출두",
    text: "우연히 들른 주막에서 험악한 사내들이 종업원을 괴롭히고 있다.",
    answers: [
      { text: "참을 수 없다. 당장 나서서 주먹으로 확실하게 버릇을 고쳐놓는다.", axis: 'attitude', value: 1 },
      { text: "종업원과 사내들 사이에 개입해 부드럽게 상황을 중재하고 무마시킨다.", axis: 'attitude', value: -1 },
      { text: "시선을 끌어 정면에서 사내들을 도발하고 밖으로 유인해 싸운다.", axis: 'method', value: 1 },
      { text: "사내들의 동태를 숨어서 살피다가 가장 취약한 순간에 급소를 노린다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 3, chapter: "제 1장: 강호 출두",
    text: "스승님이 당신에게만 중대한 비밀 임무를 내렸다.",
    answers: [
      { text: "스승님의 의도와 이 임무가 가지는 숭고한 의미를 먼저 가슴 깊이 새긴다.", axis: 'ideology', value: 1 },
      { text: "이 임무를 성공했을 때 나에게 돌아올 확실한 보상과 이득부터 계산한다.", axis: 'ideology', value: -1 },
      { text: "실패란 없다. 어떤 희생을 치르더라도 강압적으로 밀어붙여 달성하겠다.", axis: 'attitude', value: 1 },
      { text: "상황은 언제든 변할 수 있으니, 무리하지 않고 유연하게 대처하기로 한다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 4, chapter: "제 1장: 강호 출두",
    text: "무공을 수련할 때 당신의 스타일은?",
    answers: [
      { text: "스승님이 정해준 수련 일과표를 한 치의 오차 없이 매일매일 반복한다.", axis: 'order', value: 1 },
      { text: "그날의 컨디션과 깨달음에 따라 수련 시간과 방법을 자유롭게 바꾼다.", axis: 'order', value: -1 },
      { text: "복잡한 초식보다는 압도적인 힘과 속도로 정면 돌파하는 방식을 선호한다.", axis: 'method', value: 1 },
      { text: "상대의 허점을 찌르거나 시선을 교란하는 변칙적인 초식을 깊게 판다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 5, chapter: "제 1장: 강호 출두",
    text: "첫 임무를 떠나기 전날 밤, 당신의 행동은?",
    answers: [
      { text: "가방을 세 번 확인하고 일어날 수 있는 모든 변수에 대한 대응책을 세운다.", axis: 'order', value: 1 },
      { text: "충분한 수면이 최고다. 내일 일은 내일 생각하기로 하고 일찍 잠든다.", axis: 'order', value: -1 },
      { text: "이 임무로 인해 강호에 미칠 파장과 문파의 명예를 생각하며 밤을 지새운다.", axis: 'ideology', value: 1 },
      { text: "임무 목표의 약점과 동선 등 실질적인 정보와 데이터를 밤새 달달 외운다.", axis: 'ideology', value: -1 },
    ]
  },

  // --- 제 2장: 기연과 위기 ---
  {
    id: 6, chapter: "제 2장: 기연과 위기",
    text: "산속에서 길을 잃었다. 눈앞에 갈림길이 나타났는데...",
    answers: [
      { text: "햇빛의 방향과 지형을 논리적으로 분석해 가장 빠르고 효율적인 길을 택한다.", axis: 'ideology', value: -1 },
      { text: "이 산에 얽힌 전설과 영적인 기운을 느끼며 마음이 이끄는 길로 향한다.", axis: 'ideology', value: 1 },
      { text: "일단 눈앞에 뚫려 있는 넓은 길로 망설임 없이 발걸음을 내디딘다.", axis: 'method', value: 1 },
      { text: "누군가 지나간 흔적이 있는지 덤불 속에 숨어 은밀히 족적부터 살핀다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 7, chapter: "제 2장: 기연과 위기",
    text: "동굴에서 기이한 고수를 만났다. 그가 대뜸 당신에게 퀴즈를 낸다면?",
    answers: [
      { text: "그의 의도를 분석하며 질문의 핵심에 대한 정답을 빠르게 도출해 낸다.", axis: 'order', value: 1 },
      { text: "정해진 답은 없다며, 내 상상력을 발휘해 엉뚱하고 창의적인 대답을 던진다.", axis: 'order', value: -1 },
      { text: "틀리더라도 내 주관을 확고하게 밀어붙이며 기세에서 물러서지 않고 답한다.", axis: 'attitude', value: 1 },
      { text: "고수의 기분을 거스르지 않게 미소 지으며 유연하고 둥글게 대답을 돌린다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 8, chapter: "제 2장: 기연과 위기",
    text: "우연히 주운 낡은 비급. 수련하기가 매우 까다로워 보이는데?",
    answers: [
      { text: "어려울수록 좋다. 내 한계를 시험하기 위해 무식할 정도로 정면에서 부딪친다.", axis: 'method', value: 1 },
      { text: "무작정 따라 하지 않고, 나에게 유리한 부분만 교묘하게 발췌해서 응용한다.", axis: 'method', value: -1 },
      { text: "이 비급이 왜 나에게 왔는지, 그 운명적인 의미와 철학을 찾으며 경건히 수련한다.", axis: 'ideology', value: 1 },
      { text: "수련이 실패할 경우를 대비해 해독제와 여러 가지 안전장치를 철저히 준비한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 9, chapter: "제 2장: 기연과 위기",
    text: "절체절명의 위기! 강적들에게 겹겹이 포위당했다.",
    answers: [
      { text: "미리 짜둔 철저한 탈출 플랜 B를 즉각 가동해 체계적으로 빠져나간다.", axis: 'order', value: 1 },
      { text: "순간적인 재치와 주변의 지형지물을 즉흥적으로 활용해 기지를 발휘한다.", axis: 'order', value: -1 },
      { text: "항복은 없다. 피투성이가 되더라도 끝까지 검을 쥐고 강경하게 버틴다.", axis: 'attitude', value: 1 },
      { text: "일단 살고 봐야 한다. 자존심을 굽히고 살려달라고 교섭하며 훗날을 기약한다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 10, chapter: "제 2장: 기연과 위기",
    text: "위기에서 당신을 도와준 은인이 알고 보니 적대 세력의 인물이라면?",
    answers: [
      { text: "은혜는 은혜다. 그의 소속과 상관없이 그 사람 자체와의 인연을 소중히 여긴다.", axis: 'ideology', value: 1 },
      { text: "어쨌든 목숨을 빚졌으니, 나중에 딱 그 가치만큼만 정확하게 갚고 선을 긋는다.", axis: 'ideology', value: -1 },
      { text: "남들 눈에 띄면 피곤해진다. 밤에 몰래 그를 찾아가 은밀하게 감사 인사를 전한다.", axis: 'method', value: -1 },
      { text: "당당하게 대낮에 그를 찾아가 소속을 떠나 술 한잔하자고 호탕하게 제안한다.", axis: 'method', value: 1 },
    ]
  },

  // --- 제 3장: 정사 대전 ---
  {
    id: 11, chapter: "제 3장: 정사 대전",
    text: "무림 전체의 명운이 걸린 거대한 전쟁이 시작되었다. 당신의 포지션은?",
    answers: [
      { text: "아군의 선봉에 서서 적의 진영을 정면으로 붕괴시키는 위풍당당한 돌격대장", axis: 'method', value: 1 },
      { text: "적의 보급로와 통신망을 어둠 속에서 끊어버리는 은밀한 암살/공작 부대", axis: 'method', value: -1 },
      { text: "사사로운 감정을 배제하고 오직 승리만을 위해 효율적인 전술을 짜는 지휘관", axis: 'ideology', value: -1 },
      { text: "병사들의 사기를 북돋고 대의명분을 부르짖으며 정신적 지주가 되는 리더", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 12, chapter: "제 3장: 정사 대전",
    text: "아군의 작전이 마음에 들지 않는다. 성공 확률은 높지만 희생이 큰 작전이다.",
    answers: [
      { text: "희생이 따르더라도 가장 확실한 승리를 가져올 수 있다면 강경하게 찬성한다.", axis: 'attitude', value: 1 },
      { text: "소수의 희생이라도 막아야 한다며 끝까지 대안을 찾고 유연한 방법을 건의한다.", axis: 'attitude', value: -1 },
      { text: "이미 결정된 작전이라면 군말 없이 체계적으로 내 역할을 완벽히 수행한다.", axis: 'order', value: 1 },
      { text: "작전의 틀은 유지하되, 내 판단에 따라 현장에서 유동적으로 움직여 희생을 줄인다.", axis: 'order', value: -1 },
    ]
  },
  {
    id: 13, chapter: "제 3장: 정사 대전",
    text: "전투 중, 적군이 평화 협상을 제안해 왔다.",
    answers: [
      { text: "협상 테이블에 당당히 걸어 나가 상대방의 의중을 대놓고 직설적으로 떠본다.", axis: 'method', value: 1 },
      { text: "협상장에 스파이를 심어두고, 뒤에서 상대의 진짜 꿍꿍이를 조용히 캐낸다.", axis: 'method', value: -1 },
      { text: "저들의 말을 어디까지 믿을 수 있을지 과거의 데이터와 확률을 철저히 계산한다.", axis: 'ideology', value: -1 },
      { text: "진정성 있는 대화를 통해 유혈 사태를 막고 평화를 이끌어낼 희망을 품는다.", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 14, chapter: "제 3장: 정사 대전",
    text: "협상이 결렬되고 마지막 전투가 벌어지기 전날 밤.",
    answers: [
      { text: "무기 날을 세우고 갑옷을 정비하며 내일의 타임라인을 머릿속으로 시뮬레이션한다.", axis: 'order', value: 1 },
      { text: "동료들과 밤새 술을 마시며 내일 일은 내일의 나에게 맡기고 현재를 즐긴다.", axis: 'order', value: -1 },
      { text: "배신자는 용서할 수 없다며 병사들의 적개심과 분노를 한계까지 끌어올린다.", axis: 'attitude', value: 1 },
      { text: "전투는 어쩔 수 없지만, 서로의 피해를 최소화할 수 있는 방어적인 진형을 짠다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 15, chapter: "제 3장: 정사 대전",
    text: "마침내 적의 수괴를 쓰러뜨렸다. 그의 처우를 결정해야 한다.",
    answers: [
      { text: "전쟁의 승리를 세상에 알리기 위해 만천하에 공개적으로 그를 처벌한다.", axis: 'method', value: 1 },
      { text: "그를 은밀히 가두고 적의 잔존 세력을 조종할 꼭두각시 카드(볼모)로 쓴다.", axis: 'method', value: -1 },
      { text: "모든 혼란의 근원이므로, 사사로운 감정 없이 정해진 율법에 따라 처리한다.", axis: 'order', value: 1 },
      { text: "그가 개과천선할 수도 있지 않을까? 철저한 감시하에 갱생의 기회를 열어준다.", axis: 'order', value: -1 },
    ]
  },

  // --- 제 4장: 천하제일인 ---
  {
    id: 16, chapter: "제 4장: 천하제일인",
    text: "당신은 마침내 '천하제일인'이 되었다. 강호를 어떻게 이끌 것인가?",
    answers: [
      { text: "명확하고 합리적인 새로운 율법을 제정하여 분쟁 없는 질서정연한 무림을 만든다.", axis: 'order', value: 1 },
      { text: "각 문파의 자치성을 최대한 존중하고, 개입을 최소화하여 자유로운 흐름에 맡긴다.", axis: 'order', value: -1 },
      { text: "내 세력을 탄탄하게 키워 실질적인 경제력과 무력을 철저하게 독점하는 실세가 된다.", axis: 'ideology', value: -1 },
      { text: "후학들에게 무인의 도와 협객의 정신을 가르치는 영적이고 정신적인 멘토가 된다.", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 17, chapter: "제 4장: 천하제일인",
    text: "최근 '후기지수(천재 신인)'가 엄청난 속도로 성장해 당신의 자리를 위협하고 있다.",
    answers: [
      { text: "나의 실력을 증명할 좋은 기회다. 공개 대결을 펼쳐 압도적인 실력차를 각인시킨다.", axis: 'method', value: 1 },
      { text: "직접 나서기보단, 다른 세력과 경쟁하게 만들어 자연스럽게 전력을 소모시킨다.", axis: 'method', value: -1 },
      { text: "도전자의 기백을 칭찬하며, 져주더라도 그의 성장을 응원하는 넉넉한 마음으로 임한다.", axis: 'attitude', value: -1 },
      { text: "감히 내게 도전하다니. 자비 없는 응징으로 두 번 다시 덤비지 못하게 기를 꺾는다.", axis: 'attitude', value: 1 },
    ]
  },
  {
    id: 18, chapter: "제 4장: 천하제일인",
    text: "한때 동료였던 자가 당신의 방식에 반기를 들며 갈등이 생겼다.",
    answers: [
      { text: "어떤 이유라도 반기는 용납할 수 없다. 관계를 칼같이 끊어내고 강경하게 대립한다.", axis: 'attitude', value: 1 },
      { text: "그의 입장을 십분 이해해 보려 노력하고, 대화를 통해 부드럽게 갈등을 봉합하려 한다.", axis: 'attitude', value: -1 },
      { text: "그가 왜 불만을 품었는지 원인을 객관적/논리적으로 분석하고 시스템을 개선한다.", axis: 'ideology', value: -1 },
      { text: "우리가 함께했던 옛 추억과 우정을 떠올리며 감정적으로 진심을 다해 호소해 본다.", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 19, chapter: "제 4장: 천하제일인",
    text: "강호를 통치하는 데 있어 당신이 가장 혐오하는 상황은?",
    answers: [
      { text: "계획이 틀어지고 원칙 없이 주먹구구식으로 돌아가는 혼란스러운 상황", axis: 'order', value: 1 },
      { text: "숨 막히는 규칙과 전통 때문에 창의성과 자율성이 억압받는 꽉 막힌 상황", axis: 'order', value: -1 },
      { text: "문제가 터졌는데도 쉬쉬하며 음지에서 숨기고 은폐하려는 비겁한 상황", axis: 'method', value: 1 },
      { text: "생각 없이 섣불리 행동하여 쓸데없는 소음을 만들고 일을 그르치는 상황", axis: 'method', value: -1 },
    ]
  },
  {
    id: 20, chapter: "제 4장: 천하제일인",
    text: "먼 훗날, 당신은 어떤 사람으로 기억되고 싶은가?",
    answers: [
      { text: "수많은 이들과 깊은 인연을 맺고 세상을 따뜻하게 품었던 인간적인 영웅", axis: 'ideology', value: 1 },
      { text: "냉철한 판단력으로 강호를 가장 부유하고 강력하게 이끌었던 실용적인 통치자", axis: 'ideology', value: -1 },
      { text: "그 누구에게도 굽히지 않고 자신의 길을 묵묵히 걸어갔던 강인한 패왕", axis: 'attitude', value: 1 },
      { text: "강자에게는 강하고 약자에게는 한없이 유연했던, 포용력 넘치는 낭만 대협", axis: 'attitude', value: -1 },
    ]
  }
];

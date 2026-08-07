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
  {
    id: 1, chapter: "제 1장: 강호 출두",
    text: "무림에 갓 출두하여 들른 낡은 주막. 덩치 큰 사내들이 나에게 억지 시비를 건다.",
    answers: [
      { text: "\"무인으로서 함부로 주먹을 쥘 순 없지.\" 정중하지만 뼈있는 말로 기세를 누른다.", axis: 'ideology', value: 1 },
      { text: "\"쓸데없는 다툼은 시간 낭비다.\" 무시하고 조용히 자리를 뜬다.", axis: 'attitude', value: -1 },
      { text: "\"기세에서 밀리면 끝이다.\" 단숨에 제압하여 확실한 본보기를 보여준다.", axis: 'attitude', value: 1 },
      { text: "직접 피를 묻히지 않고, 은밀히 기혈을 짚어 그들 스스로 도망치게 만든다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 2, chapter: "제 1장: 강호 출두",
    text: "본격적인 수련을 위해 문파를 선택해야 한다. 당신의 마음이 향하는 곳은?",
    answers: [
      { text: "엄격한 체계와 오랜 전통을 통해 정석적인 무공을 전수하는 명문파", axis: 'order', value: 1 },
      { text: "답답한 규율 없이 나의 재능과 개성을 자유롭게 펼칠 수 있는 문파", axis: 'order', value: -1 },
      { text: "과정보단 결과! 실전 압축 수련으로 단숨에 강해질 수 있는 실용주의 문파", axis: 'ideology', value: -1 },
      { text: "무력보다는 세상의 정보와 흐름을 쥐락펴락하며 판을 짜는 그림자 문파", axis: 'method', value: -1 },
    ]
  },
  {
    id: 3, chapter: "제 1장: 강호 출두",
    text: "숲에서 부상당한 고수를 발견했다. 그런데 그의 옷차림이 나와 적대하는 세력의 문양이다.",
    answers: [
      { text: "적이라도 지금은 부상자일 뿐. 인도적인 차원에서 우선 치료해 준다.", axis: 'ideology', value: 1 },
      { text: "치료해 주고 은혜를 입히면 언젠가 큰 패가 될 것이다. 철저한 계산하에 구출한다.", axis: 'ideology', value: -1 },
      { text: "함정일지 모른다. 괜한 일에 엮이지 않고 조용히 그 자리를 벗어난다.", axis: 'attitude', value: -1 },
      { text: "호랑이 새끼를 살려둘 순 없다. 후환을 없애기 위해 확실하게 숨통을 끊는다.", axis: 'attitude', value: 1 },
    ]
  },
  {
    id: 4, chapter: "제 1장: 강호 출두",
    text: "믿고 따르던 사형이 문파의 규율을 어겼다는 이유로 파문당할 위기에 처했다.",
    answers: [
      { text: "사형의 억울함을 풀기 위해 장문인에게 직접 찾아가 정면으로 읍소한다.", axis: 'attitude', value: 1 },
      { text: "마음은 아프지만 문파를 유지하려면 법도는 지켜져야 한다. 묵묵히 따른다.", axis: 'order', value: 1 },
      { text: "나서봤자 상황만 악화될 뿐이다. 조용히 사태가 진정되기를 기다린다.", axis: 'attitude', value: -1 },
      { text: "규율은 규율이고 의리는 의리다. 남몰래 사형이 안전하게 도피할 수 있도록 돕는다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 5, chapter: "제 1장: 강호 출두",
    text: "당신의 평생을 함께할 무기(또는 무공)의 형태를 고른다면?",
    answers: [
      { text: "적의 방어를 묵직하게 박살낼 수 있는 파괴적이고 강맹한 대검", axis: 'method', value: 1 },
      { text: "한 치의 오차도 없이 정교하게 상대를 제압하는 날카로운 장검", axis: 'order', value: 1 },
      { text: "상대가 예측하지 못한 궤적으로 치명타를 입히는 변칙적인 암기와 독", axis: 'method', value: -1 },
      { text: "형식에 얽매이지 않고 자연의 기운을 그대로 활용하는 유연한 권법", axis: 'order', value: -1 },
    ]
  },
  {
    id: 6, chapter: "제 2장: 기연과 위기",
    text: "수련 중 우연히 실전된 '절세비급'을 손에 넣었다!",
    answers: [
      { text: "무림에 큰 파란을 일으킬 수 있는 물건이다. 스승님이나 믿을 만한 어른께 먼저 보고한다.", axis: 'order', value: 1 },
      { text: "강해질 수 있다면 무엇이든 좋다. 밤낮없이 극한으로 수련하여 내공을 쌓는다.", axis: 'method', value: 1 },
      { text: "이것은 하늘이 내린 기회다. 아무에게도 알리지 않고 은밀하게 나만의 무공으로 승화시킨다.", axis: 'method', value: -1 },
      { text: "나에게 굳이 필요 없다면, 필요한 세력에게 막대한 대가를 받고 거래한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 7, chapter: "제 2장: 기연과 위기",
    text: "비급을 익히던 중, 내공이 뒤틀리는 주화입마에 빠질 위기에 처했다.",
    answers: [
      { text: "위험을 감수하더라도 끝까지 기합을 지르며 정면으로 기운을 돌파한다.", axis: 'method', value: 1 },
      { text: "즉시 수련을 멈추고 안전하게 기운을 갈무리한 뒤 원인을 분석한다.", axis: 'attitude', value: -1 },
      { text: "수단과 방법을 가리지 않고 외부의 기운(단약 등)을 빌려 억지로 혈을 뚫어낸다.", axis: 'ideology', value: -1 },
      { text: "스승님이 가르쳐주신 심법의 기본 규칙부터 차근차근 다시 짚어본다.", axis: 'order', value: 1 },
    ]
  },
  {
    id: 8, chapter: "제 2장: 기연과 위기",
    text: "라이벌 세력이 나를 함정에 빠뜨리기 위해 보낸 스파이를 생포했다.",
    answers: [
      { text: "배후 세력에게 강력한 경고를 보내기 위해 본보기로 엄중하게 처벌한다.", axis: 'attitude', value: 1 },
      { text: "사사로운 감정을 빼고, 무림맹이나 문파의 정해진 율법에 따라 처리한다.", axis: 'order', value: 1 },
      { text: "목숨을 살려주는 대신, 적진에 거짓 정보를 흘리는 이중 스파이로 역이용한다.", axis: 'method', value: -1 },
      { text: "스파이를 회유하여 우리 편으로 끌어들이고, 상대의 전력을 내부에서 무너뜨린다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 9, chapter: "제 2장: 기연과 위기",
    text: "피할 수 없는 강력한 고수와의 결투가 눈앞에 다가왔다.",
    answers: [
      { text: "무인으로서 부끄럼 없이, 정면에서 내 모든 힘을 부딪쳐 승부를 본다.", axis: 'method', value: 1 },
      { text: "상대의 체력과 허점이 드러날 때까지 침착하게 방어하며 기회를 노린다.", axis: 'attitude', value: -1 },
      { text: "승패는 결과로 말할 뿐. 기습과 변칙적인 수를 준비하여 초반에 제압한다.", axis: 'method', value: -1 },
      { text: "결투 전, 상대의 정보를 낱낱이 파악하고 치밀하게 판을 설계하여 승률을 높인다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 10, chapter: "제 2장: 기연과 위기",
    text: "강력한 권력을 가진 무림맹주의 숨겨진 비리를 우연히 알게 되었다.",
    answers: [
      { text: "강호의 정의를 바로 세우기 위해 위험을 무릅쓰고 진실을 만천하에 폭로한다.", axis: 'ideology', value: 1 },
      { text: "이 정보는 강력한 무기다. 맹주와 독대하여 나의 입지와 이권을 보장받는다.", axis: 'ideology', value: -1 },
      { text: "개인이 감당하기엔 너무 거대한 정보라 생명이 위험하다. 침묵하고 잊는다.", axis: 'attitude', value: -1 },
      { text: "정보를 가공하여 맹주와 반대되는 세력에게 넘기고 판을 뒤흔든다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 11, chapter: "제 3장: 정사 대전",
    text: "정파와 사파의 거대한 전쟁이 터졌다. 아군 대장이 당신을 위험한 선봉장으로 지목한다면?",
    answers: [
      { text: "문파와 대의를 위해 이 한 목숨 바쳐 적의 심장부로 돌진하겠다!", axis: 'order', value: 1 },
      { text: "명령에 따르되, 상황이 불리해지면 즉시 유연하게 퇴각로를 확보한다.", axis: 'order', value: -1 },
      { text: "작전이 무모하다면 당당하게 이의를 제기하고 더 나은 전략을 요구한다.", axis: 'attitude', value: 1 },
      { text: "전면전은 희생이 크다. 소수 정예로 적의 보급로를 기습하는 별동대를 자원한다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 12, chapter: "제 3장: 정사 대전",
    text: "아군의 식량이 떨어져 가고, 적군의 대규모 보급 부대가 지나간다는 첩보를 입수했다.",
    answers: [
      { text: "정예 부대를 이끌고 정면에서 급습하여 적의 기세를 꺾고 식량을 탈취한다.", axis: 'method', value: 1 },
      { text: "교전은 최소화하고, 밤을 틈타 식량만 빼내거나 불태우고 조용히 빠져나온다.", axis: 'method', value: -1 },
      { text: "전쟁 중이라도 민간인(상인)의 피해는 막아야 한다. 협상을 통해 일부를 얻어낸다.", axis: 'ideology', value: 1 },
      { text: "전쟁은 현실이다. 수단과 방법을 가리지 않고 철저히 적의 보급을 말려죽인다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 13, chapter: "제 3장: 정사 대전",
    text: "치열한 교전 중, 등을 지켜주던 오랜 동료가 부상을 입고 적진에 고립되었다.",
    answers: [
      { text: "명령이 떨어지지 않아도 당장 칼을 뽑아 들고 동료를 구하러 뛰어든다.", axis: 'attitude', value: 1 },
      { text: "전체 진형을 깨트릴 수 없으므로, 눈물을 머금고 대장의 지시를 따른다.", axis: 'order', value: 1 },
      { text: "소수의 인원을 모아 적의 주의를 분산시킨 뒤 은밀하게 동료를 구출해 낸다.", axis: 'method', value: -1 },
      { text: "냉정하게 전황을 판단하여, 동료 한 명 때문에 부대 전체를 잃는 리스크는 피한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 14, chapter: "제 3장: 정사 대전",
    text: "적의 핵심 장수를 사로잡았다. 적이지만 매우 존경받는 훌륭한 무인이다.",
    answers: [
      { text: "적장으로서의 명예를 존중하여 정중히 예우하고, 공명정대하게 대우한다.", axis: 'ideology', value: 1 },
      { text: "적은 적일 뿐. 아군의 사기를 높이기 위해 가차 없이 처형한다.", axis: 'attitude', value: 1 },
      { text: "고도화된 심리전을 통해 적군의 기밀을 남김없이 캐내어 전황에 이용한다.", axis: 'method', value: -1 },
      { text: "적장을 볼모로 삼아 적군으로부터 유리한 영토나 막대한 물자를 얻어낸다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 15, chapter: "제 3장: 정사 대전",
    text: "치열한 전투 끝에 큰 공을 세워 승리했다. 맹주가 당신에게 어떤 포상을 원하는지 묻는다.",
    answers: [
      { text: "강호를 안정시킬 수 있는 무림맹의 공식적이고 핵심적인 장로직을 요구한다.", axis: 'order', value: 1 },
      { text: "명예보다는 실속이다. 문파를 부흥시킬 막대한 황금과 알짜배기 영토를 요구한다.", axis: 'ideology', value: -1 },
      { text: "간섭받기 싫다. 누구도 나를 통제하지 못하는 완전한 자치권(불가침)을 요구한다.", axis: 'order', value: -1 },
      { text: "전사한 동료들을 기리는 위령탑 건립과 강호의 평화라는 대의명분으로 충분하다.", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 16, chapter: "제 4장: 천하제일인",
    text: "수많은 시련을 넘어 당신은 마침내 '천하제일인'이 되었다. 강호를 어떻게 이끌 것인가?",
    answers: [
      { text: "명확하고 합리적인 새로운 규율을 제정하여 분쟁 없는 질서정연한 무림을 만든다.", axis: 'order', value: 1 },
      { text: "나의 압도적인 무력으로 반대파를 확실히 억눌러 절대적인 평화를 강제한다.", axis: 'attitude', value: 1 },
      { text: "각 문파의 자치성을 최대한 존중하고, 개입을 최소화하여 자유로운 흐름에 맡긴다.", axis: 'order', value: -1 },
      { text: "전면에 나서지 않고 정보망과 상권을 장악해 보이지 않는 손으로 강호를 조율한다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 17, chapter: "제 4장: 천하제일인",
    text: "최근 '후기지수(천재 신인)'가 엄청난 속도로 성장해 당신의 자리를 위협하고 있다.",
    answers: [
      { text: "무림의 찬란한 미래를 이끌 인재다! 정식으로 제자나 후계자로 거둔다.", axis: 'ideology', value: 1 },
      { text: "위험한 변수다. 내 세력이 흔들리기 전에 철저하게 고립시키거나 약화시킨다.", axis: 'attitude', value: 1 },
      { text: "나의 실력을 증명할 좋은 기회다. 공개 대결을 펼쳐 압도적인 실력차를 각인시킨다.", axis: 'method', value: 1 },
      { text: "직접 나서기보단, 다른 세력과 경쟁하게 만들어 자연스럽게 전력을 소모시킨다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 18, chapter: "제 4장: 천하제일인",
    text: "권력의 정점에 서자, 한때 생사를 함께했던 동료들이 당신을 견제하며 반란을 모의했다.",
    answers: [
      { text: "과거의 정이 있으니 진심으로 대화해 보고, 반성한다면 기회를 다시 준다.", axis: 'attitude', value: -1 },
      { text: "반란은 곧 파멸이다. 본보기로 삼기 위해 주동자를 가차 없이 숙청한다.", axis: 'attitude', value: 1 },
      { text: "겉으로는 모르는 척 안심시킨 뒤, 그들의 세력이 커지기 전에 덫을 놓아 일망타진한다.", axis: 'method', value: -1 },
      { text: "반란 세력 내부에 분열을 일으켜 자기들끼리 의심하고 무너지도록 유도한다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 19, chapter: "제 4장: 천하제일인",
    text: "천하를 통일하고 안정을 찾았다. 남은 여생을 어떻게 보낼 것인가?",
    answers: [
      { text: "강호의 지식과 무공이 후대에 온전히 전수되도록 무림 최고의 서원을 설립한다.", axis: 'order', value: 1 },
      { text: "무거운 책임을 내려놓고 아무도 모르는 경치 좋은 산골로 은거하여 평화를 누린다.", axis: 'order', value: -1 },
      { text: "강호 통일에 안주할 수 없다. 더 넓은 세상(새외)으로 시선을 돌려 세력을 확장한다.", axis: 'attitude', value: 1 },
      { text: "천하를 얻었으니 이제 즐길 때다. 막대한 부를 활용해 나만의 화려한 왕국을 건설한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 20, chapter: "제 4장: 천하제일인",
    text: "먼 훗날, 당신의 이름은 강호 역사에 어떻게 기록될 것인가?",
    answers: [
      { text: "위기의 무림을 구하고 정의를 바로 세운 만인의 존경을 받는 대영웅", axis: 'ideology', value: 1 },
      { text: "이름만 들어도 천하가 벌벌 떨었던, 누구도 거역할 수 없던 압도적 절대자", axis: 'attitude', value: 1 },
      { text: "역사책 전면에는 없지만 모든 사건의 배후에 존재했던 진정한 흑막", axis: 'method', value: -1 },
      { text: "구름처럼 바람처럼 얽매이지 않고 자유롭게 살다 간 신비로운 전설", axis: 'order', value: -1 },
    ]
  }
];

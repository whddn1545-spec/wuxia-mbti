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
    text: "낡은 주막에서 밥을 먹고 있는데, 옆 테이블의 덩치 큰 사내들이 나에게 시비를 건다.",
    answers: [
      { text: "\"말씀이 좀 지나치시군요.\" 정중하지만 단호하게 주의를 준다.", axis: 'ideology', value: 1 },
      { text: "눈도 마주치지 않고 밥만 빨리 먹고 나간다. '엮여서 피곤할 일 있나.'", axis: 'attitude', value: -1 },
      { text: "\"뭐 임마?\" 의자를 집어 던지며 일단 선빵부터 날린다.", axis: 'attitude', value: 1 },
      { text: "죄송하다고 고개를 숙인 뒤, 슬쩍 사내들의 술잔에 설사약을 탄다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 2, chapter: "제 1장: 강호 출두",
    text: "무림에 갓 출두한 당신, 어떤 문파에 들어가고 싶은가?",
    answers: [
      { text: "엄격하지만 체계적이고 무공이 강한 명문 정파", axis: 'order', value: 1 },
      { text: "얽매이는 것 없이 자유롭게 떠도는 방랑 문파", axis: 'order', value: -1 },
      { text: "위험하지만 실력만 있으면 단숨에 높은 자리에 오를 수 있는 사파", axis: 'ideology', value: -1 },
      { text: "무공보다는 정보를 수집하고 뒷골목을 지배하는 정보 길드", axis: 'method', value: -1 },
    ]
  },
  {
    id: 3, chapter: "제 1장: 강호 출두",
    text: "우연히 숲에서 부상당한 고수를 발견했다. 그런데 그의 옷차림이 악명 높은 마교의 문양이다.",
    answers: [
      { text: "마교는 무조건 적이다! 그 자리에서 숨통을 끊는다.", axis: 'ideology', value: 1 },
      { text: "일단 치료해주고 은혜를 입힌 뒤, 나중에 써먹을 약점으로 삼는다.", axis: 'ideology', value: -1 },
      { text: "누구든 다친 사람은 구해야 한다. 치료해 주고 조용히 떠난다.", axis: 'attitude', value: -1 },
      { text: "치료해 주는 척하면서 몸을 뒤져 무공 비급이나 은자를 훔친다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 4, chapter: "제 1장: 강호 출두",
    text: "나를 친동생처럼 아껴주던 문파의 선배(사형)가 억울한 누명을 썼다. 당신은?",
    answers: [
      { text: "사형의 결백을 밝히기 위해 장문인에게 따지고 증거를 찾아 나선다.", axis: 'attitude', value: 1 },
      { text: "안타깝지만 문파의 룰이다. 장문인의 결정에 묵묵히 따른다.", axis: 'order', value: 1 },
      { text: "나까지 엮일라. 최대한 조용히 숨죽이며 상황을 지켜본다.", axis: 'attitude', value: -1 },
      { text: "사형을 몰래 찾아가 도망칠 수 있도록 은밀히 도와준다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 5, chapter: "제 1장: 강호 출두",
    text: "당신이 가장 선호하는 무기의 형태는?",
    answers: [
      { text: "묵직하고 파괴력 있는 대검이나 도 (힘과 패기)", axis: 'method', value: 1 },
      { text: "가볍고 날카로운 장검 (정석과 속도)", axis: 'order', value: 1 },
      { text: "상대가 눈치채지 못하게 던지는 암기나 독 (변칙과 효율)", axis: 'method', value: -1 },
      { text: "손에 잡히는 대로 쓰는 나뭇가지나 빈 주먹 (자유로움)", axis: 'order', value: -1 },
    ]
  },

  // --- 제 2장: 기연과 위기 ---
  {
    id: 6, chapter: "제 2장: 기연과 위기",
    text: "절벽에서 떨어졌는데, 기연을 얻어 전설의 무공비급을 줍게 되었다!",
    answers: [
      { text: "이것은 하늘의 뜻. 무림의 평화를 위해 바르게 사용해야겠다.", axis: 'ideology', value: 1 },
      { text: "혼자 익히기엔 위험하다. 문파의 스승님께 먼저 보고한다.", axis: 'order', value: 1 },
      { text: "개이득ㅋㅋ 당장 익혀서 나를 괴롭힌 놈들부터 다 박살낸다.", axis: 'attitude', value: 1 },
      { text: "이 비급을 몰래 경매에 부쳐서 평생 먹고 놀 돈을 마련한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 7, chapter: "제 2장: 기연과 위기",
    text: "비급을 익히던 중, 주화입마(심각한 부작용)에 빠질 위기에 처했다.",
    answers: [
      { text: "포기하지 않고 기합을 지르며 정면으로 기운을 돌파한다.", axis: 'method', value: 1 },
      { text: "일단 멈추고 안전하게 기운을 갈무리한 뒤 원인을 분석한다.", axis: 'attitude', value: -1 },
      { text: "이대로 죽을 순 없다. 지나가는 짐승이나 사람의 기운을 흡수해버린다.", axis: 'ideology', value: -1 },
      { text: "스승님이 가르쳐주신 심법의 기본 규칙부터 다시 차근차근 짚어본다.", axis: 'order', value: 1 },
    ]
  },
  {
    id: 8, chapter: "제 2장: 기연과 위기",
    text: "라이벌이 나를 함정에 빠뜨리기 위해 보낸 스파이를 생포했다.",
    answers: [
      { text: "그 자리에서 팔다리를 부러뜨려 라이벌에게 경고장으로 보낸다.", axis: 'attitude', value: 1 },
      { text: "규율에 따라 문파의 형벌 부서로 넘겨 합당한 처벌을 받게 한다.", axis: 'order', value: 1 },
      { text: "살려주는 대신, 라이벌에게 거짓 정보를 흘리게 하는 이중 스파이로 쓴다.", axis: 'method', value: -1 },
      { text: "조용히 처리하고 아무 일도 없었던 것처럼 함정에 빠진 척 연기한다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 9, chapter: "제 2장: 기연과 위기",
    text: "강력한 고수와 결투를 벌여야 한다. 당신의 싸움 방식은?",
    answers: [
      { text: "정정당당하게 정면에서 내 모든 힘을 부딪친다.", axis: 'method', value: 1 },
      { text: "상대의 체력이 빠질 때까지 방어하며 약점을 파악한다.", axis: 'attitude', value: -1 },
      { text: "독가루나 암기를 준비해 시작하자마자 기습한다.", axis: 'method', value: -1 },
      { text: "결투 전날 밤, 상대가 먹을 식수에 미리 손을 써둔다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 10, chapter: "제 2장: 기연과 위기",
    text: "우연히 무림맹주의 끔찍한 비리를 알게 되었다.",
    answers: [
      { text: "정의를 위해 만천하에 이 사실을 알리고 맹주를 규탄한다.", axis: 'ideology', value: 1 },
      { text: "이 증거를 무림맹주에게 들이밀고 막대한 금전과 권력을 요구한다.", axis: 'ideology', value: -1 },
      { text: "너무 위험한 정보다. 당장 증거를 불태우고 모른 척 잊어버린다.", axis: 'attitude', value: -1 },
      { text: "무림맹주와 적대하는 다른 세력에게 이 정보를 비싸게 판다.", axis: 'method', value: -1 },
    ]
  },

  // --- 제 3장: 정사 대전 ---
  {
    id: 11, chapter: "제 3장: 정사 대전",
    text: "정파와 사파의 거대한 전쟁이 터졌다. 아군 대장이 당신을 총알받이 부대 선봉장으로 보낸다면?",
    answers: [
      { text: "문파의 승리를 위해 이 한 목숨 바쳐 적진을 돌파하겠다!", axis: 'order', value: 1 },
      { text: "겉으로는 알겠다고 하고 전투가 시작되자마자 숲으로 도망친다.", axis: 'order', value: -1 },
      { text: "나더러 죽으라고? 밤에 대장의 막사에 들어가 목을 벤다.", axis: 'attitude', value: 1 },
      { text: "적군 몰래 내통하여 아군의 진형 정보를 넘기고 내 목숨을 보장받는다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 12, chapter: "제 3장: 정사 대전",
    text: "아군의 식량이 떨어져 가고, 적군의 보급 부대가 지나간다는 첩보를 입수했다.",
    answers: [
      { text: "정예 부대를 이끌고 정면에서 보급 부대를 급습해 식량을 뺏는다.", axis: 'method', value: 1 },
      { text: "적의 식량 창고에 불을 지르거나 독을 풀어버리고 조용히 빠져나온다.", axis: 'method', value: -1 },
      { text: "적군과 교섭하여 포로를 넘겨주고 식량을 얻어내는 평화적 방법을 찾는다.", axis: 'attitude', value: -1 },
      { text: "식량이 부족하면 주변 마을을 약탈해서라도 군사를 먹여 살린다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 13, chapter: "제 3장: 정사 대전",
    text: "전투 중, 내 등을 지켜주던 오랜 친구가 큰 부상을 입어 적진에 고립되었다.",
    answers: [
      { text: "명령이 떨어지지 않아도 당장 칼을 뽑아 들고 친구를 구하러 뛰어든다.", axis: 'attitude', value: 1 },
      { text: "전체 진형을 깨트릴 수 없으므로 눈물을 머금고 포기한다.", axis: 'order', value: 1 },
      { text: "나 혼자 살겠다고 친구를 버리고 안전한 후방으로 도망친다.", axis: 'ideology', value: -1 },
      { text: "지휘관에게 상황을 보고하고 구조 부대를 편성해줄 것을 합리적으로 건의한다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 14, chapter: "제 3장: 정사 대전",
    text: "적의 핵심 장수를 사로잡았다. 어떻게 처리할 것인가?",
    answers: [
      { text: "적이지만 훌륭한 무인이다. 정중히 예우하고 포로 교환에 쓴다.", axis: 'ideology', value: 1 },
      { text: "본보기로 삼기 위해 아군들 앞에서 잔혹하게 목을 친다.", axis: 'attitude', value: 1 },
      { text: "고문을 통해 적의 기밀을 남김없이 캐낸 뒤 은밀히 처리한다.", axis: 'method', value: -1 },
      { text: "돈을 주면 살려주겠다고 은밀히 거래를 제안한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 15, chapter: "제 3장: 정사 대전",
    text: "치열한 전투 끝에 승리했다! 맹주가 당신에게 어떤 상을 원하는지 묻는다.",
    answers: [
      { text: "무림맹의 핵심 권력을 잡을 수 있는 장로직을 요구한다.", axis: 'order', value: 1 },
      { text: "명예나 직책은 필요 없다. 산더미 같은 황금과 재물을 요구한다.", axis: 'ideology', value: -1 },
      { text: "간섭받기 싫다. 아무도 날 건드리지 못하게 불가침 지역을 요구한다.", axis: 'order', value: -1 },
      { text: "죽어간 동료들을 기리는 칭호와 명분만으로 충분하다고 사양한다.", axis: 'ideology', value: 1 },
    ]
  },

  // --- 제 4장: 천하제일인 ---
  {
    id: 16, chapter: "제 4장: 천하제일인",
    text: "마침내 당신은 천하제일인이 되었다. 무림을 어떻게 다스릴 것인가?",
    answers: [
      { text: "강력한 규율과 법률을 제정하여 모든 문파를 엄격하게 통제한다.", axis: 'order', value: 1 },
      { text: "누구도 나를 위협하지 못하게 반항하는 자들은 피의 숙청을 감행한다.", axis: 'attitude', value: 1 },
      { text: "맹주 자리는 대충 유능한 참모에게 떠넘기고 나는 술이나 마시며 논다.", axis: 'order', value: -1 },
      { text: "보이지 않는 어둠 속에서 상권과 정보망을 장악해 실질적 지배자가 된다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 17, chapter: "제 4장: 천하제일인",
    text: "최근 '후기지수(천재 신인)'가 등장해 당신의 명성을 위협하고 있다.",
    answers: [
      { text: "나를 뛰어넘을 인재다! 제자로 받아들여 무림의 미래를 맡긴다.", axis: 'ideology', value: 1 },
      { text: "위험 싹을 자르기 위해 조용히 자객을 보내 제거한다.", axis: 'method', value: -1 },
      { text: "정식으로 무공 대결을 신청해 모든 사람들 앞에서 완벽하게 밟아준다.", axis: 'method', value: 1 },
      { text: "그 신인에게 누명을 씌워 무림 전체의 공적으로 만들어 버린다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 18, chapter: "제 4장: 천하제일인",
    text: "당신의 절대 권력을 질투한 과거의 동료들이 배신을 모의하다 걸렸다.",
    answers: [
      { text: "과거의 정을 생각해서 모든 권력을 빼앗고 목숨만은 살려준다.", axis: 'attitude', value: -1 },
      { text: "배신자는 용서할 수 없다! 광장에서 공개 처형을 지시한다.", axis: 'attitude', value: 1 },
      { text: "모르는 척 놔두었다가 그들의 세력이 커졌을 때 일망타진하여 뿌리를 뽑는다.", axis: 'method', value: -1 },
      { text: "배신자 중 한 명을 몰래 매수해서 자기들끼리 죽고 죽이게 만든다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 19, chapter: "제 4장: 천하제일인",
    text: "천하를 통일했지만 마음이 헛헛하다. 여생을 어떻게 보낼 것인가?",
    answers: [
      { text: "후학 양성을 위해 무림 최고의 아카데미(서원)를 설립한다.", axis: 'order', value: 1 },
      { text: "모든 권력을 내려놓고 아무도 모르는 산골로 들어가 은거한다.", axis: 'order', value: -1 },
      { text: "무림을 넘어 저 멀리 새외(외국) 정벌을 위한 대군을 일으킨다.", axis: 'attitude', value: 1 },
      { text: "막대한 재물을 바탕으로 매일 밤 파티를 열며 향락을 즐긴다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 20, chapter: "제 4장: 천하제일인",
    text: "당신의 최후가 다가왔다. 후세 사람들에게 어떻게 기억되고 싶은가?",
    answers: [
      { text: "정의롭고 따뜻했던 만인의 스승이자 무림의 영웅", axis: 'ideology', value: 1 },
      { text: "이름만 들어도 벌벌 떠는 무자비하고 압도적인 절대자", axis: 'attitude', value: 1 },
      { text: "역사책에는 없지만 사실 모든 흑막을 조종했던 진정한 그림자", axis: 'method', value: -1 },
      { text: "바람처럼 살다 간 가장 유쾌하고 자유로웠던 기인", axis: 'order', value: -1 },
    ]
  }
];

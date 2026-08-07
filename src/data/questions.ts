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
    text: "무림에 갓 출두하여 들른 낡은 주막. 덩치 큰 사내들이 나에게 억지 시비를 건다.",
    answers: [
      { text: "\"뭘 야려?\" 의자 째로 집어 던져서 주막을 난장판으로 만든다.", axis: 'attitude', value: 1 },
      { text: "\"아이고 형님들, 쇤네가 눈이 삐었나 봅니다~\" 능글맞게 웃으며 술값을 내주고 빠진다.", axis: 'attitude', value: -1 },
      { text: "\"무고한 자를 괴롭히다니!\" 당당히 나서서 놈들의 만행을 꾸짖는다.", axis: 'ideology', value: 1 },
      { text: "\"죄송합니다...\" 고개 숙여 사과하는 척하며 슬쩍 놈들 허리춤의 전대를 훔친다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 2, chapter: "제 1장: 강호 출두",
    text: "본격적인 수련을 위해 문파를 선택해야 한다. 당신의 마음이 향하는 곳은?",
    answers: [
      { text: "\"사형! 사제!\" 뜨거운 전우애와 목숨보다 무거운 규율이 있는 정통 명문 정파", axis: 'order', value: 1 },
      { text: "골치 아픈 위계질서 극혐. 바람처럼 떠돌며 내 맘대로 사는 낭만 방랑객", axis: 'order', value: -1 },
      { text: "과정이 무슨 상관? 돈과 권력, 확실한 힘을 보장해 주는 실전 압축 사파", axis: 'ideology', value: -1 },
      { text: "세상 모든 은밀한 비밀을 쥐락펴락하는 뒷골목의 지배자, 정보 길드", axis: 'method', value: -1 },
    ]
  },
  {
    id: 3, chapter: "제 1장: 강호 출두",
    text: "숲에서 부상당한 고수를 발견했다. 그런데 그의 옷차림이 마교의 문양이다.",
    answers: [
      { text: "적이라도 다친 자를 외면할 순 없다. 내력을 불어넣어 정성껏 살려준다.", axis: 'ideology', value: 1 },
      { text: "일단 살려는 드릴게. 치료해 준 뒤, 평생 뜯어먹을 노예(호구)로 만든다.", axis: 'ideology', value: -1 },
      { text: "마교는 묻지도 따지지도 않고 그 자리에서 모가지를 썰어버린다.", axis: 'attitude', value: 1 },
      { text: "함정일지 모른다. 못 본 척 흔적을 지우고 호다닥 도망친다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 4, chapter: "제 1장: 강호 출두",
    text: "믿고 따르던 사형이 문파의 룰을 어겨 파문당할 위기에 처했다.",
    answers: [
      { text: "장문인 방 문을 발로 차고 들어가서 억울함을 팩트로 따지고 든다.", axis: 'attitude', value: 1 },
      { text: "법도가 곧 문파다. 슬프지만 눈물을 닦으며 파문식을 묵묵히 지켜본다.", axis: 'order', value: 1 },
      { text: "규율이고 뭐고, 밤에 몰래 감옥 문을 따서 사형을 탈옥시켜 버린다.", axis: 'method', value: -1 },
      { text: "나까지 엮이면 안 된다. 방구석에 틀어박혀서 조용히 숨만 쉰다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 5, chapter: "제 1장: 강호 출두",
    text: "당신의 평생을 함께할 무기(또는 무공)의 형태를 고른다면?",
    answers: [
      { text: "일단 맞으면 뼈도 못 추리는 무식하게 짱 큰 대검", axis: 'method', value: 1 },
      { text: "각도와 속도가 1밀리미터의 오차도 없이 딱 떨어지는 깔끔한 장검", axis: 'order', value: 1 },
      { text: "상대방이 죽은 줄도 모르게 뒤통수에 꽂아버리는 독침과 암기", axis: 'method', value: -1 },
      { text: "무기가 왜 필요해? 손에 잡히는 나뭇가지나 술병이 곧 내 무기다.", axis: 'order', value: -1 },
    ]
  },

  // --- 제 2장: 기연과 위기 ---
  {
    id: 6, chapter: "제 2장: 기연과 위기",
    text: "수련 중 절벽에서 떨어졌는데, 기연을 얻어 '절세비급'을 손에 넣었다!",
    answers: [
      { text: "혼자 익히다 주화입마 오면 큰일 난다. 스승님께 헐레벌떡 달려가 바친다.", axis: 'order', value: 1 },
      { text: "개이득ㅋㅋ 당장 산속 바위 틈에 숨어서 나 혼자 몰래 익혀 먼치킨이 된다.", axis: 'method', value: -1 },
      { text: "일단 힘부터 기르자! 피를 토할 때까지 미친 듯이 수련해서 당장 강해진다.", axis: 'method', value: 1 },
      { text: "나한테 안 맞는 무공이면? 당장 암시장에 올려서 평생 놀고먹을 황금으로 바꾼다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 7, chapter: "제 2장: 기연과 위기",
    text: "동굴에서 기이한 고수를 만났다. 그가 대뜸 당신에게 퀴즈를 낸다면?",
    answers: [
      { text: "고수의 의도를 논리적으로 분석해 가장 완벽한 정답의 공식을 도출한다.", axis: 'order', value: 1 },
      { text: "뇌를 거치지 않고 내뱉는 의식의 흐름. 개드립과 헛소리로 고수를 당황시킨다.", axis: 'order', value: -1 },
      { text: "\"질문이 틀렸습니다!\" 오히려 고수에게 역정 내며 내 주장을 굽히지 않는다.", axis: 'attitude', value: 1 },
      { text: "\"헤헤, 스승님께서 정답을 알려주시면 안 될까요?\" 폭풍 애교로 넘긴다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 8, chapter: "제 2장: 기연과 위기",
    text: "라이벌 세력이 나를 함정에 빠뜨리기 위해 보낸 스파이를 생포했다.",
    answers: [
      { text: "광장에 매달아 놓고 팔다리를 부러뜨려 적들에게 공포를 심어준다.", axis: 'attitude', value: 1 },
      { text: "사사로운 감정은 빼고, 문파의 형벌 규정집 제3장 4조에 따라 정확히 처벌한다.", axis: 'order', value: 1 },
      { text: "살려주는 척 풀어주고, 가짜 정보를 잔뜩 쥐여줘서 적 본진을 교란시킨다.", axis: 'method', value: -1 },
      { text: "\"너 연봉 얼마 받아? 내가 두 배 줄게.\" 돈으로 매수해서 내 노예로 쓴다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 9, chapter: "제 2장: 기연과 위기",
    text: "피할 수 없는 강력한 고수와의 결투가 눈앞에 다가왔다.",
    answers: [
      { text: "사나이 가는 길에 빠꾸는 없다! 온 힘을 다해 정면에서 검을 쾅 부딪친다.", axis: 'method', value: 1 },
      { text: "일단 방어만 오지게 하면서 상대가 지쳐 쓰러질 때까지 얄밉게 피한다.", axis: 'attitude', value: -1 },
      { text: "흙먼지를 눈에 확 뿌린 다음, 쿨럭거릴 때 뒤로 돌아가서 급소를 찌른다.", axis: 'method', value: -1 },
      { text: "싸우기 전날 밤, 상대방의 식수에 미리 폭설사약을 잔뜩 타 놓는다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 10, chapter: "제 2장: 기연과 위기",
    text: "무림맹주의 끔찍한 비리(뇌물, 횡령 등)를 우연히 알게 되었다.",
    answers: [
      { text: "\"이 썩어빠진 무림!\" 당장 대자보를 써서 온 강호에 진실을 폭로한다.", axis: 'ideology', value: 1 },
      { text: "이 증거본을 들고 맹주를 찾아가 한자리 크게 내놓으라고 협박한다.", axis: 'ideology', value: -1 },
      { text: "\"나는 아무것도 못 봤다...\" 눈을 꾹 감고 당장 기억에서 삭제해버린다.", axis: 'attitude', value: -1 },
      { text: "익명으로 정보를 찌라시처럼 뿌려서 맹주와 반대파가 서로 죽이게 만든다.", axis: 'method', value: -1 },
    ]
  },

  // --- 제 3장: 정사 대전 ---
  {
    id: 11, chapter: "제 3장: 정사 대전",
    text: "정파와 사파의 거대한 전쟁! 아군 대장이 당신을 선봉장으로 지목한다면?",
    answers: [
      { text: "\"위대한 문파를 위하여!\" 가슴이 웅장해지며 적진 한가운데로 뛰어든다.", axis: 'order', value: 1 },
      { text: "일단 \"알겠습니다!\" 크게 대답해 놓고, 전투 시작하자마자 슬쩍 뒤로 빠진다.", axis: 'order', value: -1 },
      { text: "나더러 죽으라고? 대장 멱살을 잡고 \"네가 가라 선봉장\"이라며 쌍욕을 박는다.", axis: 'attitude', value: 1 },
      { text: "전면전은 개죽음이다. 소수 정예 닌자 부대를 자원해서 적장 암살을 노린다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 12, chapter: "제 3장: 정사 대전",
    text: "아군의 식량이 떨어져 가고, 적군의 대규모 보급 부대가 지나가는 걸 발견했다.",
    answers: [
      { text: "\"다 쓸어버려!\" 함성을 지르며 적군을 도륙하고 식량을 통째로 빼앗아 온다.", axis: 'method', value: 1 },
      { text: "밤에 몰래 잠입해서 식량에만 불을 지르거나 독을 풀고 빤스런 한다.", axis: 'method', value: -1 },
      { text: "명분 없는 약탈은 안 된다. 협상을 하거나 주변의 자원을 정당하게 구한다.", axis: 'ideology', value: 1 },
      { text: "군사가 굶어 죽게 생겼는데 뭔 놈의 도덕? 인근 마을이든 뭐든 털어서 배부터 채운다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 13, chapter: "제 3장: 정사 대전",
    text: "치열한 교전 중, 등을 지켜주던 오랜 절친이 적진에 고립되었다.",
    answers: [
      { text: "위아래 지시 다 씹고 당장 쌍칼 들고 미친놈처럼 적진으로 다이브한다.", axis: 'attitude', value: 1 },
      { text: "눈물이 앞을 가리지만, 대열을 깰 수 없기에 어금니 꽉 깨물고 지시를 따른다.", axis: 'order', value: 1 },
      { text: "구출 부대를 보내는 척하면서, 나는 땅굴을 파서 친구만 몰래 빼온다.", axis: 'method', value: -1 },
      { text: "슬프지만 현실이다. 친구 하나 구하려다 부대 전체가 전멸할 리스크는 피한다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 14, chapter: "제 3장: 정사 대전",
    text: "적의 핵심 장수를 사로잡았다. 적이지만 매우 존경받는 훌륭한 낭만 무인이다.",
    answers: [
      { text: "적이지만 대협이다. 정중히 예우하고 최고급 식사를 대접한다.", axis: 'ideology', value: 1 },
      { text: "아무리 훌륭해도 적은 적. 아군 사기를 위해 대낮에 잔혹하게 모가지를 친다.", axis: 'attitude', value: 1 },
      { text: "웃는 얼굴로 칭찬하면서, 뒤로는 가족을 인질 삼아 적진 기밀을 싹 다 털어낸다.", axis: 'method', value: -1 },
      { text: "\"네 목숨값이면 은자가 몇 냥이냐?\" 적군 본진에 연락해 최고가에 낙찰시킨다.", axis: 'ideology', value: -1 },
    ]
  },
  {
    id: 15, chapter: "제 3장: 정사 대전",
    text: "치열한 전투 끝에 승리했다. 맹주가 당신에게 어떤 포상을 원하는지 묻는다.",
    answers: [
      { text: "무림맹의 권력을 쥘 수 있는 공식 장로직 타이틀과 으리으리한 제복", axis: 'order', value: 1 },
      { text: "명예, 타이틀 다 필요 없다. 평생 써도 다 못 쓸 현찰과 노른자위 땅문서", axis: 'ideology', value: -1 },
      { text: "내 구역엔 무림맹주도 못 들어온다는 절대적인 '노터치 불가침권'", axis: 'order', value: -1 },
      { text: "포상은 필요 없다. 죽어간 형제들을 기리는 거대한 비석 하나면 족하다.", axis: 'ideology', value: 1 },
    ]
  },

  // --- 제 4장: 천하제일인 ---
  {
    id: 16, chapter: "제 4장: 천하제일인",
    text: "당신은 마침내 '천하제일인'이 되었다. 강호를 어떻게 이끌 것인가?",
    answers: [
      { text: "숨 막힐 정도로 빡빡한 법을 만들어서 아무도 싸울 엄두를 못 내게 통제한다.", axis: 'order', value: 1 },
      { text: "\"내 심기를 거스르면 다 죽는다.\" 무자비한 피의 숙청으로 공포 정치를 펼친다.", axis: 'attitude', value: 1 },
      { text: "귀찮은 결재 서류 따위 부하한테 던져버리고 나는 매일 파티하며 논다.", axis: 'order', value: -1 },
      { text: "맹주 자리는 바지사장 하나 앉혀두고, 나는 상단과 정보망을 쥔 진정한 흑막이 된다.", axis: 'method', value: -1 },
    ]
  },
  {
    id: 17, chapter: "제 4장: 천하제일인",
    text: "최근 '후기지수(천재 신인)'가 엄청난 속도로 성장해 당신을 도발하고 나섰다.",
    answers: [
      { text: "캬, 무림의 밝은 미래! 아낌없이 내어주고 기꺼이 발판이 되어주리라.", axis: 'ideology', value: 1 },
      { text: "감히 내 권위에 도전해? 수만 명이 보는 앞에서 처참하게 짓밟아버린다.", axis: 'method', value: 1 },
      { text: "내 손에 피 묻힐 필요 있나? 그놈 주변에 끄나풀을 심어 서서히 미치게 만든다.", axis: 'method', value: -1 },
      { text: "귀찮아 죽겠네. 그놈한테 \"네가 짱 먹어라\" 하고 권력 던져주고 잠수 탄다.", axis: 'attitude', value: -1 },
    ]
  },
  {
    id: 18, chapter: "제 4장: 천하제일인",
    text: "한때 동료였던 친한 친구들이 당신의 통치에 불만을 품고 반란을 일으켰다.",
    answers: [
      { text: "아휴, 오죽 섭섭했으면 그랬을까. 불러다가 소고기 사주며 달래준다.", axis: 'attitude', value: -1 },
      { text: "감히 날 통수 쳐? 분노에 휩싸여 주동자는 물론 그 일가친척까지 멸문시킨다.", axis: 'attitude', value: 1 },
      { text: "반란군의 핵심 인물에게 몰래 두 배의 돈을 찔러줘서 지들끼리 찌르게 만든다.", axis: 'method', value: -1 },
      { text: "우리가 옛날에 같이 피 흘리던 시절을 잊었냐며 눈물로 똥꼬쇼를 해 마음을 돌린다.", axis: 'ideology', value: 1 },
    ]
  },
  {
    id: 19, chapter: "제 4장: 천하제일인",
    text: "강호를 통치하는 데 있어 당신이 가장 좋아하는 그림은?",
    answers: [
      { text: "개미 새끼 한 마리도 내 룰을 벗어날 수 없는 숨 막히는 완벽한 통제!", axis: 'order', value: 1 },
      { text: "룰이 어딨어? 내 기분 내키는 대로, 꼴리는 대로 돌아가는 다이내믹 무림!", axis: 'order', value: -1 },
      { text: "맘에 안 들면 앞에서 대놓고 치고받고 싸워서 박살을 내는 화끈함!", axis: 'method', value: 1 },
      { text: "앞에서는 웃고 뒤에서는 칼침 놓으며 물밑에서 모든 게 정리되는 깔끔함!", axis: 'method', value: -1 },
    ]
  },
  {
    id: 20, chapter: "제 4장: 천하제일인",
    text: "먼 훗날, 당신은 어떤 사람으로 기억되고 싶은가?",
    answers: [
      { text: "수많은 고아와 백성들이 눈물로 떠받들던, 무림 역사상 가장 위대한 대협", axis: 'ideology', value: 1 },
      { text: "천하의 모든 돈과 자원이 그의 손끝에서 놀아났던 극강의 자본주의 제왕", axis: 'ideology', value: -1 },
      { text: "이름 석 자만 들어도 우는 아이가 울음을 뚝 그쳤던 잔혹하고 미친 패왕", axis: 'attitude', value: 1 },
      { text: "무공이 개쩔었는데 허구한 날 술 취해서 개같이 놀러 다녔던 낭만 돌아이", axis: 'order', value: -1 },
    ]
  }
];

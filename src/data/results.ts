export interface FactionResult {
  id: string;
  name: string;
  subtitle: string;
  description: string[];
  bestMatch: { name: string; desc: string };
  worstMatch: { name: string; desc: string };
  imageUrl: string;
}

export const factionResults: Record<string, FactionResult> = {
  nangung: {
    id: 'nangung', name: '남궁세가', subtitle: '"나만 믿고 따라와!" 꼰대 엘리트',
    description: [
      '리더병 말기. 가만히 있으면 되는데 굳이 완장 차고 통제하려고 함.',
      '일 못하는 사람 보면 답답해서 미칠 것 같음. "내 방식이 무조건 맞아."',
      '꼼수보다는 정면돌파를 선호하며, 책임감 하나는 무림 최고 수준.',
      '본인이 피곤하게 사는 만큼 남도 피곤하게 만듦.'
    ],
    bestMatch: { name: '아미파', desc: '내 지시를 군말 없이 따르는 충직한 보좌관' },
    worstMatch: { name: '녹림', desc: '규칙 따위 개나 줘버린 통제불능 짐승들 (상극)' },
    imageUrl: '/images/nangung_mbti_1785998688512.jpg'
  },
  shaolin: {
    id: 'shaolin', name: '소림사', subtitle: '융통성 제로의 바른생활 머신',
    description: [
      '"원칙이 곧 법이다." 매일 아침 6시에 기상해서 물 긷고 장작 패는 FM 스님.',
      '회사 규정집 달달 외우고 다니는 인사팀 꼰대 포지션.',
      '남한테 잔소리 엄청 하는데, 본인은 그 잔소리 지키려고 피나게 노력함.',
      '약속 시간 늦는 인간들 보면 진짜 연 끊고 싶음.'
    ],
    bestMatch: { name: '개방', desc: '으이구 인간아 하면서 밥 챙겨주게 됨 (꿀단지)' },
    worstMatch: { name: '하오문', desc: '원칙 따위 무시하는 입방정에 아구창 마려움' },
    imageUrl: '/images/shaolin_istj_monk_1785995851369.jpg'
  },
  murong: {
    id: 'murong', name: '모용세가', subtitle: '"우리는 더 나은 세상을 만들 수 있어" 가스라이팅 귀족',
    description: [
      '인류애가 넘치는데, 이상하게 남을 자기 입맛대로 조종(통제)하려고 함.',
      '말 개잘함. "너를 위해서 하는 말이야~" 하면서 결국 자기 뜻대로 다 맞춤.',
      '본인이 꽤 완벽하고 고고한 리더라고 착각하는 완벽주의자.',
      '지저분하고 상스러운 것을 세상에서 제일 싫어함.'
    ],
    bestMatch: { name: '하북팽가', desc: '내 말에 껌뻑 죽는 단순무식 불도저 (장기말)' },
    worstMatch: { name: '사천당가', desc: '내 가스라이팅이 전혀 안 통하는 소시오패스' },
    imageUrl: '/images/murong_mbti_1785998697529.jpg'
  },
  wudang: {
    id: 'wudang', name: '무당파', subtitle: '속을 알 수 없는 맑은 눈의 광인',
    description: [
      '겉보기엔 구름 위를 걷는 평화주의자. "허허~" 웃고 다님.',
      '근데 속으로는 이미 사람 급 나누고 분석 다 끝냈음.',
      '화나면 제일 무섭게 돌변하는 팩폭 살인마.',
      '"나는 관대하다. 하지만 선 넘으면 넌 끝이다."'
    ],
    bestMatch: { name: '사천당가', desc: '서로 선 안 넘고 깔끔하게 존중함 (비즈니스 파트너)' },
    worstMatch: { name: '화산파', desc: '옆에서 계속 나대는 거 보면 단전에서 빡침이 올라옴' },
    imageUrl: '/images/wudang_mbti_1785998706356.jpg'
  },
  mount_hua: {
    id: 'mount_hua', name: '화산파', subtitle: '"폼에 살고 폼에 죽는다" 관종 검객',
    description: [
      '"나대고 싶은데 멋있게 나댈래." 관심받는 거 우주에서 제일 좋아함.',
      '어딜 가나 주인공이어야 직성이 풀림.',
      '심각한 분위기 못 견뎌서 자꾸 농담 던지다 혼남.',
      '인스타 스토리에 하루 10개씩 올리는 타입.'
    ],
    bestMatch: { name: '하오문', desc: '서로 헛소리 티키타카 개잘맞음 (의형제)' },
    worstMatch: { name: '무당파', desc: '내 개그에 정색하는 노잼 도사님' },
    imageUrl: '/images/mount_hua_mbti_1785998717250.jpg'
  },
  beggar: {
    id: 'beggar', name: '개방', subtitle: '"세상은 내 친구!" 극강의 욜로 거지',
    description: [
      '땡전 한 푼 없어도 세상에서 제일 행복한 인싸 거지.',
      '방 청소 1도 안 하면서 인간관계는 더럽게 넓음.',
      '머릿속에 아이디어는 수백 개인데 실행에 옮기는 건 1개 될까 말까 함.',
      '사람 너무 좋아해서 거절 못함. 호구 잡히기 딱 좋은 스타일.'
    ],
    bestMatch: { name: '소림사', desc: '은근히 나 챙겨주는 츤데레 꼰대라 편함' },
    worstMatch: { name: '제갈세가', desc: '"너 계획이 대체 뭐야?" 숨막혀 죽음' },
    imageUrl: '/images/beggar_enfp_friend_1785995880691.jpg'
  },
  emei: {
    id: 'emei', name: '아미파', subtitle: '우리 식구 건들면 다 죽어',
    description: [
      '겉바속촉 수호자. 남들에겐 한없이 따뜻하고 배려 넘침.',
      '근데 내 바운더리 안의 사람을 누가 건드리면 시어머니 모드로 변신함.',
      '착한 아이 증후군 있어서 싫은 소리 속으로만 삼키다 병남.',
      '안전하고 예측 가능한 삶을 몹시 사랑함.'
    ],
    bestMatch: { name: '남궁세가', desc: '나를 든든하게 보호해줄 완벽한 방패' },
    worstMatch: { name: '마교', desc: '예측 불가능한 미친놈들이라 상종하기 싫음' },
    imageUrl: '/images/emei_mbti_1785998727072.jpg'
  },
  diancang: {
    id: 'diancang', name: '점창파', subtitle: '"아싸가 체질" 마이웨이 독고다이',
    description: [
      '사회성 갖다 버리고 지능(검술)에 몰빵함. 카톡 안 읽씹의 달인.',
      '"그게 왜?"가 입버릇. 남들이 뭐라든 난 나만의 길을 감.',
      '내가 좋아하는 분야에는 교수님 뺨치게 떠들지만, 관심 없는 건 기억조차 못함.',
      '의미 없는 스몰토크 극혐.'
    ],
    bestMatch: { name: '곤륜파', desc: '각자 방구석에서 한마디도 안 하고 같이 놀 수 있음' },
    worstMatch: { name: '표국', desc: '쓸데없는 오지랖 부리면서 자꾸 말 걸어서 짜증남' },
    imageUrl: '/images/diancang_mbti_1785998738331.jpg'
  },
  peng: {
    id: 'peng', name: '하북팽가', subtitle: '브레이크 박살 난 불도저',
    description: [
      '"일단 저지르고 수습하자!" 생각보다 몸이 먼저 나감.',
      '분위기 띄우는 건 1등인데, 눈치 없이 선 넘는 경우 다반사.',
      '스릴과 내기를 미치도록 좋아해서 지루한 건 1분도 못 참음.',
      '뒤끝 없고 화끈해서 매력적이지만 사고뭉치.'
    ],
    bestMatch: { name: '모용세가', desc: '내 사고를 완벽하게 수습해주는 브레인' },
    worstMatch: { name: '제갈세가', desc: '생각만 많고 행동 굼뜬 애들 보면 속 터짐' },
    imageUrl: '/images/peng_mbti_1785998748165.jpg'
  },
  merchant: {
    id: 'merchant', name: '표국', subtitle: '"밥은 먹고 다니냐?" 오지랖퍼',
    description: [
      '인맥 부자. 남 챙기느라 정작 내 앞가림은 못 함.',
      '남한테 미움받는 걸 세상에서 제일 무서워함.',
      '리액션 봇이라 영혼 없는 "헐 대박!"을 입에 달고 삼.',
      '다툼이 생기면 무조건 중간에서 화해시키려고 땀 뻘뻘 흘림.'
    ],
    bestMatch: { name: '장강수로채', desc: '내 호의를 진심으로 고마워하는 으리으리한 녀석' },
    worstMatch: { name: '점창파', desc: '내가 챙겨줘도 쌩까서 상처받음' },
    imageUrl: '/images/merchant_mbti_1785998756825.jpg'
  },
  zhuge: {
    id: 'zhuge', name: '제갈세가', subtitle: '"다 내 계산대로야" 킹메이커',
    description: [
      '자기가 짠 판에서 남들이 춤추는 거 구경하는 게 제일 재밌음.',
      '감정 낭비 극혐. 인간관계도 체스판 말처럼 효율적으로 관리함.',
      '"내가 틀린 게 아니라 니들이 멍청한 거야"라는 마인드.',
      '플랜 A, B, C까지 없으면 불안해서 잠 못 잠.'
    ],
    bestMatch: { name: '마교', desc: '내 미친 계획을 그대로 실행해 줄 압도적 무력' },
    worstMatch: { name: '개방', desc: '통제도 안 되고 계획도 없는 무쓸모 잉여' },
    imageUrl: '/images/zhuge_mbti_1785998765999.jpg'
  },
  tang: {
    id: 'tang', name: '사천당가', subtitle: '"그래서 결론이 뭔데?" 가성비 암살자',
    description: [
      '숨어서 독침 쏘고 조기 퇴근하는 극강의 효율충.',
      '남 일에 진짜 관심 없음. "아 진짜? (영혼 0%)" 리액션 장인.',
      '누가 내 선 넘으면? 조용히 독침 장전함. 뒤끝 장난 아님.',
      '받은 은혜와 원수는 10원짜리 하나까지 철저하게 장부에 적어둠.'
    ],
    bestMatch: { name: '무당파', desc: '서로 선 안 넘고 깔끔하게 존중함 (비즈니스 파트너)' },
    worstMatch: { name: '표국', desc: '귀찮게 밥 먹었냐고 오지랖 부림 (기빨림)' },
    imageUrl: '/images/tang_istp_assassin_1785995870024.jpg'
  },
  demonic: {
    id: 'demonic', name: '천마신교', subtitle: '"내 말이 곧 법이다" 폭군',
    description: [
      '야망 덩어리 워커홀릭. 무능한 사람을 사람 취급 안 함.',
      '목표 달성을 위해서라면 수단과 방법을 안 가림.',
      '감정 공감 능력은 0에 수렴하지만, 일 처리는 기가 막히게 잘함.',
      '지배욕이 강해서 누군가 내 밑에 무릎 꿇는 걸 즐김.'
    ],
    bestMatch: { name: '제갈세가', desc: '나의 비전을 현실로 만들어줄 훌륭한 참모' },
    worstMatch: { name: '아미파', desc: '도덕과 규율만 따지는 한심한 위선자들' },
    imageUrl: ''
  },
  green_forest: {
    id: 'green_forest', name: '녹림', subtitle: '방구석 여포, 귀차니즘 산적',
    description: [
      '"아 몰라 내일 해." 침대 밖은 위험함. 규칙 얽매이는 거 딱 질색.',
      '겉보기엔 만사태평인데 속으론 눈치 엄청 봄.',
      '내 사람들에겐 퍼주는데, 모르는 사람 앞에서는 뚝딱이 됨.',
      '누워 있다가도 누가 내 식구 건드리면 도끼 들고 뛰쳐나감.'
    ],
    bestMatch: { name: '표국', desc: '귀찮은 날 대신해서 다 챙겨주는 마더 테레사' },
    worstMatch: { name: '남궁세가', desc: '숨쉬는 것까지 통제하려 드는 극혐 꼰대' },
    imageUrl: ''
  },
  haomen: {
    id: 'haomen', name: '하오문', subtitle: '아가리로 무림통일, 프로 팩폭러',
    description: [
      '뒷골목 주막에서 남의 뒷담화로 돈 버는 밉상 정보통.',
      '무공(싸움 실력)은 쥐뿔도 없는데 입은 살아서 천하제일검임.',
      '"아니 그게 아니라~" 일단 반박부터 하고 봄.',
      '끈기가 개나 줘서 끝을 보는 일이 드묾.'
    ],
    bestMatch: { name: '화산파', desc: '서로 헛소리 티키타카 개잘맞음 (환상의 짝꿍)' },
    worstMatch: { name: '소림사', desc: '말 섞기도 싫은 숨막히는 꼰대' },
    imageUrl: '/images/haomen_entp_spy_1785995860587.jpg'
  },
  kunlun: {
    id: 'kunlun', name: '곤륜파', subtitle: '"세상은 날 이해 못해" 망상병 은둔고수',
    description: [
      '과몰입 장인. 새벽 감성에 취해 혼자 무림 통일하는 상상함.',
      '멘탈이 두부라서 누가 툭 치면 박살 남.',
      '남한테 상처 주는 것도, 받는 것도 싫어서 그냥 동굴로 들어감.',
      '조용히 혼자 있는 걸 사랑하지만, 가끔은 누군가 내 마음을 알아주길 바람.'
    ],
    bestMatch: { name: '점창파', desc: '각자 알아서 놀아서 너무 편함' },
    worstMatch: { name: '하북팽가', desc: '가만히 있는 날 자꾸 흔들어 깨워서 미치겠음' },
    imageUrl: ''
  }
};

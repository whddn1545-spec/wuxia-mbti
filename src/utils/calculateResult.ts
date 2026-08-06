import { Scores } from '../store/useTestStore';

export function calculateFaction(scores: Scores): string {
  // 1 if >= 0, 0 if < 0
  const i = scores.ideology >= 0 ? '1' : '0';
  const o = scores.order >= 0 ? '1' : '0';
  const m = scores.method >= 0 ? '1' : '0';
  const a = scores.attitude >= 0 ? '1' : '0';

  const code = `${i}${o}${m}${a}`;

  const map: Record<string, string> = {
    '1111': 'nangung',     // 명분, 규율, 돌파, 강경 -> 남궁세가
    '1110': 'shaolin',     // 명분, 규율, 돌파, 온건 -> 소림사
    '1101': 'murong',      // 명분, 규율, 은밀, 강경 -> 모용세가
    '1100': 'wudang',      // 명분, 규율, 은밀, 온건 -> 무당파
    '1011': 'mount_hua',   // 명분, 자유, 돌파, 강경 -> 화산파
    '1010': 'beggar',      // 명분, 자유, 돌파, 온건 -> 개방
    '1001': 'emei',        // 명분, 자유, 은밀, 강경 -> 아미파
    '1000': 'diancang',    // 명분, 자유, 은밀, 온건 -> 점창파
    '0111': 'peng',        // 실리, 규율, 돌파, 강경 -> 하북팽가
    '0110': 'merchant',    // 실리, 규율, 돌파, 온건 -> 표국/상단
    '0101': 'zhuge',       // 실리, 규율, 은밀, 강경 -> 제갈세가
    '0100': 'tang',        // 실리, 규율, 은밀, 온건 -> 사천당가
    '0011': 'demonic',     // 실리, 자유, 돌파, 강경 -> 천마신교(마교)
    '0010': 'green_forest',// 실리, 자유, 돌파, 온건 -> 녹림/장강수로채
    '0001': 'haomen',      // 실리, 자유, 은밀, 강경 -> 하오문
    '0000': 'kunlun',      // 실리, 자유, 은밀, 온건 -> 곤륜파
  };

  return map[code] || 'haomen';
}

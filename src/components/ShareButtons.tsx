'use client';

import { useEffect } from 'react';
import styles from '../app/result/[id]/result.module.css';
import Link from 'next/link';

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share: { sendDefault: (settings: Record<string, unknown>) => void };
    };
  }
}

// Vercel 환경변수(NEXT_PUBLIC_KAKAO_JS_KEY)에 카카오 JS키가 있으면 SDK 공유 활성화, 없으면 Web Share 폴백
const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

export default function ShareButtons({
  factionId,
  factionName,
  subtitle,
}: {
  factionId: string;
  factionName: string;
  subtitle: string;
}) {
  useEffect(() => {
    if (!KAKAO_JS_KEY || typeof window === 'undefined') return;
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) window.Kakao.init(KAKAO_JS_KEY);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js';
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) window.Kakao.init(KAKAO_JS_KEY);
    };
    document.head.appendChild(script);
  }, []);

  const fallbackShare = async (url: string) => {
    // PC나 카카오 SDK 미사용 환경: OS 공유시트(모바일) 또는 링크 복사(PC)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `무림 성향 테스트 - ${factionName}`,
          text: `나의 숨겨진 무림 본성은 [${factionName}]입니다! 당신의 본성도 확인해보세요.`,
          url,
        });
      } catch {
        /* 사용자가 공유 취소 */
      }
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('테스트 결과 링크가 복사되었습니다! 카카오톡이나 SNS에 붙여넣기 해보세요.');
      });
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    const origin = window.location.origin;

    // 카카오 SDK 준비됐으면 → 카톡 바로 열려서 친구 선택 + 결과 카드 전송
    if (KAKAO_JS_KEY && window.Kakao?.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `내 안의 본성: ${factionName}`,
          description: subtitle,
          imageUrl: `${origin}/images/og/${factionId}.jpg`,
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [
          {
            title: '나도 테스트하러 가기',
            link: { mobileWebUrl: `${origin}/`, webUrl: `${origin}/` },
          },
        ],
      });
      return;
    }

    // 폴백
    fallbackShare(url);
  };

  return (
    <div className={styles.actionButtons}>
      <button className={styles.shareButton} onClick={handleShare}>
        카카오톡으로 친구에게 공유하기
      </button>
      <Link href="/" className={styles.retryButton}>
        나도 테스트하러 가기
      </Link>
    </div>
  );
}

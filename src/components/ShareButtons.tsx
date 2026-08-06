'use client';

import styles from '../app/result/[id]/result.module.css';
import Link from 'next/link';

export default function ShareButtons({ factionName }: { factionName: string }) {
  const handleShare = async () => {
    const url = window.location.href;
    
    // 모바일 기기(카카오톡 인앱 브라우저, 사파리 등)의 기본 공유하기 기능(Web Share API) 활용
    if (navigator.share) {
      try {
        await navigator.share({
          title: `무림 성향 테스트 - ${factionName}`,
          text: `나의 숨겨진 무림 본성은 [${factionName}]입니다! 당신의 본성도 확인해보세요.`,
          url: url,
        });
      } catch (err) {
        console.error('공유하기가 취소되었거나 지원되지 않습니다.', err);
      }
    } else {
      // PC나 Web Share API 미지원 브라우저의 경우 클립보드 복사
      navigator.clipboard.writeText(url).then(() => {
        alert('테스트 결과 링크가 복사되었습니다! 카카오톡이나 SNS에 붙여넣기 해보세요.');
      });
    }
  };

  return (
    <div className={styles.actionButtons}>
      <button className={styles.shareButton} onClick={handleShare}>
        친구에게 결과 공유하기
      </button>
      <Link href="/" className={styles.retryButton}>
        다시 테스트하기
      </Link>
    </div>
  );
}

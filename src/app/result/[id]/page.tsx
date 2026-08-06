import { factionResults } from '../../../data/results';
import styles from './result.module.css';
import Link from 'next/link';
import ScrollTransition from '../../../components/ScrollTransition';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = factionResults[id];
  
  if (!result) return { title: '무림 성향 팩폭 테스트' };

  return {
    title: `내 안의 본성: ${result.name} | 무림 성향 테스트`,
    description: result.subtitle,
    openGraph: {
      title: `내 안의 본성: ${result.name}`,
      description: result.subtitle,
      // 실제 존재하는 이미지만 OG에 반영
      images: [result.imageUrl && result.imageUrl.includes('178') ? result.imageUrl : 'https://www.transparenttextures.com/patterns/black-paper.png'],
    },
  };
}

export default async function ResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = factionResults[id];

  if (!result) {
    return <div style={{color: 'white', padding: '2rem'}}>결과를 찾을 수 없습니다.</div>;
  }

  // 아직 이미지가 생성되지 않은 문파는 엑스박스 방지
  const hasValidImage = result.imageUrl && result.imageUrl.includes('178');

  return (
    <>
      <ScrollTransition />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hopae}>
            <h2 className={styles.subtitle}>{result.subtitle}</h2>
            <h1 className={styles.title}>[{result.name}]</h1>
            
            {hasValidImage ? (
              <img src={result.imageUrl} alt={result.name} className={styles.image} />
            ) : (
              <div className={styles.placeholderImage}>
                <span>{result.name} 호패 각인 중...</span>
              </div>
            )}

            <div className={styles.descriptionBox}>
              {result.description.map((line, idx) => (
                <p key={idx} className={styles.descLine}>"{line}"</p>
              ))}
            </div>
            
            <div className={styles.matchBox}>
              <div className={styles.matchItem}>
                <span className={styles.matchTitle}>🤝 영혼의 단짝</span>
                <span className={styles.matchName}>{result.bestMatch.name}</span>
                <span className={styles.matchDesc}>{result.bestMatch.desc}</span>
              </div>
              <div className={styles.matchItem}>
                <span className={styles.matchTitle}>🥶 상극 천적</span>
                <span className={styles.matchName}>{result.worstMatch.name}</span>
                <span className={styles.matchDesc}>{result.worstMatch.desc}</span>
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.shareButton}>
              카카오톡으로 팩폭 날리기
            </button>
            <Link href="/" className={styles.retryButton}>
              다시 테스트하기
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

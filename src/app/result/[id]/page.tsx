import { factionResults } from '../../../data/results';
import styles from './result.module.css';
import Link from 'next/link';
import ScrollTransition from '../../../components/ScrollTransition';
import ShareButtons from '../../../components/ShareButtons';
import { ScrollText, Eye, Flame, Swords } from 'lucide-react';

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
            {result.description.map((line, idx) => {
              if (line === '') return null; // 빈 줄은 스킵하고 CSS margin으로 처리
              
              let Icon = null;
              if (line.includes('천기누설')) Icon = ScrollText;
              else if (line.includes('심검')) Icon = Eye;
              else if (line.includes('비급')) Icon = Flame;
              else if (line.includes('파훼법')) Icon = Swords;

              if (Icon) {
                return (
                  <h3 key={idx} className={styles.sectionTitle}>
                    <Icon size={24} className={styles.sectionIcon} />
                    {line}
                  </h3>
                );
              }

              return (
                <p key={idx} className={styles.descLine}>
                  {line}
                </p>
              );
            })}
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

          <ShareButtons factionName={result.name} />
        </div>
      </main>
    </>
  );
}

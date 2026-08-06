import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>내 안의 숨겨진 본성을 찾아라</h2>
        <h1 className={styles.title}>무림 성향 팩폭 테스트</h1>
        <div className={styles.divider}></div>
        <p className={styles.description}>
          50개의 뼈 때리는 질문들.<br/>
          당신은 정파의 영웅인가, 마교의 폭군인가, 아니면 뒷골목 사기꾼인가?
        </p>
        <Link href="/test" className={styles.startButton}>
          강호 출두하기 (테스트 시작)
        </Link>
      </div>
    </main>
  );
}

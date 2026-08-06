'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollTransition.module.css';

export default function ScrollTransition({ 
  isClosing = false, 
  onCloseComplete 
}: { 
  isClosing?: boolean; 
  onCloseComplete?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 150); // 렌더링 안정화 후 시네마틱하게 열림
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isClosing) {
      setIsOpen(false);
      if (onCloseComplete) {
        setTimeout(() => {
          onCloseComplete();
        }, 1600); // 열림/닫힘 이징이 길어졌으므로 대기 시간 증가 (1.5초 애니메이션)
      }
    }
  }, [isClosing, onCloseComplete]);

  return (
    <div className={styles.overlay}>
      <div className={`${styles.scrollHalf} ${styles.scrollHalfTop} ${isOpen ? styles.openTop : ''}`}>
        <div className={styles.scrollPoleBottom}>
          <div className={styles.sealTop}></div>
        </div>
      </div>
      <div className={`${styles.scrollHalf} ${styles.scrollHalfBottom} ${isOpen ? styles.openBottom : ''}`}>
        <div className={styles.scrollPoleTop}>
          <div className={styles.sealBottom}></div>
        </div>
      </div>
    </div>
  );
}

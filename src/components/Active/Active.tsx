import React from 'react';
import styles from './Active.module.css';

const ActiveBlock: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {/* 左側圖片 */}
        <div className={styles.imageContainer}>
          <img src="50SeriesBanner-Left.avif" alt="Active" />
        </div>

        {/* 右側文字與按鈕 */}
        <div className={styles.textContainer}>
          <h2>Game Changer</h2>
          <p>GeForce RTX 50 Series PCs powered by Blackwell and AI. Available now with Limited Supply!</p>
          <button className={styles.shopButton}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveBlock;

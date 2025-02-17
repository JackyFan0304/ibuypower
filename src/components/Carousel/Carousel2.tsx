'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel2.module.css';

type Slide = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

type CarouselProps = {
  slides: Slide[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // 初始索引設為1，因為我們會在前後各加一張
  const [isTransitioning, setIsTransitioning] = useState(true); // 控制動畫過渡
  const totalSlides = slides.length;

  // 複製前後的圖片
  const extendedSlides = [
    slides[totalSlides - 1], // 最後一張放在最前面
    ...slides,
    slides[0], // 第一張放在最後面
  ];

  const nextSlide = () => {
    if (!isTransitioning) return; // 防止快速多次點擊
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return; // 防止快速多次點擊
    setCurrentIndex((prev) => prev - 1);
  };

  // 當索引超出範圍時，瞬間跳回正確位置（不帶動畫）
  useEffect(() => {
    if (currentIndex > totalSlides) {
      // 從最後一張切換到第一張
      setTimeout(() => {
        setIsTransitioning(false); // 關閉動畫過渡
        setCurrentIndex(1); // 瞬間跳回第一張
      }, 500); // 與 CSS 的 transition 時間一致

      setTimeout(() => {
        setIsTransitioning(true); // 恢復動畫過渡
      }, 600); // 確保過渡恢復正常
    } else if (currentIndex === 0) {
      // 從第一張切換到最後一張
      setTimeout(() => {
        setIsTransitioning(false); // 關閉動畫過渡
        setCurrentIndex(totalSlides); // 瞬間跳回最後一張
      }, 500);

      setTimeout(() => {
        setIsTransitioning(true); // 恢復動畫過渡
      }, 600);
    }
  }, [currentIndex, totalSlides]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slidesContainer}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
            />
            {/* 動態渲染文字區塊 */}
            <div className={styles.textOverlay}>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      {/* 左右切換按鈕 */}
      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
        {'<'}
      </button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;

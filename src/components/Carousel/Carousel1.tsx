'use client';

import React, { useState, useEffect } from 'react';
import styles from './Carousel1.module.css';

const Carousel: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1); // 初始位置設為複製的第一張
  const [isTransitioning, setIsTransitioning] = useState(false); // 控制動畫進行中狀態
  const [isPaused, setIsPaused] = useState(false); // 控制是否暫停自動播放

  const totalSlides = slides.length;

  // 擴展幻燈片陣列：在頭尾分別添加複製的最後一張和第一張
  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  // 下一張幻燈片
  const nextSlide = () => {
    if (isTransitioning) return; // 防止多次點擊
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  // 上一張幻燈片
  const prevSlide = () => {
    if (isTransitioning) return; // 防止多次點擊
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // 自動播放功能
  useEffect(() => {
    if (isPaused) return; // 如果暫停，則不執行自動播放

    const interval = setInterval(() => {
      nextSlide(); // 每次自動切換到下一張
    }, 3000); // 每 3 秒切換一次

    return () => clearInterval(interval); // 清除定時器，避免內存洩漏
  }, [isPaused]);

  // 當動畫結束時，處理無縫切換
  useEffect(() => {
    if (currentSlide === totalSlides + 1) {
      // 如果超出最後一張，瞬間重置為第一張
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500); // 與 CSS 動畫時間一致
      return () => clearTimeout(timeout);
    }

    if (currentSlide === 0) {
      // 如果超出第一張，瞬間重置為最後一張
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
      }, 500); // 與 CSS 動畫時間一致
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // 動畫完成後解除鎖定

    return () => clearTimeout(timeout);
  }, [currentSlide, totalSlides]);

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)} // 滑鼠進入時暫停自動播放
      onMouseLeave={() => setIsPaused(false)} // 滑鼠離開時恢復自動播放
    >
      <button className={styles.navButton} onClick={prevSlide}>
        &lt;
      </button>
      <div
        className={styles.carouselContent}
        style={{
          transform: `translateX(-${currentSlide * 1500}px)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <span>
              {slide.split('$').map((part, i) =>
                i % 2 === 1 ? (
                  <span key={i} style={{ color: 'red' }}>
                    ${part}
                  </span>
                ) : (
                  part
                )
              )}
            </span>
          </div>
        ))}
      </div>
      <button className={styles.navButton} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

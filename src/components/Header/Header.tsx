"use client";

// 引入 SVG 圖片
import MemberIcon from '@/assets/icons/svg/member.svg';
import CartIcon from '@/assets/icons/svg/cart.svg';
import SearchIcon from '@/assets/icons/svg/icon_search.svg';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ArrowDownIcon from '@/components/ArrowDownIcon';

export default function Header() {
  // 狀態變數：分別管理 Gaming Laptops 和 Community 的箭頭翻轉
  const [isGamingLaptopsRotated, setIsGamingLaptopsRotated] = useState(true);
  const [isCommunityRotated, setIsCommunityRotated] = useState(true);

  // 點擊事件處理函數
  const toggleGamingLaptops = () => {
    setIsGamingLaptopsRotated(!isGamingLaptopsRotated);
  };

  const toggleCommunity = () => {
    setIsCommunityRotated(!isCommunityRotated);
  };

  return (
    <header className="flex items-center justify-center bg-white shadow-md" style={{ width: '100%', height: '75px' }}>
      {/* 左側 Logo */}
      <div className="flex h-full items-center px-4">
        <Link href="/">
          <Image src="/ibp-logo.avif" alt="IBUYPOWER Logo" width={200} height={40} />
        </Link>
      </div>

      {/* 中間導航連結 */}
      <nav className="h-full">
        <ul className="flex h-full items-center">
          <li><Link href="/deals" className={styles.navLink}>Today's Deals</Link></li>
          <li><Link href="/rdy-pcs" className={styles.navLink}>RDY Prebuilt PCs</Link></li>
          <li><Link href="/gaming-pcs" className={styles.navLink}>Gaming PCs</Link></li>
          <li>
            <button 
              onClick={toggleGamingLaptops} 
              className={`${styles.navLink} flex items-center`}
            >
              Gaming Laptops
              <ArrowDownIcon rotated={isGamingLaptopsRotated} />
            </button>
          </li>
          <li><Link href="/gear-store" className={styles.navLink}>Gear Store</Link></li>
          <li><Link href="/refurbished" className={styles.navLink}>Refurbished</Link></li>
          <li>
            <button 
              onClick={toggleCommunity} 
              className={`${styles.navLink} flex items-center`}
            >
              Community
              <ArrowDownIcon rotated={isCommunityRotated} />
            </button>
          </li>
          <li><Link href="/support" className={styles.navLink}>Support</Link></li>
        </ul>
      </nav>

      {/* 右側圖標 */}
      <div className="flex space-x-6 ml-[100px] mr-[200px]">
        <button aria-label="Member">
          <MemberIcon className={styles.icon} />
        </button>
        <button aria-label="Cart">
          <CartIcon className={styles.icon} />
        </button>
        <button aria-label="Search">
          <SearchIcon className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
}

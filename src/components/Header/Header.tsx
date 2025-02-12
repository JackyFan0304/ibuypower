import Image from 'next/image';
import Link from 'next/link';

// 引入 SVG 圖片
import MemberIcon from '@/assets/icons/svg/member.svg';
import CartIcon from '@/assets/icons/svg/cart.svg';
import SearchIcon from '@/assets/icons/svg/icon_search.svg';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-white shadow-md" style={{ width: '1903px', height: '75px' }}>
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
          <li><Link href="/gaming-laptops" className={styles.navLink}>Gaming Laptops</Link></li>
          <li><Link href="/gear-store" className={styles.navLink}>Gear Store</Link></li>
          <li><Link href="/refurbished" className={styles.navLink}>Refurbished</Link></li>
          <li><Link href="/community" className={styles.navLink}>Community</Link></li>
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
          <SearchIcon className={styles.icon} />
        </button>
      </div>
    </header>
  );
}


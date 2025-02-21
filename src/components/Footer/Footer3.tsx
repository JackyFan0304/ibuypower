import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer3.module.css';

const Footer3 = () => {
  return (
    <div className={styles.footer3}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          © 1998-2025 IBUYPOWER All rights reserved.
        </div>
        <div className={styles.links}>
          <Link href="#">Site Map</Link>
          <span className={styles.divider}>|</span>
          <Link href="#">Terms</Link>
          <span className={styles.divider}>|</span>
          <Link href="#">Privacy</Link>
          <span className={styles.divider}>|</span>
          <Link href="#">Disclaimer</Link>
        </div>
        <div className={styles.region}>
          <Image 
            src="/images/Footer/svg/icon_flag_usa.svg"
            alt="United States"
            width={20}
            height={15}
          />
          <span>United States</span>
        </div>
      </div>
    </div>
  );
};

export default Footer3;

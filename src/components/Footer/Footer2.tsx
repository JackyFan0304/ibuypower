import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer2.module.css';

const Footer2 = () => {
  const socialIcons = [
    { name: 'tiktok', icon: '/images/Footer/svg/black_tiktok.svg' },
    { name: 'discord', icon: '/images/Footer/svg/black_discord.svg' },
    { name: 'facebook', icon: '/images/Footer/svg/black_facebook.svg' },
    { name: 'twitter', icon: '/images/Footer/svg/black_twitter.svg' },
    { name: 'instagram', icon: '/images/Footer/svg/black_instagram.svg' },
    { name: 'youtube', icon: '/images/Footer/svg/black_youtube.svg' },
    { name: 'reddit', icon: '/images/Footer/svg/black_reddit.svg' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.navColumns}>
          <div className={styles.column}>
            <h3>Shop</h3>
            <Link href="#">RDY Prebuilt Computers</Link>
            <Link href="#">Easy Builder</Link>
            <Link href="#">Customize Gaming PC</Link>
            <Link href="#">Gaming PCs</Link>
            <Link href="#">Gaming Laptops</Link>
            <Link href="#">Gear Store</Link>
          </div>
          
          <div className={styles.column}>
            <h3>Support</h3>
            <Link href="#">Support Home</Link>
            <Link href="#">Order Status</Link>
            <Link href="#">Drivers & Downloads</Link>
            <Link href="#">Return Policy</Link>
            <Link href="#">Warranty</Link>
            <Link href="#">FAQ</Link>
          </div>

          <div className={styles.column}>
            <h3>Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Career</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Customer Reviews</Link>
            <Link href="#">Press Release</Link>
            <Link href="#">Financing</Link>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon) => (
              <Image 
                key={icon.name}
                src={icon.icon}
                alt={icon.name}
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className={styles.contact}>Contact Us: 888-462-3899</p>
          <p className={styles.promotion}>
            Get gaming news and iBUYPOWER promotions and offers!
          </p>
          <div className={styles.brandSection}>
            <span>Family Brand</span>
            <Image 
              src="/images/Footer/svg/hyte.svg"
              alt="HYTE"
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.poweredBy}>
          <span>iBUYPOWER IS POWERED BY:</span>
          <Image
            src="/images/Footer/avif/new_intel_logo.avif"
            alt="Intel Logo"
            width={800}
            height={50}
          />
        </div>
        <div className={styles.purchaseFrom}>
          <span>iBUYPOWER PRODUCTS CAN BE PURCHASED FROM:</span>
          <Image
            src="/images/Footer/avif/logos-purchase_V3.avif"
            alt="Purchase Logos"
            width={800}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

import Image from 'next/image';
import styles from './IntroSection2-1.module.css';

const IntroSection2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        <div className={styles.content}>
          <h2>Gaming Laptops</h2>
          <p>Browse through our full range of configured gaming laptops. <br />
            Immerse yourself in the ultimate gaming experience on the go.</p>
          <button className={styles.button}>Shop Now</button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Introduction2/laptops_main.webp"
            alt="Gaming Laptop"
            width={500}
            height={300}
            layout="responsive"
            priority
          />
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.content}>
          <h2>Gear Store</h2>
          <p>Gear up and be game ready with your favorite gaming accessories, <br />
            monitors, PC parts, iBUYPOWER apparel and more!</p>
          <button className={styles.button}>Shop Now</button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/Introduction2/gears_main.webp"
            alt="Gaming Gear"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection2;

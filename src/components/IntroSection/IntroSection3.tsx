import styles from "./IntroSection3.module.css";

const IntroSection3 = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img 
            src="/images/Introduction/custom_main_1200x688.webp"
            alt="Gaming PC" 
            className={styles.mainImage}
          />
        </div>
        <div className={styles.contentSection}>
          <h1>Custom Gaming PCs</h1>
          <p>
            Custom built to order. Our PC builder lets you choose the components you need to outclass your adversaries.
          </p>
          <button className={styles.shopButton}>
            Customize Now
          </button>
        </div>
      </div>
    );
};
  
export default IntroSection3;
  
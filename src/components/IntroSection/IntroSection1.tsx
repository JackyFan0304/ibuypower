import styles from "./IntroSection1.module.css";

const IntroSection1 = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img 
            src="/images/Introduction/rdy_main.webp"
            alt="Gaming PC" 
            className={styles.mainImage}
          />
        </div>
        <div className={styles.contentSection}>
          <h1>Prebuilt Gaming PC</h1>
          <p>
            Start your gaming journey with professionally designed RDY prebuilt systems and get Free 2-Day Shipping!
          </p>
          <button className={styles.shopButton}>
            Shop Now
          </button>
        </div>
      </div>
    );
};
  
export default IntroSection1;
  
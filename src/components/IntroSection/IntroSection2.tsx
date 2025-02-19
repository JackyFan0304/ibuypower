import styles from "./IntroSection2.module.css";

const IntroSection2 = () => {
    return (
      <div className={styles.container}>
        <div className={styles.contentSection}>
          <h1>Easy Builder</h1>
          <p>
            Custom build the perfect gaming PC based on the games you play and we will ship it out in 5 business days!
          </p>
          <button className={styles.shopButton}>
            Customize Now
          </button>
        </div>        
        <div className={styles.imageSection}>
          <img 
            src="/images/Introduction/ezb_main_nocut.webp"
            alt="Easy Builder" 
            className={styles.mainImage}
          />
        </div>
      </div>
    );
};
  
export default IntroSection2;
  
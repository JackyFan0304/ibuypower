import styles from './CustomerFeedback.module.css';

const CustomerFeedback = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>What they're saying</h2>
      <div className={styles.feedbackWrapper}>
        <div className={styles.feedbackCard}>
          <img 
            src="/images/CustomerFeedback/consumeraffairs_logo.avif" 
            alt="Consumer Affairs" 
            className={styles.logo}
          />
          <img 
            src="/images/CustomerFeedback/icon_5_star.svg" 
            alt="5 Star Rating" 
            className={styles.stars}
          />
        </div>
        <div className={styles.feedbackCard}>
          <img 
            src="/images/CustomerFeedback/reseller_logo.avif" 
            alt="Reseller Ratings" 
            className={styles.logo}
          />
          <img 
            src="/images/CustomerFeedback/icon_5_star.svg" 
            alt="5 Star Rating" 
            className={styles.stars}
          />
        </div>
        <div className={styles.feedbackCard}>
          <img 
            src="/images/CustomerFeedback/googlereview_logo.avif" 
            alt="Google Reviews" 
            className={styles.logo}
          />
          <img 
            src="/images/CustomerFeedback/icon_5_star.svg" 
            alt="5 Star Rating" 
            className={styles.stars}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;

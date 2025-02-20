import styles from './Advantage.module.css';
import Image from 'next/image';

const Advantage = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.mainTitle}>Why iBUYPOWER</h2>
                <p className={styles.description}>
                    So what sets us apart from our competitors? Aside from providing the best bang for your buck in today’s rollercoaster prices of PC components, iBUYPOWER prides themselves in delivering the best gaming experience from new gamers to seasoned pros. We utilize the latest and greatest components and technology from companies such as Intel, AMD, NVIDIA, Microsoft, ASUS, MSI, Western Digital, Samsung, and more! Continue scrolling to learn more...
                </p>
        </div>
        <div className={styles.offeringSection}>
            <h2 className={styles.subTitle}>What we are offering</h2>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Image 
                            src="/images/BrandAdvantage/icon_support_home.svg"
                            width={180}
                            height={180}
                            alt="Support Icon"
                            priority
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>We're Here to Help</h3>
                            <p className={styles.cardDescription}>
                                Ask away. Our customer experience team is here to help.
                            </p>
                        <a href="#" className={styles.learnMore}>Learn more &gt;</a>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Image 
                        src="/images/BrandAdvantage/icon_rewardpoints.svg"
                            width={180}
                            height={180}
                            alt="Support Icon"
                            priority
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Earn Points, Get Rewards</h3>
                            <p className={styles.cardDescription}>
                                Register now to start earning iBP points.
                            </p>
                        <a href="#" className={styles.learnMore}>Learn more &gt;</a>
                    </div>
                </div>
            </div>
        </div>

        {/* 新增第二個區塊 */}
        <div className={styles.featuresContainer}>
            <div className={styles.feature}>
            <div className={styles.featureIcon}>
                <Image 
                src="/images/BrandAdvantage/icon_fast_ship.svg"
                width={120}
                height={120}
                alt="Free Shipping"
                priority
                />
            </div>
            <h3 className={styles.featureTitle}>Free Shipping</h3>
            <p className={styles.featureDescription}>
                All iBUYPOWER gaming PCs come with free shipping!
            </p>
            </div>

            <div className={styles.feature}>
            <div className={styles.featureIcon}>
                <Image 
                src="/images/BrandAdvantage/icon_assembled.svg"
                width={120}
                height={120}
                alt="Assembled in USA"
                priority
                />
            </div>
            <h3 className={styles.featureTitle}>Assembled in the USA</h3>
            <p className={styles.featureDescription}>
                Every iBUYPOWER gaming pc and laptop that goes through our assembly line is professionally assembled by hand in the USA.
            </p>
            </div>

            <div className={styles.feature}>
            <div className={styles.featureIcon}>
                <Image 
                src="/images/BrandAdvantage/icon_lifttime support.svg"
                width={120}
                height={120}
                alt="Warranty"
                priority
                />
            </div>
            <h3 className={styles.featureTitle}>Standard 3 Year Warranty</h3>
            <p className={styles.featureDescription}>
                iBUYPOWER desktops comes with our industry leading 2-year parts warranty, 3-year labor service, and life-time technical support from our in-house technicians.
            </p>
            </div>
        </div>
    </section>
  );
};

export default Advantage;

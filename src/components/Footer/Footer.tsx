"use client";
import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.aboutSection}>
          <h2 className={styles.title}>ABOUT iBUYPOWER GAMING PCS</h2>
          
          <div className={`${styles.content} ${isExpanded ? styles.expanded : ''}`}>
            <p>iBUYPOWER symbolizes several key beliefs: Innovation, Quality, Selection, Community, Performance. These are fundamental attributes of life inside and outside of gaming. You need them all to win. Leading the pack, iBUYPOWER is gaming, defined.</p>
                      
            <p>At the forefront of <span className={styles.highlight}>innovation</span>, we break boundaries with our unwavering dedication to esports and PC gaming. Our innovation shines with our signature series, including the Revolt 2, the world's first gaming PC designed for esports, and the Snowblind, our tempered-glass creation featuring the first mass-produced LCD-side panel gaming PC with unlimited customization options.</p>
                      
            <p>One of the most important attributes of a gaming pc is <span className={styles.highlight}>quality</span>. As gamers ourselves, we adhere to a strict and thorough testing guidelines. We stress-test each component with a series of benchmarks that push our gaming PCs to the limit.</p>

            <p>Every gaming pc we build is unique and distinctive to your needs as a customer – that’s why our commitment to a wide <span className={styles.highlight}>selection</span> - is unparalleled within the industry. With dozens of combinations to build upon, we’re confident that we can build a gaming PC catered to your needs.</p>
            
            <p>We’re also more than just a gaming company – we’re a <span className={styles.highlight}>community</span>. From hosting large-scale esports tournaments to partnering with public universities across the nation to provide esports sponsorships, we are taking steps to take expand and diversify the world of PC gaming.</p>

            <p>Our custom gaming pcs have been engineered and tested for efficiency and maximum <span className={styles.highlight}>performance</span>. From our delicate wiring to chassis airflow, our team of experts are focused on improving your gaming experience by unlocking the potential of each component.</p>

            <p>Since 1999, we have been delivering on the promise to build the best gaming PC for the most avid gamers. Our systems have since become the backbone for professional gamers, game developers, LAN centers, major esports tournaments, and everyday consumers.</p>

            <p>Gamer Tested, Player Perfected. Game with us.</p>
          
          </div>

          <button 
            className={styles.toggleButton}
            onClick={toggleContent}
          >
            {isExpanded ? '- Show less' : '+ Show more'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import styles from './Footer.module.css';
import React from 'react';  
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerCenter}>
      <div className={styles.footerLeft}>
      <nav className={styles.gradientText1}>BearifiedCo</nav>
        <p>A Web3 Company</p>
      </div>
      <div className={styles.footerCenter}>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <div></div>
        </div>
      <div className={styles.footerLeft}>
        <h4>Lets connect 🤝 </h4>
        <div className={styles.socialIcons}>
        <a href="https://twitter.com/BearifiedXYZ" target="_blank" rel="noopener noreferrer">
        <Image src="/images/x.png" alt="X" width={24} height={24} />
        </a>
        <a href="https://www.instagram.com/bearifiedxyz/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://discord.gg/aK76shw3w3" target="_blank" rel="noopener noreferrer">
       <Image src="/images/discord.png" alt="Discord" width={24} height={24} />
       </a>
       {/* Add more icons similarly */}
      </div>

      </div>
    </footer>
  );
}

export default Footer;

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
      <nav className={styles.gradientText0}>Bearified XYZ</nav>
        <p>A web3 Agency</p>
      </div>
      <div className={styles.footerCenter}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className={styles.footerRight}>
        <p>Follow us on:</p>
        {/* Add your social media icons here */}
      </div>
    </footer>
  );
}

export default Footer;

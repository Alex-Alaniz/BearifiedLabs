import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import "../styles/globals.css";
import Footer from '../Components/Footer'; // Import the Footer component
import Head from 'next/head'; // <-- Import the Head component

const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const navLinks = document.querySelectorAll('[data-target]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId!); // add ! to assert that targetId is not null
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BearifiedCo</title>
        <meta name="description" content="A Web3 Agency: Powering dreams for Developers Artist & Creators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.Bearified.xyz/" />
        <meta property="og:title" content="BearifiedCo" />
        <meta property="og:description" content="A Web3 Agency: Powering dreams for Developers Artist & Creators. Step into the NFT universe with us. We navigate the intricate maze of smart contracts and provide a robust Web3 drop platform. You bring the creativity, we handle the code. When our worlds collide, expect digital fireworks." />
        <meta property="og:image" content="images/BearifiedXYZ.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.Bearified.xyz/" />
        <meta property="twitter:title" content="BearifiedCo" />
        <meta property="twitter:description" content="A Web3 Agency: Powering dreams for Developers Artist & Creators. Step into the NFT universe with us. We navigate the intricate maze of smart contracts and provide a robust Web3 drop platform. You bring the creativity, we handle the code. When our worlds collide, expect digital fireworks." />
        <meta property="twitter:image" content="https://twitter.com/BearifiedXYZ/photo" />
      </Head>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#hero" data-target="hero">Home</a></li>
          <li><a href="#services" data-target="services">Services</a></li>
          <li><a href="#projects" data-target="projects">Projects</a></li>
          <li><a href="#team" data-target="team">Team</a></li>
          <li><a href="#testimonials" data-target="testimonials">Testimonials</a></li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <Footer /> {/* Add the Footer component here */}
    </ThirdwebProvider>
  );
}

export default MyApp;

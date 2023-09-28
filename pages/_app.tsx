import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import "../styles/globals.css";
import Footer from '../components/Footer.tsx'; // Import the Footer component

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

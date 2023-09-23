import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.logo}>Bearified Labs</div>
          <ul className={styles.menu}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <ConnectWallet
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </nav>

        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bearified™ Labs.
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            A Web3 Agency: Powering dreams for{" "}
            <code className={styles.code}>Developers</code>{" "}
            <code className={styles.code}>Artist</code> & {""}
            <code className={styles.code}>Creators</code> 
          </p>
        </div>

        {/* Grid Section */}
        <div className={styles.grid}>
          <a
            href="https://portal.thirdweb.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardImage}>
              <Image
                src="/images/portal-preview.png"
                alt="Placeholder preview of starter"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardText}>
              <h2 className={styles.gradientText1}>Portal ➜</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/dashboard"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardImage}>
              <Image
                src="/images/dashboard-preview.png"
                alt="Placeholder preview of starter"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>Dashboard ➜</h2>
              <p>
                Deploy, configure, and manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/templates"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardImage}>
              <Image
                src="/images/templates-preview.png"
                alt="Placeholder preview of templates"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardText}>
              <h2 className={styles.gradientText3}>Templates ➜</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a>
        </div>

        {/* Services Section */}
        <section className={styles.services} id="services">
          <h2>Our Services</h2>
          <div className={styles.serviceCardsContainer}>
            <div className={styles.serviceCard}>
              <img src="path_to_icon_or_image" alt="Service Icon" className={styles.serviceIcon} />
              <h3>Custom Smart Contracts</h3>
              <p>Service Description</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="path_to_icon_or_image" alt="Service Icon" className={styles.serviceIcon} />
              <h3>Minting Pipeline Design</h3>
              <p>Service Description</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="path_to_icon_or_image" alt="Service Icon" className={styles.serviceIcon} />
              <h3>Blockchain Development</h3>
              <p>Service Description</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="path_to_icon_or_image" alt="Service Icon" className={styles.serviceIcon} />
              <h3>Promotional Microsites</h3>
              <p>Service Description</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="path_to_icon_or_image" alt="Service Icon" className={styles.serviceIcon} />
              <h3>Drop & Pricing Strategy</h3>
              <p>Service Description</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="path_to_icon_or_image" alt="Service Icon" className={styles.serviceIcon} />
              <h3>Launch Execution</h3>
              <p>Service Description</p>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section className={styles.projects} id="projects">
          <h2>Our Projects</h2>
          <div className={styles.project}>
            <a href="https://obyclabs.com/" target="_blank">Okay Bears Yacht Club</a>
            <a href="https://opensea.io/collection/okaybearsyachtclub" target="_blank">View on OpenSea</a>
          </div>
          <div className={styles.project}>
            <a href="https://obyclabs.com/" target="_blank">Mutants vs Machines</a>
            <a href="https://opensea.io/collection/mutantsvsmachines" target="_blank">View on OpenSea</a>
          </div>
          <div className={styles.project}>
            <a href="https://projecteve.io/" target="_blank">Project EVE</a>
            <a href="https://opensea.io/ProjectEVE/created" target="_blank">View on OpenSea</a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials} id="testimonials">
          <h2>What Our Clients Say</h2>
          <blockquote>
            "Bearified Labs provided exceptional service and expertise for our blockchain project. Highly recommended!"
            <cite>- Satisfied Client</cite>
          </blockquote>
          <blockquote>
            "Their team was professional, knowledgeable, and went above and beyond to ensure our project's success."
            <cite>- Happy Partner</cite>
          </blockquote>
        </section>

        {/* Team Section */}
        <section className={styles.team} id="team">
          <h2>Meet Our Team</h2>
          <div className={styles.card}>
            <div className={styles.teamImage}>
              <Image
                src="https://ipfs.io/ipfs/QmbpbVgkSyTvZFyNjHi5YNW8YuHXyWqha8pKJME7mf4xbF/New%20Alex%20Avatar.JPG"
                alt="devAlex.ᴱᵀᴴ| ᵍᵐ"
                width={150}
                height={150}
              />
            </div>
            <h3>devAlex.ᴱᵀᴴ| ᵍᵐ</h3>
            <p>Blockchain Engineer</p>
            <a href="https://alexalaniz.com" target="_blank">Visit Website</a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
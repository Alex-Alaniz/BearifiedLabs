import { ConnectWallet } from "@thirdweb-dev/react";  
import styles from "../styles/Home.module.css";
import emblaStyles from "../Components/EmblaCarousel.module.css"; // Importing Embla styles
import Image from "next/image";
import { NextPage } from "next";
import { EmblaCarouselComponent } from '../Components/EmblaCarouselComponent';

const slidesData = [
  {
    title: "OBYC Labs (No Rug Studio)",
    imageUrl: "/images/OBYCLabs.png",
    link: "https://obyclabs.com/"
  },
  {
    title: "Okay Bears Yacht Club™",
    imageUrl: "/images/OBYC.png",
    link: "https://opensea.io/collection/okaybearsyachtclub"
  },
  {
    title: "OBYC Hazmat Division",
    imageUrl: "/images/OBYCHazmat.png",
    link: "https://opensea.io/collection/obyc-hazmat-division"
  },
  {
    title: "Mutants vs Machines",
    imageUrl: "/images/MvM.png",
    link: "https://opensea.io/collection/mutantsvsmachines"
  },
  {
    title: "Jungle Bay",
    imageUrl: "/images/JungleBay.png",
    link: "https://junglebayisland.com/"
  },
  {
    title: "Project EVE",
    imageUrl: "/images/EVE.png",
    link: "https://projecteve.io/"
  }
];

const Home: NextPage = () => {
  return (

    <main className={styles.main}>
      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <nav className={styles.gradientText0}>Bearified XYZ</nav>
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
                Bearified™ Labs
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            A Web3 Agency: Powering dreams for{" "}
            <code className={styles.code}>Developers</code>{" "}
            <code className={styles.code}>Artist</code> & {""}
            <code className={styles.code}>Creators</code> 
            Step into the NFT universe with us. We navigate the intricate maze of smart contracts and provide a robust Web3 drop platform. You bring the creativity, we handle the code. When our worlds collide, expect digital fireworks.
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
              <Image src="/images/SmartContracts.png" alt="SmartContracts" width={100} height={100} className={styles.serviceIcon} />
              <h3>Custom Smart Contracts</h3>
              <p>Your contracts, Your Rules</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/images/Mint.png" alt="Mint" width={100} height={100} className={styles.serviceIcon} />
              <h3>Minting Pipeline Design</h3>
              <p>Creating & distributing digital assets efficiently</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/images/block.png" alt="Blockchain" width={100} height={100} className={styles.serviceIcon} />
              <h3>Blockchain Development</h3>
              <p>Building decentralized applications</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/images/search.png" alt="Search" width={100} height={100} className={styles.serviceIcon} />
              <h3>Promotional Microsites</h3>
              <p>Designed to showcase & promote</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/images/pricing.png" alt="Pricing" width={100} height={100} className={styles.serviceIcon} />
              <h3>Drop & Pricing Strategy</h3>
              <p>Competitive pricing to maximize returns</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/images/startup.png" alt="Startup" width={100} height={100} className={styles.serviceIcon} />
              <h3>Launch Execution</h3>
              <p>Seamless and strategic rollouts</p>
            </div>
          </div>
        </section>

    {/* Projects Section */}
    <section className={styles.projects} id="projects">
      <h2 className={styles.centeredText}>Our Projects</h2>
      <div className={emblaStyles.embla}>
        <EmblaCarouselComponent slides={slidesData} />
      </div>
    </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials} id="testimonials">
          <h2>What Our Clients Say</h2>
          <blockquote>
          &apos;Bearified Labs provided exceptional service and expertise for our blockchain project. Highly recommended!&apos;
            <cite>- Satisfied Client</cite>
          </blockquote>
          <blockquote>
          &apos;Their team was professional, knowledgeable, and went above and beyond to ensure our project&apos;s success.&apos;
            <cite>- Happy Partner</cite>
          </blockquote>
        </section>

        {/* Team Section */}
<section className={styles.team} id="team">
    <h2 className={styles.centeredText}>Our Team</h2>
    <div className={styles.teamContainer}>
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
            <p>Dev</p>
            <a href="https://alexalaniz.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
    </div>

    <div className={styles.teamContainer}>
        <div className={styles.card}>
            <div className={styles.teamImage}>
                <Image
                    src="/images/ApeWhaleNFT.png"
                    alt="ApeWhaleNFT.ᴱᵀᴴ"
                    width={150}
                    height={150}
                />
            </div>
            <h3>ApeWhaleNFT.ᴱᵀᴴ</h3>
            <p>Advisor</p>
            <a href="https://x.com/obycduke" target="_blank" rel="noopener noreferrer">Socials</a>
        </div>
    </div>


    <div className={styles.teamContainer}>
        <div className={styles.card}>
            <div className={styles.teamImage}>
                <Image
                    src="/images/ImM0RTaL_DuKE.eth.png"
                    alt="ImM0RTaL_DuKE.ᴱᵀᴴ"
                    width={150}
                    height={150}
                />
            </div>
            <h3>ImM0RTaL_DuKE.ᴱᵀᴴ</h3>
            <p>DIT - Dev in Training</p>
            <a href="https://x.com/obycduke" target="_blank" rel="noopener noreferrer">Socials</a>
        </div>
    </div>

    <div className={styles.teamContainer}>
        <div className={styles.card}>
            <div className={styles.teamImage}>
                <Image
                    src="/images/Wayt.png"
                    alt="ImM0RTaL_DuKE.ᴱᵀᴴ"
                    width={150}
                    height={150}
                />
            </div>
            <h3>WavyWayt.ᴱᵀᴴ</h3>
            <p>Account Manager</p>
            <a href="https://x.com/chasewayt" target="_blank" rel="noopener noreferrer">Socials</a>
        </div>
    </div>

</section>
      </div>
    </main>
  );
};

export default Home;
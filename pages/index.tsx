import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import dynamic from 'next/dynamic';

const EmblaCarouselComponent = dynamic(() => import('../components/EmblaCarouselComponent'), {
  ssr: false,  // This will make the component only render on the client side.
});

const Home: NextPage = () => {
  return (

    <main className={styles.main}>
      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <nav className={styles.gradientText0}>Bearified Labs</nav>
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
              <img src="/images/SmartContracts.png" alt="SmartContracts" className={styles.serviceIcon} />
              <h3>Custom Smart Contracts</h3>
              <p>Your contracts, Your Rules</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/images/Mint.png" alt="Mint" className={styles.serviceIcon} />
              <h3>Minting Pipeline Design</h3>
              <p>Creating & distributing digital assets efficiently</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/images/Block.png" alt="Blockchain" className={styles.serviceIcon} />
              <h3>Blockchain Development</h3>
              <p>Building decentralized applications</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/images/search.png" alt="Search" className={styles.serviceIcon} />
              <h3>Promotional Microsites</h3>
              <p>Designed to showcase & promote</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/images/pricing.png" alt="Pricing" className={styles.serviceIcon} />
              <h3>Drop & Pricing Strategy</h3>
              <p>Competitive pricing to maximize returns</p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/images/Startup.png" alt="Startup" className={styles.serviceIcon} />
              <h3>Launch Execution</h3>
              <p>Seamless and strategic rollouts</p>
            </div>
          </div>
        </section>

  {/* Projects Section */}
  <section className={styles.projects} id="projects">
    <h2 className={styles.centeredText}>Our Projects</h2>
    
  <div className="embla">
    {/* Okay Bears Yacht Club */}
    <div className="embla__slide">
      <div className="embla__slide__inner">
        <a href="https://obyclabs.com/" target="_blank" rel="noopener noreferrer">
          <div style={{display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0}}>
            <div style={{display: 'block', boxSizing: 'border-box', paddingTop: '123.12252964426878%'}}></div>
            <noscript>
              <img 
                alt="Okay Bears Yacht Club" 
                sizes="100vw" 
                srcSet="/_next/image?url=/images/OBYC.png&w=640&q=75 640w, ...other resolutions..." 
                src="/_next/image?url=/images/OBYC.png&w=3840&q=75" 
                decoding="async" 
                style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
              />
            </noscript>
            <img 
              alt="Okay Bears Yacht Club" 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              decoding="async" 
              style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
            />
          </div>
        </a>
        <div className="author">Okay Bears Yacht Club</div>
      </div>
    </div>

    {/* Mutants vs Machines */}
    <div className="embla__slide">
      <div className="embla__slide__inner">
        <a href="https://obyclabs.com/" target="_blank" rel="noopener noreferrer">
          <div style={{display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0}}>
            <div style={{display: 'block', boxSizing: 'border-box', paddingTop: '123.12252964426878%'}}></div>
            <noscript>
              <img 
                alt="Mutants vs Machines" 
                sizes="100vw" 
                srcSet="/_next/image?url=/path_to_project_image2.png&w=640&q=75 640w, ...other resolutions..." 
                src="/_next/image?url=/path_to_project_image2.png&w=3840&q=75" 
                decoding="async" 
                style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
              />
            </noscript>
            <img 
              alt="Mutants vs Machines" 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              decoding="async" 
              style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
            />
          </div>
        </a>
        <div className="author">Mutants vs Machines</div>
      </div>
    </div>

    {/* Project EVE */}
    <div className="embla__slide">
      <div className="embla__slide__inner">
        <a href="https://projecteve.io/" target="_blank" rel="noopener noreferrer">
          <div style={{display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0}}>
            <div style={{display: 'block', boxSizing: 'border-box', paddingTop: '123.12252964426878%'}}></div>
            <noscript>
              <img 
                alt="Project EVE" 
                sizes="100vw" 
                srcSet="/_next/image?url=/path_to_project_image3.png&w=640&q=75 640w, ...other resolutions..." 
                src="/_next/image?url=/path_to_project_image3.png&w=3840&q=75" 
                decoding="async" 
                style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
              />
            </noscript>
            <img 
              alt="Project EVE" 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              decoding="async" 
              style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
            />
          </div>
        </a>
        <div className="author">Project EVE</div>
      </div>
    </div>
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
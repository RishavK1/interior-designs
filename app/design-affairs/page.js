export const metadata = {
  title: "Design Affairs by Isha Jain | Interior & Exterior Design",
  description: "A private homepage concept for Design Affairs by Isha Jain in Yamunanagar, Haryana. Illustrative design studies for residential, commercial, interior and exterior spaces.",
  openGraph: { title: "Design Affairs by Isha Jain", description: "Designs that speak your style.", type: "website" },
};

import Image from "next/image";
import Reveal from "../../components/Reveal";
import ProcessFolder from "../../components/ProcessFolder";
import DesignStory from "../../components/DesignStory";
import PolaroidServiceCarousel from "../../components/PolaroidServiceCarousel";
import PageOpening from "../../components/PageOpening";

const social = {
  instagram: "https://www.instagram.com/designaffairsbyishajain/",
  facebook: "https://www.facebook.com/designaffairsynr/",
  maps: "https://maps.google.com/?q=Design+Affairs+by+Isha+Jain+Yamunanagar",
  whatsapp: "https://wa.me/919992702648",
};

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow-mark">{diagonal ? "↗" : "→"}</span>;
}

function StarMark({ half = false }) {
  return <span className={half ? "star-mark star-mark-half" : "star-mark"} aria-hidden="true">★</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <PageOpening />
      <header className="site-header px-5 sm:px-8 lg:px-12">
        <a className="brand-lockup" href="#top" aria-label="Design Affairs by Isha Jain, home">
          <Image src="/design-affairs-logo.svg" alt="Design Affairs by Isha Jain" width={224} height={62} priority />
          <span className="brand-label">DESIGN AFFAIRS BY ISHA JAIN</span>
        </a>
        <nav className="desktop-nav hidden lg:flex" aria-label="Main navigation">
          <a href="#studio">Studio</a>
          <a href="#services">Services</a>
          <a href="#directions">Design directions</a>
          <a href="#process">Process</a>
          <a href="#story">Spaces</a>
        </nav>
        <a className="header-cta hidden sm:inline-flex" href={social.whatsapp} target="_blank" rel="noreferrer">
          Start a conversation <Arrow diagonal />
        </a>
        <details className="mobile-menu lg:hidden">
          <summary aria-label="Open navigation">Menu <span aria-hidden="true">+</span></summary>
          <nav aria-label="Mobile navigation">
            <a href="#studio">Studio</a>
            <a href="#services">Services</a>
            <a href="#directions">Design directions</a>
            <a href="#process">Process</a>
            <a href="#story">Spaces</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero-section px-5 sm:px-8 lg:px-12" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Reveal className="hero-kicker" variant="from-left"><span className="hero-kicker-mark" aria-hidden="true" /> INTERIOR &amp; EXTERIOR DESIGN <span className="hero-kicker-place">YAMUNANAGAR · HARYANA</span></Reveal>
          <Reveal delay={45} variant="rise">
            <h1 id="hero-title">A little more<br /><em>room to feel</em><br />at home.</h1>
          </Reveal>
          <Reveal delay={105} variant="rise">
            <p className="hero-description">Interiors and exteriors shaped around the way you live—with timeless detail, warmth and a sense of ease.</p>
          </Reveal>
          <Reveal delay={160} className="hero-actions" variant="rise">
            <a className="button button-dark" href={social.whatsapp} target="_blank" rel="noreferrer">Discuss your space <Arrow diagonal /></a>
            <a className="text-link" href="#directions">Explore the design direction <Arrow /></a>
          </Reveal>
          <Reveal delay={210} className="hero-proof" variant="rise">
            <span className="hero-rating"><strong>4.5</strong> <span className="stars" aria-label="Google rating: 4.5 out of 5"><StarMark /><StarMark /><StarMark /><StarMark /><StarMark half /></span></span>
            <span className="proof-divider" aria-hidden="true" />
            <span>19 Google reviews</span>
            <a href={social.maps} target="_blank" rel="noreferrer" aria-label="View Design Affairs by Isha Jain on Google Maps">View listing <Arrow diagonal /></a>
          </Reveal>
          <Reveal delay={245} className="hero-signature" variant="from-left"><span>DESIGNED AROUND YOU</span><i aria-hidden="true" /><span>ISHA JAIN · INTERIOR DESIGNER</span></Reveal>
        </div>
        <Reveal delay={90} className="hero-visual" variant="scale">
          <div className="hero-image-frame">
            <Image
              src="/images/forest-parchment-living-room.jpg"
              alt="Illustrative concept of a warm, light-filled Indian living room with forest-green accents and walnut furniture"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 54vw"
              className="hero-image"
            />
            <div className="hero-image-shade" />
            <div className="image-note"><span>DESIGN STUDY · 01</span><span>WARM MODERN CLASSIC</span></div>
          </div>
          <div className="hero-artifact" aria-hidden="true"><span>FORM</span><i /></div>
        </Reveal>
        <a className="scroll-cue hidden md:flex" href="#studio"><span>SCROLL TO EXPLORE</span><i aria-hidden="true" /></a>
      </section>

      <section className="studio-section px-5 sm:px-8 lg:px-12" id="studio" aria-labelledby="studio-title">
        <div className="studio-mark" aria-hidden="true">A<span>.</span></div>
        <div className="studio-topline"><span>01 / THE STUDIO</span><span>YAMUNANAGAR · HARYANA</span></div>
        <div className="studio-grid">
          <Reveal><h2 id="studio-title">Elegance that<br />feels <em>lived in.</em></h2></Reveal>
          <Reveal delay={70} className="studio-copy">
            <p className="studio-lead">“Designs that speak your style.”</p>
            <p>Design Affairs by Isha Jain offers residential and commercial design solutions, including interior and exterior work shaped around each client’s style.</p>
            <a className="light-link" href={social.facebook} target="_blank" rel="noreferrer">Meet Design Affairs <Arrow diagonal /></a>
          </Reveal>
        </div>
        <div className="studio-bottomline"><span>GOOD DESIGN SHOULD FEEL NATURAL.</span><span>01 — 10</span></div>
      </section>

      <section className="services-section page-section px-5 sm:px-8 lg:px-12" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <Reveal><p className="eyebrow">02 / WHAT WE DO</p><h2 id="services-title">A space for every<br /><em>part of life.</em></h2></Reveal>
          <Reveal delay={60}><p className="section-intro">From the first room you walk into to the facade you come home to—every detail can feel connected.</p></Reveal>
        </div>
        <p className="service-concept-note"><span aria-hidden="true">✳</span> Concept imagery for illustrative purposes; each space begins with your brief.</p>
        <PolaroidServiceCarousel
          ariaLabel="Design Affairs services gallery"
          height="min(66svh, 640px)"
          cardWidth={310}
          sag={42}
          slides={[
            { image: "/images/service-home-interiors.png", title: "Home interiors", caption: "Comfort-first spaces shaped around daily life, natural light and considered materials.", alt: "Illustrative living room concept with forest-green accents, parchment upholstery and warm wood" },
            { image: "/images/service-commercial-interiors.png", title: "Work & commercial spaces", caption: "Welcoming environments with practical layouts and a thoughtful sense of place.", alt: "Illustrative boutique reception concept with forest-green seating and walnut finishes" },
            { image: "/images/forest-parchment-exterior.jpg", title: "Exterior design", caption: "Balanced proportions, considered finishes and a confident arrival home.", alt: "Illustrative home exterior concept with warm stone and green accents" },
            { image: "/images/service-bedroom-retreat.png", title: "Bedroom & private spaces", caption: "Restful rooms layered with gentle light, natural textures and thoughtful detail.", alt: "Illustrative bedroom retreat in forest green, parchment and walnut" },
          ]}
        />
      </section>

      <section className="directions-section page-section px-5 sm:px-8 lg:px-12" id="directions" aria-labelledby="directions-title">
        <div className="section-heading directions-heading">
          <Reveal><p className="eyebrow">03 / A VISUAL DIRECTION</p><h2 id="directions-title">A feeling, made<br /><em>visible.</em></h2></Reveal>
          <Reveal delay={60}><p className="section-intro">An illustrative look at how a considered, neoclassical influence could translate into a contemporary home.</p></Reveal>
        </div>
        <p className="concept-note"><span aria-hidden="true">✳</span> These are concept visuals created for this preview, not photographs of Design Affairs projects.</p>
        <div className="direction-grid">
          <Reveal className="direction-card direction-card-wide">
            <div className="direction-image"><Image src="/images/forest-parchment-dining-room.jpg" alt="Illustrative dining-room concept with warm plaster, walnut, cane and brass details" fill sizes="(max-width: 760px) 100vw, 58vw" /></div>
            <div className="direction-caption"><div><span>DESIGN STUDY · 02</span><h3>Gather, naturally.</h3></div><span>INTERIOR</span></div>
          </Reveal>
          <Reveal delay={70} className="direction-card direction-card-tall">
            <div className="direction-image"><Image src="/images/forest-parchment-exterior.jpg" alt="Illustrative exterior concept showing balanced neo-classical lines, warm stone and forest-green shutters" fill sizes="(max-width: 760px) 100vw, 35vw" /></div>
            <div className="direction-caption"><div><span>DESIGN STUDY · 03</span><h3>A welcome home.</h3></div><span>EXTERIOR</span></div>
          </Reveal>
        </div>
        <div className="palette-ribbon"><span>FOREST</span><i /><span>PARCHMENT</span><i /><span>WALNUT</span><i /><span>AGED BRASS</span></div>
      </section>

      <section className="approach-section page-section px-5 sm:px-8 lg:px-12" aria-labelledby="approach-title">
        <div className="approach-top"><Reveal><p className="eyebrow">04 / THE DESIGN APPROACH</p><h2 id="approach-title">Grace in the details.<br /><em>Ease in the everyday.</em></h2></Reveal><Reveal delay={55}><p className="section-intro">A refined look matters most when it still feels like home. Let proportion, texture and comfort work together.</p></Reveal></div>
        <div className="principles-mobile-cue" aria-hidden="true"><span>01 — 03 / DESIGN VALUES</span><span>SWIPE TO EXPLORE <b>→</b></span></div>
        <div className="principles-grid" role="region" tabIndex={0} aria-label="Design principles. Swipe horizontally to explore three values.">
          <Reveal className="principle-stack-item" delay={0} variant="stack"><article className="principle"><span>01 / PROPORTION</span><h3>Balance</h3><p>Bring symmetry and softness into a room without making it feel formal.</p><b aria-hidden="true">A</b></article></Reveal>
          <Reveal className="principle-stack-item" delay={70} variant="stack"><article className="principle"><span>02 / TEXTURE</span><h3>Material</h3><p>Use honest finishes, natural grain and tactile layers to give a space its warmth.</p><b aria-hidden="true">B</b></article></Reveal>
          <Reveal className="principle-stack-item" delay={140} variant="stack"><article className="principle"><span>03 / FEELING</span><h3>Belonging</h3><p>Make every decision serve the people who will live, gather and work there.</p><b aria-hidden="true">C</b></article></Reveal>
        </div>
      </section>

      <section className="process-section page-section px-5 sm:px-8 lg:px-12" id="process" aria-labelledby="process-title">
        <div className="process-heading"><Reveal><p className="eyebrow">05 / FROM IDEA TO SPACE</p><h2 id="process-title">A clear path,<br /><em>thoughtfully made.</em></h2></Reveal><Reveal delay={55}><p className="section-intro">Every considered space begins with a conversation. Open a folder to see how an idea takes shape.</p></Reveal></div>
        <div className="process-folder-grid">
          <Reveal delay={0}><ProcessFolder number="01" label="The first conversation" title="Understand" description="Talk through the space, your needs and what matters most to you." image="/images/forest-parchment-living-room.jpg" imageAlt="Illustrative living-room study in the Forest and Parchment palette" files={["Your priorities", "How the space is used", "A shared starting point"]} /></Reveal>
          <Reveal delay={65}><ProcessFolder number="02" label="A considered direction" title="Shape the idea" description="Explore a direction for the layout, materials and feeling of the space." image="/images/forest-parchment-dining-room.jpg" imageAlt="Illustrative dining-room study with warm natural materials" files={["Layout and flow", "Material palette", "Details to explore"]} /></Reveal>
          <Reveal delay={130}><ProcessFolder number="03" label="The details come together" title="Bring it together" description="Refine the details and agree the next steps toward a finished space." image="/images/forest-parchment-exterior.jpg" imageAlt="Illustrative exterior study with balanced proportions" files={["A refined direction", "Practical next steps", "A space made personal"]} /></Reveal>
        </div>
        <p className="process-footnote"><span aria-hidden="true">↗</span> Select a folder to explore each stage</p>
      </section>

      <DesignStory brandLabel="DESIGN AFFAIRS · YAMUNANAGAR" tagline={<>Designs that<br />speak your style.</>} />

      <section className="trust-contact-section px-5 sm:px-8 lg:px-12" id="contact" aria-labelledby="contact-title">
        <div className="trust-side">
          <Reveal><p className="eyebrow">07 / A GOOD PLACE TO BEGIN</p><div className="review-score"><span>4.5</span><div><span className="stars" aria-label="Google rating: 4.5 out of 5"><StarMark /><StarMark /><StarMark /><StarMark /><StarMark half /></span><p>19 Google reviews</p></div></div><a className="light-link" href={social.maps} target="_blank" rel="noreferrer">See the public listing <Arrow diagonal /></a></Reveal>
        </div>
        <div className="contact-side">
          <Reveal delay={65}><p className="eyebrow">HAVE A SPACE IN MIND?</p><h2 id="contact-title">Let’s make it<br /><em>feel like yours.</em></h2><p>Share what you’re planning. The first conversation can start with a simple idea.</p><div className="contact-links"><a className="button button-light" href={social.whatsapp} target="_blank" rel="noreferrer">Message on WhatsApp <Arrow diagonal /></a><a className="contact-secondary" href={social.instagram} target="_blank" rel="noreferrer">View Instagram profile <Arrow diagonal /></a></div></Reveal>
        </div>
      </section>

      <footer className="site-footer px-5 sm:px-8 lg:px-12">
        <div className="footer-main"><div><Image src="/design-affairs-logo.svg" alt="Design Affairs by Isha Jain" width={212} height={59} /><p>Designs that speak your style.</p></div><div className="footer-location"><span>BASED IN</span><strong>Yamunanagar, Haryana</strong><span>Rickshaw Chowk · 40/B Nehru Park Road · 135001</span></div><div className="footer-social"><span>FOLLOW ALONG</span><a href={social.instagram} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a><a href={social.facebook} target="_blank" rel="noreferrer">Facebook <Arrow diagonal /></a><a href={social.whatsapp} target="_blank" rel="noreferrer">WhatsApp · +91 99927 02648 <Arrow diagonal /></a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Design Affairs by Isha Jain</span><span>DESIGN CONCEPT PREPARED BY GETVOUT</span><a href="#top">Back to top ↑</a></div>
      </footer>
      <aside className="concept-disclaimer" aria-label="Concept note">A private website concept · Imagery is illustrative</aside>
    </main>
  );
}

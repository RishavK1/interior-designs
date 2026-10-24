import Image from "next/image";
import Reveal from "./Reveal";

const studies = [
  {
    src: "/images/forest-parchment-living-room.jpg",
    alt: "Illustrative living room with warm daylight, natural textures and forest-green accents",
    title: "A softer place to land",
    note: "LIVING · DESIGN STUDY 01",
    className: "story-card story-card-main",
  },
  {
    src: "/images/forest-parchment-dining-room.jpg",
    alt: "Illustrative dining room using walnut, warm plaster and tactile finishes",
    title: "Room to gather",
    note: "DINING · DESIGN STUDY 02",
    className: "story-card story-card-left",
  },
  {
    src: "/images/forest-parchment-exterior.jpg",
    alt: "Illustrative home exterior with warm stone and balanced architectural lines",
    title: "A welcome, from the start",
    note: "EXTERIOR · DESIGN STUDY 03",
    className: "story-card story-card-right",
  },
];

export default function DesignStory({ brandLabel = "ALLURE · YAMUNANAGAR", tagline = <>Thoughtful<br />by nature.</>, paletteLabel = "A STUDY IN FOREST & PARCHMENT" }) {
  return (
    <section className="design-story-section" id="story" aria-labelledby="story-title">
      <div className="design-story-inner px-5 sm:px-8 lg:px-12">
        <Reveal className="design-story-heading">
          <p className="eyebrow">06 / A SPACE TAKES SHAPE</p>
          <h2 id="story-title">A home comes<br /><em>into focus.</em></h2>
          <p>Look closer: light, texture and proportion begin to work together. This visual study imagines one possible direction for a home.</p>
        </Reveal>
        <div className="story-tunnel" aria-label="Illustrative interior and exterior design studies">
          <span className="story-orbit story-orbit-one" aria-hidden="true" />
          <span className="story-orbit story-orbit-two" aria-hidden="true" />
          <div className="story-anchor">
            <span>{brandLabel}</span>
            <strong>{tagline}</strong>
            <i aria-hidden="true">A.</i>
          </div>
          {studies.map((study, index) => (
            <Reveal key={study.note} delay={index * 65} className="story-card-reveal">
              <article className={study.className}>
                <div className="story-card-image"><Image src={study.src} alt={study.alt} fill sizes="(max-width: 760px) 56vw, 25vw" loading="eager" unoptimized /></div>
                <div className="story-card-caption"><span>{study.note}</span><strong>{study.title}</strong></div>
              </article>
            </Reveal>
          ))}
          <span className="story-pointer-note" aria-hidden="true">{paletteLabel}</span>
        </div>
        <div className="design-story-foot"><span>ILLUSTRATIVE CONCEPT IMAGERY</span><span>01 — 03 / SPACES, REIMAGINED</span></div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const nearestAt = (offset, spacing, length) => clamp(Math.round(offset / spacing), 0, Math.max(0, length - 1));

function springStep(position, velocity, target, dt) {
  const stiffness = 70;
  const damping = 2 * Math.sqrt(stiffness);
  const nextVelocity = velocity + (stiffness * (target - position) - damping * velocity) * dt;
  return [position + nextVelocity * dt, nextVelocity];
}

function swingStep(angle, velocity, lineVelocity, dt) {
  const nextVelocity = velocity + (-38 * angle - 4.2 * velocity + lineVelocity * 0.0034) * dt;
  return [clamp(angle + nextVelocity * dt, -0.6, 0.6), nextVelocity];
}

export default function PolaroidServiceCarousel({
  slides,
  height = "min(70svh, 680px)",
  cardWidth = 310,
  sag = 48,
  autoplay = 5200,
  ariaLabel = "Allure Designs service gallery",
}) {
  const count = slides.length;
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState({ width: 1200, height: 680, card: cardWidth });
  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const cardsRef = useRef([]);
  const activeRef = useRef(0);
  const dragRef = useRef(null);
  const lastTouchRef = useRef(0);
  const simRef = useRef({ offset: 0, velocity: 0, target: 0, angles: [], angularVelocities: [] });
  const spacing = size.card * 1.08;

  const goTo = useCallback((index) => {
    simRef.current.target = clamp(index, 0, count - 1) * spacing;
  }, [count, spacing]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const observer = new ResizeObserver(() => {
      const rect = root.getBoundingClientRect();
      const widthRatio = rect.width < 760 ? 0.58 : 0.48;
      const card = Math.round(Math.max(148, Math.min(cardWidth, rect.width * widthRatio, rect.height * 0.48)));
      setSize({ width: rect.width, height: rect.height, card });
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, [cardWidth]);

  useEffect(() => {
    simRef.current.target = activeRef.current * spacing;
    simRef.current.offset = activeRef.current * spacing;
  }, [spacing]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || count === 0) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const simulation = simRef.current;
    let visible = true;
    let frameId = 0;
    let previousTime = performance.now();

    const frame = (now) => {
      frameId = 0;
      if (!visible) return;
      const dt = Math.min(0.033, (now - previousTime) / 1000);
      previousTime = now;
      const { width, height, card } = size;
      const lineY = Math.max(44, height * 0.2);
      const pointerDrag = dragRef.current;
      let lineVelocity = 0;
      if (pointerDrag?.moved) {
        lineVelocity = pointerDrag.velocity * 1000;
      } else if (reduceMotion) {
        simulation.offset = simulation.target;
        simulation.velocity = 0;
      } else {
        const before = simulation.offset;
        [simulation.offset, simulation.velocity] = springStep(simulation.offset, simulation.velocity, simulation.target, dt);
        lineVelocity = -(simulation.offset - before) / Math.max(dt, 0.001);
      }

      const centerIndex = nearestAt(simulation.offset, spacing, count);
      for (let index = 0; index < count; index += 1) {
        const element = cardsRef.current[index];
        if (!element) continue;
        const x = width / 2 + index * spacing - simulation.offset;
        if (x < -card * 1.5 || x > width + card * 1.5) {
          element.style.visibility = "hidden";
          continue;
        }
        element.style.visibility = "visible";
        let angle = simulation.angles[index] || 0;
        let angularVelocity = simulation.angularVelocities[index] || 0;
        if (!reduceMotion) {
          [angle, angularVelocity] = swingStep(angle, angularVelocity, lineVelocity, dt);
          angle += Math.sin(now / 1300 + index * 1.7) * 0.0009;
        } else {
          angle = 0;
          angularVelocity = 0;
        }
        simulation.angles[index] = angle;
        simulation.angularVelocities[index] = angularVelocity;
        const y = lineY + 4 * sag * clamp(x / width, 0, 1) * (1 - clamp(x / width, 0, 1)) - 6;
        element.style.transform = `translate(${(x - card / 2).toFixed(1)}px, ${y.toFixed(1)}px) rotate(${angle.toFixed(4)}rad)`;
        element.style.zIndex = String(index === centerIndex ? count + 1 : count - Math.abs(index - centerIndex));
      }
      pathRef.current?.setAttribute("d", `M0 ${lineY} Q${width / 2} ${lineY + 2 * sag} ${width} ${lineY}`);
      if (centerIndex !== activeRef.current) {
        activeRef.current = centerIndex;
        setActive(centerIndex);
      }
      frameId = requestAnimationFrame(frame);
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frameId) {
        previousTime = performance.now();
        frameId = requestAnimationFrame(frame);
      } else if (!visible && frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    }, { threshold: 0.05 });
    intersection.observe(root);
    frameId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(frameId);
      intersection.disconnect();
    };
  }, [count, size, spacing, sag]);

  useEffect(() => {
    if (!autoplay || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      if (document.hidden || dragRef.current || performance.now() - lastTouchRef.current < autoplay) return;
      goTo(activeRef.current >= count - 1 ? 0 : activeRef.current + 1);
    }, autoplay);
    return () => window.clearInterval(timer);
  }, [autoplay, count, goTo]);

  const step = (direction) => {
    lastTouchRef.current = performance.now();
    goTo(clamp(activeRef.current + direction, 0, count - 1));
  };

  const onPointerDown = (event) => {
    if (event.target.closest(".polaroid-controls")) return;
    lastTouchRef.current = performance.now();
    dragRef.current = { x: event.clientX, offset: simRef.current.offset, lastX: event.clientX, lastTime: event.timeStamp, velocity: 0, moved: false };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag) return;
    const delta = event.clientX - drag.x;
    if (!drag.moved && Math.abs(delta) > 5) {
      drag.moved = true;
      setDragging(true);
      rootRef.current?.setPointerCapture(event.pointerId);
    }
    if (!drag.moved) return;
    const elapsed = Math.max(1, event.timeStamp - drag.lastTime);
    drag.velocity = 0.7 * ((event.clientX - drag.lastX) / elapsed) + 0.3 * drag.velocity;
    drag.lastX = event.clientX;
    drag.lastTime = event.timeStamp;
    const max = (count - 1) * spacing;
    let offset = drag.offset - delta;
    if (offset < 0) offset *= 0.35;
    if (offset > max) offset = max + (offset - max) * 0.35;
    simRef.current.offset = offset;
  };

  const onPointerUp = (event) => {
    const drag = dragRef.current;
    dragRef.current = null;
    lastTouchRef.current = performance.now();
    if (!drag) return;
    if (drag.moved) {
      setDragging(false);
      simRef.current.velocity = -drag.velocity * 1000;
      goTo(nearestAt(simRef.current.offset - drag.velocity * 180, spacing, count));
      return;
    }
    const card = event.target.closest("[data-slide-index]");
    if (card) goTo(Number(card.getAttribute("data-slide-index")));
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") step(1);
    else if (event.key === "ArrowLeft") step(-1);
    else return;
    event.preventDefault();
  };

  const slide = slides[active] || slides[0];

  return (
    <div
      ref={rootRef}
      className={`polaroid-carousel${dragging ? " is-dragging" : ""}`}
      style={{ "--polaroid-height": typeof height === "number" ? `${height}px` : height, "--polaroid-card-width": `${size.card}px` }}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <svg className="polaroid-string" aria-hidden="true"><path ref={pathRef} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
      {slides.map((item, index) => (
        <div
          className="polaroid-print-wrap"
          key={item.title}
          data-slide-index={index}
          data-active={index === active ? "true" : "false"}
          aria-hidden={index === active ? undefined : true}
          ref={(element) => { cardsRef.current[index] = element; }}
        >
          <div className="polaroid-print">
            <div className="polaroid-photo"><Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 48vw, 310px" draggable={false} /></div>
            <div className="polaroid-label">{item.title}</div>
          </div>
          <span className="polaroid-peg" aria-hidden="true" />
        </div>
      ))}
      <div className="polaroid-controls">
        <div className="polaroid-caption" key={active} aria-live="polite">
          <span>{slide.title}</span>
          <p>{slide.caption}</p>
        </div>
        <span className="polaroid-count"><b>{String(active + 1).padStart(2, "0")}</b> / {String(count).padStart(2, "0")}</span>
        <button type="button" aria-label="Previous service" onClick={() => step(-1)} disabled={active === 0}>←</button>
        <button type="button" aria-label="Next service" onClick={() => step(1)} disabled={active === count - 1}>→</button>
      </div>
      <span className="polaroid-swipe-hint" aria-hidden="true">DRAG OR SWIPE TO EXPLORE</span>
    </div>
  );
}

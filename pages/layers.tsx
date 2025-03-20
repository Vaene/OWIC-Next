import { useRef, useState } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import { useIsomorphicLayoutEffect } from '../helpers/isomorphicEffect';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Layers() {
  const main = useRef(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null); // Explicitly type scrollTween
  const [ctx] = useState(gsap.context(() => {}, main));

  const goToSection = (i) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.data.forEach((e) => {
      if (e.vars && e.vars.id === 'scrollTween') {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        id: 'scrollTween',
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useIsomorphicLayoutEffect(() => {
    ctx.add(() => {
      const panels = gsap.utils.toArray('.panel') as HTMLElement[]; // Explicitly type panels
      panels.forEach((panel: HTMLElement, i: number) => {
        // Set the height of each panel to at least the viewport height
        gsap.set(panel, { height: window.innerHeight });
  
        // Adjust the start and end values for all panels
        const start = i === 0 ? 'top top' : 'top top'; // All panels start at the top of the viewport
        const end = i === 0 ? 'bottom top' : 'bottom top'; // All panels end at the top of the next section
  
        ScrollTrigger.create({
          trigger: panel,
          start: start, // Panel starts sticking when its top reaches the top of the viewport
          end: end, // Panel stops sticking when its bottom reaches the top of the viewport
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
          pin: true, // Pin the panel while it's active
          pinSpacing: true, // Add spacing to allow smooth scrolling
        });
      });
  
      // Add snap functionality
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    });
  
    return () => ctx.revert();
  }, []); // No dependency on `completed`

  return (
    <main ref={main}>
      <section className="description panel blue">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel red">ONE</section>
      <section className="panel orange">TWO</section>
      <section className="panel purple">THREE</section>
      <section className="panel green">FOUR</section>
    </main>
  );
}
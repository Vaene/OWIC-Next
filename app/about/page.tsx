'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function About() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.box', {
      x: 300,
      rotation: 360,
      ease: 'power1.inOut',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.section.middle',
        start: 'top 25%',
        end: 'bottom 75%',
        scrub: true,
        markers: true,
      },
    });
  });

  return (
    <main className="main">
      <div className="section gradient-blue-dark"></div>
      <div className="section middle flex-column gradient-red">
        <div className="box gradient-green">Box 1</div>
        <div className="box gradient-blue">Box 2</div>
        <div className="box gradient-orange">Box 3</div>
      </div>
      <div className="section gradient-green-2"></div>
    </main>
  );
}

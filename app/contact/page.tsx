'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.box', {
      rotation: 360,
      ease: 'power1.inOut',
      y: (i) => (i % 2 > 0 ? -200 : 200),
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.boxes',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  });

  return (
    <main className="main">
      <div className="section gradient-orange"></div>
      <div className="section boxes gradient-green">
        <div className="box gradient-red">Box 1</div>
        <div className="box gradient-blue">Box 2</div>
        <div className="box gradient-purple">Box 3</div>
      </div>
      <div className="section gradient-purple"></div>
    </main>
  );
}

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';

export default function Header() {
  const logo = useRef(null),
        logoO = useRef(null),
        logoW = useRef(null),
        logoI = useRef(null),
        logoC = useRef(null),
        bottomSwoop = useRef(null),
        topSwoop = useRef(null),
        one = useRef(null),
        world = useRef(null),
        owic_in = useRef(null),
        concert = useRef(null),
        tm = useRef(null),
        tradet = useRef(null),
        tradem = useRef(null);

  useGSAP(() => {
    const tlOWIC = gsap.timeline({ paused: false });

    gsap.set(
      [logoO.current, logoW.current, logoI.current, logoC.current, bottomSwoop.current, topSwoop.current, one.current, world.current, owic_in.current, concert.current, tradet.current, tradem.current],
      { autoAlpha: 0 }
    );
    gsap.set(logoO.current, { x: 100 }); // Move logoO 500px to the right
    gsap.set(logoW.current, { x: 140 }); // Move logoW 400px to the right
    gsap.set(logoI.current, { x: 270 }); // Move logoI 300px to the right
    gsap.set(logoC.current, { x: 368 }); // Move logoC 200px to the right

    tlOWIC
      .fromTo(one.current, { autoAlpha: 0, x: -50, y: -50, scale: 3  }, { duration: 0.75, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" })
      .to(logoO.current, { duration: 0.25, autoAlpha: 1, x: 0 })
      .fromTo(world.current, { autoAlpha: 0, x: -10, y: -50, scale: 3 }, { duration: 0.65, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" })
      .to(logoW.current, { duration: 0.25, autoAlpha: 1, x: 0 }, "+=0.2")
      .fromTo(owic_in.current, { autoAlpha: 0, x: 10, y: -50, scale: 3 }, { duration: 0.55, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" })
      .to(logoI.current, { duration: 0.25, autoAlpha: 1, x: 0 }, "+=0.2")
      .fromTo(concert.current, { autoAlpha: 0, x: 50, y: -50, scale: 3 }, { duration: 0.5, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" })
      .to(logoC.current, { duration: 0.25, autoAlpha: 1, x: 0 }, "+=0.2")
      .fromTo(topSwoop.current, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1, ease: "power2.out" }, "+=0.1")
      .fromTo(bottomSwoop.current, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1, ease: "power2.out" }, "+=0.1") 
      .fromTo(tm.current, { autoAlpha: 0, x: 50, y: -50, scale: 3 }, { duration: 0.25, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" }, "+=0.05")
      .fromTo(tradet.current, { autoAlpha: 0, x: -50, y: -50, scale: 3 }, { duration: 0.25, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" }, "+=0.05")
      .fromTo(tradem.current, { autoAlpha: 0, x: 50, y: -50, scale: 3 }, { duration: 0.25, autoAlpha: 1, x: 0, y: 0, scale: 1, ease: "power2.out" }, "+=0.05");
  }, { scope: logo })
  ;

  return (
    <header className="header">
      <div id="owic-logo" ref={logo}>
        <svg xmlns="http://www.w3.org/2000/svg" id="owic_full" data-name="owic_full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 724.84 91.44">
          <defs>
            <style>{".cls-2{fill:#f1f1f1}.cls-3{fill:#231f20}.cls-4{fill:#3c53a4}"}</style>
          </defs>
          <g id="oneworldinconcert">
            <g id="one" ref={one}>
              <path id="o" className="cls-2" d="M131.23,66.98c-2.6,0-4.99-.45-7.16-1.35s-4.05-2.15-5.64-3.74c-1.59-1.59-2.83-3.49-3.71-5.69-.88-2.2-1.33-4.59-1.33-7.16s.44-4.96,1.33-7.16c.88-2.2,2.12-4.1,3.71-5.69,1.59-1.59,3.47-2.84,5.64-3.74,2.17-.9,4.56-1.35,7.16-1.35s4.99.45,7.16,1.35c2.17.9,4.05,2.15,5.64,3.74,1.59,1.59,2.83,3.49,3.71,5.69.88,2.2,1.33,4.59,1.33,7.16s-.44,4.96-1.33,7.16c-.88,2.2-2.12,4.1-3.71,5.69-1.59,1.59-3.47,2.84-5.64,3.74s-4.56,1.35-7.16,1.35ZM131.23,63.21c1.99,0,3.82-.37,5.47-1.11,1.66-.74,3.08-1.75,4.27-3.04,1.19-1.29,2.11-2.79,2.77-4.51.66-1.72.99-3.56.99-5.52s-.33-3.8-.99-5.52c-.66-1.72-1.58-3.22-2.77-4.51-1.19-1.29-2.61-2.3-4.27-3.04-1.66-.74-3.48-1.11-5.47-1.11s-3.82.37-5.47,1.11c-1.66.74-3.08,1.75-4.27,3.04-1.19,1.29-2.11,2.79-2.77,4.51-.66,1.72-.99,3.56-.99,5.52s.33,3.8.99,5.52c.66,1.72,1.58,3.22,2.77,4.51,1.19,1.29,2.61,2.3,4.27,3.04,1.66.74,3.48,1.11,5.47,1.11Z"/>
              <path id="n" className="cls-2" d="M153.17,31.96h5.11l19.77,28.36h.1v-28.36h4.05v34.15h-5.11l-19.77-28.36h-.1v28.36h-4.05V31.96Z"/>
              <path id="e" className="cls-2" d="M188.28,31.96h21.46v3.76h-17.41v10.71h16.25v3.76h-16.25v12.15h18.28v3.76h-22.33V31.96Z"/>
            </g>
            <g id="world" ref={world}>
              <path id="w" className="cls-2" d="M221.33,31.96h4.48l7.76,28.36h.1l8.39-28.36h4.53l8.34,28.36h.1l7.91-28.36h4.24l-10.03,34.15h-4.39l-8.44-28.94h-.1l-8.49,28.94h-4.44l-9.98-34.15Z"/>
              <path id="o-2" data-name="o" className="cls-2" d="M285.19,66.98c-2.6,0-4.99-.45-7.16-1.35s-4.05-2.15-5.64-3.74c-1.59-1.59-2.83-3.49-3.71-5.69-.88-2.2-1.33-4.59-1.33-7.16s.44-4.96,1.33-7.16c.88-2.2,2.12-4.1,3.71-5.69,1.59-1.59,3.47-2.84,5.64-3.74,2.17-.9,4.56-1.35,7.16-1.35s4.99.45,7.16,1.35c2.17.9,4.05,2.15,5.64,3.74,1.59,1.59,2.83,3.49,3.71,5.69.88,2.2,1.33,4.59,1.33,7.16s-.44,4.96-1.33,7.16c-.88,2.2-2.12,4.1-3.71,5.69-1.59,1.59-3.47,2.84-5.64,3.74s-4.56,1.35-7.16,1.35ZM285.19,63.21c1.99,0,3.82-.37,5.47-1.11,1.66-.74,3.08-1.75,4.27-3.04,1.19-1.29,2.11-2.79,2.77-4.51.66-1.72.99-3.56.99-5.52s-.33-3.8-.99-5.52c-.66-1.72-1.58-3.22-2.77-4.51-1.19-1.29-2.61-2.3-4.27-3.04-1.66-.74-3.48-1.11-5.47-1.11s-3.82.37-5.47,1.11c-1.66.74-3.08,1.75-4.27,3.04-1.19,1.29-2.11,2.79-2.77,4.51-.66,1.72-.99,3.56-.99,5.52s.33,3.8.99,5.52c.66,1.72,1.58,3.22,2.77,4.51,1.19,1.29,2.61,2.3,4.27,3.04,1.66.74,3.48,1.11,5.47,1.11Z"/>
              <path id="r" className="cls-2" d="M307.13,31.96h8.73c1.64,0,3.27.1,4.9.29,1.62.19,3.08.61,4.36,1.25,1.29.64,2.33,1.58,3.13,2.82.8,1.24,1.21,2.92,1.21,5.04,0,2.51-.76,4.53-2.27,6.08-1.51,1.54-3.6,2.52-6.27,2.94l9.69,15.72h-4.97l-9.26-15.34h-5.21v15.34h-4.05V31.96ZM311.18,47.01h3.62c1.13,0,2.29-.03,3.5-.1,1.21-.06,2.31-.27,3.33-.63,1.01-.35,1.85-.91,2.51-1.66.66-.76.99-1.84.99-3.26,0-1.22-.24-2.2-.72-2.94-.48-.74-1.12-1.31-1.91-1.71-.79-.4-1.67-.67-2.65-.8-.98-.13-1.97-.19-2.97-.19h-5.69v11.29Z"/>
              <path id="l" className="cls-2" d="M334.19,31.96h4.05v30.38h15.63v3.76h-19.68V31.96Z"/>
              <path id="d" className="cls-2" d="M358.26,31.96h13.12c1.13,0,2.32.13,3.57.39,1.25.26,2.5.67,3.74,1.23,1.24.56,2.43,1.29,3.57,2.19,1.14.9,2.15,1.99,3.01,3.26.87,1.27,1.56,2.73,2.07,4.39.51,1.66.77,3.53.77,5.62s-.26,3.96-.77,5.62c-.52,1.66-1.21,3.12-2.07,4.39-.87,1.27-1.87,2.36-3.01,3.26s-2.33,1.63-3.57,2.19c-1.24.56-2.48.97-3.74,1.23-1.25.26-2.44.39-3.57.39h-13.12V31.96ZM362.31,62.35h7.72c1.96,0,3.78-.26,5.45-.77,1.67-.51,3.12-1.31,4.34-2.39,1.22-1.08,2.19-2.45,2.89-4.12s1.06-3.68,1.06-6.03-.35-4.36-1.06-6.03c-.71-1.67-1.67-3.05-2.89-4.12-1.22-1.08-2.67-1.87-4.34-2.39-1.67-.51-3.49-.77-5.45-.77h-7.72v26.62Z"/>
            </g>
            <g id="owic_in" ref={owic_in}>
              <path id="i" className="cls-2" d="M405.03,31.96h4.05v34.15h-4.05V31.96Z"/>
              <path id="n-2" data-name="n" className="cls-2" d="M415.16,31.96h5.11l19.77,28.36h.1v-28.36h4.05v34.15h-5.11l-19.77-28.36h-.1v28.36h-4.05V31.96Z"/>
            </g>
            <g id="concert" ref={concert}>
              <path id="c" className="cls-2" d="M490.01,39c-1.03-1.38-2.3-2.42-3.81-3.11-1.51-.69-3.09-1.04-4.73-1.04-1.9,0-3.64.39-5.23,1.16-1.59.77-2.97,1.81-4.12,3.11s-2.06,2.81-2.7,4.53c-.64,1.72-.96,3.51-.96,5.38,0,1.99.32,3.85.96,5.57.64,1.72,1.53,3.21,2.68,4.48,1.14,1.27,2.51,2.28,4.1,3.01,1.59.74,3.35,1.11,5.28,1.11,2.09,0,3.95-.41,5.59-1.23,1.64-.82,3.07-2,4.29-3.54l3.04,2.56c-1.54,2.06-3.4,3.57-5.57,4.53-2.17.96-4.62,1.45-7.35,1.45-2.44,0-4.73-.45-6.85-1.35s-3.96-2.15-5.52-3.74c-1.56-1.59-2.78-3.48-3.67-5.67-.88-2.19-1.33-4.58-1.33-7.19s.43-4.85,1.28-7.04c.85-2.19,2.05-4.08,3.59-5.69,1.54-1.61,3.38-2.88,5.5-3.81,2.12-.93,4.45-1.4,6.99-1.4,2.31,0,4.54.42,6.68,1.25,2.14.84,3.93,2.2,5.38,4.1l-3.52,2.56Z"/>
              <path id="o-3" data-name="o" className="cls-2" d="M513.5,66.98c-2.6,0-4.99-.45-7.16-1.35s-4.05-2.15-5.64-3.74c-1.59-1.59-2.83-3.49-3.71-5.69-.88-2.2-1.33-4.59-1.33-7.16s.44-4.96,1.33-7.16c.88-2.2,2.12-4.1,3.71-5.69,1.59-1.59,3.47-2.84,5.64-3.74,2.17-.9,4.56-1.35,7.16-1.35s4.99.45,7.16,1.35c2.17.9,4.05,2.15,5.64,3.74,1.59,1.59,2.83,3.49,3.71,5.69.88,2.2,1.33,4.59,1.33,7.16s-.44,4.96-1.33,7.16c-.88,2.2-2.12,4.1-3.71,5.69-1.59,1.59-3.47,2.84-5.64,3.74-2.17.9-4.56,1.35-7.16,1.35ZM513.5,63.21c1.99,0,3.82-.37,5.47-1.11,1.66-.74,3.08-1.75,4.27-3.04,1.19-1.29,2.11-2.79,2.77-4.51.66-1.72.99-3.56.99-5.52s-.33-3.8-.99-5.52c-.66-1.72-1.58-3.22-2.77-4.51-1.19-1.29-2.61-2.3-4.27-3.04-1.66-.74-3.48-1.11-5.47-1.11s-3.82.37-5.47,1.11c-1.66.74-3.08,1.75-4.27,3.04-1.19,1.29-2.11,2.79-2.77,4.51-.66,1.72-.99,3.56-.99,5.52s.33,3.8.99,5.52c.66,1.72,1.58,3.22,2.77,4.51,1.19,1.29,2.61,2.3,4.27,3.04,1.66.74,3.48,1.11,5.47,1.11Z"/>
              <path id="n-3" data-name="n" className="cls-2" d="M535.44,31.96h5.11l19.77,28.36h.1v-28.36h4.05v34.15h-5.11l-19.77-28.36h-.1v28.36h-4.05V31.96Z"/>
              <path id="c2" className="cls-2" d="M594.47,39c-1.03-1.38-2.3-2.42-3.81-3.11-1.51-.69-3.09-1.04-4.73-1.04-1.9,0-3.64.39-5.23,1.16-1.59.77-2.97,1.81-4.12,3.11s-2.06,2.81-2.7,4.53c-.64,1.72-.96,3.51-.96,5.38,0,1.99.32,3.85.96,5.57.64,1.72,1.53,3.21,2.68,4.48,1.14,1.27,2.51,2.28,4.1,3.01,1.59.74,3.35,1.11,5.28,1.11,2.09,0,3.95-.41,5.59-1.23,1.64-.82,3.07-2,4.29-3.54l3.04,2.56c-1.54,2.06-3.4,3.57-5.57,4.53-2.17.96-4.62,1.45-7.35,1.45-2.44,0-4.73-.45-6.85-1.35s-3.96-2.15-5.52-3.74c-1.56-1.59-2.78-3.48-3.67-5.67-.88-2.19-1.33-4.58-1.33-7.19s.43-4.85,1.28-7.04c.85-2.19,2.05-4.08,3.59-5.69,1.54-1.61,3.38-2.88,5.5-3.81,2.12-.93,4.45-1.4,6.99-1.4,2.31,0,4.54.42,6.68,1.25,2.14.84,3.93,2.2,5.38,4.1l-3.52,2.56Z"/>
              <path id="e-2" data-name="e" className="cls-2" d="M602.09,31.96h21.46v3.76h-17.41v10.71h16.25v3.76h-16.25v12.15h18.28v3.76h-22.33V31.96Z"/>
              <path id="r-2" data-name="r" className="cls-2" d="M628.28,31.96h8.73c1.64,0,3.27.1,4.89.29,1.62.19,3.08.61,4.37,1.25,1.29.64,2.33,1.58,3.13,2.82.8,1.24,1.21,2.92,1.21,5.04,0,2.51-.76,4.53-2.27,6.08-1.51,1.54-3.6,2.52-6.27,2.94l9.69,15.72h-4.97l-9.26-15.34h-5.21v15.34h-4.05V31.96ZM632.33,47.01h3.62c1.12,0,2.29-.03,3.5-.1,1.21-.06,2.31-.27,3.33-.63,1.01-.35,1.85-.91,2.51-1.66.66-.76.99-1.84.99-3.26,0-1.22-.24-2.2-.72-2.94-.48-.74-1.12-1.31-1.91-1.71-.79-.4-1.67-.67-2.65-.8-.98-.13-1.97-.19-2.97-.19h-5.69v11.29Z"/>
              <path id="t" className="cls-2" d="M679.38,35.72h-11.29v30.38h-4.05v-30.38h-11.29v-3.76h26.62v3.76Z"/>
            </g>
            <g id="tm" ref={tm}>
              <path id="t-2" ref={tradet} data-name="t" className="cls-2" d="M702.91,33.84h-6.58v17.71h-2.36v-17.71h-6.58v-2.19h15.52v2.19Z"/>
              <path id="m" ref={tradem}className="cls-2" d="M704.29,31.65h3.51l6.75,15.6h.06l6.8-15.6h3.43v19.91h-2.36v-16.7h-.06l-7.14,16.7h-1.43l-7.14-16.7h-.06v16.7h-2.36v-19.91Z"/>
            </g>
          </g>
          <g id="owic">
            <path
              id="BottomSwoop"
              ref={bottomSwoop}
              d="M2.99 61.84c-.02.06 21.39-.06 21.49 0 24.36 36.51 58.05 12.3 62.97.19-6.79 27.13-61.7 49.18-84.46-.19Z"
              className="cls-4"
            />
            <path
              id="TopSwoop"
              ref={topSwoop}
              d="M2.99 29.35c-.02-.06 21.39.06 21.49 0 24.36-36.51 58.05-12.3 62.97-.19-6.79-27.13-61.7-49.18-84.46.19Z"
              className="cls-4"
            />
            <path
              id="logoO"
              ref={logoO}
              d="M26.11 45.79c0 7.1-5.81 12.85-12.98 12.85S.15 52.89.15 45.79s5.81-12.85 12.98-12.85 12.98 5.75 12.98 12.85Zm-12.99-7.72c-4.2 0-7.6 3.48-7.6 7.78s3.4 7.78 7.6 7.78 7.6-3.48 7.6-7.78-3.4-7.78-7.6-7.78Z"
              className="cls-2"
            />
            <path
              id="logoW"
              ref={logoW}
              d="M26.25 33.56h5.26l4.88 13.51 5.82-15.64 6.07 15.58 5.19-13.39h4.82L48.53 59.9l-6.26-15.33-6.2 15.52-9.82-26.53z"
              className="cls-2"
            />
            <path 
              id="logoI"
              ref={logoI}
              d="M61.17 33.62h5.32v24.34h-5.32z" className="cls-2" />
            <path
              id="logoC"
              ref={logoC}
              d="M90.01 35.75s-.19 5.82 0 5.82c-.81-2.32-15.08-9.07-15.52 5.13 2.44 12.83 15.83 4 15.46 3.19v5.94c-5.69 5.26-20.09 2.5-20.71-8.89-.88-9.95 9.95-18.59 20.78-11.2Z"
              className="cls-2"
            />
          </g>
        </svg>
      </div>
      <nav className="pages">
        <ul>
          <li>
            <Link href="#who">Who We Are</Link>
          </li>
          <li>
            <Link href="#what">The Concert</Link>
          </li>
          <li>
            <Link href="#how">How To Help</Link>
          </li>
          <li>
            <Link href="#videos">Videos</Link>
          </li>
          <li>
            <Link href="#about">About Us / Contact</Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

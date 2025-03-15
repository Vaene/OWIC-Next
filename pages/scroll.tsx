import { useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Scroll() {
  const main = useRef(null);

  // Use useEffect to ensure this runs only on the client side
  useGSAP(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.box');
        boxes.forEach((box) => {
          gsap.to(box, {
            x: 300,
            scrollTrigger: {
              trigger: box,
              start: 'bottom bottom',
              end: 'top 20%',
              scrub: true,
            },
          });
        });

        // --- Home PANEL ---
        gsap.from(".line-home", {
          scrollTrigger: {
            trigger: ".home",
            scrub: false,
            pin: false,
            start: "top top",
            end: "+=100%"
          },
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none"
        });

        // --- BLACK PANEL ---
        gsap.from(".line-0", {
          scrollTrigger: {
            trigger: ".black",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
          },
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none"
        });

        // --- RED PANEL ---
        gsap.from(".line-1", {
          scrollTrigger: {
            trigger: ".redd",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
          },
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none"
        });

        // --- ORANGE PANEL ---
        gsap.from(".line-2", {
          scrollTrigger: {
            trigger: ".orangee",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
          },
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none"
        });

        // --- PURPLE/GREEN PANEL ---
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".purple",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%",
          }
        });

        tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
          .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
          .to(".purple", { backgroundColor: "#00bae2" }, 0);

        // --- BLUE PANEL ---
        gsap.from(".line-4", {
          scrollTrigger: {
            trigger: ".bluee",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
          },
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none"
        });

        // --- WHITE PANEL ---
        gsap.from(".line-5", {
          scrollTrigger: {
            trigger: ".white",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
          },
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none"
        });

        // Navigation links
        let links = gsap.utils.toArray("nav a");
        links.forEach(a => {
          let element = document.querySelector(a.getAttribute("href"));
          let linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => self.isActive && setActive(a)
          });

          a.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
          });
        });

        function setActive(link) {
          links.forEach(el => el.classList.remove("active"));
          link.classList.add("active");
        }
      }, main);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={main}>
      <section id="who" className="description panel black">
        <span className="line line-0"></span>
        <h1>Who We Are</h1>
        <h3>One World In Concert <sup>TM</sup></h3>
        <div className="video-wrapper">
          <video controls autoPlay loop width="1280" height="720">
            <source src="/videos/WebCompilationShort_5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>Our motivation, purpose & goal is to inspire an understanding that we are all connected. A realization of life more important than the divisions that separate us.</p>
      </section>

      <section id="what" className="panel redd">
        <span className="line line-1"></span>
        <h2>What We Are Doing</h2>
        <h3>A Concert For Sound Healing</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section id="where" className="panel orangee">
        <span className="line line-2"></span>
        <h2>Where</h2>
        <h3>NYC</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section id="when" className="panel purple simple">
        <span className="line line-3"></span>
        <h2>When</h2>
        <h3>Spring 2026.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section id="why" className="panel bluee">
        <span className="line line-4"></span>
        <h2>Why</h2>
        <h3>The World needs to be healed.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section id="whynow" className="panel white">
        <span className="line line-5"></span>
        <h2>Why Now</h2>
        <h3>Because its never been more needed.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <nav id="owic-nav">
        <div><a href="#who">Who?</a></div>
        <div><a href="#what">What?</a></div>
        <div><a href="#where">Where?</a></div>
        <div><a href="#when">When</a></div>
        <div><a href="#why">Why</a></div>
        <div><a href="#whynow">Why Now</a></div>
      </nav>
    </div>
  );
}
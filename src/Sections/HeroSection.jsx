import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Split the title into characters
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });

    // Animate the hero content
    const tl = gsap.timeline({ delay: 1 });
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
        rotate: 7,
        scale: 0.9,
        yPercent: 30,
        ease: "power1.inOut"
    })
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="images/static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150 "
        />
        <div ref={contentRef} className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 ref={titleRef} className="hero-title main-title">
              Freaking Delicious
            </h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button">Chug a SPLYT</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

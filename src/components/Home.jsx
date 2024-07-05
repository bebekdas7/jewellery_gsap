import React from "react";
import "../styles/home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".neck-try",
        start: "10% 90%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      ".landing-necklace",
      {
        top: "154.9%",
        left: "76.6%",
        width: "6.1rem",
        height: "6.1rem",
        rotateX: "39deg",
        rotateY: "-8deg",
        rotateZ: "-7deg",
      },
      "landing"
    );
    tl.to(
      ".landing-blob",
      {
        top: "100%",
        left: "-20%",
        width: "70rem",
        height: "70rem",
      },
      "landing"
    );
    // New ScrollTrigger for the .ear-try section to hide the blob
    gsap.to(".landing-blob", {
      scrollTrigger: {
        trigger: ".ear-try",
        start: "end center",
        end: "bottom center",
        onEnter: () =>
          gsap.to(".landing-blob", { opacity: 0, display: "none" }),
        onLeaveBack: () =>
          gsap.to(".landing-blob", { opacity: 1, display: "block" }),
      },
    });

    // ----------earring-------------
    // New ScrollTrigger for the .ear-try section to hide the blob
    let earTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ear-try",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    earTl
      .to(".prod-img1 > section", {
        top: "57.3%",
        left: "19.2%",
        width: "3rem",
        height: "5rem",
        duration: 1,
        delay: 0.5,
      })
      .to(
        ".prod-img2 > section",
        {
          top: "40%",
          left: "49%",
          duration: 1,
          delay: 0.5,
        },
        "-=0.5"
      )
      .to(
        ".prod-img3 > section",
        {
          top: "40%",
          left: "72%",
          duration: 1,
          delay: 0.5,
        },
        "-=0.5"
      )
      .to(".prod-img1 > section", { opacity: 0, duration: 0.5 })

      .to(
        ".prod-img2 > section",
        {
          top: "57.4%",
          left: "19.9%",
          width: "1.9rem",
          height: "1.9rem",
          duration: 1,
          delay: 0.5,
        },
        "-=0.5"
      )
      .to(
        ".prod-img3 > section",
        {
          top: "40%",
          left: "49%",
          duration: 1,
          delay: 0.5,
        },
        "-=0.5"
      )
      .to(".prod-img2 > section", { opacity: 0, duration: 1 })
      .to(
        ".prod-img3 > section",
        {
          top: "57.9%",
          left: "19.7%",
          width: "2.6rem",
          height: "2.6rem",
          rotateX: "20deg",
          duration: 1,
          delay: 0.5,
        },
        "-=0.5"
      );
  });

  return (
    <main className="home ques">
      {/* --------------------navigation section--------------- */}
      <section className="nav d-flex justify-content-between align-items-cente py-1 px-5">
        <div className="nav-logo h-100 d-flex align-items-center justify-content-start">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="nav-items h-100 d-flex align-items-center justify-content-start gap-5">
          <button className="nav-buttons">HOME</button>
          <button className="nav-buttons">ABOUT</button>
          <button className="nav-buttons">PICTURES</button>
          <button className="nav-buttons">BLOGS</button>
        </div>
      </section>

      {/* ------------------landing page section--------------- */}

      <section className="landing d-flex flex-column align-items-center justify-content-center">
        <div className="landing-blob"></div>
        <div className="landing-necklace">
          <img src="images/necklace.png" alt="" />
        </div>
        <div className="landing-top px-5 d-flex align-items-center justify-content-start">
          <h1 className="ms-3">BEST</h1>
        </div>
        <div className="landing-center px-5 d-flex align-items-center justify-content-center">
          <h1 className="mb-0 ms-4 fw-bold">JEWELLERY</h1>
        </div>
        <div className="landing-bottom px-5 d-flex align-items-center justify-content-end">
          <h1 className="me-4">DESIGNS</h1>
        </div>
      </section>

      {/* -----------------nechlace try on----------------- */}

      <section className="neck-try d-flex align-items-end justify-content-between ps-5">
        <div className="neck-detail ms-5 px-4 py-3">
          <h1>
            JEWELLERY THAT TRANSFORM
            <br /> YOUR LOOK
          </h1>
          <p className="mt-5">
            Discover stunning jewelry pieces that transform your look
            effortlessly. Elevate your style with elegant designs, perfect for
            every occasion. Shine brighter with our exquisite collection
          </p>
          <div className="neck-buttons d-flex align-items-center gap-5">
            <button>VIEW</button>
            <button>COLLECTION</button>
          </div>
        </div>
        <div className="neck-box d-flex flex-column align-items-start justify-content-center">
          <img src="images/shivi1.png" alt="" />
        </div>
      </section>

      {/* -----------------Earring try on----------------- */}

      <section className="ear-try d-flex justify-content-between align-items-end">
        <div className="ear-image mb-4">
          <img src="images/shivi2.png" alt="" />
        </div>
        <div className="earings mb-4 d-flex justify-content-start align-items-center gap-5">
          <section className="ear-box d-flex flex-column">
            <div className="prod-img1 d-flex justify-content-center align-items-center">
              <section></section>
            </div>
            <div className="prod-name d-flex align-items-center justify-content-center text-center">
              <p>
                SILVER EVENING <br /> EARRINGS
              </p>
            </div>
          </section>
          <section className="ear-box2 d-flex flex-column">
            <div className="prod-img2 d-flex justify-content-center align-items-center">
              <section></section>
            </div>
            <div className="prod-name d-flex align-items-center justify-content-center text-center">
              <p>
                SILVER EVENING <br /> EARRINGS
              </p>
            </div>
          </section>
          <section className="ear-box3 d-flex flex-column">
            <div className="prod-img3 d-flex justify-content-center align-items-center">
              <section></section>
            </div>
            <div className="prod-name d-flex align-items-center justify-content-center text-center">
              <p>
                SILVER EVENING <br /> EARRINGS
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;

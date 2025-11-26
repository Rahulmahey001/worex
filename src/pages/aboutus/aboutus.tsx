"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import Aboutus from "@/components/aboutus/aboutus";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const AboutusMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service hero */}
            <Aboutus />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        About us
                      </span>
                      <h4 className="tp_fade_bottom">
                        <p>
    Welcome to <strong>Worex.in</strong> – your ultimate guide to better living. 
    Our mission is to empower individuals with practical knowledge that helps them make smarter decisions 
    in finance, health, technology, grooming, and earning money online.
  </p>

  <h2>Our Vision</h2>
  <p>
    At <strong>Worex</strong>, we believe everyone deserves access to expert insights that help them grow and thrive. 
    Whether you're looking to improve your financial health, enhance your lifestyle, or boost your personal and professional development, 
    we provide trustworthy and actionable advice.
  </p>

<h2>What We Offer</h2>
  <p>
    At <strong>Worex.in</strong>, we provide high-quality, expert-driven content designed to help you 
    improve your lifestyle, financial well-being, personal care, and digital skills. Our platform covers
    the following major categories:
  </p>

  <ul>
    <li>
      <h3>Finance & Investing</h3>
      <p>
        Learn how to manage money wisely, explore investment opportunities, understand the stock market,
        dive into cryptocurrency, and discover smart saving techniques.
      </p>
    </li>

    <li>
      <h3>Health & Wellness</h3>
      <p>
        Improve your physical and mental well-being with guidance on fitness, nutrition, mental health,
        workout routines, and holistic lifestyle habits.
      </p>
    </li>

    <li>
      <h3>Software & Technology</h3>
      <p>
        Stay updated in the digital world with software tutorials, technology reviews, AI tool guides,
        and app recommendations designed to enhance your tech skills.
      </p>
    </li>

    <li>
      <h3>Personal Care & Grooming</h3>
      <p>
        From skincare and hair care to grooming routines and product reviews, get tips that help you
        look and feel your best every day.
      </p>
    </li>

    <li>
      <h3>Make Money Online</h3>
      <p>
        Discover real ways to earn online through freelancing, affiliate marketing, blogging, and building
        your own online business—from beginner to expert level.
      </p>
    </li>
  </ul>

  <h2>Our Expertise</h2>
  <p>
    At <strong>Worex</strong>, we don’t just publish information — we deliver expert insights backed by 
    research, experience, and real-world knowledge. Our goal is to help you apply what you learn and improve 
    your life step by step.
  </p>

  <p>
    Thank you for visiting <strong>Worex.in</strong>. We are proud to be a part of your growth journey. 
    Stay connected for fresh insights, guides, and expert advice on finance, health, technology, grooming, 
    and online earning.
  </p>

  <p><strong>Let’s make life better, together.</strong></p>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* service area */}

            {/* line image slider  */}
            <LineImgSlider />
            {/* line image slider  */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutusMain;

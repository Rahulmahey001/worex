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
        Welcome to Worex, your premier destination for expert insights 
        and practical guides designed to empower your journey toward a better, more informed life. 
        We created this platform for curious individuals, lifelong learners, and ambitious 
        go-getters who are passionate about mastering the key areas of modern living.
      </p>

      <p>
        Our mission is to demystify complex topics and provide actionable advice across the 
        pillars of a successful life: <i>Finance</i>, <i>Health</i>,{" "}
        <i>Technology</i>, <i>Grooming</i>, and{" "}
        <i>Making Money Online</i>.
      </p>

      <hr className="my-4" />

      {/* Purpose & Mission */}
      <h5 className="fw-semibold mt-4">Our Purpose & Mission</h5>
      <p>
        At Worex, we believe that knowledge is the key to empowerment. Our core purpose is to 
        cut through the noise and deliver high-quality, reliable content that you can use to 
        make smarter decisions, build new skills, and enhance your personal and professional well-being.
      </p>

      <p>We are committed to helping you:</p>

      <ul className="pl-20 fs-6">
        <li>
          <strong>Build Financial Intelligence:</strong>  <br />Make informed decisions about your money, 
          from personal finance basics to advanced investing in stocks and cryptocurrency.
        </li>
        <li>
          <strong>Achieve Health & Wellness Goals:</strong> <br /> Unlock your potential with trusted advice 
          on fitness, mental health, nutrition, and effective workout routines.
        </li>
        <li>
          <strong>Leverage Software & Technology:</strong> <br /> Stay ahead with easy-to-follow software 
          tutorials, honest tech reviews, and guides to the latest AI tools.
        </li>
        <li>
          <strong>Elevate Your Personal Care:</strong> <br /> Discover expert grooming tips, skincare routines, 
          and honest product reviews to look and feel your best.
        </li>
        <li>
          <strong>Create Online Income Streams:</strong> <br /> Learn proven strategies for freelancing, 
          affiliate marketing, blogging, and building a sustainable online business.
        </li>
      </ul>

      <hr className="my-4" />

      {/* Why Worex */}
      <h5 className="fw-semibold mt-4">Why Worex?</h5>
      <p>
        The digital world is overflowing with information, but it often lacks clarity and depth. 
        Worex was born from a need for a consolidated, trustworthy source of information. We strive 
        to be your go-to guide, transforming complex subjects into clear, step-by-step advice that 
        drives real results.
      </p>

      <p>
        Our aim is to foster a community of motivated individuals who learn and grow together. 
        By empowering you with knowledge, we help you take control of your future and build the life 
        you deserve.
      </p>

      <p>
        Thank you for choosing Worex. We are excited to be a part of your journey.
      </p>

      <p className="fw-semibold mt-4">— The Worex Team</p>
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

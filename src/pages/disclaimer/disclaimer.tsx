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
import Disclaimer from "@/components/disclaimer/disclaimer";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const DisclaimerMain = () => {
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
            <Disclaimer />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Disclaimer
                      </span>
                      <div style={{ whiteSpace: "pre-line" }} className="blog-details-left-content"> 
                      <p>
        Welcome to Worex.in – Better Living Guide.
        {"\n"}
        Our mission is to provide helpful, educational, and informative content on{" "}
        Finance, Health, Technology, Grooming, and Making Money. 
        The information published on this website is intended for general knowledge and guidance only.
      </p>

      <h5>1. No Professional Advice</h5>
      <p>
        The articles and insights on Worex.in are based on general research, personal understanding, 
        and publicly available information.
        We do not provide professional financial, medical, legal, or technical advice.
        Before making any decisions related to finance, investments, health, or business, 
        you should always consult a qualified professional.
      </p>

      <h5>2. No Data Collection</h5>
      <p>
        Worex.in does not collect, store, share, or request any personal information from users.
        We do not use forms, trackers, or tools that gather personal data.
        You can browse the website freely without signing up or providing any details.
      </p>

      <h5>3. No Affiliate Marketing or Selling</h5>
      <p>
        We do not promote affiliate products, sponsored content, or paid recommendations.

        Worex.in does not sell any services, digital products, or physical items.

        All information we publish is purely for educational and informational purposes.
      </p>

      <h5>4. Content Accuracy</h5>
      <p>
        While we aim to provide accurate and updated information across topics such as:
      </p>

      <ul  className="pl-20 fs-6">
        <li>Finance & Investing</li>
        <li>Health & Wellness</li>
        <li>Software & Technology</li>
        <li>Personal Care & Grooming</li>
        <li>Making Money Online</li>
      </ul>

      <p>
        we cannot guarantee that all information is 100% up-to-date or error-free. 
        Readers are encouraged to verify details when needed.
      </p>
      <h5>5. External Links</h5>
      <p>
      In some cases, we may reference external websites purely for informative purposes.
Worex.in is not responsible for the content, accuracy, or policies of third-party websites.
      </p>
      <h5>6. Your Use of the Website</h5>
      <p>
      By using Worex.in, you agree that the website and its authors are not liable for any actions, losses, or decisions taken based on its content.
Your use of the website is at your own discretion and responsibility.

      </p>
    </div>
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

export default DisclaimerMain;

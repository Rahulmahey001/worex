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
import Termsconditions from "@/components/terms-conditions/terms-conditions";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const TermsconditionsMain = () => {
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
            <Termsconditions />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Terms and Conditions
                      </span>
                      <h4 className="tp_fade_bottom">
                      <p>
        Welcome to Worex.in. By using our website, you agree to the following Terms & Conditions. 
        Please read them carefully.
      </p>

      <hr className="my-4" />

      {/* Section 1 */}
      <h5 className="fw-semibold mt-4">1. About Worex.in</h5>
      <p>Worex.in is an online platform focused on sharing educational and informational content related to:</p>
      <ul className="pl-20 fs-6">
        <li>Finance & Investing</li>
        <li>Health & Wellness</li>
        <li>Software & Technology</li>
        <li>Personal Care & Grooming</li>
        <li>Making Money Online</li>
      </ul>
      <p>Our goal is to provide helpful, well-researched guides that improve your daily life.</p>

      <hr className="my-4" />

      {/* Section 2 */}
      <h5 className="fw-semibold mt-4">2. Educational Purpose Only</h5>
      <p>All content on Worex.in is created only for informational and educational purposes.</p>
      <ul className="pl-20 fs-6">
        <li> We do not collect personal data</li>
        <li> We do not sell products or services</li>
        <li> We do not use affiliate links</li>
        <li> We do not promote or advertise paid items</li>
        <li> We do not provide professional financial, medical, or legal advice</li>
      </ul>
      <p>
        Always consult a qualified professional before making decisions based on information found online.
      </p>

      <hr className="my-4" />

      {/* Section 3 */}
      <h5 className="fw-semibold mt-4">3. No User Data Collection</h5>
      <p>Worex.in does not collect, store, or track any personal information from visitors.</p>
      <p>We do not use:</p>
      <ul className="pl-20 fs-6">
        <li>User accounts</li>
        <li>Contact forms requiring personal details</li>
        <li>Newsletters</li>
        <li>Cookies for tracking purposes</li>
        <li>Third-party data collection tools</li>
      </ul>
      <p>Your privacy is important, and we keep the website simple and safe to use.</p>

      <hr className="my-4" />

      {/* Section 4 */}
      <h5 className="fw-semibold mt-4">4. Accuracy of Information</h5>
      <p>We try our best to keep all information accurate, updated, and reliable. However:</p>
      <ul className="pl-20 fs-6">
        <li>The content may sometimes contain errors or outdated information.</li>
        <li>We do not guarantee 100% accuracy.</li>
        <li>You use the information at your own discretion and responsibility.</li>
      </ul>

      <hr className="my-4" />

      {/* Section 5 */}
      <h5 className="fw-semibold mt-4">5. Limitation of Liability</h5>
      <p>Worex.in is not responsible for:</p>
      <ul className="pl-20 fs-6">
        <li>Any loss, damage, or misunderstanding arising from the use of our content</li>
        <li>Actions taken based on the information provided</li>
        <li>External websites linked for reference (if any)</li>
      </ul>
      <p>Your use of the website is entirely at your own risk.</p>

      <hr className="my-4" />

      {/* Section 6 */}
      <h5 className="fw-semibold mt-4">6. Contact</h5>
      <p>If you have any questions about these Terms & Conditions, you can reach out to us at:</p>
      <p className="fw-bold">Email: <span className="fw-normal">[Add your email]</span></p>
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

export default TermsconditionsMain;

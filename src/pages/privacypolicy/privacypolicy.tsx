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
import Privacypolicy from "@/components/privacypolicy/privacypolicy";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const PrivacypolicyMain = () => {
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
            <Privacypolicy />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Privacy Policy
                      </span>
                      <h4 className="tp_fade_bottom">
                      <p>
        Welcome to Worex ("we," "our," or "us"). We operate the website worex.in 
        (the "Site"). Your privacy is important to us. This Privacy Policy 
        explains the very limited ways we interact with data during your visit 
        to our Site.
      </p>

      <hr className="my-4" />

      {/* Section 1 */}
      <h5 className="fw-semibold mt-4">1. Information We Do NOT Collect</h5>
      <p>
        To be perfectly clear, we do not collect any personal data from our users.
        This means we do not ask for, store, or process any of the following:
      </p>
      <ul className="pl-20 fs-6">
        <li>Names</li>
        <li>Email addresses</li>
        <li>Usernames</li>
        <li>Physical addresses</li>
        <li>Phone numbers</li>
        <li>Any other personally identifiable information</li>
      </ul>
      <p>
        We do not have comment sections, user accounts, or newsletter subscriptions 
        that would require such data.
      </p>

      <hr className="my-4" />

      {/* Section 2 */}
      <h5 className="fw-semibold mt-4">2. Automatically Collected Information (Non-Personal)</h5>
      <p>
        Like most websites, our hosting server may automatically log certain 
        non-personal information for operational and analytical purposes. This 
        data cannot be used to identify you personally and may include:
      </p>
      <ul className="pl-20 fs-6">
        <li>Your IP address (anonymized where possible)</li>
        <li>The type of browser and device you are using</li>
        <li>Your operating system</li>
        <li>The pages you visited on our site and the time spent on them</li>
        <li>The referring website (if any) that led you to Worex</li>
      </ul>
      <p>
        This information is used solely to analyze trends, administer the site, 
        track user movement in aggregate, and gather broad demographic 
        information for internal use.
      </p>

      <hr className="my-4" />

      {/* Section 3 */}
      <h5 className="fw-semibold mt-4">3. Third-Party Services</h5>
      <p>
        We use Google AdSense and other third-party advertising companies to 
        serve ads when you visit our Site. These companies may use non-personal 
        data (such as your browser type and pages visited) to provide 
        advertisements about goods and services likely to be of greater interest 
        to you.
      </p>

      <p><i>Google's Use of Cookies:</i> Google uses cookies to serve ads based on a user's prior visits to your website or other websites.</p>

      <p>
        <i>Opting Out:</i> Users may opt out of personalized 
        advertising by visiting Google's Ads Settings. Alternatively, you can 
        opt out of a third-party vendor's use of cookies by visiting the 
        Network Advertising Initiative opt-out page.
      </p>

      <hr className="my-4" />

      {/* Section 4 */}
      <h5 className="fw-semibold mt-4">4. Affiliate Marketing</h5>
      <p>
        We currently do not participate in any affiliate marketing programs. 
        Therefore, no tracking links or cookies are used for the purpose of 
        earning commission on sales.
      </p>

      <hr className="my-4" />

      {/* Section 5 */}
      <h5 className="fw-semibold mt-4">5. Contact Us</h5>
      <p>
        If you have any questions about this Privacy Policy, you can contact us 
        by visiting our website: <i>worex.in</i>
      </p>
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

export default PrivacypolicyMain;

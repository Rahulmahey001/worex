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
    At <strong>Worex.in</strong>, accessible from our website, your privacy is one of our top priorities. 
    This Privacy Policy outlines the types of information we collect, how we use it, how it is protected, 
    and your rights regarding your data.
  </p>

  <h2>Information We Collect</h2>
  <p>
    We do not collect personal information unless you voluntarily provide it to us. The types of data we 
    may collect include:
  </p>
  <ul>
    <li><strong>Personal Information:</strong> Such as your name or email address when you contact us or subscribe to updates.</li>
    <li><strong>Log Data:</strong> Standard information sent by your browser, such as IP address, browser type, pages visited, and time spent.</li>
    <li><strong>Cookies:</strong> Small data files used to improve user experience and track website performance.</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <p>Your information is used solely to improve the quality and relevance of our content. This includes:</p>
  <ul>
    <li>Enhancing the user experience on Worex.in</li>
    <li>Improving and updating our website content</li>
    <li>Understanding visitor behavior and trends</li>
    <li>Replying to user inquiries</li>
    <li>Sending updates (only if you subscribe)</li>
  </ul>

  <h2>Content Categories We Cover</h2>
  <p>
    Our website provides expert insights and content in the following categories, but we do not collect 
    sensitive data related to any of these:
  </p>

  <ul>
    <li><strong>Finance & Investing</strong> – Personal Finance, Saving Tips, Stock Market, Cryptocurrency</li>
    <li><strong>Health & Wellness</strong> – Fitness, Nutrition, Mental Health, Workout Routines</li>
    <li><strong>Software & Technology</strong> – Software Tutorials, Tech Reviews, App Guides, AI Tools</li>
    <li><strong>Personal Care & Grooming</strong> – Skincare, Hair Care, Grooming Tips, Product Reviews</li>
    <li><strong>Make Money Online</strong> – Freelancing, Affiliate Marketing, Blogging, Online Business</li>
  </ul>

  <h2>Cookies and Tracking Technologies</h2>
  <p>
    Worex.in uses cookies to improve website performance and personalize your experience. Cookies help us 
    analyze traffic, optimize pages, and ensure smooth functionality.
    You can disable cookies anytime through your browser settings.
  </p>

  <h2>Third-Party Services</h2>
  <p>
    We may use third-party services such as analytics tools (e.g., Google Analytics) to better understand 
    website traffic and improve our content strategy. These tools may collect non-personal information 
    such as device type and browsing behavior.
  </p>

  <h2>External Links</h2>
  <p>
    Worex.in may contain links to external websites. We are not responsible for the content or privacy 
    practices of those third-party websites. We encourage users to review the privacy policies of external sites.
  </p>

  <h2>Data Security</h2>
  <p>
    We use reasonable security measures to protect your information. However, no data transmission 
    over the internet is 100% secure. By using our site, you acknowledge that you understand these limitations.
  </p>

  <h2>Children’s Privacy</h2>
  <p>
    Worex.in does not knowingly collect personal information from children under 13. 
    If you believe a child has provided us with such information, please contact us immediately.
  </p>

  <h2>Your Rights</h2>
  <p>You have the right to:</p>
  <ul>
    <li>Request deletion of your personal information (if collected)</li>
    <li>Opt out of newsletters or emails</li>
    <li>Disable tracking cookies</li>
    <li>Contact us for clarification about our privacy practices</li>
  </ul>

  <h2>Changes to This Privacy Policy</h2>
  <p>
    We may update this Privacy Policy from time to time. Any revised version will be posted on this page 
    with an updated revision date.
  </p>

  <h2>Contact Us</h2>
  <p>
    If you have questions about this Privacy Policy or our data practices, 
    please reach out to us through the contact page on <strong>Worex.in</strong>.
  </p>

  <p><strong>Last Updated:</strong></p>
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

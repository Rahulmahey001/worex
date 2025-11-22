import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

export default function aboutus() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
                About us page
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{height:"auto"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

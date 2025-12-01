import React from "react";
import { Metadata } from "next";
import AboutusMain from "@/pages/about-us/about-us";

export const metadata: Metadata = {
  title: "Worex - Aboutus page",
};

const AboutusPage = () => {
  return (
    <AboutusMain/>
  );
};

export default AboutusPage;

import React from "react";
import { Metadata } from "next";
import AboutusMain from "@/pages/aboutus/aboutus";

export const metadata: Metadata = {
  title: "Worex - Aboutus page",
};

const AboutusPage = () => {
  return (
    <AboutusMain/>
  );
};

export default AboutusPage;

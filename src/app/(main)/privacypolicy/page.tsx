import React from "react";
import { Metadata } from "next";
import PrivacypolicyMain from "@/pages/privacypolicy/privacypolicy";

export const metadata: Metadata = {
  title: "Worex - Privacy Policy page",
};

const PrivacypolicyPage = () => {
  return (
    <PrivacypolicyMain/>
  );
};

export default PrivacypolicyPage;

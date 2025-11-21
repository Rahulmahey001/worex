import React from "react";
import { Metadata } from "next";
import DisclaimerMain from "@/pages/disclaimer/disclaimer";

export const metadata: Metadata = {
  title: "Worex - Disclaimer page",
};

const DisclaimerPage = () => {
  return (
    <DisclaimerMain/>
  );
};

export default DisclaimerPage;

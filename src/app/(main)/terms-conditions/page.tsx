import React from "react";
import { Metadata } from "next";
import TermsconditionsMain from "@/pages/terms-conditions/terms-conditions";

export const metadata: Metadata = {
  title: "Worex - Terms & conditions page",
};

const TermsconditionsPage = () => {
  return (
    <TermsconditionsMain/>
  );
};

export default TermsconditionsPage;

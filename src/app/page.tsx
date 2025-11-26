import React from 'react';
import { Metadata } from 'next';
import HomeMain from '@/pages/homes/home-11';

export const metadata: Metadata = {
  title: "Worex - Home Page",
};

const HomePage = () => {
  return (
    <HomeMain/>
  );
};

export default HomePage;
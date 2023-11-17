'use clinet';

import Banner from "@/components/Banner";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";

export interface HomeProps {
  params: {
    lng: string; 
  };
}

export interface componentProps {
  lng: string;
}

const Home: React.FC<HomeProps> = async ({ params: { lng } }) => {
  return (
    <>
      <Hero lng={lng}/>
      <Camp />
      <Banner  />
      <Features />
      <GetApp  />
    </>
  );
};

export default Home;

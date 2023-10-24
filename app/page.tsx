'use clinet';

import Banner from "@/components/Banner";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Banner />
      <Features />
      <GetApp />
    </>
  )
}

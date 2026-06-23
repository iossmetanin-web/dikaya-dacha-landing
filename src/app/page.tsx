"use client";

import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Location } from "@/components/sections/location";
import { Attractions } from "@/components/sections/attractions";
import { Plots } from "@/components/sections/plots";
import { Houses } from "@/components/sections/houses";
import { Formula } from "@/components/sections/formula";
import { Consultation } from "@/components/sections/consultation";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/sections/back-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Location />
      <Attractions />
      <Plots />
      <Houses />
      <Formula />
      <Consultation />
      <Footer />
      <BackToTop />
    </main>
  );
}
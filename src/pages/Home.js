import React from "react";
import {
  Hero,
  SaleBanners,
  Menu,
  BestQuality,
  Delivery,
  OurChef,
  Testimonials,
} from "../components/";

function Home() {
  return (
    <main>
      <Hero />
      <SaleBanners />
      <Menu />
      <BestQuality />
      <Delivery />
      <OurChef />
      <Testimonials />
    </main>
  );
}

export default Home;

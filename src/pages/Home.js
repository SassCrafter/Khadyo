import React from "react";
import { Hero, SaleBanners, Menu } from "../components/";

function Home() {
  return (
    <main>
      <Hero />
      <SaleBanners />
      <Menu />
      <section style={{ height: "200vh" }}></section>
    </main>
  );
}

export default Home;

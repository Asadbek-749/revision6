import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShopRoom from "./components/ShopRoom";
import FurnitureCare from "./components/FurnitureCare";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopRoom />
      <FurnitureCare />
      <Shop />
      <Footer/>
    </>
  );
}

export default App;

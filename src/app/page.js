"use client";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Card from "components/Card";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to My Webpage</h1>
      <Card />
      <Footer />
    </>
  );
}

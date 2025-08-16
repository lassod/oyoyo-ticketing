"use client";
import Download from "@/components/landing/Download";
import { EmailPopup } from "@/components/landing/EmailPopup";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroPage from "@/components/landing/Hero";
import Testimonial from "@/components/landing/Testimonial";
import Works from "@/components/landing/Works";

const Home = () => {
  return (
    <main>
      <Header />
      <HeroPage />
      <Features />
      <Testimonial />
      <Works />
      <Download />
      <Footer />
      <EmailPopup />
    </main>
  );
};

export default Home;

"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const [isFeatureVisible, setIsFeatureVisible] = useState(false);
  const [isWorksVisible, setIsWorksVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isCTAVisible, setIsCTAVisible] = useState(false);

  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const featureParagraphRef = useRef<HTMLParagraphElement>(null);
  const worksParagraphRef = useRef<HTMLParagraphElement>(null);
  const ctaParagraphRef = useRef<HTMLParagraphElement>(null);

  // Reusable observer function
  function useObserver(
  ref: React.RefObject<HTMLElement>, setState: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setState(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [ref, setState]);
  };

  // Attach observers
  useObserver(heroParagraphRef, setIsHeroVisible);
  useObserver(featureParagraphRef, setIsFeatureVisible);
  useObserver(worksParagraphRef, setIsWorksVisible);
  useObserver(ctaParagraphRef, setIsCTAVisible);

  const testimonials = [
  {
    quote: `Oyoyo made selling tickets for my private comedy show so easy, I even got a DJ and caterer through the app!`,
    name: "Mike O.",
    role: "Event host",
    starsSrc: "/stars.png",
    profileSrc: "/profile.png",
    bigPicSrc: "/big pic.png",
  },
  {
    quote: `This platform made event planning a breeze and boosted my ticket sales!`,
    name: "Sarah K.",
    role: "Concert Organizer",
    starsSrc: "/stars.png",
    profileSrc: "/profile2.jpg",
    bigPicSrc: "/big pic.png",
  },
  ];

  const current = testimonials[currentIndex];

  return (
    <main className="font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-5 px-4">
          <Image
            src="/oyoyo logo.png"
            alt="Oyoyo Logo"
            width={80}
            height={30}
            priority
          />
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <a className="hover:text-red-800 transition-colors" href="/">
              Home
            </a>
            <a className="hover:text-red-800 transition-colors" href="#features">
              Features
            </a>
            <a
              className="hover:text-red-800 transition-colors" href="#Testimonials"
            >
              Testimonials
            </a>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:inline whitespace-nowrap rounded-[30px] text-sm font-medium bg-red-700 text-white hover:bg-black transition-colors px-4 sm:px-6 py-2"><a href="#Start"></a>
            Get Started
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[120px]" />

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="py-2 px-50 rounded-md focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-red-800 transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-red-800 transition-colors"
          >
            Features
          </a>
          <a
            href="#Testimonials"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-red-800 transition-colors"
          >
            Testimonials
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-6 whitespace-nowrap rounded-[30px] text-sm font-medium bg-red-700 text-white hover:bg-black transition-colors px-4 sm:px-6 py-2"><a href="#Start">
            Get Started
            </a>
          </button>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40"
        />
      )}


      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold max-w-4xl">
        List Your Next Event and Sell Tickets with Oyoyo Events App Today!
      </h1>

      <p
        ref={heroParagraphRef}
        className={`relative w-full max-w-xl overflow-hidden mt-4 transition-all duration-700 ease-out ${
          isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        For every event — from concerts, festivals, and exhibitions to
        webinars, trade shows, weddings, conferences, and parties — Oyoyo
        App makes event planning and ticketing easy.
      </p>

      <button className="mt-8 md:inline whitespace-nowrap rounded-[10px] text-sm font-medium bg-red-700 text-white hover:bg-black transition-colors px-4 sm:px-6 py-4"><a href="#Start">
        Get Started for Free
        </a>
      </button>

      <div className="mt-10 w-full max-w-[758px] rounded-[20px] overflow-hidden z-10">
        <MuxPlayer
          streamType="on-demand"
          metadataVideoTitle="Setting up a live event"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          playbackId="bWom3bfGjaTJ00YGG7TK3CcFd4lpEyrGXRZbLoiR9Ut4"
        />
      </div>
    </section>

      {/* Why Choose Us */}
      <section id="features" className="px-6 py-16 max-w-6xl mx-auto text-center">
        <p className="mt-4 text-sm font-semibold text-red-700 max-w-xl mx-auto">
          Features
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          Why Oyoyo Events App is Your Best Choice
        </h2>
        <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
          Pocket-Friendly Fees | Simple Tools | All-in-One-App
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              img: "/pic 1.png",
              title: "Keep More of Your Profits",
              desc: "Only 3.5% ticketing fee — way lower than the 5.5% to 10% you pay on other platforms.",
            },
            {
              img: "/pic 1.png",
              title: "All-in-One Planning & Ticketing Tool",
              desc: "Create, manage, and sell for physical, virtual, private, and hybrid events – all in one app.",
            },
            {
              img: "/pic 2.png",
              title: "Customisable Forms for Better Insights",
              desc: "Collect only the data you need with easy-to-edit registration forms.",
            },
            {
              img: "/pic 3.png",
              title: "No Extra devices Needed",
              desc: "Validate tickets instantly with QR codes using your phone — no scanners required.",
            },
            {
              img: "/pic 4.png",
              title: "Boost Engagement with Digital Spray",
              desc: "Let guests spray money digitally at virtual and physical events.",
            },
            {
              img: "/pic 5.png",
              title: "Hire Trusted Vendors Instantly",
              desc: "Access a vetted directory of DJs, Ushers, Caterers, Decor Experts, and more based on your event location.",
            },
          ].map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center px-2 py-4"
          >
          <Image
            src={img}
            alt={title}
            width={45}
            height={45}
            className="rounded-sm mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p 
            ref={featureParagraphRef}
            className={`text-gray-600 mt-2 transition-all duration-700 ease-out ${
            isFeatureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>{desc}</p>
        </div>
        ))}
        </div>
      </section>


      {/* Testimonial */}
      <section id="Testimonials" className="px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <Image
            src={current.starsSrc}
            alt="5 stars"
            width={100}
            height={20}
            className="mb-4"
          />
          <p className="text-2xl lg:text-5xl font-medium leading-snug">
            {current.quote}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Image
              src={current.profileSrc}
              alt={current.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-gray-500">{current.role}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
        <div>
          <Image
            src={current.bigPicSrc}
            alt="big pic"
            width={500}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>

      {/* How It Works */}
      <section id="How it Works" className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              <p 
              ref={worksParagraphRef}
              className={`text-gray-600 mt-2 transition-all duration-700 ease-out ${
              isWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>Create Your Free Account</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              <p 
              ref={worksParagraphRef}
              className={`text-gray-600 mt-2 transition-all duration-700 ease-out ${
              isWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>List Your Event &amp; Set Ticket Price</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              <p 
              ref={worksParagraphRef}
              className={`text-gray-600 mt-2 transition-all duration-700 ease-out ${
              isWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>Start Selling &amp; Track Attendance Easily</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/tick.png" alt="tick" width={28} height={28}/>
              <p 
              ref={worksParagraphRef}
              className={`text-gray-600 mt-2 transition-all duration-700 ease-out ${
              isWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>Host Your Event with Full Support</p>
            </li>
          </ul>
          <button className="mt-8 md:inline whitespace-nowrap rounded-[10px] text-sm font-medium bg-red-700 text-white hover:bg-black transition-colors px-4 sm:px-6 py-4"><a href="#Start">
            Get Started for Free
            </a>
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src="/phone.png" alt="Oyoyo App" width={450} height={400} className="rounded-lg"/>
        </div>
      </div>
    </section>


      {/* Final CTA */}
      <section className="px-6 md:px-[112px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-red-800 text-white px-6 py-12 rounded-lg">
          <div className="flex flex-col text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Ready to Launch Your Event the Smart Way?
            </h2>
            <p 
              ref={ctaParagraphRef}
              className={`text-white mt-2 transition-all duration-700 ease-out ${
              isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>
              Don&apos;t just host an event — own it with Oyoyo Events App.
            </p>
            <p 
              ref={ctaParagraphRef}
              className={`text-white mt-2 transition-all duration-700 ease-out ${
              isCTAVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}>
              No hidden fees | No stress | Just success.
            </p>
          </div>
          <div id='Start' className="flex-shrink-0">
            <button className="mt-2 md:inline whitespace-nowrap rounded-[10px] text-sm font-medium bg-red hover:bg-black transition-colors px-8 sm:px-6 py-4">
              Create an Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-red-700 relative top-[70px] md:top-[70px]">
        <div className="max-w-screen-xl px-4 py-10 mx-auto">
          <div className="grid sm:grid-cols-[1fr,auto] gap-8 sm:gap-11 justify-between items-center">
            <div className="flex flex-col gap-8">
              <img
              alt="Oyoyo Logo"
              loading="lazy"
              width={78}
              height={36}
              decoding="async"
              src="oyoyo2.png"
              style={{ color: "transparent" }}
            />
            <div>
              <div style={{ position: "relative", width: "100%", overflow: "hidden", opacity: 1, transform: "none" }}>
                <p className="text-white">
                  A user-friendly platform for event planning, ticketing and streaming.
                </p>
              </div>
            </div>
            <div className="flex gap-8 flex-wrap">
              <a className="font-medium text-white" href="/">
                Home
              </a>
              <a className="font-medium text-white" href="#features">
                Features
              </a>
              <a className="font-medium text-white" href="#Testimonials">
                Testimonials
              </a>
              <a className="font-medium text-white" href="#How-it-Works">
                How it Works
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-white">Get the app</h5>
            <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
              <div style={{ opacity: 1, transform: "none" }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/zm/app/oyoyo-event/id6447293031"
                >
                <img
                  alt="Appstore"
                  loading="lazy"
                  width={135}
                  height={40}
                  decoding="async"
                  src="appstore.png"
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
          </div>
          <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
            <div style={{ opacity: 1, transform: "none" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.lassod.oyoyoevents&hl=vn"
              >
              <img
                alt="Googlestore"
                loading="lazy"
                width={135}
                height={40}
                decoding="async"
                src="googleplay.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t flex flex-col items-center justify-center border-gray-200 mt-14 pt-10">
      <p className="text-white">© 2024 Oyoyo events. All rights reserved.</p>
      <div className="flex gap-5 mt-6">
        <a
          href="https://www.youtube.com/channel/UCGBaVqXjFh2fPpOkd2I2-vQ"
          className="relative w-fit overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-youtube text-white"
        >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
        </svg>
        </a>
        <a
          href="https://www.facebook.com/oyoyoapp"
          className="relative w-fit overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook text-white"
        >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
        </a>
        <a
          href="https://www.instagram.com/oyoyoeventsapp"
          className="relative w-fit overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram text-white"
        >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
        </a>
      </div>
    </div>
  </div>
</div>
</main>
);
}

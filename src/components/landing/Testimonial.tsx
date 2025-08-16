"use client";
import { useState } from "react";
import Image from "next/image";
import { LandingContainer, LandingTitle } from "@/components/ui/containers";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
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

  const current = testimonials[currentIndex];
  return (
    <LandingContainer id="testimonials">
      <LandingTitle header="testimonials" title="What our users are saying" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <Image
            src={current.starsSrc}
            alt="5 stars"
            width={200}
            height={200}
            className="mb-4 max-w-[100px]"
          />
          <p className="font-medium md:text-[19px] lg:text-[24px]">
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
              <h6 className="font-semibold">{current.name}</h6>
              <p className="text-sm">{current.role}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
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
    </LandingContainer>
  );
};

export default Testimonial;

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

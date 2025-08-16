import React from "react";
import {
  Command,
  Smile,
  SquareMousePointer,
  ThumbsUp,
  Zap,
} from "lucide-react";
import {
  LandingContainer,
  LandingTitle,
  LandingWrapper,
} from "@/components/ui/containers";
import { Reveal3, Reveal4 } from "./Text";

const Features = () => {
  return (
    <LandingContainer id="features">
      <LandingTitle
        title="Why Oyoyo Events App is Your Best Choice"
        header="Features"
        text="Pocket-Friendly Fees | Simple Tools | All-in-One-App"
      />
      <LandingWrapper className="sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex max-w-[400px] mx-auto w-full flex-col gap-2 items-center"
          >
            <Reveal4>
              <feature.icon className="border mb-3 border-gray-200 text-black rounded-md p-3 h-[43px] w-[43px]" />
            </Reveal4>
            <h5 className="text-center font-semibold">{feature.title}</h5>
            <Reveal3>
              <p className="text-center">{feature.desc}</p>
            </Reveal3>
          </div>
        ))}
      </LandingWrapper>
    </LandingContainer>
  );
};

export default Features;

const features = [
  {
    icon: Zap,
    title: "Keep More of Your Profits",
    desc: "Only 3.5% ticketing fee — way lower than the 5.5% to 10% you pay on other platforms.",
  },
  {
    icon: Zap,
    title: "All-in-One Planning & Ticketing Tool",
    desc: "Create, manage, and sell for physical, virtual, private, and hybrid events – all in one app.",
  },
  {
    icon: Command,
    title: "Customisable Forms for Better Insights",
    desc: "Collect only the data you need with easy-to-edit registration forms.",
  },
  {
    icon: SquareMousePointer,
    title: "No Extra devices Needed",
    desc: "Validate tickets instantly with QR codes using your phone — no scanners required.",
  },
  {
    icon: ThumbsUp,
    title: "Boost Engagement with Digital Spray",
    desc: "Let guests spray money digitally at virtual and physical events.",
  },
  {
    icon: Smile,
    title: "Hire Trusted Vendors Instantly",
    desc: "Access a vetted directory of DJs, Ushers, Caterers, Decor Experts, and more based on your event location.",
  },
];

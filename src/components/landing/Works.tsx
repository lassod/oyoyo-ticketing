import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingContainer, LandingWrapper } from "../ui/containers";
import { Reveal1, Reveal3 } from "./Text";

const steps = [
  "Create Your Free Account",
  "List Your Event & Set Ticket Price",
  "Start Selling & Track Attendance Easily",
  "Host Your Event with Full Support",
];

const Works = () => {
  return (
    <LandingContainer id="works">
      <LandingWrapper className="max-w-[800px] mx-auto">
        <div className="space-y-6">
          <h2 className="text-left text-[17.5px] md:text-[28px]">
            How It Works
          </h2>

          <ul className="space-y-3 pb-6 text-gray-700">
            {steps.map((text: any, i: number) => (
              <Reveal3 key={i}>
                <li key={text} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-red-700 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-600 transition-all duration-700 ease-out">
                    {text}
                  </p>
                </li>
              </Reveal3>
            ))}
          </ul>

          <Link
            rel="noopener noreferrer"
            href="https://oyoyoapp.com/auth/signup"
          >
            <Button>Get Started for Free</Button>
          </Link>
        </div>

        <Image
          src="/phone.png"
          alt="Oyoyo App"
          width={450}
          height={400}
          className="object-contain"
        />
      </LandingWrapper>
    </LandingContainer>
  );
};

export default Works;

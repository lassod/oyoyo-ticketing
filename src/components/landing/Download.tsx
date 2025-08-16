import Image from "next/image";
import React from "react";
import Link from "next/link";
import { LandingContainer, LandingWrapper } from "@/components/ui/containers";
import { Reveal3, Reveal5 } from "./Text";
import { Button } from "../ui/button";

const Download = ({ className }: { className?: string }) => {
  return (
    <LandingContainer id="contact">
      <section className="relative max-w-[1380px] mx-auto w-full h-full">
        <div className="rounded-[12px] md:rounded-[24px] absolute bg-red-700 -z-10 top-0 w-full h-full"></div>
        <LandingWrapper className="px-4 py-10 md:py-0 md:grid-cols-1 flex justify-between items-start">
          <div className="flex flex-col text-left">
            <h3 className="text-white mb-4">
              Ready to Launch Your Event the Smart Way?
            </h3>
            <p className="text-white mt-2">
              Don&apos;t just host an event — own it with Oyoyo Events App.
            </p>
            <p className="text-white mt-2">
              No hidden fees | No stress | Just success.
            </p>
          </div>
          <div id="Start" className="flex-shrink-0">
            <Button variant="secondary">Create an Account</Button>
          </div>
        </LandingWrapper>
      </section>
    </LandingContainer>
  );
};

export default Download;

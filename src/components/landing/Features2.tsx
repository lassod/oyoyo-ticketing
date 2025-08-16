"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="font-sans">
      {/* How It Works */}
      <section
        id="How it Works"
        className="px-6 py-16 max-w-6xl mx-auto"
      ></section>

      {/* Final CTA */}
      <section className="px-6 md:px-[112px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-red-800 text-white px-6 py-12 rounded-lg">
          <div className="flex flex-col text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Ready to Launch Your Event the Smart Way?
            </h2>
            <p
              // ref={ctaParagraphRef}
              className={`text-white mt-2 transition-all duration-700 ease-out`}
            >
              Don&apos;t just host an event — own it with Oyoyo Events App.
            </p>
            <p
              // ref={ctaParagraphRef}
              className={`text-white mt-2 transition-all duration-700 ease-out`}
            >
              No hidden fees | No stress | Just success.
            </p>
          </div>
          <div id="Start" className="flex-shrink-0">
            <Button variant="secondary">Create an Account</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
// import Logout from "../dashboard/general/Logout";

const Header = ({ guest = false }: any) => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  // const { data: session } = useSession();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) setScroll(true);
    else setScroll(false);
  };

  return (
    <div
      className={`fixed mx-auto px-4 top-0 right-0 left-0 bg-transparent z-50 ${
        guest && "bg-white"
      } ${scroll && "bg-white shadow-lg"}`}
    >
      <div
        className={`hidden lg:px-8 md:flex justify-between items-center bg-transparent max-w-screen-xl py-5 px-[33px] mx-auto md:p-5 md:px-5 ${
          !guest && "xl:px-24"
        }`}
      >
        <Image src="/images/Logo.svg" width={100} height={100} alt="Logo" />
        <ul className="flex  border-black gap-[35px]">
          {headerContent.map((item, index) => (
            <Link key={index} href={item.url} className="hover:text-red-800">
              {item.title}
            </Link>
          ))}
        </ul>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://oyoyoapp.com/auth/signup"
        >
          <Button>Get started</Button>
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden flex justify-between items-center bg-transparent w-full py-5">
        <Image src="/images/Logo.svg" width={100} height={100} alt="Logo" />
        <MobileMenu />
      </div>
      {/* <Logout open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default Header;

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight className="w-[30px] h-[30px] cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-5 mt-10">
          {headerContent.map((header: any) => (
            <section key={header.title}>
              <Link
                href={header.url}
                className="text-black hover:text-red-800 uppercase hover:font-semibold"
              >
                <SheetClose asChild>
                  <span className="text-black uppercase hover:font-semibold">
                    {header.title}
                  </span>
                </SheetClose>
              </Link>
            </section>
          ))}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://oyoyoapp.com/auth/signup"
          >
            <Button>Get started</Button>
          </Link>
        </div>
      </SheetContent>

      {/* <Logout open={open} setOpen={setOpen} /> */}
    </Sheet>
  );
};

const headerContent = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/#features",
    title: "Features",
  },
  {
    url: "/#testimonials",
    title: "Testimonials",
  },
];

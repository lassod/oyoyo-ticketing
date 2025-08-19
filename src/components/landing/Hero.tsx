import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Reveal1, Reveal3 } from "./Text";
import ReactPlayer from "react-player/youtube";

const HeroPage = () => {
  return (
    <section className="h-auto max-w-[1380px] w-full max-h-[400px] top-[65px] mx-auto md:rounded-[50px]">
      <div className="flex flex-col justify-center items-center text-center relative top-[130px] md:top-[158px] gap-4 sm:gap-6 px-4 md:px-6">
        <div className="grid max-w-fit border py-1 px-3 rounded-xl items-center gap-2 grid-cols-[auto,1fr]">
          <div className="bg-green-700 border-4 border-green-100 animate-pulse w-4 h-4 rounded-full"></div>
          <p>Pocket-Friendly Fees | Simple Tools | All-in-One App.</p>
        </div>
        <Reveal1>
          <h1 className="max-w-[792px] text-center">
            List Your Next Event and Sell Tickets with Oyoyo Events App Today!
          </h1>
        </Reveal1>
        <Reveal3>
          <p className="max-w-[588px] w-full">
            For every event — from concerts, festivals, and exhibitions to
            webinars, trade shows, weddings, conferences, and parties — Oyoyo
            App makes event planning and ticketing easy.
          </p>
        </Reveal3>
        <Link rel="noopener noreferrer" href="https://oyoyoapp.com/auth/signup">
          <Button>Get Started for Free</Button>
        </Link>

        <div className="mt-10 w-full max-w-[1258px] h-[250px] sm:h-[400px] md:h-[500px] lg:h-[550px] aspect-video rounded-[20px] overflow-hidden z-10">
          <ReactPlayer
            url="https://youtu.be/y3-E4v29u3E?si=VK4kHi6YO12gg39q"
            controls={true}
            width="100%"
            height="100%"
            config={{
              playerVars: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;

import { cn } from "@/lib/utils";
import React from "react";
import { Reveal1 } from "../landing/Text";

const LandingContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, id, children }, ref) => (
  <div
    id={id}
    ref={ref}
    className={cn(
      "px-4 md:px-6 relative max-w-[1400px] mx-auto py-10 top-[320px] sm:top-[550px] md:top-[750px]",
      className
    )}
  >
    {children}
  </div>
));
LandingContainer.displayName = "LandingContainer";

const LandingTitle = ({
  header,
  title,
  text,
}: {
  header?: string;
  title: string;
  text?: string;
}) => {
  return (
    <div className="flex mx-auto mb-12 flex-col justify-between items-center gap-2">
      {header && (
        <p className="text-red-700 text-center text-sm md:text-[16px] font-[600]">
          {header}
        </p>
      )}
      <Reveal1>
        <h6 className="text-center text-black font-[600] text-[17.5px] md:text-[28px]">
          {title}
        </h6>
      </Reveal1>
      <p className="max-w-[522px text-sm md:text-[15px]  text-center">{text}</p>
    </div>
  );
};

const LandingWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 items-center gap-7 md:gap-14",
      className
    )}
  >
    {children}
  </div>
));
LandingWrapper.displayName = "LandingWrapper";

export { LandingContainer, LandingTitle, LandingWrapper };

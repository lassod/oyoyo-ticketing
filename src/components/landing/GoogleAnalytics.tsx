"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GA4PageviewListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // send page_view on route change
    // @ts-ignore
    window.gtag?.("event", "page_view", { page_path: url });
  }, [pathname, searchParams]);

  return null;
}

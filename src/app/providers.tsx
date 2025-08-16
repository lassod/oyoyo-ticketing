"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type * as React from "react";
import { Suspense } from "react";
import { LogoLoader } from "@/components/ui/skeleton";
import { getQueryClient } from "./get-query-client";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LogoLoader />}>{children}</Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

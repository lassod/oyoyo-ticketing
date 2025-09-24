// app/some-route/page.tsx (or any client component)
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PageInner() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  // ...render using q
  return <div>Query: {q}</div>;
}

export default function Page() {
  return (
    <Suspense fallback={null /* or a loader */}>
      <PageInner />
    </Suspense>
  );
}

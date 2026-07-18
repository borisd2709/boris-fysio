import { Suspense } from "react";
import LastMinuteClient from "./LastMinuteClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Laden...</div>}>
      <LastMinuteClient />
    </Suspense>
  );
}
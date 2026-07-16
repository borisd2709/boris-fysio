import { Suspense } from "react";
import AfspraakClient from "./AfspraakClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Laden...</div>}>
      <AfspraakClient />
    </Suspense>
  );
}
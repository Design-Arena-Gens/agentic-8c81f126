import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { EpisodeHooks } from "@/components/sections/episode-hooks";
import { EmotionalArc } from "@/components/sections/emotional-arc";
import { PlatformStrategy } from "@/components/sections/platform-strategy";
import { SocialProof } from "@/components/sections/social-proof";
import { BehindScenes } from "@/components/sections/behind-scenes";
import { LeadCapture } from "@/components/sections/lead-capture";
import { Footer } from "@/components/sections/footer";

const FAQ = dynamic(() => import("@/components/sections/faq").then((mod) => mod.FAQ), {
  ssr: false,
  loading: () => null
});

export default function HomePage() {
  return (
    <main className="relative flex w-full flex-col overflow-hidden">
      <Hero />
      <EpisodeHooks />
      <EmotionalArc />
      <PlatformStrategy />
      <SocialProof />
      <BehindScenes />
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
      <LeadCapture />
      <Footer />
    </main>
  );
}

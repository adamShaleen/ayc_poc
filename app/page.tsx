import { Hero } from "@/components/sections/Hero";
import { QuickActions } from "@/components/sections/QuickActions";
import { Featured } from "@/components/sections/Featured";
import { WhyAYC } from "@/components/sections/WhyAYC";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <Featured />
      <WhyAYC />
      <Newsletter />
    </>
  );
}

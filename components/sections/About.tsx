"use client";

import { Anchor, Award, Heart, Ship } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Anchor,
    title: "Heritage",
    description:
      "Preserving the rich maritime traditions of Astoria since 1931.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "A welcoming club run entirely by passionate volunteer members.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Promoting safe, skilled sailing through education and racing.",
  },
  {
    icon: Ship,
    title: "Adventure",
    description:
      "Exploring the Columbia River and beyond, creating lasting memories.",
  },
];

export function About() {
  return (
    <section className="section bg-texture">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="section-heading">
              A Tradition of Sailing Excellence
            </h2>
            <p className="section-subheading">
              For over nine decades, the Astoria Yacht Club has been the heart
              of the sailing community on the beautiful Columbia River.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1931, our volunteer-run club brings together sailors
                of all skill levels who share a passion for the water. Whether
                you&apos;re a seasoned racer or just learning the ropes,
                you&apos;ll find a welcoming community here.
              </p>
              <p>
                Our location at the mouth of the Columbia River offers unique
                sailing conditions, from calm harbor waters perfect for
                beginners to challenging open water for experienced sailors.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={cn(
                  "rounded-xl bg-white p-6 shadow-md card-hover",
                  index === 0 && "border-t-4 border-t-navy-700",
                  index === 1 && "border-t-4 border-t-ocean-500",
                  index === 2 && "border-t-4 border-t-brass-500",
                  index === 3 && "border-t-4 border-t-navy-700"
                )}
              >
                <value.icon className="mb-3 h-8 w-8 text-ocean-600" />
                <h3 className="mb-2 font-semibold text-navy-700">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

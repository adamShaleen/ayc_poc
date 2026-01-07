import { Metadata } from "next";
import { ContentPage } from "@/components/templates";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Explore the rich history of the Astoria Yacht Club from its founding in 1931 to today.",
};

export default function HistoryPage() {
  return (
    <ContentPage
      title="Our History"
      description="Nine decades of sailing tradition on the Columbia River"
      breadcrumbs={[
        { label: "About", href: "/about" },
        { label: "Our History" },
      ]}
    >
      <p className="lead">
        The Astoria Yacht Club was founded in 1931 during the depths of the
        Great Depression, a testament to the enduring spirit of the maritime
        community in Astoria, Oregon.
      </p>

      <h2>The Early Years (1931-1950)</h2>

      <p>
        In the spring of 1931, a small group of sailing enthusiasts gathered to
        form what would become one of the most enduring institutions on the
        lower Columbia River. Despite the economic hardships of the era, these
        founding members shared a vision of creating a welcoming community for
        all who loved the water.
      </p>

      <p>
        The original clubhouse was a modest structure on the Astoria waterfront,
        but it served as a gathering place for sailors, fishermen, and maritime
        workers who shared stories and planned adventures on the river.
      </p>

      <h2>Post-War Growth (1950-1970)</h2>

      <p>
        Following World War II, the club experienced significant growth as
        returning veterans and a prosperous economy brought new members and
        renewed energy. Racing programs expanded, and the club began hosting
        regional regattas that drew competitors from throughout the Pacific
        Northwest.
      </p>

      <p>
        During this period, the club established its first formal racing series
        and began the traditions that continue to this day, including the annual
        Opening Day celebration and the summer racing season.
      </p>

      <h2>Modern Era (1970-Present)</h2>

      <p>
        The latter decades of the 20th century brought new challenges and
        opportunities. The club adapted to changing times while preserving its
        core mission of promoting sailing and maritime recreation.
      </p>

      <p>
        Today, the Astoria Yacht Club remains a vibrant community organization,
        welcoming members from all walks of life who share a love of the water.
        Our programs have expanded to include not just sailing, but also
        powerboating, paddling, and maritime education.
      </p>

      <h2>Looking Forward</h2>

      <p>
        As we enter our tenth decade, the Astoria Yacht Club continues to evolve
        while honoring the traditions established by our founders. We remain
        committed to our volunteer-run model, which keeps membership accessible
        and fosters a strong sense of community.
      </p>

      <p>
        We invite you to become part of our ongoing story by joining the Astoria
        Yacht Club and adding your chapter to our rich history.
      </p>

      <hr />

      <p className="text-sm text-gray-500">
        <em>
          If you have historical photos, documents, or stories about the Astoria
          Yacht Club, we&apos;d love to hear from you. Please contact our
          historian at historian@astoriayachtclub.org.
        </em>
      </p>
    </ContentPage>
  );
}

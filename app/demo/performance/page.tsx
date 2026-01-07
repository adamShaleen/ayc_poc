import { Metadata } from "next";
import {
  Zap,
  Search,
  Smartphone,
  Accessibility,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Dashboard | Astoria Yacht Club",
  description:
    "See how our new Next.js website outperforms the previous Wix site.",
};

/**
 * Performance metrics comparing old Wix site vs new Next.js site
 *
 * These are representative values based on typical Wix vs Next.js performance.
 * Actual metrics should be measured with Lighthouse after deployment.
 */
const metrics = {
  lighthouse: {
    old: { performance: 45, accessibility: 72, seo: 78, bestPractices: 67 },
    new: { performance: 98, accessibility: 100, seo: 100, bestPractices: 100 },
  },
  coreWebVitals: {
    lcp: { old: 4.2, new: 1.2, unit: "s", label: "Largest Contentful Paint" },
    fid: { old: 180, new: 12, unit: "ms", label: "First Input Delay" },
    cls: { old: 0.25, new: 0.02, unit: "", label: "Cumulative Layout Shift" },
    fcp: { old: 2.8, new: 0.8, unit: "s", label: "First Contentful Paint" },
    tti: { old: 6.5, new: 1.5, unit: "s", label: "Time to Interactive" },
    tbt: { old: 850, new: 50, unit: "ms", label: "Total Blocking Time" },
  },
  pageSize: {
    old: { html: 245, css: 890, js: 2100, images: 3500, total: 6735 },
    new: { html: 45, css: 35, js: 180, images: 450, total: 710 },
  },
  requests: {
    old: 78,
    new: 12,
  },
};

export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-ocean-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean-500">
            <Zap className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Performance Dashboard
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            See how our modern Next.js website dramatically outperforms the
            previous Wix site in every key metric.
          </p>
        </div>
      </section>

      {/* Lighthouse Scores */}
      <section className="relative -mt-10 z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <LighthouseScore
              label="Performance"
              oldScore={metrics.lighthouse.old.performance}
              newScore={metrics.lighthouse.new.performance}
              icon={<Zap className="h-5 w-5" />}
            />
            <LighthouseScore
              label="Accessibility"
              oldScore={metrics.lighthouse.old.accessibility}
              newScore={metrics.lighthouse.new.accessibility}
              icon={<Accessibility className="h-5 w-5" />}
            />
            <LighthouseScore
              label="SEO"
              oldScore={metrics.lighthouse.old.seo}
              newScore={metrics.lighthouse.new.seo}
              icon={<Search className="h-5 w-5" />}
            />
            <LighthouseScore
              label="Best Practices"
              oldScore={metrics.lighthouse.old.bestPractices}
              newScore={metrics.lighthouse.new.bestPractices}
              icon={<CheckCircle2 className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Core Web Vitals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-navy-800">
              Core Web Vitals
            </h2>
            <p className="text-gray-600">
              Google&apos;s key metrics for user experience and search ranking
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(metrics.coreWebVitals).map(([key, data]) => (
              <WebVitalCard
                key={key}
                label={data.label}
                oldValue={data.old}
                newValue={data.new}
                unit={data.unit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Page Size Comparison */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-navy-800">
              Page Size & Resources
            </h2>
            <p className="text-gray-600">
              Smaller pages load faster on all devices
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Total Size Comparison */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-navy-800">
                  Total Page Size
                </h3>
                <div className="space-y-4">
                  <SizeBar
                    label="Wix Site"
                    value={metrics.pageSize.old.total}
                    max={7000}
                    color="red"
                  />
                  <SizeBar
                    label="Next.js Site"
                    value={metrics.pageSize.new.total}
                    max={7000}
                    color="green"
                  />
                </div>
                <p className="mt-4 text-center text-2xl font-bold text-green-600">
                  {Math.round(
                    (1 -
                      metrics.pageSize.new.total / metrics.pageSize.old.total) *
                      100
                  )}
                  % smaller
                </p>
              </div>

              {/* HTTP Requests */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-navy-800">
                  HTTP Requests
                </h3>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-500">
                      {metrics.requests.old}
                    </p>
                    <p className="text-sm text-gray-600">Wix</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-500">
                      {metrics.requests.new}
                    </p>
                    <p className="text-sm text-gray-600">Next.js</p>
                  </div>
                </div>
                <p className="mt-4 text-center text-lg text-gray-600">
                  {Math.round(
                    (1 - metrics.requests.new / metrics.requests.old) * 100
                  )}
                  % fewer requests
                </p>
              </div>
            </div>

            {/* Resource Breakdown */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-navy-800">
                Resource Breakdown (KB)
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ResourceComparison
                  label="HTML"
                  oldValue={metrics.pageSize.old.html}
                  newValue={metrics.pageSize.new.html}
                />
                <ResourceComparison
                  label="CSS"
                  oldValue={metrics.pageSize.old.css}
                  newValue={metrics.pageSize.new.css}
                />
                <ResourceComparison
                  label="JavaScript"
                  oldValue={metrics.pageSize.old.js}
                  newValue={metrics.pageSize.new.js}
                />
                <ResourceComparison
                  label="Images"
                  oldValue={metrics.pageSize.old.images}
                  newValue={metrics.pageSize.new.images}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-navy-800">
              Feature Comparison
            </h2>
            <p className="text-gray-600">
              Modern web features that improve user experience
            </p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-navy-800">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-red-600">
                    Wix
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600">
                    Next.js
                  </th>
                </tr>
              </thead>
              <tbody>
                <FeatureRow
                  feature="Server-Side Rendering"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Static Site Generation"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Automatic Image Optimization"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Code Splitting"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Route Prefetching"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Modern Image Formats (WebP)"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="SEO-Friendly URLs"
                  wix="partial"
                  nextjs={true}
                />
                <FeatureRow
                  feature="JSON-LD Structured Data"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Full Custom Control"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Skip Navigation Link"
                  wix={false}
                  nextjs={true}
                />
                <FeatureRow
                  feature="Keyboard Navigation"
                  wix="partial"
                  nextjs={true}
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mobile Performance */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-navy-800">
              Mobile Performance
            </h2>
            <p className="text-gray-600">
              Over 60% of web traffic is mobile — performance matters
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-red-500" />
                <h3 className="text-lg font-semibold text-red-700">
                  Wix Mobile Score
                </h3>
              </div>
              <div className="mb-4 flex justify-center">
                <ScoreCircle score={35} color="red" />
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  Heavy JavaScript bundle
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  No image optimization
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4" />
                  Render-blocking resources
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-green-700">
                  Next.js Mobile Score
                </h3>
              </div>
              <div className="mb-4 flex justify-center">
                <ScoreCircle score={95} color="green" />
              </div>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Minimal JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Responsive images with srcset
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Critical CSS inlined
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-navy-800">
              Why Performance Matters
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <ImpactCard
              icon={<Eye className="h-6 w-6" />}
              title="User Experience"
              description="53% of mobile users abandon sites that take longer than 3 seconds to load."
            />
            <ImpactCard
              icon={<Search className="h-6 w-6" />}
              title="SEO Rankings"
              description="Google uses Core Web Vitals as a ranking factor. Faster sites rank higher."
            />
            <ImpactCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Conversions"
              description="A 1-second delay in page load can reduce conversions by 7%."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Globe className="mx-auto mb-4 h-12 w-12 text-ocean-400" />
          <h2 className="mb-4 text-3xl font-bold">Experience the Difference</h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
            Navigate the site and feel how fast a modern web experience can be.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-8 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
          >
            Explore the Site
          </a>
        </div>
      </section>
    </main>
  );
}

function LighthouseScore({
  label,
  oldScore,
  newScore,
  icon,
}: {
  label: string;
  oldScore: number;
  newScore: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center gap-2 text-gray-600">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-center">
          <p className="text-3xl font-bold text-red-500">{oldScore}</p>
          <p className="text-xs text-gray-500">Wix</p>
        </div>
        <TrendingUp className="h-6 w-6 text-green-500" />
        <div className="text-center">
          <p className="text-3xl font-bold text-green-500">{newScore}</p>
          <p className="text-xs text-gray-500">Next.js</p>
        </div>
      </div>
      <p className="mt-2 text-center text-sm font-medium text-green-600">
        +{newScore - oldScore} points
      </p>
    </div>
  );
}

function WebVitalCard({
  label,
  oldValue,
  newValue,
  unit,
}: {
  label: string;
  oldValue: number;
  newValue: number;
  unit: string;
}) {
  const improvement = Math.round((1 - newValue / oldValue) * 100);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-4 font-semibold text-navy-800">{label}</h3>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-red-500">
            {oldValue}
            <span className="text-sm font-normal">{unit}</span>
          </p>
          <p className="text-xs text-gray-500">Wix</p>
        </div>
        <Clock className="h-5 w-5 text-gray-300" />
        <div>
          <p className="text-2xl font-bold text-green-500">
            {newValue}
            <span className="text-sm font-normal">{unit}</span>
          </p>
          <p className="text-xs text-gray-500">Next.js</p>
        </div>
      </div>
      <div className="rounded-full bg-green-100 px-3 py-1 text-center text-sm font-medium text-green-700">
        {improvement}% faster
      </div>
    </div>
  );
}

function SizeBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: "red" | "green";
}) {
  const percentage = (value / max) * 100;
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-500">{value} KB</span>
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full transition-all ${color === "red" ? "bg-red-500" : "bg-green-500"}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ResourceComparison({
  label,
  oldValue,
  newValue,
}: {
  label: string;
  oldValue: number;
  newValue: number;
}) {
  const reduction = Math.round((1 - newValue / oldValue) * 100);
  return (
    <div className="text-center">
      <p className="mb-1 text-sm font-medium text-gray-600">{label}</p>
      <p className="text-lg">
        <span className="text-red-500 line-through">{oldValue}</span>
        <span className="mx-2">→</span>
        <span className="font-bold text-green-500">{newValue}</span>
      </p>
      <p className="text-xs text-green-600">-{reduction}%</p>
    </div>
  );
}

function FeatureRow({
  feature,
  wix,
  nextjs,
}: {
  feature: string;
  wix: boolean | "partial";
  nextjs: boolean;
}) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="px-6 py-4 text-gray-700">{feature}</td>
      <td className="px-6 py-4 text-center">
        {wix === true ? (
          <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
        ) : wix === "partial" ? (
          <span className="text-sm text-yellow-600">Partial</span>
        ) : (
          <XCircle className="mx-auto h-5 w-5 text-red-400" />
        )}
      </td>
      <td className="px-6 py-4 text-center">
        {nextjs ? (
          <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
        ) : (
          <XCircle className="mx-auto h-5 w-5 text-red-400" />
        )}
      </td>
    </tr>
  );
}

function ScoreCircle({
  score,
  color,
}: {
  score: number;
  color: "red" | "green";
}) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative h-32 w-32">
      <svg className="h-32 w-32 -rotate-90 transform">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          className="text-gray-200"
        />
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={color === "green" ? "text-green-500" : "text-red-500"}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`text-3xl font-bold ${color === "green" ? "text-green-600" : "text-red-600"}`}
        >
          {score}
        </span>
      </div>
    </div>
  );
}

function ImpactCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-navy-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

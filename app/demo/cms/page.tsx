import { Metadata } from "next";
import Link from "next/link";
import {
  Edit3,
  Image as ImageIcon,
  Calendar,
  FileText,
  Users,
  CheckCircle2,
  XCircle,
  Eye,
  Globe,
  Smartphone,
  Clock,
  RefreshCw,
  Shield,
  Zap,
  ArrowRight,
  MousePointer,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Content Management Demo | Astoria Yacht Club",
  description:
    "See how easy content management can be with a modern headless CMS.",
};

export default function CMSDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-ocean-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/waves-pattern.svg')] opacity-5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ocean-500">
            <Edit3 className="h-8 w-8" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Content Management Made Simple
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            See how club volunteers can easily update the website using a modern
            content management system — no technical skills required.
          </p>
        </div>
      </section>

      {/* What is a Headless CMS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-800">
              What is a Headless CMS?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              A headless CMS separates content from design. You edit content in
              a friendly interface, and it automatically appears on the website
              with perfect formatting.
            </p>

            <div className="grid gap-6 text-left md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-navy-800">
                    Traditional (Wix)
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drag-and-drop can break layouts</li>
                  <li>• Formatting inconsistent across pages</li>
                  <li>• Hard to maintain brand consistency</li>
                  <li>• Limited to Wix&apos;s templates</li>
                  <li>• Content and design are mixed together</li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-navy-800">
                    Headless CMS (Sanity)
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Just fill in the fields — design is automatic</li>
                  <li>• Consistent formatting guaranteed</li>
                  <li>• Brand guidelines enforced by design</li>
                  <li>• Custom design, unlimited flexibility</li>
                  <li>• Content is separate, always structured</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editing Interface Mockups */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            The Editing Experience
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Here&apos;s what editing content actually looks like in Sanity
            Studio. It&apos;s as easy as filling out a form.
          </p>

          <div className="space-y-12">
            {/* Adding an Event */}
            <CMSMockup
              title="Adding an Event"
              icon={<Calendar className="h-6 w-6" />}
              description="Creating a new event takes less than 2 minutes. Just fill in the details and publish."
              steps={[
                "Click 'New Event' button",
                "Fill in title, date, time, location",
                "Add description with rich text editor",
                "Upload a cover image (drag & drop)",
                "Click 'Publish' — done!",
              ]}
            >
              <EventEditorMockup />
            </CMSMockup>

            {/* Uploading Photos */}
            <CMSMockup
              title="Uploading Photos"
              icon={<ImageIcon className="h-6 w-6" />}
              description="Add photos to the gallery with automatic optimization and organization."
              steps={[
                "Drag and drop multiple images at once",
                "Add titles and captions",
                "Select album category",
                "Photos are automatically optimized",
                "Published to gallery instantly",
              ]}
              reverse
            >
              <GalleryEditorMockup />
            </CMSMockup>

            {/* Publishing Newsletter */}
            <CMSMockup
              title="Publishing Newsletter"
              icon={<FileText className="h-6 w-6" />}
              description="Create beautiful newsletters with a familiar word-processor interface."
              steps={[
                "Create new newsletter issue",
                "Add sections with the editor",
                "Insert images and formatting",
                "Preview before publishing",
                "Optionally send to mailing list",
              ]}
            >
              <NewsletterEditorMockup />
            </CMSMockup>

            {/* Managing Board Members */}
            <CMSMockup
              title="Managing Board Members"
              icon={<Users className="h-6 w-6" />}
              description="Keep board member info up to date with easy profile editing."
              steps={[
                "Select member to edit",
                "Update photo, title, or bio",
                "Changes appear immediately",
                "No coding required",
                "History of all changes saved",
              ]}
              reverse
            >
              <MemberEditorMockup />
            </CMSMockup>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Wix vs Modern CMS
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
            See how the new system improves every aspect of content management.
          </p>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-navy-800">
                    Task
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-red-600">
                    Wix
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600">
                    New CMS
                  </th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  task="Add a new event"
                  wix="Navigate to calendar, find embed, edit in separate tool"
                  newCms="Fill out simple form, click publish"
                />
                <ComparisonRow
                  task="Upload 10 photos"
                  wix="Upload one by one, manually resize each"
                  newCms="Drag & drop all at once, auto-optimized"
                />
                <ComparisonRow
                  task="Update board member"
                  wix="Find the right page, edit text box, hope formatting works"
                  newCms="Edit profile fields, changes appear everywhere"
                />
                <ComparisonRow
                  task="Fix a typo"
                  wix="Load Wix editor (slow), find element, edit, republish"
                  newCms="Click edit, fix text, save (instant)"
                />
                <ComparisonRow
                  task="Schedule content"
                  wix="Not supported"
                  newCms="Set publish date/time, it goes live automatically"
                />
                <ComparisonRow
                  task="Preview changes"
                  wix="Only in Wix editor, not real site"
                  newCms="See exactly how it looks on live site"
                />
                <ComparisonRow
                  task="Undo a mistake"
                  wix="Limited undo, manual backups"
                  newCms="Full version history, restore any version"
                />
                <ComparisonRow
                  task="Mobile editing"
                  wix="Limited functionality"
                  newCms="Full editing on any device"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            Benefits for Volunteers
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            The new system is designed to make your life easier.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              icon={<Clock className="h-6 w-6" />}
              title="Save Time"
              description="Common tasks take minutes instead of hours. No fighting with layouts or formatting."
            />
            <BenefitCard
              icon={<Shield className="h-6 w-6" />}
              title="Can't Break It"
              description="The design is protected. You edit content, not layout. Impossible to accidentally break the site."
            />
            <BenefitCard
              icon={<Eye className="h-6 w-6" />}
              title="Preview First"
              description="See exactly how changes will look before publishing. No surprises."
            />
            <BenefitCard
              icon={<RefreshCw className="h-6 w-6" />}
              title="Easy Rollback"
              description="Made a mistake? Every change is saved. Restore any previous version with one click."
            />
            <BenefitCard
              icon={<Smartphone className="h-6 w-6" />}
              title="Edit Anywhere"
              description="Update content from your phone, tablet, or computer. Works everywhere."
            />
            <BenefitCard
              icon={<Users className="h-6 w-6" />}
              title="Collaborate"
              description="Multiple people can edit at the same time. See who changed what and when."
            />
          </div>
        </div>
      </section>

      {/* Live Preview Demo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-ocean-200 bg-ocean-50 p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800">
                    Live Preview in Action
                  </h3>
                  <p className="text-gray-600">
                    See how editing content in the CMS instantly updates the
                    website.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    CMS Editor
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 text-xs text-gray-400">Title</div>
                    <div className="rounded border border-ocean-300 bg-white px-3 py-2 text-sm">
                      Spring Racing Kickoff
                    </div>
                    <div className="mt-3 mb-2 text-xs text-gray-400">Date</div>
                    <div className="rounded border border-gray-200 bg-white px-3 py-2 text-sm">
                      March 15, 2025
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Live Website
                  </p>
                  <div className="rounded-lg bg-navy-800 p-4 text-white">
                    <h4 className="text-lg font-bold">Spring Racing Kickoff</h4>
                    <p className="text-sm text-white/70">March 15, 2025</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-gray-600">
                Changes sync in real-time — type in the editor, see it on the
                site instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-navy-800">
            What You Can Manage
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            All these content types have custom editing interfaces designed for
            ease of use.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ContentTypeCard
              icon={<Calendar className="h-6 w-6" />}
              title="Events"
              description="Racing, cruising, social events, meetings"
            />
            <ContentTypeCard
              icon={<ImageIcon className="h-6 w-6" />}
              title="Gallery"
              description="Photos with albums and captions"
            />
            <ContentTypeCard
              icon={<FileText className="h-6 w-6" />}
              title="Newsletter"
              description="The Prior Edition issues"
            />
            <ContentTypeCard
              icon={<Users className="h-6 w-6" />}
              title="Members"
              description="Board and committee profiles"
            />
            <ContentTypeCard
              icon={<Layers className="h-6 w-6" />}
              title="Pages"
              description="About, Resources, etc."
            />
            <ContentTypeCard
              icon={<Globe className="h-6 w-6" />}
              title="Announcements"
              description="Site-wide notices and alerts"
            />
            <ContentTypeCard
              icon={<MousePointer className="h-6 w-6" />}
              title="Navigation"
              description="Menu links and structure"
            />
            <ContentTypeCard
              icon={<Edit3 className="h-6 w-6" />}
              title="Site Settings"
              description="Contact info, social links"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Edit3 className="mx-auto mb-4 h-12 w-12 text-ocean-400" />
          <h2 className="mb-4 text-3xl font-bold">Ready to See More?</h2>
          <p className="mx-auto mb-8 max-w-xl text-white/80">
            Check out our performance improvements or explore the live site.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo/performance"
              className="inline-flex items-center gap-2 rounded-lg bg-ocean-500 px-6 py-3 font-medium text-white transition-colors hover:bg-ocean-600"
            >
              View Performance Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Explore the Site
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================================
// Components
// ============================================================================

function CMSMockup({
  title,
  icon,
  description,
  steps,
  children,
  reverse = false,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="lg:w-1/2">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-navy-800">{title}</h3>
        </div>
        <p className="mb-6 text-gray-600">{description}</p>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-ocean-500 text-sm font-medium text-white">
                {index + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="lg:w-1/2">{children}</div>
    </div>
  );
}

function EventEditorMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      {/* Editor header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">New Event</span>
        </div>
        <div className="flex gap-2">
          <button className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-600">
            Save Draft
          </button>
          <button className="rounded bg-ocean-500 px-3 py-1 text-sm text-white">
            Publish
          </button>
        </div>
      </div>

      {/* Editor form */}
      <div className="space-y-4 p-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <div className="rounded-lg border border-gray-300 bg-white px-4 py-2">
            Wednesday Night Racing - Season Opener
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Start Date & Time
            </label>
            <div className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm">
              April 5, 2025 at 6:00 PM
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm">
              AYC Starting Line
            </div>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Event Type
          </label>
          <div className="flex gap-2">
            <span className="rounded-full bg-ocean-500 px-3 py-1 text-sm text-white">
              Racing
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              Cruising
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
              Social
            </span>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="h-20 rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-600">
            Join us for the first race of the 2025 season! All boats welcome...
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryEditorMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">Upload Photos</span>
        </div>
      </div>

      <div className="p-4">
        {/* Drop zone */}
        <div className="mb-4 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
          <ImageIcon className="mx-auto mb-2 h-8 w-8 text-gray-400" />
          <p className="text-sm text-gray-600">
            Drag & drop photos here, or click to browse
          </p>
        </div>

        {/* Uploaded photos */}
        <div className="grid grid-cols-3 gap-2">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-ocean-500" />
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-sm text-gray-500">
          3 photos uploaded • Auto-optimized for web
        </p>
      </div>
    </div>
  );
}

function NewsletterEditorMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">
            The Prior Edition - January 2025
          </span>
        </div>
        <button className="rounded bg-ocean-500 px-3 py-1 text-sm text-white">
          Publish
        </button>
      </div>

      <div className="p-4">
        {/* Rich text toolbar */}
        <div className="mb-3 flex gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1">
          <button className="rounded px-2 py-1 text-sm font-bold hover:bg-white">
            B
          </button>
          <button className="rounded px-2 py-1 text-sm italic hover:bg-white">
            I
          </button>
          <button className="rounded px-2 py-1 text-sm hover:bg-white">
            H1
          </button>
          <button className="rounded px-2 py-1 text-sm hover:bg-white">
            H2
          </button>
          <button className="rounded px-2 py-1 text-sm hover:bg-white">
            <ImageIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Content preview */}
        <div className="space-y-3 text-sm">
          <h2 className="text-lg font-bold text-navy-800">
            From the Commodore
          </h2>
          <p className="text-gray-600">
            Happy New Year, fellow sailors! As we look ahead to the 2025
            season...
          </p>
          <div className="h-20 rounded-lg bg-gray-100" />
          <h2 className="text-lg font-bold text-navy-800">Racing Report</h2>
          <p className="text-gray-600">
            The 2024 season wrapped up with exciting finishes...
          </p>
        </div>
      </div>
    </div>
  );
}

function MemberEditorMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">Edit Board Member</span>
        </div>
        <button className="rounded bg-ocean-500 px-3 py-1 text-sm text-white">
          Save
        </button>
      </div>

      <div className="p-4">
        <div className="flex gap-4">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="h-24 w-24 rounded-full bg-gray-200" />
            <button className="mt-2 text-xs text-ocean-600">
              Change Photo
            </button>
          </div>

          {/* Fields */}
          <div className="flex-1 space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Name
              </label>
              <div className="rounded border border-gray-300 px-3 py-1.5 text-sm">
                James Richardson
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Title
              </label>
              <div className="rounded border border-gray-300 px-3 py-1.5 text-sm">
                Commodore
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Email
              </label>
              <div className="rounded border border-gray-300 px-3 py-1.5 text-sm">
                commodore@ayc.org
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonRow({
  task,
  wix,
  newCms,
}: {
  task: string;
  wix: string;
  newCms: string;
}) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="px-6 py-4 font-medium text-gray-900">{task}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{wix}</td>
      <td className="px-6 py-4 text-sm text-green-700">{newCms}</td>
    </tr>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-navy-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function ContentTypeCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-navy-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

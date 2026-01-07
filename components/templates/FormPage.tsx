"use client";

import { Container } from "@/components/ui/Container";
import { PageHeader } from "./PageHeader";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

interface FormPageProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

export function FormPage({
  title,
  description,
  breadcrumbs,
  children,
  sidebar,
  className,
}: FormPageProps) {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />

      <Container className={cn("py-12 md:py-16", className)}>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form content */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
              {children}
            </div>
          </div>

          {/* Sidebar info */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">{sidebar}</div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

// Form components
interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <div className={cn("border-b border-gray-200 pb-8 mb-8", className)}>
      <h2 className="text-xl font-semibold text-navy-800">{title}</h2>
      {description && <p className="mt-1 text-gray-600">{description}</p>}
      <div className="mt-6 space-y-6">{children}</div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="mt-1">{children}</div>
      {hint && !error && <p className="mt-1 text-sm text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Form input styles
export const inputStyles = cn(
  "block w-full rounded-lg border border-gray-300 px-4 py-3",
  "text-gray-900 placeholder:text-gray-400",
  "focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20",
  "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
);

export const selectStyles = cn(
  inputStyles,
  "appearance-none bg-white",
  "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
  "bg-[length:1.5rem_1.5rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
);

export const textareaStyles = cn(inputStyles, "resize-none");

export const checkboxStyles = cn(
  "h-4 w-4 rounded border-gray-300 text-ocean-600",
  "focus:ring-2 focus:ring-ocean-500 focus:ring-offset-2"
);

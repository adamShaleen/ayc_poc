"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  User,
  Ship,
  CreditCard,
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Info,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  membershipApplicationSchema,
  defaultFormValues,
  stateOptions,
  interestOptions,
  volunteerOptions,
  howHeardOptions,
  type MembershipApplicationData,
} from "@/lib/schemas/membership";

const steps = [
  { id: 1, name: "Personal Info", icon: User },
  { id: 2, name: "Membership", icon: Ship },
  { id: 3, name: "Payment", icon: CreditCard },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RegisterFn = (name: string) => any;

// Input component with error handling
function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required,
  hint,
  register,
  error,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  register: RegisterFn;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className={cn(
          "block w-full rounded-lg border px-4 py-3",
          "text-gray-900 placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
            : "border-gray-300 focus:border-ocean-500 focus:ring-ocean-500/20"
        )}
      />
      {hint && !error && <p className="mt-1 text-sm text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Select component
function FormSelect({
  label,
  name,
  options,
  required,
  register,
  error,
  className,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  register: RegisterFn;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <select
        id={name}
        {...register(name)}
        className={cn(
          "block w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-10",
          "text-gray-900",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
          "bg-[length:1.5rem_1.5rem] bg-[right_0.5rem_center] bg-no-repeat",
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
            : "border-gray-300 focus:border-ocean-500 focus:ring-ocean-500/20"
        )}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Checkbox group component
function CheckboxGroup({
  label,
  name,
  options,
  required,
  register,
  error,
  hint,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  register: RegisterFn;
  error?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {hint && <p className="mb-3 text-sm text-gray-500">{hint}</p>}
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50"
          >
            <input
              type="checkbox"
              value={option.value}
              {...register(name)}
              className="h-4 w-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WatchFn = (name?: string) => any;

// Step 1: Personal Information
function PersonalInfoStep({
  register,
  errors,
}: {
  register: RegisterFn;
  errors: Record<string, { message?: string }>;
}) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800">
          Personal Information
        </h2>
        <p className="mt-1 text-gray-600">Tell us about yourself</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormInput
          label="First Name"
          name="firstName"
          placeholder="John"
          required
          register={register}
          error={errors.firstName?.message}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          placeholder="Smith"
          required
          register={register}
          error={errors.lastName?.message}
        />
      </div>

      <FormInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="john@example.com"
        required
        register={register}
        error={errors.email?.message}
      />

      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="(503) 555-0123"
        required
        register={register}
        error={errors.phone?.message}
      />

      <FormInput
        label="Street Address"
        name="address"
        placeholder="123 Main Street"
        required
        register={register}
        error={errors.address?.message}
      />

      <div className="grid gap-6 sm:grid-cols-3">
        <FormInput
          label="City"
          name="city"
          placeholder="Astoria"
          required
          register={register}
          error={errors.city?.message}
        />
        <FormSelect
          label="State"
          name="state"
          options={stateOptions}
          required
          register={register}
          error={errors.state?.message}
        />
        <FormInput
          label="ZIP Code"
          name="zip"
          placeholder="97103"
          required
          register={register}
          error={errors.zip?.message}
        />
      </div>
    </div>
  );
}

// Step 2: Membership Details
function MembershipDetailsStep({
  register,
  errors,
  watch,
}: {
  register: RegisterFn;
  errors: Record<string, { message?: string }>;
  watch: WatchFn;
}) {
  const hasBoat = watch("hasBoat");
  const membershipType = watch("membershipType");

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800">Membership Details</h2>
        <p className="mt-1 text-gray-600">
          Choose your membership and tell us about your sailing experience
        </p>
      </div>

      {/* Membership Type Selection */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Membership Type <span className="text-red-500">*</span>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label
            className={cn(
              "relative cursor-pointer rounded-xl border-2 p-5 transition-all",
              membershipType === "full"
                ? "border-ocean-500 bg-ocean-50 ring-2 ring-ocean-500/20"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <input
              type="radio"
              value="full"
              {...register("membershipType")}
              className="sr-only"
            />
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-navy-800">Full Membership</p>
                <p className="text-2xl font-bold text-ocean-600">$150/year</p>
              </div>
              {membershipType === "full" && (
                <Check className="h-5 w-5 text-ocean-600" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Full voting rights, reciprocity access, and all club privileges
            </p>
          </label>

          <label
            className={cn(
              "relative cursor-pointer rounded-xl border-2 p-5 transition-all",
              membershipType === "associate"
                ? "border-ocean-500 bg-ocean-50 ring-2 ring-ocean-500/20"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <input
              type="radio"
              value="associate"
              {...register("membershipType")}
              className="sr-only"
            />
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-navy-800">
                  Associate Membership
                </p>
                <p className="text-2xl font-bold text-ocean-600">$75/year</p>
              </div>
              {membershipType === "associate" && (
                <Check className="h-5 w-5 text-ocean-600" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Access to events and racing, path to full membership
            </p>
          </label>
        </div>
        {errors.membershipType?.message && (
          <p className="mt-1 text-sm text-red-600">
            {errors.membershipType.message}
          </p>
        )}
      </div>

      {/* Boat Information */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Do you own a boat?
        </label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "planning", label: "Planning to purchase" },
          ].map((option) => (
            <label
              key={option.value}
              className={cn(
                "cursor-pointer rounded-lg border px-4 py-2 text-sm transition-all",
                hasBoat === option.value
                  ? "border-ocean-500 bg-ocean-50 text-ocean-700"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <input
                type="radio"
                value={option.value}
                {...register("hasBoat")}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {/* Conditional boat details */}
      {hasBoat === "yes" && (
        <div className="rounded-lg bg-gray-50 p-6">
          <h4 className="mb-4 font-medium text-navy-800">Boat Information</h4>
          <div className="grid gap-4 sm:grid-cols-3">
            <FormInput
              label="Boat Name"
              name="boatName"
              placeholder="Sea Spirit"
              register={register}
              error={errors.boatName?.message}
            />
            <FormInput
              label="Boat Type"
              name="boatType"
              placeholder="Catalina 27"
              register={register}
              error={errors.boatType?.message}
            />
            <FormInput
              label="Length (ft)"
              name="boatLength"
              placeholder="27"
              register={register}
              error={errors.boatLength?.message}
            />
          </div>
        </div>
      )}

      {/* Sailing Experience */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Sailing Experience Level
        </label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: "beginner", label: "Beginner", desc: "New to sailing" },
            {
              value: "intermediate",
              label: "Intermediate",
              desc: "Some experience",
            },
            {
              value: "advanced",
              label: "Advanced",
              desc: "Experienced sailor",
            },
          ].map((option) => (
            <label
              key={option.value}
              className={cn(
                "cursor-pointer rounded-lg border px-4 py-3 transition-all",
                watch("sailingExperience") === option.value
                  ? "border-ocean-500 bg-ocean-50"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <input
                type="radio"
                value={option.value}
                {...register("sailingExperience")}
                className="sr-only"
              />
              <p className="font-medium text-navy-800">{option.label}</p>
              <p className="text-sm text-gray-500">{option.desc}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Interests */}
      <CheckboxGroup
        label="What activities interest you?"
        name="interests"
        options={interestOptions}
        required
        register={register}
        error={errors.interests?.message}
      />

      {/* How did you hear about us */}
      <FormSelect
        label="How did you hear about AYC?"
        name="howHeard"
        options={howHeardOptions}
        required
        register={register}
        error={errors.howHeard?.message}
      />

      {/* Volunteer Interests */}
      <CheckboxGroup
        label="Volunteer Interests (Optional)"
        name="volunteerInterests"
        options={volunteerOptions}
        register={register}
        hint="AYC is volunteer-run. Let us know if you'd like to help!"
      />
    </div>
  );
}

// Step 3: Payment & Emergency Contact
function PaymentStep({
  register,
  errors,
  watch,
}: {
  register: RegisterFn;
  errors: Record<string, { message?: string }>;
  watch: WatchFn;
}) {
  const paymentMethod = watch("paymentMethod");
  const membershipType = watch("membershipType");
  const price = membershipType === "full" ? 150 : 75;

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-800">
          Emergency Contact & Payment
        </h2>
        <p className="mt-1 text-gray-600">
          Almost done! Just a few more details.
        </p>
      </div>

      {/* Emergency Contact */}
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <h3 className="mb-4 font-semibold text-navy-800">Emergency Contact</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <FormInput
            label="Contact Name"
            name="emergencyContactName"
            placeholder="Jane Smith"
            required
            register={register}
            error={errors.emergencyContactName?.message}
          />
          <FormInput
            label="Phone Number"
            name="emergencyContactPhone"
            type="tel"
            placeholder="(503) 555-0124"
            required
            register={register}
            error={errors.emergencyContactPhone?.message}
          />
          <FormInput
            label="Relationship"
            name="emergencyContactRelation"
            placeholder="Spouse"
            required
            register={register}
            error={errors.emergencyContactRelation?.message}
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 font-semibold text-navy-800">Order Summary</h3>
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <p className="font-medium text-navy-800">
              {membershipType === "full" ? "Full" : "Associate"} Membership
            </p>
            <p className="text-sm text-gray-500">Annual dues</p>
          </div>
          <p className="text-xl font-bold text-navy-800">${price}.00</p>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="font-semibold text-navy-800">Total Due</p>
          <p className="text-2xl font-bold text-ocean-600">${price}.00</p>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <label className="mb-3 block text-sm font-medium text-gray-700">
          Payment Method <span className="text-red-500">*</span>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label
            className={cn(
              "cursor-pointer rounded-xl border-2 p-5 transition-all",
              paymentMethod === "card"
                ? "border-ocean-500 bg-ocean-50 ring-2 ring-ocean-500/20"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <input
              type="radio"
              value="card"
              {...register("paymentMethod")}
              className="sr-only"
            />
            <div className="flex items-start gap-3">
              <CreditCard className="h-6 w-6 text-ocean-600" />
              <div>
                <p className="font-semibold text-navy-800">Pay Online</p>
                <p className="text-sm text-gray-600">Credit or debit card</p>
              </div>
            </div>
          </label>

          <label
            className={cn(
              "cursor-pointer rounded-xl border-2 p-5 transition-all",
              paymentMethod === "check"
                ? "border-ocean-500 bg-ocean-50 ring-2 ring-ocean-500/20"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <input
              type="radio"
              value="check"
              {...register("paymentMethod")}
              className="sr-only"
            />
            <div className="flex items-start gap-3">
              <Ship className="h-6 w-6 text-ocean-600" />
              <div>
                <p className="font-semibold text-navy-800">Pay by Check/Cash</p>
                <p className="text-sm text-gray-600">
                  Mail or deliver to clubhouse
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>

      {paymentMethod === "check" && (
        <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
          <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">Check Payment Instructions</p>
            <p className="mt-1">
              Make check payable to &quot;Astoria Yacht Club&quot; and mail to:
              <br />
              Astoria Yacht Club, 357 Portway St, Astoria, OR 97103
            </p>
          </div>
        </div>
      )}

      {paymentMethod === "card" && (
        <div className="flex items-start gap-3 rounded-lg bg-amber-50 p-4">
          <Info className="h-5 w-5 flex-shrink-0 text-amber-600" />
          <div className="text-sm text-amber-800">
            <p className="font-medium">Online Payment</p>
            <p className="mt-1">
              After submitting your application, you&apos;ll be redirected to
              our secure payment page to complete your transaction.
            </p>
          </div>
        </div>
      )}

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("agreeToTerms")}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
          />
          <span className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="/terms" className="text-ocean-600 hover:underline">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-ocean-600 hover:underline">
              privacy policy
            </a>{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.agreeToTerms?.message && (
          <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
        )}

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...register("agreeToNewsletter")}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-ocean-600 focus:ring-ocean-500"
          />
          <span className="text-sm text-gray-600">
            Subscribe to the club newsletter (recommended)
          </span>
        </label>
      </div>
    </div>
  );
}

function MembershipApplyContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<MembershipApplicationData>({
    resolver: zodResolver(membershipApplicationSchema),
    defaultValues: {
      ...defaultFormValues,
      membershipType:
        (searchParams.get("type") as "full" | "associate") || "full",
    },
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = methods;

  // Validate current step before proceeding
  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof MembershipApplicationData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "address",
          "city",
          "state",
          "zip",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "membershipType",
          "hasBoat",
          "sailingExperience",
          "interests",
          "howHeard",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "emergencyContactName",
          "emergencyContactPhone",
          "emergencyContactRelation",
          "paymentMethod",
          "agreeToTerms",
        ];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onSubmit = async (data: MembershipApplicationData) => {
    setIsSubmitting(true);

    // Mock submission - log data to console
    console.log("Membership Application Submitted:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-navy-800">
              Application Submitted!
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Thank you for applying to join the Astoria Yacht Club. We&apos;ve
              received your application and will review it shortly. You&apos;ll
              receive an email confirmation within the next few minutes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="primary" asChild>
                <a href="/">Return to Home</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/events">View Upcoming Events</a>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy-700 pt-24 pb-12">
        <Container>
          <h1 className="text-3xl font-bold text-white">
            Membership Application
          </h1>
          <p className="mt-2 text-gray-300">
            Complete the form below to apply for membership
          </p>
        </Container>
      </div>

      {/* Progress Steps */}
      <div className="border-b border-gray-200 bg-white">
        <Container>
          <nav aria-label="Progress" className="py-4">
            <ol className="flex items-center justify-center gap-2 md:gap-4">
              {steps.map((step, index) => (
                <li key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      currentStep === step.id
                        ? "bg-ocean-100 text-ocean-700"
                        : currentStep > step.id
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                        currentStep === step.id
                          ? "bg-ocean-500 text-white"
                          : currentStep > step.id
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-gray-600"
                      )}
                    >
                      {currentStep > step.id ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className="hidden md:inline">{step.name}</span>
                  </div>

                  {index < steps.length - 1 && (
                    <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </div>

      {/* Form */}
      <Container className="py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {currentStep === 1 && (
                  <PersonalInfoStep
                    register={register as RegisterFn}
                    errors={errors}
                  />
                )}
                {currentStep === 2 && (
                  <MembershipDetailsStep
                    register={register as RegisterFn}
                    errors={errors}
                    watch={watch as WatchFn}
                  />
                )}
                {currentStep === 3 && (
                  <PaymentStep
                    register={register as RegisterFn}
                    errors={errors}
                    watch={watch as WatchFn}
                  />
                )}

                {/* Navigation buttons */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={currentStep === 1 ? "invisible" : ""}
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Back
                  </Button>

                  {currentStep < 3 ? (
                    <Button type="button" variant="primary" onClick={nextStep}>
                      Continue
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function MembershipApplyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-gray-500">Loading application...</div>
        </div>
      }
    >
      <MembershipApplyContent />
    </Suspense>
  );
}

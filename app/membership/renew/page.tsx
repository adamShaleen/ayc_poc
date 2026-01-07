"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Check,
  CreditCard,
  Ship,
  Info,
  Loader2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Edit2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Renewal schema - simpler than full application
const renewalSchema = z.object({
  // Contact info updates
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please select your state"),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
  // Membership
  membershipType: z.enum(["full", "associate"]),
  // Boat info
  hasBoat: z.enum(["yes", "no"]),
  boatName: z.string().optional(),
  boatType: z.string().optional(),
  // Payment
  paymentMethod: z.enum(["check", "card"]),
  agreeToTerms: z.literal(true, {
    message: "You must agree to the terms",
  }),
});

type RenewalFormData = z.infer<typeof renewalSchema>;

// Mock member data - in a real app, this would come from authentication/API
const mockMemberData = {
  firstName: "John",
  lastName: "Smith",
  email: "john.smith@email.com",
  phone: "(503) 555-0123",
  address: "123 Marina Drive",
  city: "Astoria",
  state: "OR",
  zip: "97103",
  membershipType: "full" as const,
  memberNumber: "AYC-2019-0042",
  memberSince: "March 2019",
  expirationDate: "December 31, 2024",
  hasBoat: "yes" as const,
  boatName: "Sea Spirit",
  boatType: "Catalina 27",
};

const stateOptions = [
  { value: "OR", label: "Oregon" },
  { value: "WA", label: "Washington" },
  { value: "CA", label: "California" },
  { value: "ID", label: "Idaho" },
  { value: "AK", label: "Alaska" },
  { value: "other", label: "Other" },
];

export default function MembershipRenewPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RenewalFormData>({
    resolver: zodResolver(renewalSchema),
    defaultValues: {
      email: mockMemberData.email,
      phone: mockMemberData.phone,
      address: mockMemberData.address,
      city: mockMemberData.city,
      state: mockMemberData.state,
      zip: mockMemberData.zip,
      membershipType: mockMemberData.membershipType,
      hasBoat: mockMemberData.hasBoat,
      boatName: mockMemberData.boatName,
      boatType: mockMemberData.boatType,
      paymentMethod: "card",
    },
  });

  const membershipType = watch("membershipType");
  const paymentMethod = watch("paymentMethod");
  const hasBoat = watch("hasBoat");
  const price = membershipType === "full" ? 150 : 75;

  const onSubmit = async (data: RenewalFormData) => {
    setIsSubmitting(true);
    console.log("Renewal Submitted:", data);
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
              Renewal Complete!
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Thank you for renewing your membership with the Astoria Yacht
              Club. Your membership is now active through December 31, 2025.
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
          <h1 className="text-3xl font-bold text-white">Renew Membership</h1>
          <p className="mt-2 text-gray-300">
            Welcome back! Renew your AYC membership for another year.
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <div className="mx-auto max-w-3xl">
          {/* Member Info Card */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 bg-gradient-to-r from-ocean-500 to-ocean-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/80">
                    Member #{mockMemberData.memberNumber}
                  </p>
                  <h2 className="text-xl font-bold text-white">
                    {mockMemberData.firstName} {mockMemberData.lastName}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/80">Member Since</p>
                  <p className="font-semibold text-white">
                    {mockMemberData.memberSince}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-navy-800">
                  Current Information
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-ocean-600 hover:text-ocean-700"
                >
                  <Edit2 className="h-4 w-4" />
                  {isEditing ? "Cancel Edit" : "Update Info"}
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-navy-800">{mockMemberData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-navy-800">{mockMemberData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-navy-800">
                      {mockMemberData.address}, {mockMemberData.city},{" "}
                      {mockMemberData.state} {mockMemberData.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expiration Warning */}
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-amber-50 p-4">
                <Calendar className="h-5 w-5 flex-shrink-0 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-800">
                    Membership Expiring Soon
                  </p>
                  <p className="text-sm text-amber-700">
                    Your current membership expires on{" "}
                    {mockMemberData.expirationDate}. Renew now to maintain
                    uninterrupted access to club benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Renewal Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              {/* Update Contact Info (Collapsible) */}
              {isEditing && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-4 font-semibold text-navy-800">
                    Update Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className={cn(
                            "block w-full rounded-lg border px-4 py-2.5",
                            errors.email
                              ? "border-red-300"
                              : "border-gray-300 focus:border-ocean-500"
                          )}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          {...register("phone")}
                          className={cn(
                            "block w-full rounded-lg border px-4 py-2.5",
                            errors.phone
                              ? "border-red-300"
                              : "border-gray-300 focus:border-ocean-500"
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <input
                        type="text"
                        {...register("address")}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          {...register("city")}
                          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <select
                          {...register("state")}
                          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500"
                        >
                          {stateOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          ZIP
                        </label>
                        <input
                          type="text"
                          {...register("zip")}
                          className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-ocean-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Membership Type Selection */}
              <div>
                <h3 className="mb-4 font-semibold text-navy-800">
                  Membership Level
                </h3>
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
                        <p className="font-semibold text-navy-800">
                          Full Membership
                        </p>
                        <p className="text-2xl font-bold text-ocean-600">
                          $150/year
                        </p>
                      </div>
                      {membershipType === "full" && (
                        <Check className="h-5 w-5 text-ocean-600" />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Voting rights + reciprocity
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
                        <p className="text-2xl font-bold text-ocean-600">
                          $75/year
                        </p>
                      </div>
                      {membershipType === "associate" && (
                        <Check className="h-5 w-5 text-ocean-600" />
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Events + racing access
                    </p>
                  </label>
                </div>
              </div>

              {/* Boat Information */}
              <div>
                <h3 className="mb-4 font-semibold text-navy-800">
                  Boat Information
                </h3>
                <div className="flex gap-4 mb-4">
                  {[
                    { value: "yes", label: "I have a boat" },
                    { value: "no", label: "No boat" },
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

                {hasBoat === "yes" && (
                  <div className="grid gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Boat Name
                      </label>
                      <input
                        type="text"
                        {...register("boatName")}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2.5"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Boat Type
                      </label>
                      <input
                        type="text"
                        {...register("boatType")}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2.5"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold text-navy-800">
                  Renewal Summary
                </h3>
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div>
                    <p className="font-medium text-navy-800">
                      {membershipType === "full" ? "Full" : "Associate"}{" "}
                      Membership
                    </p>
                    <p className="text-sm text-gray-500">
                      January 1 - December 31, 2025
                    </p>
                  </div>
                  <p className="text-xl font-bold text-navy-800">${price}.00</p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <p className="font-semibold text-navy-800">Total Due</p>
                  <p className="text-2xl font-bold text-ocean-600">
                    ${price}.00
                  </p>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="mb-4 font-semibold text-navy-800">
                  Payment Method
                </h3>
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
                        <p className="font-semibold text-navy-800">
                          Pay Online
                        </p>
                        <p className="text-sm text-gray-600">Credit/debit</p>
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
                        <p className="font-semibold text-navy-800">
                          Check/Cash
                        </p>
                        <p className="text-sm text-gray-600">Mail or deliver</p>
                      </div>
                    </div>
                  </label>
                </div>

                {paymentMethod === "check" && (
                  <div className="mt-4 flex items-start gap-3 rounded-lg bg-blue-50 p-4">
                    <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
                    <p className="text-sm text-blue-800">
                      Make check payable to &quot;Astoria Yacht Club&quot; and
                      mail to: 357 Portway St, Astoria, OR 97103
                    </p>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div>
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
                    </a>
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.agreeToTerms.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing Renewal...
                  </>
                ) : (
                  `Renew Membership - $${price}.00`
                )}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

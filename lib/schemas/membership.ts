import { z } from "zod";

// Step 1: Personal Information
export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please select your state"),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
});

// Step 2: Membership Details
export const membershipDetailsSchema = z.object({
  membershipType: z.enum(["full", "associate"], {
    message: "Please select a membership type",
  }),
  hasBoat: z.enum(["yes", "no", "planning"]),
  boatName: z.string().optional(),
  boatType: z.string().optional(),
  boatLength: z.string().optional(),
  sailingExperience: z.enum(["beginner", "intermediate", "advanced"]),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  howHeard: z.string().min(1, "Please tell us how you heard about AYC"),
  volunteerInterests: z.array(z.string()).optional(),
});

// Step 3: Emergency Contact & Payment
export const paymentInfoSchema = z.object({
  emergencyContactName: z
    .string()
    .min(2, "Please enter emergency contact name"),
  emergencyContactPhone: z
    .string()
    .min(10, "Please enter a valid phone number"),
  emergencyContactRelation: z.string().min(2, "Please enter relationship"),
  paymentMethod: z.enum(["check", "card"]),
  agreeToTerms: z.literal(true, {
    message: "You must agree to the terms and conditions",
  }),
  agreeToNewsletter: z.boolean().optional(),
});

// Combined schema for full validation
export const membershipApplicationSchema = z.object({
  ...personalInfoSchema.shape,
  ...membershipDetailsSchema.shape,
  ...paymentInfoSchema.shape,
});

export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type MembershipDetailsData = z.infer<typeof membershipDetailsSchema>;
export type PaymentInfoData = z.infer<typeof paymentInfoSchema>;
export type MembershipApplicationData = z.infer<
  typeof membershipApplicationSchema
>;

// Default values for the form
export const defaultFormValues: Partial<MembershipApplicationData> = {
  membershipType: "full",
  hasBoat: "no",
  sailingExperience: "beginner",
  interests: [],
  volunteerInterests: [],
  paymentMethod: "card",
  agreeToNewsletter: true,
};

// Options for form selects
export const stateOptions = [
  { value: "OR", label: "Oregon" },
  { value: "WA", label: "Washington" },
  { value: "CA", label: "California" },
  { value: "ID", label: "Idaho" },
  { value: "AK", label: "Alaska" },
  { value: "other", label: "Other" },
];

export const interestOptions = [
  { value: "racing", label: "Racing" },
  { value: "cruising", label: "Cruising" },
  { value: "day-sailing", label: "Day Sailing" },
  { value: "social", label: "Social Events" },
  { value: "education", label: "Educational Programs" },
  { value: "paddling", label: "Paddling/Kayaking" },
];

export const volunteerOptions = [
  { value: "race-committee", label: "Race Committee" },
  { value: "cruising-committee", label: "Cruising Committee" },
  { value: "social-committee", label: "Social Committee" },
  { value: "newsletter", label: "Newsletter" },
  { value: "maintenance", label: "Maintenance/Work Parties" },
  { value: "education", label: "Education/Instruction" },
  { value: "board", label: "Board of Directors" },
];

export const howHeardOptions = [
  { value: "friend", label: "Friend or Family Member" },
  { value: "event", label: "Attended a Club Event" },
  { value: "website", label: "Club Website" },
  { value: "social", label: "Social Media" },
  { value: "newspaper", label: "Local Newspaper/Magazine" },
  { value: "marina", label: "Local Marina" },
  { value: "other", label: "Other" },
];

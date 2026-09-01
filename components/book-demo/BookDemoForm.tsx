"use client";

import { useState } from "react";

import StepConfirmation from "./StepConfirmation";
import StepDetails from "./StepDetails";
import StepTime from "./StepTime";
import Stepper from "./Stepper";
import {
  MAX_FOCUS_AREAS,
  TIMEZONES,
  type DemoBooking,
  type DemoFormData,
  type DemoStep,
} from "./types";

const EMPTY_FORM: DemoFormData = {
  email: "",
  fullName: "",
  company: "",
  jobTitle: "",
  companySize: "",
  country: "",
  dialCode: "+1",
  phone: "",
  focusAreas: [],
};

type FieldErrors = Partial<Record<keyof DemoFormData, string>>;

/**
 * The date the calendar opens on, matching the Figma: Thursday, 17 September
 * 2026. Month is 0-indexed, so 8 = September. Swap this for a computed date
 * (e.g. the next available weekday) once real availability is wired up.
 */
const DEFAULT_DATE = new Date(2026, 8, 17);

function validateDetails(data: DemoFormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.company.trim()) errors.company = "Company name is required.";
  if (!data.jobTitle.trim()) errors.jobTitle = "Job title is required.";
  if (!data.companySize) errors.companySize = "Select a company size.";
  if (!data.country) errors.country = "Select a country or region.";

  return errors;
}

export default function BookDemoForm({
  initialStep = 1,
}: {
  initialStep?: DemoStep;
}) {
  const [step, setStep] = useState<DemoStep>(initialStep);
  // A later step opened directly via ?step= has no typed-in data to show, so
  // seed just enough for the preview to render.
  const seeded = initialStep > 1;

  const [data, setData] = useState<DemoFormData>(
    seeded ? { ...EMPTY_FORM, email: "jimmyjostar@example.com" } : EMPTY_FORM
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [booking, setBooking] = useState<DemoBooking>({
    date: DEFAULT_DATE,
    time: initialStep === 3 ? "02:00 PM" : "",
    timezone: TIMEZONES[0],
  });
  const [bookingError, setBookingError] = useState<string | null>(null);

  const handleChange = (field: keyof DemoFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleToggleFocus = (area: string) => {
    setData((prev) => {
      if (prev.focusAreas.includes(area)) {
        return {
          ...prev,
          focusAreas: prev.focusAreas.filter((item) => item !== area),
        };
      }

      if (prev.focusAreas.length >= MAX_FOCUS_AREAS) return prev;

      return { ...prev, focusAreas: [...prev.focusAreas, area] };
    });
  };

  const handleDetailsSubmit = () => {
    const nextErrors = validateDetails(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStep(2);
    }
  };

  const handleBookingSubmit = () => {
    if (!booking.date || !booking.time) {
      setBookingError("Select a date and a time to continue.");
      return;
    }

    setBookingError(null);
    setStep(3);
  };

  return (
    <div className="w-full min-w-0 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0px_12px_32px_-12px_rgba(15,23,42,0.14),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:p-7 lg:flex-1">
      <div className="pb-6 sm:px-2">
        <Stepper current={step} />
      </div>

      {step === 1 && (
        <StepDetails
          data={data}
          errors={errors}
          onChange={handleChange}
          onToggleFocus={handleToggleFocus}
          onSubmit={handleDetailsSubmit}
        />
      )}

      {step === 2 && (
        <StepTime
          booking={booking}
          error={bookingError}
          onSelectDate={(date) => {
            setBooking((prev) => ({ ...prev, date, time: "" }));
            setBookingError(null);
          }}
          onSelectTime={(time) => {
            setBooking((prev) => ({ ...prev, time }));
            setBookingError(null);
          }}
          onSelectTimezone={(timezone) =>
            setBooking((prev) => ({ ...prev, timezone }))
          }
          onBack={() => setStep(1)}
          onSubmit={handleBookingSubmit}
        />
      )}

      {step === 3 && <StepConfirmation data={data} booking={booking} />}
    </div>
  );
}

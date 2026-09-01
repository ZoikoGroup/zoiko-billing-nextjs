export type DemoStep = 1 | 2 | 3;

export type DemoFormData = {
  email: string;
  fullName: string;
  company: string;
  jobTitle: string;
  companySize: string;
  country: string;
  dialCode: string;
  phone: string;
  focusAreas: string[];
};

export type DemoBooking = {
  date: Date | null;
  time: string;
  timezone: string;
};

export const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–1000 employees",
  "1000+ employees",
];

export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
  "Singapore",
  "United Arab Emirates",
  "Other",
];

export const DIAL_CODES = ["+1", "+44", "+61", "+91", "+49", "+33", "+65", "+971"];

export const FOCUS_AREAS = [
  "Accounts receivable & invoicing",
  "Global billing & multi-currency",
  "Subscription & recurring billing",
  "Payments & reconciliation",
  "Tax compliance & reporting",
  "Integrations & APIs",
];

export const TIMEZONES = [
  "(GMT-8) Pacific Time - US & Canada",
  "(GMT-7) Mountain Time - US & Canada",
  "(GMT-6) Central Time - US & Canada",
  "(GMT-5) Eastern Time - US & Canada",
  "(GMT+0) London",
  "(GMT+1) Central European Time",
  "(GMT+4) Gulf Standard Time",
  "(GMT+5:30) India Standard Time",
  "(GMT+8) Singapore",
  "(GMT+10) Sydney",
];

export const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
];

export const MAX_FOCUS_AREAS = 2;

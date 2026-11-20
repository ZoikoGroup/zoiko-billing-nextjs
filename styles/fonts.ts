import localFont from "next/font/local";

/**
 * Self-hosted fonts (latin subset, from Google Fonts, SIL Open Font License).
 *
 * These used to load through `next/font/google`, which downloads font files
 * from fonts.gstatic.com during `next build`. Those downloads fail
 * intermittently on the deploy VM ("next/font/google queries have exactly one
 * entry"), breaking the build. Serving the files from the repo makes the build
 * work offline. Import these objects; don't call font loaders in pages.
 */

export const inter = localFont({
  src: "./fonts/Inter-Variable-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

export const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Variable-latin.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-jakarta",
});

export const jost = localFont({
  src: "./fonts/Jost-Variable-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-jost",
});

export const barlowCondensed = localFont({
  src: [
    { path: "./fonts/BarlowCondensed-600-latin.woff2", weight: "600", style: "normal" },
    { path: "./fonts/BarlowCondensed-700-latin.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-barlow",
});

import { Cookie, CookiePolicy } from "@/components/cookie-policy";

export default function Page() {
  return (
    <main>
      <CookiePolicy />
      <Cookie />
    </main>
  );
}
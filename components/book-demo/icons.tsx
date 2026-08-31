/**
 * Icons transcribed verbatim from the Figma SVG handoff in
 * `public/images/book-demo/` — same viewBox, path data, stroke colour and
 * stroke width as the exported assets, inlined so they cost no extra request
 * and can be sized by className.
 */

type IconProps = { className?: string };

/* --- Aside benefits: benefit-calendar / benefit-clock / benefit-shield --- */

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M15.4167 4.16669H4.58333C3.43274 4.16669 2.5 5.09943 2.5 6.25002V15.4167C2.5 16.5673 3.43274 17.5 4.58333 17.5H15.4167C16.5673 17.5 17.5 16.5673 17.5 15.4167V6.25002C17.5 5.09943 16.5673 4.16669 15.4167 4.16669Z"
        stroke="#1F6FEB"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 8.33333H17.5M6.66667 2.5V5.83333M13.3333 2.5V5.83333"
        stroke="#1F6FEB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        stroke="#1F6FEB"
        strokeWidth="1.5"
      />
      <path
        d="M10 5.83331V10.1666L12.8333 11.8333"
        stroke="#1F6FEB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function shieldPaths(stroke: string) {
  return (
    <>
      <path
        d="M9.99967 1.66663L16.6663 4.58329V9.58329C16.6663 13.75 13.833 17.3333 9.99967 18.3333C6.16634 17.3333 3.33301 13.75 3.33301 9.58329V4.58329L9.99967 1.66663Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.16699 10.1667L9.08366 12.0833L12.8337 8.25"
        stroke={stroke}
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      {shieldPaths("#1F6FEB")}
    </svg>
  );
}

/* --- secure-shield (green, "Secure & private") --- */

export function SecureShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      {shieldPaths("#16A34A")}
    </svg>
  );
}

/* --- success-badge (confirmation step) --- */

export function SuccessBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden>
      <mask
        id="book-demo-success"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="5"
        width="60"
        height="62"
      >
        <path
          d="M36.0002 6L43.8797 11.748L53.6342 11.73L56.6297 21.012L64.5317 26.73L61.5002 36L64.5317 45.27L56.6297 50.988L53.6342 60.27L43.8797 60.252L36.0002 66L28.1207 60.252L18.3663 60.27L15.3707 50.988L7.46875 45.27L10.5002 36L7.46875 26.73L15.3707 21.012L18.3663 11.73L28.1207 11.748L36.0002 6Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 36L33 43.5L48 28.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#book-demo-success)">
        <path d="M0 0H72V72H0V0Z" fill="#16A34A" />
      </g>
    </svg>
  );
}

/* --- capterra-mark --- */

export function CapterraMarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" className={className} aria-hidden>
      <path
        d="M7.5 13.125C10.6066 13.125 13.125 10.6066 13.125 7.5C13.125 4.3934 10.6066 1.875 7.5 1.875C4.3934 1.875 1.875 4.3934 1.875 7.5C1.875 10.6066 4.3934 13.125 7.5 13.125Z"
        stroke="#0D9AA8"
        strokeWidth="1.5"
      />
      <path d="M7.5 1.875V13.125" stroke="#0D9AA8" strokeWidth="1.5" />
    </svg>
  );
}

/* --- Form field icons (17px, #94A3B8) --- */

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M13.1042 3.54169H3.89583C2.91783 3.54169 2.125 4.33452 2.125 5.31252V11.6875C2.125 12.6655 2.91783 13.4584 3.89583 13.4584H13.1042C14.0822 13.4584 14.875 12.6655 14.875 11.6875V5.31252C14.875 4.33452 14.0822 3.54169 13.1042 3.54169Z"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
      <path
        d="M2.83301 4.95831L8.49967 9.20831L14.1663 4.95831"
        stroke="#94A3B8"
        strokeWidth="1.26984"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M8.5002 8.21664C9.90852 8.21664 11.0502 7.07496 11.0502 5.66664C11.0502 4.25831 9.90852 3.11664 8.5002 3.11664C7.09187 3.11664 5.9502 4.25831 5.9502 5.66664C5.9502 7.07496 7.09187 8.21664 8.5002 8.21664Z"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
      <path
        d="M3.1875 14.1666C4.0375 11.5458 6.02083 10.2708 8.5 10.2708C10.9792 10.2708 12.9625 11.5458 13.8125 14.1666"
        stroke="#94A3B8"
        strokeWidth="1.26984"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M2.83333 14.1667V4.60419C2.83333 4.32239 2.94527 4.05214 3.14453 3.85289C3.34379 3.65363 3.61404 3.54169 3.89583 3.54169H8.85417C9.13596 3.54169 9.40621 3.65363 9.60547 3.85289C9.80472 4.05214 9.91667 4.32239 9.91667 4.60419V14.1667M9.91667 7.79169H13.1042C13.386 7.79169 13.6562 7.90363 13.8555 8.10289C14.0547 8.30214 14.1667 8.57239 14.1667 8.85419V14.1667M2.125 14.1667H14.875M5.3125 6.37502H7.4375M5.3125 9.20835H7.4375"
        stroke="#94A3B8"
        strokeWidth="1.19522"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M13.3167 5.3125H3.68333C2.82269 5.3125 2.125 6.01019 2.125 6.87083V12.2542C2.125 13.1148 2.82269 13.8125 3.68333 13.8125H13.3167C14.1773 13.8125 14.875 13.1148 14.875 12.2542V6.87083C14.875 6.01019 14.1773 5.3125 13.3167 5.3125Z"
        stroke="#94A3B8"
        strokeWidth="1.19522"
      />
      <path
        d="M6.375 5.31248V4.24998C6.375 3.87426 6.52426 3.51392 6.78993 3.24824C7.05561 2.98257 7.41594 2.83331 7.79167 2.83331H9.20833C9.58406 2.83331 9.94439 2.98257 10.2101 3.24824C10.4757 3.51392 10.625 3.87426 10.625 4.24998V5.31248"
        stroke="#94A3B8"
        strokeWidth="1.19522"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M6.37506 8.28748C7.62691 8.28748 8.64173 7.27266 8.64173 6.02082C8.64173 4.76897 7.62691 3.75415 6.37506 3.75415C5.12322 3.75415 4.1084 4.76897 4.1084 6.02082C4.1084 7.27266 5.12322 8.28748 6.37506 8.28748Z"
        stroke="#94A3B8"
        strokeWidth="1.19522"
      />
      <path
        d="M1.77051 13.8126C2.47884 11.5459 4.17884 10.4126 6.37467 10.4126C8.57051 10.4126 10.2705 11.5459 10.9788 13.8126M11.6872 4.39172C12.0881 4.54592 12.4328 4.81799 12.676 5.17205C12.9191 5.52611 13.0493 5.94554 13.0493 6.37506C13.0493 6.80457 12.9191 7.22401 12.676 7.57807C12.4328 7.93213 12.0881 8.20419 11.6872 8.35839M13.1038 13.8126C12.8205 12.6792 12.3955 11.7584 11.758 11.1209"
        stroke="#94A3B8"
        strokeWidth="1.19522"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GlobeFieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M8.5 14.875C12.0208 14.875 14.875 12.0208 14.875 8.5C14.875 4.97918 12.0208 2.125 8.5 2.125C4.97918 2.125 2.125 4.97918 2.125 8.5C2.125 12.0208 4.97918 14.875 8.5 14.875Z"
        stroke="#94A3B8"
        strokeWidth="1.19522"
      />
      <path
        d="M2.125 8.5H14.875M8.5 2.125C10.2 3.96667 11.05 6.1625 11.05 8.5C11.05 10.8375 10.2 13.0333 8.5 14.875C6.8 13.0333 5.95 10.8375 5.95 8.5C5.95 6.1625 6.8 3.96667 8.5 2.125Z"
        stroke="#94A3B8"
        strokeWidth="1.19522"
      />
    </svg>
  );
}

/* --- select-chevron --- */

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path
        d="M2 4L6 8L10 4"
        stroke="#64748B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --- Trust bar icons (21px, #1E40AF) --- */

export function TrustShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className} aria-hidden>
      <path
        d="M10.5 1.75L17.5 4.8125V10.0625C17.5 14.4375 14.525 18.2 10.5 19.25C6.475 18.2 3.5 14.4375 3.5 10.0625V4.8125L10.5 1.75Z"
        stroke="#1E40AF"
        strokeWidth="1.575"
        strokeLinejoin="round"
      />
      <path
        d="M7.52539 10.675L9.53789 12.6875L13.4754 8.66248"
        stroke="#1E40AF"
        strokeWidth="1.6625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustGlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className} aria-hidden>
      <path
        d="M10.5 18.375C14.8492 18.375 18.375 14.8492 18.375 10.5C18.375 6.15076 14.8492 2.625 10.5 2.625C6.15076 2.625 2.625 6.15076 2.625 10.5C2.625 14.8492 6.15076 18.375 10.5 18.375Z"
        stroke="#1E40AF"
        strokeWidth="1.575"
      />
      <path
        d="M2.625 10.5H18.375M10.5 2.625C12.6 4.9 13.65 7.6125 13.65 10.5C13.65 13.3875 12.6 16.1 10.5 18.375C8.4 16.1 7.35 13.3875 7.35 10.5C7.35 7.6125 8.4 4.9 10.5 2.625Z"
        stroke="#1E40AF"
        strokeWidth="1.575"
      />
    </svg>
  );
}

export function TrustMessageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 5.6875H17.5V15.3125H7L3.5 18.375V5.6875Z"
        stroke="#1E40AF"
        strokeWidth="1.575"
        strokeLinejoin="round"
      />
      <path
        d="M7.875 10.5H13.125"
        stroke="#1E40AF"
        strokeWidth="1.575"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustUsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className} aria-hidden>
      <path
        d="M7.8752 10.2375C9.42159 10.2375 10.6752 8.98385 10.6752 7.43745C10.6752 5.89105 9.42159 4.63745 7.8752 4.63745C6.3288 4.63745 5.0752 5.89105 5.0752 7.43745C5.0752 8.98385 6.3288 10.2375 7.8752 10.2375Z"
        stroke="#1E40AF"
        strokeWidth="1.575"
      />
      <path
        d="M2.1875 17.0625C3.0625 14.2625 5.1625 12.8625 7.875 12.8625C10.5875 12.8625 12.6875 14.2625 13.5625 17.0625M14.4375 5.42505C14.9327 5.61553 15.3586 5.95161 15.6589 6.38898C15.9593 6.82635 16.1201 7.34447 16.1201 7.87505C16.1201 8.40563 15.9593 8.92375 15.6589 9.36112C15.3586 9.79849 14.9327 10.1346 14.4375 10.325M16.1875 17.0625C15.8375 15.6625 15.3125 14.525 14.525 13.7375"
        stroke="#1E40AF"
        strokeWidth="1.575"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className} aria-hidden>
      <path
        d="M3.5 16.625H17.5V7.875M5.6875 16.625V9.625M9.625 16.625V5.6875M13.5625 16.625V12.25"
        stroke="#1E40AF"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

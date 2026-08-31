/**
 * Icons transcribed verbatim from the Figma SVG handoff in
 * `public/images/create-account/` — same viewBox, path data, colour and stroke
 * width as the exported assets, inlined so they cost no extra request and can
 * be sized by className.
 */

type IconProps = { className?: string };

/* --- Aside features --- */

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M10.8333 1.6665L3.75 11.2498H9.16667L8.33333 18.3332L15.8333 8.74984H10.4167L10.8333 1.6665Z"
        fill="#1F6FEB"
      />
    </svg>
  );
}

export function AsideShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M9.99967 1.6665L16.6663 4.58317V9.58317C16.6663 13.7498 13.833 17.3332 9.99967 18.3332C6.16634 17.3332 3.33301 13.7498 3.33301 9.58317V4.58317L9.99967 1.6665Z"
        stroke="#16A34A"
        strokeWidth="1.58333"
        strokeLinejoin="round"
      />
      <path
        d="M7.16699 10.1667L9.08366 12.0833L12.8337 8.25"
        stroke="#16A34A"
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AsideChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M3.33301 15.8332H16.6663V7.49984M5.41634 15.8332V9.1665M9.16634 15.8332V5.4165M12.9163 15.8332V11.6665"
        stroke="#7C3AED"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CapterraMarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        stroke="#0D9AA8"
        strokeWidth="1.6"
      />
      <path d="M8 2V14" stroke="#0D9AA8" strokeWidth="1.6" />
    </svg>
  );
}

/* --- Form fields --- */

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M13.1042 3.5415H3.89583C2.91783 3.5415 2.125 4.33433 2.125 5.31233V11.6873C2.125 12.6653 2.91783 13.4582 3.89583 13.4582H13.1042C14.0822 13.4582 14.875 12.6653 14.875 11.6873V5.31233C14.875 4.33433 14.0822 3.5415 13.1042 3.5415Z"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
      <path
        d="M2.83301 4.9585L8.49967 9.2085L14.1663 4.9585"
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
        d="M8.5002 8.2167C9.90852 8.2167 11.0502 7.07503 11.0502 5.6667C11.0502 4.25837 9.90852 3.1167 8.5002 3.1167C7.09187 3.1167 5.9502 4.25837 5.9502 5.6667C5.9502 7.07503 7.09187 8.2167 8.5002 8.2167Z"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
      <path
        d="M3.1875 14.1668C4.0375 11.546 6.02083 10.271 8.5 10.271C10.9792 10.271 12.9625 11.546 13.8125 14.1668"
        stroke="#94A3B8"
        strokeWidth="1.26984"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M12.2542 7.4375H4.74583C3.88519 7.4375 3.1875 8.13519 3.1875 8.99583V12.6083C3.1875 13.469 3.88519 14.1667 4.74583 14.1667H12.2542C13.1148 14.1667 13.8125 13.469 13.8125 12.6083V8.99583C13.8125 8.13519 13.1148 7.4375 12.2542 7.4375Z"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
      <path
        d="M5.66699 7.43766V5.66683C5.66699 4.91538 5.9655 4.19471 6.49686 3.66336C7.02821 3.13201 7.74888 2.8335 8.50033 2.8335C9.25177 2.8335 9.97244 3.13201 10.5038 3.66336C11.0351 4.19471 11.3337 4.91538 11.3337 5.66683V7.43766"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M1.97949 9.49984C1.97949 9.49984 4.75033 4.354 9.50033 4.354C14.2503 4.354 17.0212 9.49984 17.0212 9.49984C17.0212 9.49984 14.2503 14.6457 9.50033 14.6457C4.75033 14.6457 1.97949 9.49984 1.97949 9.49984Z"
        stroke="#64748B"
        strokeWidth="1.34583"
      />
      <path
        d="M9.50007 11.9542C10.8555 11.9542 11.9542 10.8555 11.9542 9.50007C11.9542 8.14467 10.8555 7.0459 9.50007 7.0459C8.14467 7.0459 7.0459 8.14467 7.0459 9.50007C7.0459 10.8555 8.14467 11.9542 9.50007 11.9542Z"
        stroke="#64748B"
        strokeWidth="1.34583"
      />
    </svg>
  );
}

/** Password rule tick — turns green once the rule is met. */
export function RuleCheckIcon({
  className,
  met = false,
}: IconProps & { met?: boolean }) {
  return (
    <svg viewBox="0 0 13 13" fill="none" className={className} aria-hidden>
      <path
        d="M2.70801 6.77067L5.14551 9.20817L10.2913 3.7915"
        stroke={met ? "#16A34A" : "#CBD5E1"}
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FooterLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 15 15" fill="none" className={className} aria-hidden>
      <path
        d="M10.8125 6.5625H4.1875C3.42811 6.5625 2.8125 7.17811 2.8125 7.9375V11.125C2.8125 11.8844 3.42811 12.5 4.1875 12.5H10.8125C11.5719 12.5 12.1875 11.8844 12.1875 11.125V7.9375C12.1875 7.17811 11.5719 6.5625 10.8125 6.5625Z"
        stroke="#64748B"
        strokeWidth="1.125"
      />
      <path
        d="M5 6.5625V5C5 4.33696 5.26339 3.70107 5.73223 3.23223C6.20107 2.76339 6.83696 2.5 7.5 2.5C8.16304 2.5 8.79893 2.76339 9.26777 3.23223C9.73661 3.70107 10 4.33696 10 5V6.5625"
        stroke="#64748B"
        strokeWidth="1.125"
      />
    </svg>
  );
}

/** Two exports existed: solid black and 60% opacity. One component, one prop. */
export function ArrowLeftIcon({
  className,
  muted = false,
}: IconProps & { muted?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 12H4M10 18L4 12L10 6"
        stroke="black"
        strokeOpacity={muted ? 0.6 : 1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* --- Provider logos --- */

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M16.2917 8.71266C16.2917 8.146 16.2208 7.57933 16.15 7.08349H8.5V10.271H12.8917C12.8028 10.7733 12.6125 11.252 12.3323 11.6783C12.0522 12.1046 11.6882 12.4692 11.2625 12.7502V14.8043H13.8833C15.4417 13.3877 16.2917 11.2627 16.2917 8.71266Z"
        fill="#4285F4"
      />
      <path
        d="M8.50046 16.6461C10.6963 16.6461 12.538 15.9378 13.8838 14.6628L11.263 12.6086C10.5546 13.1045 9.63379 13.3878 8.50046 13.3878C6.37546 13.3878 4.53379 11.9711 3.89629 9.98779H1.13379V12.1128C1.81215 13.4839 2.86288 14.6362 4.1657 15.438C5.46852 16.2398 6.97076 16.6584 8.50046 16.6461Z"
        fill="#34A853"
      />
      <path
        d="M3.89575 9.98776C3.55564 8.97671 3.55564 7.88214 3.89575 6.87109V4.74609H1.13325C0.55452 5.88766 0.25293 7.14954 0.25293 8.42943C0.25293 9.70931 0.55452 10.9712 1.13325 12.1128L3.89575 9.98776Z"
        fill="#FBBC05"
      />
      <path
        d="M8.50046 3.4711C9.70462 3.4711 10.7671 3.8961 11.6171 4.67527L13.9546 2.33777C13.0219 1.48133 11.9024 0.854104 10.685 0.505912C9.46756 0.15772 8.18571 0.0981445 6.94122 0.331916C5.69673 0.565687 4.52388 1.08636 3.51578 1.85261C2.50768 2.61886 1.6921 3.60959 1.13379 4.7461L3.89629 6.8711C4.53379 4.88777 6.37546 3.4711 8.50046 3.4711Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function MicrosoftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M0 0H7.65217V7.65217H0V0Z" fill="#F25022" />
      <path d="M8.34766 0H15.9998V7.65217H8.34766V0Z" fill="#7FBA00" />
      <path d="M0 8.3479H7.65217V16.0001H0V8.3479Z" fill="#00A4EF" />
      <path d="M8.34766 8.3479H15.9998V16.0001H8.34766V8.3479Z" fill="#FFB900" />
    </svg>
  );
}

/* --- Trust bar (26px, #1F6FEB) --- */

export function TrustLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
      <path
        d="M18.7417 11.375H7.25833C5.94205 11.375 4.875 12.4421 4.875 13.7583V19.2833C4.875 20.5996 5.94205 21.6667 7.25833 21.6667H18.7417C20.0579 21.6667 21.125 20.5996 21.125 19.2833V13.7583C21.125 12.4421 20.0579 11.375 18.7417 11.375Z"
        stroke="#1F6FEB"
        strokeWidth="1.95"
      />
      <path
        d="M8.66699 11.3752V8.66683C8.66699 7.51756 9.12354 6.41536 9.9362 5.6027C10.7489 4.79004 11.8511 4.3335 13.0003 4.3335C14.1496 4.3335 15.2518 4.79004 16.0645 5.6027C16.8771 6.41536 17.3337 7.51756 17.3337 8.66683V11.3752"
        stroke="#1F6FEB"
        strokeWidth="1.95"
      />
    </svg>
  );
}

export function TrustShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
      <path
        d="M12.9997 2.1665L21.6663 5.95817V12.4582C21.6663 17.8748 17.983 22.5332 12.9997 23.8332C8.01634 22.5332 4.33301 17.8748 4.33301 12.4582V5.95817L12.9997 2.1665Z"
        stroke="#1F6FEB"
        strokeWidth="1.95"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustCloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
      <path
        d="M7.58379 19.5001C6.29086 19.5576 5.02806 19.0991 4.07318 18.2255C3.11831 17.3519 2.54959 16.1347 2.49212 14.8418C2.43466 13.5488 2.89316 12.286 3.76677 11.3312C4.64038 10.3763 5.85753 9.80757 7.15046 9.75011C7.702 8.42208 8.67836 7.31444 9.92667 6.6006C11.175 5.88676 12.6248 5.60702 14.0491 5.80519C15.4733 6.00335 16.7917 6.66822 17.7978 7.69571C18.8038 8.7232 19.4407 10.0553 19.6088 11.4834C20.4348 11.8255 21.1311 12.4207 21.5974 13.1835C22.0637 13.9463 22.276 14.8374 22.2037 15.7285C22.1315 16.6197 21.7784 17.4649 21.1953 18.1426C20.6122 18.8204 19.8291 19.2956 18.9588 19.5001H7.58379Z"
        stroke="#1F6FEB"
        strokeWidth="1.95"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustGlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={className} aria-hidden>
      <path
        d="M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z"
        stroke="#1F6FEB"
        strokeWidth="1.95"
      />
      <path
        d="M3.25 13H22.75M13 3.25C15.7083 6.06667 17.1167 9.425 17.1167 13C17.1167 16.575 15.7083 19.9333 13 22.75C10.2917 19.9333 8.88333 16.575 8.88333 13C8.88333 9.425 10.2917 6.06667 13 3.25Z"
        stroke="#1F6FEB"
        strokeWidth="1.95"
      />
    </svg>
  );
}

/* --- Step headers --- */

export function VerifyMailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 52 52" fill="none" className={className} aria-hidden>
      <path
        d="M41.1663 8.6665H10.833C9.1091 8.6665 7.4558 9.35132 6.23681 10.5703C5.01783 11.7893 4.33301 13.4426 4.33301 15.1665V36.8332C4.33301 38.5571 5.01783 40.2104 6.23681 41.4294C7.4558 42.6484 9.1091 43.3332 10.833 43.3332H41.1663C42.8902 43.3332 44.5435 42.6484 45.7625 41.4294C46.9815 40.2104 47.6663 38.5571 47.6663 36.8332V15.1665C47.6663 13.4426 46.9815 11.7893 45.7625 10.5703C44.5435 9.35132 42.8902 8.6665 41.1663 8.6665ZM39.7147 12.9998L25.9997 23.2915L12.2847 12.9998H39.7147ZM41.1663 38.9998H10.833C10.2584 38.9998 9.70727 38.7716 9.30094 38.3652C8.89461 37.9589 8.66634 37.4078 8.66634 36.8332V15.7082L24.6997 27.7332C25.0747 28.0145 25.5309 28.1665 25.9997 28.1665C26.4685 28.1665 26.9246 28.0145 27.2997 27.7332L43.333 15.7082V36.8332C43.333 37.4078 43.1047 37.9589 42.6984 38.3652C42.2921 38.7716 41.741 38.9998 41.1663 38.9998Z"
        fill="#1F6FEB"
      />
    </svg>
  );
}

export function SuccessBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden>
      <mask
        id="create-account-success"
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
      <g mask="url(#create-account-success)">
        <path d="M0 0H72V72H0V0Z" fill="#16A34A" />
      </g>
    </svg>
  );
}

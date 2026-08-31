/**
 * Icons transcribed verbatim from the Figma SVG handoff in
 * `public/images/sign-in/` — same viewBox, path data, colour and stroke width
 * as the exported assets, inlined so they cost no extra request and can be
 * sized by className.
 */

type IconProps = { className?: string };

/* --- Aside feature icons (18px, #1F6FEB) --- */

export function AsideLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path
        d="M12.975 7.875H5.025C4.11373 7.875 3.375 8.61373 3.375 9.525V13.35C3.375 14.2613 4.11373 15 5.025 15H12.975C13.8863 15 14.625 14.2613 14.625 13.35V9.525C14.625 8.61373 13.8863 7.875 12.975 7.875Z"
        stroke="#1F6FEB"
        strokeWidth="1.34583"
      />
      <path
        d="M6 7.875V6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6V7.875"
        stroke="#1F6FEB"
        strokeWidth="1.34583"
      />
    </svg>
  );
}

export function AsideShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path
        d="M9 1.5L15 4.125V8.625C15 12.375 12.45 15.6 9 16.5C5.55 15.6 3 12.375 3 8.625V4.125L9 1.5Z"
        stroke="#1F6FEB"
        strokeWidth="1.34583"
        strokeLinejoin="round"
      />
      <path
        d="M6.4502 9.15005L8.17519 10.875L11.5502 7.42505"
        stroke="#1F6FEB"
        strokeWidth="1.425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AsideGlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden>
      <path
        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
        stroke="#1F6FEB"
        strokeWidth="1.34583"
      />
      <path
        d="M2.25 9H15.75M9 2.25C10.8 4.2 11.7 6.525 11.7 9C11.7 11.475 10.8 13.8 9 15.75C7.2 13.8 6.3 11.475 6.3 9C6.3 6.525 7.2 4.2 9 2.25Z"
        stroke="#1F6FEB"
        strokeWidth="1.34583"
      />
    </svg>
  );
}

/* --- Trust bar icons (19px, #1F6FEB) --- */

export function TrustShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M9.50033 1.58325L15.8337 4.35409V9.10409C15.8337 13.0624 13.142 16.4666 9.50033 17.4166C5.85866 16.4666 3.16699 13.0624 3.16699 9.10409V4.35409L9.50033 1.58325Z"
        stroke="#1F6FEB"
        strokeWidth="1.425"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustLockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M13.6958 8.3125H5.30417C4.34227 8.3125 3.5625 9.09227 3.5625 10.0542V14.0917C3.5625 15.0536 4.34227 15.8333 5.30417 15.8333H13.6958C14.6577 15.8333 15.4375 15.0536 15.4375 14.0917V10.0542C15.4375 9.09227 14.6577 8.3125 13.6958 8.3125Z"
        stroke="#1F6FEB"
        strokeWidth="1.425"
      />
      <path
        d="M6.33301 8.31258V6.33341C6.33301 5.49356 6.66664 4.68811 7.2605 4.09424C7.85437 3.50038 8.65982 3.16675 9.49967 3.16675C10.3395 3.16675 11.145 3.50038 11.7388 4.09424C12.3327 4.68811 12.6663 5.49356 12.6663 6.33341V8.31258"
        stroke="#1F6FEB"
        strokeWidth="1.425"
      />
    </svg>
  );
}

export function TrustPasskeyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M7.1248 10.45C8.96115 10.45 10.4498 8.9614 10.4498 7.12505C10.4498 5.2887 8.96115 3.80005 7.1248 3.80005C5.28846 3.80005 3.7998 5.2887 3.7998 7.12505C3.7998 8.9614 5.28846 10.45 7.1248 10.45Z"
        stroke="#1F6FEB"
        strokeWidth="1.425"
      />
      <path
        d="M9.6582 9.34155L15.8332 15.5166M13.4582 13.4582L15.0415 15.0416"
        stroke="#1F6FEB"
        strokeWidth="1.425"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustWorkspaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M3.16667 15.8333V5.14575C3.16667 4.83081 3.29178 4.52876 3.51448 4.30606C3.73718 4.08336 4.03922 3.95825 4.35417 3.95825H9.89583C10.2108 3.95825 10.5128 4.08336 10.7355 4.30606C10.9582 4.52876 11.0833 4.83081 11.0833 5.14575V15.8333M11.0833 8.70825H14.6458C14.9608 8.70825 15.2628 8.83336 15.4855 9.05606C15.7082 9.27876 15.8333 9.58081 15.8333 9.89575V15.8333M2.375 15.8333H16.625"
        stroke="#1F6FEB"
        strokeWidth="1.34583"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M9.5 16.625C13.435 16.625 16.625 13.435 16.625 9.5C16.625 5.56497 13.435 2.375 9.5 2.375C5.56497 2.375 2.375 5.56497 2.375 9.5C2.375 13.435 5.56497 16.625 9.5 16.625Z"
        stroke="#1F6FEB"
        strokeWidth="1.425"
      />
      <path
        d="M9.5 5.54175V9.65841L12.1917 11.2417"
        stroke="#1F6FEB"
        strokeWidth="1.425"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustGlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 19 19" fill="none" className={className} aria-hidden>
      <path
        d="M9.5 16.625C13.435 16.625 16.625 13.435 16.625 9.5C16.625 5.56497 13.435 2.375 9.5 2.375C5.56497 2.375 2.375 5.56497 2.375 9.5C2.375 13.435 5.56497 16.625 9.5 16.625Z"
        stroke="#1F6FEB"
        strokeWidth="1.425"
      />
      <path
        d="M2.375 9.5H16.625M9.5 2.375C11.4 4.43333 12.35 6.8875 12.35 9.5C12.35 12.1125 11.4 14.5667 9.5 16.625C7.6 14.5667 6.65 12.1125 6.65 9.5C6.65 6.8875 7.6 4.43333 9.5 2.375Z"
        stroke="#1F6FEB"
        strokeWidth="1.425"
      />
    </svg>
  );
}

/* --- Form icons --- */

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M13.1042 3.54175H3.89583C2.91783 3.54175 2.125 4.33458 2.125 5.31258V11.6876C2.125 12.6656 2.91783 13.4584 3.89583 13.4584H13.1042C14.0822 13.4584 14.875 12.6656 14.875 11.6876V5.31258C14.875 4.33458 14.0822 3.54175 13.1042 3.54175Z"
        stroke="#94A3B8"
        strokeWidth="1.26984"
      />
      <path
        d="M2.83301 4.95825L8.49967 9.20825L14.1663 4.95825"
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
        d="M8.49967 0.666748C6.5468 0.666748 4.95801 2.25554 4.95801 4.20842V6.33342H4.24967C3.46838 6.33342 2.83301 6.96879 2.83301 7.75008V13.4167C2.83301 14.198 3.46838 14.8334 4.24967 14.8334H12.7497C13.531 14.8334 14.1663 14.198 14.1663 13.4167V7.75008C14.1663 6.96879 13.531 6.33342 12.7497 6.33342H12.0413V4.20842C12.0413 2.25554 10.4525 0.666748 8.49967 0.666748ZM12.7497 7.75008L12.7511 13.4167H4.24967V7.75008H12.7497ZM6.37467 6.33342V4.20842C6.37467 3.03683 7.32809 2.08341 8.49967 2.08341C9.67126 2.08341 10.6247 3.03683 10.6247 4.20842V6.33342H6.37467Z"
        fill="#5B6B85"
      />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M3.17062 9.16406V9.16725C3.15273 9.23473 3.12171 9.29803 3.07934 9.35352C3.03696 9.409 2.98407 9.45559 2.92368 9.49062C2.86329 9.52565 2.79658 9.54844 2.72738 9.55767C2.65818 9.56691 2.58783 9.56241 2.52037 9.54444C2.06243 9.42331 2.14318 8.89525 2.14318 8.89525L2.16231 8.82938C2.16231 8.82938 2.18993 8.74013 2.21225 8.67531C2.48491 7.91083 2.8863 7.19861 3.39906 6.56944C4.35212 5.40706 5.95543 4.25 8.50012 4.25C11.0448 4.25 12.6481 5.40706 13.6022 6.56944C14.115 7.19861 14.5164 7.91083 14.7891 8.67531C14.8119 8.74101 14.8332 8.80726 14.8528 8.874L14.856 8.88781V8.89206L14.8571 8.89419C14.8908 9.02941 14.87 9.17246 14.7992 9.2925C14.7284 9.41254 14.6133 9.49996 14.4787 9.53592C14.344 9.57188 14.2006 9.5535 14.0794 9.48473C13.9582 9.41597 13.8689 9.30233 13.8307 9.16831L13.8296 9.16406L13.8211 9.1375L13.7839 9.02169C13.5524 8.37624 13.2128 7.77482 12.7799 7.24306C11.9915 6.2815 10.6729 5.3125 8.50012 5.3125C6.32731 5.3125 5.00981 6.2815 4.22037 7.24306C3.7874 7.77482 3.44789 8.37624 3.21631 9.02169L3.17912 9.1375L3.17062 9.16406ZM8.50012 7.4375C7.79564 7.4375 7.12001 7.71735 6.62187 8.2155C6.12373 8.71364 5.84387 9.38927 5.84387 10.0938C5.84387 10.7982 6.12373 11.4739 6.62187 11.972C7.12001 12.4701 7.79564 12.75 8.50012 12.75C9.2046 12.75 9.88023 12.4701 10.3784 11.972C10.8765 11.4739 11.1564 10.7982 11.1564 10.0938C11.1564 9.38927 10.8765 8.71364 10.3784 8.2155C9.88023 7.71735 9.2046 7.4375 8.50012 7.4375ZM6.90637 10.0938C6.90637 9.67106 7.07428 9.26568 7.37317 8.9668C7.67206 8.66791 8.07743 8.5 8.50012 8.5C8.92281 8.5 9.32819 8.66791 9.62707 8.9668C9.92596 9.26568 10.0939 9.67106 10.0939 10.0938C10.0939 10.5164 9.92596 10.9218 9.62707 11.2207C9.32819 11.5196 8.92281 11.6875 8.50012 11.6875C8.07743 11.6875 7.67206 11.5196 7.37317 11.2207C7.07428 10.9218 6.90637 10.5164 6.90637 10.0938Z"
        fill="#5B6B85"
      />
    </svg>
  );
}

export function BackChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14 7L9 12L14 17"
        stroke="black"
        strokeOpacity="0.6"
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
        d="M16.2917 8.71242C16.2917 8.14575 16.2208 7.57909 16.15 7.08325H8.5V10.2708H12.8917C12.8028 10.773 12.6125 11.2518 12.3323 11.6781C12.0522 12.1043 11.6882 12.469 11.2625 12.7499V14.8041H13.8833C15.4417 13.3874 16.2917 11.2624 16.2917 8.71242Z"
        fill="#4285F4"
      />
      <path
        d="M8.50046 16.6459C10.6963 16.6459 12.538 15.9375 13.8838 14.6625L11.263 12.6084C10.5546 13.1042 9.63379 13.3875 8.50046 13.3875C6.37546 13.3875 4.53379 11.9709 3.89629 9.98755H1.13379V12.1125C1.81215 13.4837 2.86288 14.636 4.1657 15.4378C5.46852 16.2395 6.97076 16.6582 8.50046 16.6459Z"
        fill="#34A853"
      />
      <path
        d="M3.89575 9.98752C3.55564 8.97646 3.55564 7.8819 3.89575 6.87085V4.74585H1.13325C0.55452 5.88742 0.25293 7.1493 0.25293 8.42918C0.25293 9.70907 0.55452 10.9709 1.13325 12.1125L3.89575 9.98752Z"
        fill="#FBBC05"
      />
      <path
        d="M8.50046 3.47086C9.70462 3.47086 10.7671 3.89586 11.6171 4.67503L13.9546 2.33753C13.0219 1.48108 11.9024 0.853861 10.685 0.505669C9.46756 0.157476 8.18571 0.097901 6.94122 0.331672C5.69673 0.565443 4.52388 1.08612 3.51578 1.85237C2.50768 2.61862 1.6921 3.60934 1.13379 4.74586L3.89629 6.87086C4.53379 4.88753 6.37546 3.47086 8.50046 3.47086Z"
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

export function OrgIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden>
      <path
        d="M2.83333 14.1667V4.60425C2.83333 4.32246 2.94527 4.0522 3.14453 3.85295C3.34379 3.65369 3.61404 3.54175 3.89583 3.54175H8.85417C9.13596 3.54175 9.40621 3.65369 9.60547 3.85295C9.80472 4.0522 9.91667 4.32246 9.91667 4.60425V14.1667M9.91667 7.79175H13.1042C13.386 7.79175 13.6562 7.90369 13.8555 8.10295C14.0547 8.3022 14.1667 8.57246 14.1667 8.85425V14.1667M2.125 14.1667H14.875M5.3125 6.37508H7.4375M5.3125 9.20841H7.4375"
        stroke="#1E293B"
        strokeWidth="1.19522"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --- Step headers --- */

export function OtpShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M27.9936 9.20006C27.9712 8.97606 27.8924 8.76138 27.7647 8.57603C27.6369 8.39068 27.4643 8.2407 27.2629 8.14006L16.5962 2.80673C16.411 2.71403 16.2067 2.66577 15.9996 2.66577C15.7924 2.66577 15.5882 2.71403 15.4029 2.80673L4.73625 8.14006C4.53513 8.24087 4.36278 8.39093 4.23526 8.57626C4.10774 8.7616 4.02919 8.97619 4.00692 9.20006C3.99225 9.34273 2.72558 23.5561 15.4589 29.2187C15.6293 29.2944 15.8138 29.3336 16.0002 29.3336C16.1867 29.3336 16.3712 29.2944 16.5416 29.2187C29.2749 23.5561 28.0082 9.34406 27.9936 9.20006ZM16.0002 26.5294C6.97492 22.1667 6.54825 12.8561 6.62158 10.1801L16.0002 5.49073L25.3722 10.1774C25.4216 12.8294 24.9349 22.2014 16.0002 26.5294Z"
        fill="#1F6FEB"
      />
      <path
        d="M14.6663 16.7814L11.609 13.724L9.72363 15.6094L14.6663 20.552L22.2756 12.9427L20.3903 11.0574L14.6663 16.7814Z"
        fill="#1F6FEB"
      />
    </svg>
  );
}

export function SuccessBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden>
      <mask
        id="sign-in-success"
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
      <g mask="url(#sign-in-success)">
        <path d="M0 0H72V72H0V0Z" fill="#16A34A" />
      </g>
    </svg>
  );
}

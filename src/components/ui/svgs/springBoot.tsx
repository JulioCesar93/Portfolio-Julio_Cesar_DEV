import type { SVGProps } from "react";

const SpringBoot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="32" fill="#6DB33F" />
    <path
      d="M128 48c-44.2 0-80 35.8-80 80 0 44.2 35.8 80 80 80 44.2 0 80-35.8 80-80 0-44.2-35.8-80-80-80z"
      fill="#FFFFFF"
    />
    <path
      d="M164 104c-6 24-32 48-68 56 20-20 36-44 40-64 4-18-6-28-22-24-18 4-38 18-50 34 10-34 42-58 76-58 16 0 26 10 24 26z"
      fill="#6DB33F"
    />
  </svg>
);

export { SpringBoot };
import type { SVGProps } from "react";

const Angular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 272"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M128 0L0 46l20 170 108 56 108-56 20-170L128 0z"
      fill="#DD0031"
    />
    <path
      d="M128 0v272l108-56 20-170L128 0z"
      fill="#C3002F"
    />
    <path
      d="M128 32L48 198h30l16-36h68l16 36h30L128 32zm22 104H106l22-52 22 52z"
      fill="#FFFFFF"
    />
  </svg>
);

export { Angular };

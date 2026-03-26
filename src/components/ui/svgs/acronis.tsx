import type { SVGProps } from "react";

const Acronis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="128" fill="#0078D7" />
    <path
      d="M128 44l52 92h-32l-20-36-20 36H76l52-92zm0 92l-52 92h32l20-36 20 36h32l-52-92z"
      fill="#FFFFFF"
    />
  </svg>
);

export { Acronis };

import type { SVGProps } from "react";

const Jira = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M128 0c0 35.3 28.6 64 64 64h26.4L128 0z"
      fill="#2684FF"
    />
    <path
      d="M128 128c0 35.3 28.6 64 64 64h26.4L128 128z"
      fill="#2684FF"
    />
    <path
      d="M128 256c0-35.3-28.6-64-64-64H37.6L128 256z"
      fill="#0052CC"
    />
    <path
      d="M128 128c0-35.3-28.6-64-64-64H37.6L128 128z"
      fill="#0052CC"
    />
  </svg>
);

export { Jira };

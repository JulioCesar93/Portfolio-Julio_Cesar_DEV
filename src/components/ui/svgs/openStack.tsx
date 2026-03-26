import type { SVGProps } from "react";

const OpenStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="32" fill="#ED1944" />
    <path
      d="M64 96h128v24H64V96zm0 40h128v24H64v-24z"
      fill="#FFFFFF"
    />
  </svg>
);

export { OpenStack };

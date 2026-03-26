import type { SVGProps } from "react";

const JavaScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" fill="#F7DF1E" />
    <path
      d="M67 213l20-12c4 7 7 13 15 13 7 0 12-3 12-15V120h24v80c0 24-14 35-35 35-19 0-30-10-36-22zm90-3l20-12c5 8 12 15 24 15 10 0 17-4 17-12 0-8-6-11-18-16l-6-3c-17-7-28-15-28-33 0-16 12-28 32-28 14 0 24 5 31 18l-19 12c-4-7-9-10-12-10-7 0-11 4-11 10 0 7 4 10 14 14l6 3c20 8 31 16 31 35 0 20-16 31-37 31-21 0-34-10-41-24z"
      fill="#000000"
    />
  </svg>
);

export { JavaScript };

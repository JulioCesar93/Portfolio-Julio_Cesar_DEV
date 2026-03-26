import type { SVGProps } from "react";

const Zabbix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="32" fill="#D40000" />
    <path
      d="M48 72h160v28H92l68 56v28H48v-28h68L48 100V72z"
      fill="#FFFFFF"
    />
  </svg>
);

export { Zabbix };
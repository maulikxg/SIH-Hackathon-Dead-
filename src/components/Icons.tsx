import { LucideProps } from "lucide-react";

const Icon = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 497 497">
      <g>
        <path
          d="m392 30c-71.75 0-71.75-30-143.5-30l128.5 497h30c33.137 0 60-26.863 60-60v-228.526c18.555-18.938 30-44.867 30-73.474 0-57.99-47.01-105-105-105z"
          fill="#c87044"
        />
        <path
          d="m437 437-45-377c-41.895 0-63.904-18.405-83.322-34.644-16.942-14.167-30.323-25.356-60.178-25.356-71.75 0-71.75 30-143.5 30-57.99 0-105 47.01-105 105 0 28.607 11.445 54.537 30 73.474v228.526c0 33.137 26.863 60 60 60h287c33.137 0 60-26.863 60-60z"
          fill="#db905a"
        />
        <path
          d="m392 60-15 407h30c16.542 0 30-13.458 30-30v-228.526c0-7.851 3.077-15.388 8.571-20.996 13.819-14.103 21.429-32.74 21.429-52.478 0-41.355-33.645-75-75-75z"
          fill="#ffd185"
        />
        <path
          d="m407 437v-228.526c0-15.796 6.088-30.708 17.143-41.991 8.291-8.462 12.857-19.643 12.857-31.483 0-41.355-20.187-75-45-75-41.895 0-63.904-9.203-83.322-17.322-16.942-7.083-30.323-12.678-60.178-12.678-29.856 0-43.236 5.595-60.177 12.678-19.419 8.119-41.429 17.322-83.323 17.322-41.355 0-75 33.645-75 75 0 19.738 7.61 38.375 21.429 52.479 5.494 5.607 8.571 13.145 8.571 20.995v228.526c0 16.542 13.458 30 30 30h287c16.542 0 30-13.458 30-30z"
          fill="#ffe8c2"
        />
        <g fill="#ffd185">
          <circle cx="392" cy="135" r="7.5" />
          <circle cx="362" cy="165" r="7.5" />
          <circle cx="105" cy="377" r="7.5" />
          <circle cx="135" cy="407" r="7.5" />
          <circle cx="105" cy="135" r="7.5" />
        </g>
      </g>
    </svg>
  ),
  upload: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-upload"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  ),
  close: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
};

export default Icon;

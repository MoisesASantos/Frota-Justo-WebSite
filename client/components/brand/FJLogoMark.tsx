interface FJLogoMarkProps {
  className?: string;
}

const FJLogoMark = ({ className }: FJLogoMarkProps) => {
  return (
    <svg
      viewBox="0 0 240 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FJ logomarca"
      className={className}
    >
      <defs>
        <linearGradient id="fj-blue-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3aa0e5" />
          <stop offset="100%" stopColor="#0b4ca2" />
        </linearGradient>
        <linearGradient id="fj-blue-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f4f96" />
          <stop offset="100%" stopColor="#063078" />
        </linearGradient>
        <mask id="fj-mask-f">
          <rect x="18" y="26" width="128" height="100" rx="50" ry="50" fill="#fff" />
          <rect x="74" y="86" width="88" height="54" fill="#000" />
          <polygon
            points="118 26 160 26 110 108 68 108 88 76"
            fill="#000"
          />
        </mask>
      </defs>
      <g fillRule="evenodd" clipRule="evenodd">
        <g>
          <rect
            x="18"
            y="26"
            width="128"
            height="100"
            rx="50"
            ry="50"
            fill="url(#fj-blue-light)"
            mask="url(#fj-mask-f)"
          />
          <polygon
            points="122 26 162 26 112 108 70 108 90 76"
            fill="#ffffff"
          />
        </g>
        <path
          d="M166 26h44c16.016 0 29 12.984 29 29v52c0 34.093-27.907 62-62 62-21.604 0-41.119-10.894-52.958-29.178-2.419-3.77-.88-8.735 3.037-10.84l19.086-10.2c3.19-1.706 7.12-.674 9.248 2.325 4.856 6.723 11.782 10.893 20.587 10.893 13.337 0 24.166-10.829 24.166-24.166V56h-34.166C155.863 56 146 46.137 146 33.166 146 28.524 149.524 25 154.166 25H166Z"
          fill="url(#fj-blue-dark)"
        />
      </g>
    </svg>
  );
};

export default FJLogoMark;

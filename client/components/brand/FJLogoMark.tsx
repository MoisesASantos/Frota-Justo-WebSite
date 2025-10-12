interface FJLogoMarkProps {
  className?: string;
}

const FJLogoMark = ({ className }: FJLogoMarkProps) => {
  return (
    <svg
      viewBox="0 0 180 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FJ logomarca"
      className={className}
    >
      <defs>
        <linearGradient id="fj-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e75c5" />
          <stop offset="100%" stopColor="#0f3b8a" />
        </linearGradient>
        <linearGradient id="fj-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e4f9c" />
          <stop offset="100%" stopColor="#0c2a70" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          d="M18 16c0-4.418 3.582-8 8-8h70c15.464 0 28 12.536 28 28v2c0 4.418-3.582 8-8 8H50v18h33c4.418 0 8 3.582 8 8v13c0 4.418-3.582 8-8 8H34c-15.464 0-28-12.536-28-28V16z"
          fill="url(#fj-gradient-light)"
        />
        <path
          d="M130 8h20c4.418 0 8 3.582 8 8v58c0 21.54-17.46 39-39 39-13.184 0-25.066-6.52-32.25-16.731-2.465-3.481-1.32-8.294 2.515-10.296l16.536-8.701c3.276-1.72 7.303-.622 9.398 2.43 2.11 3.074 5.472 5.298 9.801 5.298 6.075 0 11-4.925 11-11V62h-19c-4.418 0-8-3.582-8-8V16c0-4.418 3.582-8 8-8z"
          fill="url(#fj-gradient-dark)"
        />
        <path
          d="M94.5 37.5 70 67h22l17.5-20.5c4.63-5.42.878-14.154-6.154-14.154h-1.492a10 10 0 0 0-7.354 3.154z"
          fill="#0e2e73"
          opacity="0.9"
        />
      </g>
    </svg>
  );
};

export default FJLogoMark;

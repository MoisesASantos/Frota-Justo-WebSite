interface FJLogoMarkProps {
  className?: string;
}

const FJLogoMark = ({ className }: FJLogoMarkProps) => {
  return (
    <svg
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FJ logomarca"
      className={className}
    >
      <defs>
        <linearGradient id="fj-blue-light" x1="12%" y1="10%" x2="95%" y2="95%">
          <stop offset="0%" stopColor="#25a0f0" />
          <stop offset="100%" stopColor="#14539d" />
        </linearGradient>
        <linearGradient id="fj-blue-dark" x1="0%" y1="0%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#1c4ea0" />
          <stop offset="100%" stopColor="#0d2c70" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          d="M12 30.5C12 15.074 24.45 2.5 39.876 2.5h77.124c4.418 0 8 3.582 8 8s-3.582 8-8 8H63.5c-5.523 0-10 4.477-10 10v6.5h36.75c5.523 0 10 4.477 10 10s-4.477 10-10 10H53.5v10.25c0 5.523 4.477 10 10 10h24.75c5.523 0 10 4.477 10 10v11.5c0 5.523-4.477 10-10 10H63.5C34.542 107.75 12 85.208 12 56.25V30.5Z"
          fill="url(#fj-blue-light)"
        />
        <path
          d="M110.75 29.25 82.5 70.5h38.25l27.6-33.292c2.885-3.474.45-8.708-3.95-8.708h-20.9a9.998 9.998 0 0 0-7.75 3.75Z"
          fill="#0a3b88"
        />
        <path
          d="M145 2.5h32c11.046 0 20 8.954 20 20v52c0 24.299-19.701 44-44 44-16.102 0-30.6-8.068-39.369-21.225-2.488-3.769-1.034-8.842 3.003-10.986l17.143-8.879c3.24-1.679 7.2-.577 9.344 2.45 3.098 4.358 8.171 7.115 13.879 7.115 9.273 0 16.75-7.477 16.75-16.75V34.5h-24c-5.523 0-10-4.477-10-10V12.5c0-5.523 4.477-10 10-10Z"
          fill="url(#fj-blue-dark)"
        />
      </g>
    </svg>
  );
};

export default FJLogoMark;

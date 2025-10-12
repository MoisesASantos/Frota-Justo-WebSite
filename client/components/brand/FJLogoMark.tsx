interface FJLogoMarkProps {
  className?: string;
}

const FJLogoMark = ({ className }: FJLogoMarkProps) => {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FJ logomarca"
      className={className}
    >
      <defs>
        <linearGradient id="fj-blue-primary" x1="12%" y1="4%" x2="88%" y2="88%">
          <stop offset="0%" stopColor="#2f8bda" />
          <stop offset="100%" stopColor="#0c4b9f" />
        </linearGradient>
        <linearGradient id="fj-blue-secondary" x1="15%" y1="0%" x2="100%" y2="95%">
          <stop offset="0%" stopColor="#1d58a5" />
          <stop offset="100%" stopColor="#032b78" />
        </linearGradient>
        <linearGradient id="fj-blue-shadow" x1="0%" y1="30%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#0f4b97" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#04235d" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          d="M64 28C41.908 28 24 45.908 24 68v120c0 22.092 17.908 40 40 40h96c14.359 0 26-11.641 26-26v-16c0-14.359-11.641-26-26-26h-50c-8.836 0-16-7.164-16-16v-18h54c14.359 0 26-11.641 26-26s-11.641-26-26-26H94V76c0-14.359 11.641-26 26-26h92c14.359 0 26-11.641 26-26S226.359-2 212-2H64Z"
          fill="url(#fj-blue-primary)"
        />
        <path
          d="M116 104 168 28h40l-48 76z"
          fill="#ffffff"
        />
        <path
          d="M166 28h34c22.092 0 40 17.908 40 40v60c0 38.659-31.341 70-70 70-22.963 0-43.836-11.145-56.59-29.285-2.902-4.105-1.198-9.832 3.356-12.068l18.307-9.032c3.298-1.63 7.243-.553 9.427 2.511 5.86 8.09 15.359 12.874 25.5 12.874 16.016 0 29-12.984 29-29V78h-29c-12.15 0-22-9.85-22-22V42c0-7.732 6.268-14 14-14Z"
          fill="url(#fj-blue-secondary)"
        />
        <path
          d="M172 168c14.042 0 25.426-11.384 25.426-25.426 0-2.534 2.054-4.588 4.588-4.588H246v-10c0 35.346-28.654 64-64 64-15.873 0-30.485-5.852-41.79-15.596a5 5 0 0 1 1.036-8.265l17.27-8.383c2.316-1.123 5.044-.317 6.55 1.797 4.534 6.245 11.804 10.461 19.934 10.461Z"
          fill="url(#fj-blue-shadow)"
        />
      </g>
    </svg>
  );
};

export default FJLogoMark;

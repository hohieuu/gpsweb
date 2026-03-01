interface AIGPSIconProps {
  className?: string;
  size?: number;
}

const AIGPSIcon = ({ className = "", size = 48 }: AIGPSIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="17" r="7" stroke="currentColor" strokeWidth="2.25" fill="none" />
    <path d="M24 24.5v14M24 24.5l-5 6.5M24 24.5l5 6.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default AIGPSIcon;

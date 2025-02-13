import React from 'react';

interface ArrowDownIconProps {
  rotated: boolean;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ rotated }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`ml-1 transition-transform duration-300 ${rotated ? 'rotate-180' : ''}`}
    >
      <path d="M18.9,15.8c-0.1,0-0.3-0.1-0.4-0.2L12,7.2l-6.4,8.3c-0.2,0.2-0.5,0.3-0.7,0.1c-0.2-0.2-0.3-0.5-0.1-0.7     l6.8-8.8c0.2-0.2,0.6-0.2,0.8,0l6.8,8.8c0.2,0.2,0.1,0.5-0.1,0.7C19.1,15.7,19,15.8,18.9,15.8z" />
    </svg>
  );
};

export default ArrowDownIcon;

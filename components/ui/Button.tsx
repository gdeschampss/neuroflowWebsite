import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FORM_URL =
  'https://formulario-neuroflow-gumsak42b-easygolden-s-projects.vercel.app/';
export const WHATSAPP_URL = 'https://wa.me/554796732918';
export const WHATSAPP_PHONE = '+55 47 9673-2918';
export const LINKEDIN_URL = 'http://linkedin.com/company/ianeuroflow/';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  isExternal = true,
  fullWidth = false,
  showArrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary:
      'bg-[#03AD97] text-white hover:bg-[#028F7C] hover:shadow-[0_10px_25px_-5px_rgba(3,173,151,0.35)] hover:-translate-y-0.5',
    secondary:
      'bg-[#1F1F1F] text-white hover:bg-[#2e2e2e] hover:shadow-lg hover:-translate-y-0.5',
    outline:
      'border-2 border-[#E5E7EB] bg-white text-[#1F1F1F] hover:border-[#03AD97] hover:text-[#03AD97] hover:bg-[#03AD97]/5',
    ghost:
      'bg-transparent text-[#1F1F1F] hover:bg-gray-100 hover:text-[#03AD97]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClasses}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};

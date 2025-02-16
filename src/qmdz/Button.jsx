import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({
  children,
  className,
  variant = 'primary',
  radius = 'medium',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  ...rest
}) => {
  const buttonClasses = clsx(
    'inline-flex items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      // Variants
      'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
      'bg-white text-gray-700 border-gray-300 hover:bg-gray-50': variant === 'secondary',
      'bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
      'bg-transparent text-blue-600 hover:text-blue-700': variant === 'text',

      // Radius
      '': radius === 'none',
      'rounded-md': radius === 'medium',
      'rounded-sm': radius === 'small',
      'rounded-lg': radius === 'large',

      // Sizes
      'px-6 py-1.5 text-sm': size === 'medium',
      'px-3 py-1 text-xs': size === 'small',
      'px-10 py-3 text-base': size === 'large',

      // Full width
      'w-full': fullWidth,

      // Disabled state
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
  disabled: false,
};

export default Button;

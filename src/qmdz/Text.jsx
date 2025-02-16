import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Text = ({
  children,
  className,
  variant = 'body',
  alignment = 'left',
  color = 'default',
  fontWeight = 'normal',
  as = 'p',
  ...rest
}) => {
  const Tag = ['a', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as) ? as : 'p';
  const textClasses = clsx(
    {
      // Variants
      'text-sm': variant === 'body',
      'text-xs': variant === 'caption',
      'text-base': variant === 'heading',
      'text-lg': variant === 'title',
      'text-xl': variant === 'display',

      // Alignment
      'text-left': alignment === 'left',
      'text-center': alignment === 'center',
      'text-right': alignment === 'right',

      // Colors
      'text-gray-900': color === 'default',
      'text-gray-700': color === 'subdued',
      'text-blue-600': color === 'link',
      'text-red-600': color === 'critical',

      // Font weights
      'font-normal': fontWeight === 'normal',
      'font-medium': fontWeight === 'medium',
      'font-semibold': fontWeight === 'semibold',
      'font-bold': fontWeight === 'bold',
    },
    className
  );

  return (
    <Tag className={textClasses} {...rest}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['body', 'caption', 'heading', 'title', 'display']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(['default', 'subdued', 'link', 'critical']),
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold']),
};

Text.defaultProps = {
  variant: 'body',
  alignment: 'left',
  color: 'default',
  fontWeight: 'normal',
};

export default Text;

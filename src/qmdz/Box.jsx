import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Box = ({
  children,
  className,
  padding = 'base',
  margin = 'base',
  background = 'default',
  shadow = 'base',
  borderRadius = 'base',
  border = false,
  as = 'div',
  ...rest
}) => {
  const Tag = as;
  const boxClasses = clsx(
    'w-full',
    {
      // Padding
      'p-4': padding === 'base',
      'p-6': padding === 'large',
      'p-8': padding === 'xlarge',
      [`p-${padding}`]: typeof padding === 'string' && !['base', 'large', 'xlarge'].includes(padding),

      // Margin
      'm-4': margin === 'base',
      'm-6': margin === 'large',
      'm-8': margin === 'xlarge',

      // Background
      'bg-white': background === 'default',
      'bg-gray-50': background === 'subdued',

      // Shadow
      'shadow-sm': shadow === 'base',
      'shadow-md': shadow === 'medium',

      // Border
      'rounded-md': borderRadius === 'base',
      'rounded-lg': borderRadius === 'large',
      'border border-gray-200': border,
    },
    className
  );

  return (
    <Tag className={boxClasses} {...rest}>
      {children}
    </Tag>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['base', 'large', 'xlarge']),
  background: PropTypes.oneOf(['default', 'subdued']),
  shadow: PropTypes.oneOf(['base', 'medium']),
  borderRadius: PropTypes.oneOf(['base', 'large']),
  border: PropTypes.bool,
};

Box.defaultProps = {
  padding: 'base',
  background: 'default',
  shadow: 'base',
  borderRadius: 'base',
  border: true,
};

export default Box;

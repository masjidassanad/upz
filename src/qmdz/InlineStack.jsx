import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const InlineStack = ({
  children,
  className,
  spacing = 'medium',
  alignment = 'start',
  wrap = true,
  ...rest
}) => {
  const stackClasses = clsx(
    'flex flex-row',
    {
      'space-x-2': spacing === 'small',
      'space-x-4': spacing === 'medium',
      'space-x-6': spacing === 'large',
      'items-start': alignment === 'start',
      'items-center': alignment === 'center',
      'items-end': alignment === 'end',
      'items-stretch': alignment === 'stretch',
      'flex-wrap': wrap,
      'flex-nowrap': !wrap,
    },
    className
  );

  return (
    <div className={stackClasses} {...rest}>
      {children}
    </div>
  );
};

InlineStack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
  alignment: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  wrap: PropTypes.bool,
};

InlineStack.defaultProps = {
  spacing: 'medium',
  alignment: 'start',
  wrap: true,
};

export default InlineStack;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const BlockStack = ({
  children,
  className,
  spacing = 'medium',
  alignment = 'stretch',
  ...rest
}) => {
  const stackClasses = clsx(
    'flex flex-col',
    {
      'space-y-2': spacing === 'small',
      'space-y-4': spacing === 'medium',
      'space-y-6': spacing === 'large',
      'items-start': alignment === 'start',
      'items-center': alignment === 'center',
      'items-end': alignment === 'end',
      'items-stretch': alignment === 'stretch',
    },
    className
  );

  return (
    <div className={stackClasses} {...rest}>
      {children}
    </div>
  );
};

BlockStack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
  alignment: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
};

BlockStack.defaultProps = {
  spacing: 'medium',
  alignment: 'stretch',
};

export default BlockStack;

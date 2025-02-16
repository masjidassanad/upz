import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Bleed = ({
  children,
  className,
  fullWidth = false,
  vertical = false,
  horizontal = false,
  ...rest
}) => {
  const bleedClasses = clsx(
    {
      '-mx-4': horizontal || fullWidth,
      '-my-4': vertical || fullWidth,
    },
    className
  );

  return (
    <div className={bleedClasses} {...rest}>
      {children}
    </div>
  );
};

Bleed.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
};

Bleed.defaultProps = {
  fullWidth: false,
  vertical: false,
  horizontal: false,
};

export default Bleed;

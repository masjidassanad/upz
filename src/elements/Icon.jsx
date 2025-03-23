import React from "react";

import 'boxicons/css/boxicons.min.css';

const Icon = ({ name, type = 'solid', size = 'md', spin = false, className }) => {
  const iconType = type === 'solid' ? 'bxs' : (type === 'logo' ? 'bxl' : 'bx');
  const iconName = `${iconType}-${name}`;
  const iconSize = {
    xs: 'bx-xs',
    sm: 'bx-sm',
    md: 'bx-md',
    lg: 'bx-lg',
  }[size];

  return <i className={`bx ${iconName} ${iconSize} ${spin ? 'bx-spin' : ''} ${className}`}></i>;
};

const IconLoading = ({ size = 'lg' }) => {
  return <Icon name="loader" type="default" size={size} spin />;
};

export { Icon, IconLoading };

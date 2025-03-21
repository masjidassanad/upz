import React from "react";

import 'boxicons/css/boxicons.min.css';

const Icon = ({ name, type = 'solid', size = 'md', className }) => {
  const iconType = type === 'solid' ? 'bxs' : (type === 'logo' ? 'bxl' : 'bx');
  const iconName = `${iconType}-${name}`;
  const iconSize = {
    xs: 'bx-xs',
    sm: 'bx-sm',
    md: 'bx-md',
    lg: 'bx-lg',
  }[size];

  return <i className={`bx ${iconName} ${iconSize} ${className}`}></i>;
};

export default Icon;

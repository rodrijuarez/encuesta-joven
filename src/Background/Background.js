import { GradientTealBlue } from '@vx/gradient';
import React from 'react';

export function Background({ width, height }) {
  return (
    <svg width={width} height={height}>
      <GradientTealBlue id="bg" />
      <rect width={width} height={height} fill="url(#bg)" />
    </svg>
  );
}

export default Background;

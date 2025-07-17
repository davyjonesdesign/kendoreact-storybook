import React from 'react';
import '../assets/index.scss';

export const WSubtleChunkBarSm = ({
  value = 60,
  min = 0,
  max = 100,
  disabled = false,
  dir = 'ltr'
}) => (
  <div
    className="w-subtle-chunk-bar-sm k-progressbar k-chunk-progressbar k-progressbar-horizontal"
    tabIndex={0}
    role="progressbar"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    dir={dir}
  >
    <ul className="k-progressbar-chunks k-reset">
      <li className="k-progressbar-chunk k-first k-selected"></li>
      <li className="k-progressbar-chunk k-selected"></li>
      <li className="k-progressbar-chunk k-selected"></li>
      <li className="k-progressbar-chunk k-selected"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk"></li>
      <li className="k-progressbar-chunk k-last"></li>
    </ul>
  </div>
);
import React from 'react';
import './frame_flex.scss';

interface Props {
  children: React.ReactNode;
  direction?: 'v' | 'h'
}

export function FrameFlex({ children, direction }: Props) {
  const directionClass = direction === 'h' ? 'flex-h' : 'flex-v';
  return (<div className={`flex-box ${directionClass}`}>{children}</div>);
}

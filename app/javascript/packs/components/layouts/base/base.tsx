import React from 'react';
import './base.scss';

interface Props {
  children: React.ReactNode;
}

export function Base({ children }: Props) {
  return (<div className='base'>{children}</div>);
}

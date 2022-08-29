import React from 'react';
import './title.scss';

interface Props {
  appearance?: 1 | 2;
  children: string;
}

export function Title({ appearance, children }: Props) {
  let tag = <h1>{children}</h1>;
  if (appearance === 2) tag = <h2>{children}</h2>;
  return tag;
}

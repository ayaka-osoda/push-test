import React from 'react';
import './icon.scss';

interface Props {
  type: 'edit' | 'complete';
}

export function Icon({ type }: Props) {
  const imagePath = require(`../../../../images/icons/${type}.svg`);
  return <img className='icon-image' src={imagePath} />
}

import React from 'react';
import './icon.scss';

interface Props {
  type: 'edit' | 'complete';
  onClick?: React.MouseEventHandler;
}

export function Icon({ type, onClick }: Props) {
  const imagePath = require(`../../../../images/icons/${type}.svg`);
  return <img className='icon-image' src={imagePath} onClick={onClick} />
}

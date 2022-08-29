import * as React from 'react';
import './button.scss';

interface Props {
  appearance: 'primary' | 'secondary';
  children: string;
  onClick?: React.MouseEventHandler;
}

export function Button(props: Props) {
  const {appearance, children, onClick} = props;

  let className = 'btn';
  if (appearance) className = className +  ` btn-${appearance}`;

  return (<button type="button" className={className} onClick={onClick}>{children}</button>);
}

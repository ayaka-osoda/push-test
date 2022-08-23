import * as React from 'react';

interface Props {
  children: string;
  onClick?: React.MouseEventHandler;
}

export function Button(props: Props) {
  const {children, onClick} = props;
  return (<button type="button" onClick={onClick}>{children}</button>);
}

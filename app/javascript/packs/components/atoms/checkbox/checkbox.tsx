import React from 'react';
import './checkbox.scss';

interface Props {
  children: string;
  checked: boolean;
  value: string;
  onChange?: React.FormEventHandler;
}

export function Checkbox(props: Props) {
  const { children, checked, value, onChange } = props;

  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" className="checkbox" id={value} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
}

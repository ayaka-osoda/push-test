import React from 'react';
import './list.scss';

interface ListWrapperProps {
  children: React.ReactNode;
}

interface ListProps {
  children: React.ReactNode;
}

export function ListWrapper({ children }: ListWrapperProps) {
  return (
    <div className="list-wrapper-outsider">
      <ul className="list-wrapper">{children}</ul>
    </div>
  );
}

export function List({ children }: ListProps) {
  return <li className="list">{children}</li>;
}

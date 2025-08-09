import { PropsWithChildren } from 'react';

export default function Col(props: PropsWithChildren & { className?: string | undefined }) {
  return (
    <div data-component="Col" className={`flex flex-col ${props.className || ''}`}>
      {props.children}
    </div>
  );
}

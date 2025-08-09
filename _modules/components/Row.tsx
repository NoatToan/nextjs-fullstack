import { PropsWithChildren } from 'react';

export default function Row(props: PropsWithChildren & { className?: string | undefined }) {
  return (
    <div className={`flex flex-row ${props.className || ''}`} data-component={'Row'}>
      {props.children}
    </div>
  );
}

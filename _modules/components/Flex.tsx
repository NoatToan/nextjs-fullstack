import { PropsWithChildren } from 'react';

export default function Flex(
  props: PropsWithChildren & {
    className?: string | undefined;
    ref?: React.RefObject<HTMLDivElement | null>;
  },
) {
  return (
    <div ref={props?.ref} className={`flex ${props.className}`} data-component="Flex">
      {props.children}
    </div>
  );
}

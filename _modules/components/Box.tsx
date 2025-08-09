import { CSSProperties, PropsWithChildren, Ref } from 'react';

export default function Box(
  props: PropsWithChildren & {
    className?: string | undefined;
    style?: CSSProperties;
    ref?: Ref<HTMLDivElement>;
  },
) {
  return (
    <div
      ref={props.ref}
      className={`${props.className || ''}`}
      style={props.style}
      data-component="Box">
      {props.children}
    </div>
  );
}

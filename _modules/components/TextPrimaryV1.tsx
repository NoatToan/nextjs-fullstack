import { PropsWithChildren } from 'react';

export default function TextPrimaryV1(
  props: PropsWithChildren & {
    className?: string | undefined;
    text: string | null | undefined;
    colon?: boolean | undefined;
    dot?: boolean | undefined;
    uppercase?: boolean | undefined;
    exclamation?: boolean | undefined;
    questionMark?: boolean | undefined;
  },
) {
  const computedText = () => {
    if (props.uppercase) {
      return props.text?.toUpperCase();
    }

    return props.text;
  };

  return (
    <p className={`${props.className || ''}`}>
      {computedText()}
      {props.colon ? ': ' : ''}
      {props.dot ? '.' : ''}
      {props.exclamation ? '!' : ''}
      {props.questionMark ? '?' : ''}
    </p>
  );
}

import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { Ball, InputWrapper } from './_switchcolor';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SwitchColor = forwardRef(
  ({ ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputWrapper data-com="InputWrapper">
        <input type="checkbox" {...rest} ref={ref} />
        <Ball data-com="Ball" />
      </InputWrapper>
    );
  },
);

export default SwitchColor;

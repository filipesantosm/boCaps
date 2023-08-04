import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { CSSProperties } from 'styled-components';
import {
  ErrorMessage,
  Input,
  InputLabel,
  InputWrapper,
  LabelText,
} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  labelTextStyle?: CSSProperties;
}

const SweepstakeInput = forwardRef(
  (
    { error, label, labelTextStyle, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputLabel>
        <InputWrapper>
          {!!label && <LabelText style={labelTextStyle}>{label}</LabelText>}
          <Input {...rest} ref={ref} />
        </InputWrapper>
        <ErrorMessage>{error && <span>{error}</span>}</ErrorMessage>
      </InputLabel>
    );
  },
);

export default SweepstakeInput;

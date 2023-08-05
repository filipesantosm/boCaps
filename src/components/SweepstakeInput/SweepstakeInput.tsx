import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { CSSProperties } from 'styled-components';
import {
  ErrorMessage,
  Input,
  InputLabel,
  InputWrapper,
  LabelText,
} from './styles';
import MaskedInput from '../MaskedInput/MaskedInput';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  labelTextStyle?: CSSProperties;
  maskFunction?: (value: string) => string;
}

const SweepstakeInput = forwardRef(
  (
    { error, label, labelTextStyle, maskFunction, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputLabel>
        <InputWrapper>
          {!!label && <LabelText style={labelTextStyle}>{label}</LabelText>}
          {maskFunction ? (
            <Input
              {...rest}
              ref={ref}
              as={MaskedInput}
              maskFunction={maskFunction}
            />
          ) : (
            <Input {...rest} ref={ref} />
          )}
        </InputWrapper>
        <ErrorMessage>{error && <span>{error}</span>}</ErrorMessage>
      </InputLabel>
    );
  },
);

export default SweepstakeInput;

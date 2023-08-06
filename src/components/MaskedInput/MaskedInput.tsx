import { forwardRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  maskFunction: (value: string) => string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MaskedInput: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { maskFunction, onChange, width, ...rest },
  ref,
) => {
  const handleMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const masked = maskFunction(event.target.value);
    event.target.value = masked;
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      width={width}
      type="text"
      className="form-control"
      onChange={event => handleMask(event)}
      {...rest}
      ref={ref}
    />
  );
};

export default forwardRef(MaskedInput);

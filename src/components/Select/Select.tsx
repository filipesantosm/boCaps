import ReactSelect, { Props as SelectProps } from 'react-select';
import { CSSProperties } from 'react';
import { ErrorMessage, Label, LabelText } from './styles';

interface Props<OptionType, T extends boolean>
  extends SelectProps<OptionType, T, { options: OptionType[] }> {
  label?: string;
  error?: string;
  labelStyle?: CSSProperties;
  options: OptionType[];
  isMulti?: T;
}

const Select = <OptionType, T extends boolean = false>({
  labelStyle,
  label,
  placeholder,
  error,
  isMulti,
  ...rest
}: Props<OptionType, T>) => {
  return (
    <Label style={labelStyle} data-com="SelectLabel">
      {label && <LabelText>{label}</LabelText>}
      <ReactSelect
        placeholder={placeholder || 'Selecione...'}
        isMulti={isMulti}
        {...rest}
        styles={{
          control: prev => ({
            ...prev,
            borderRadius: '0.75rem',
            border: error ? '1px solid #BE0F0F' : 'none',
            height: isMulti ? undefined : '2.625rem',
            minHeight: '2.625rem',
            width: '100%',
            outline: 'none',
            backgroundColor: '#ffffff',
            boxShadow: '0px 2px 5px rgba(175, 176, 197, 0.42)',
            fontSize: '1rem',
            fontFamily: 'Hind Siliguri',
            fontWeight: 400,
            color: '#515258',
          }),
          placeholder: prev => ({
            ...prev,
            fontSize: '1rem',
            fontFamily: 'Hind Siliguri',
            fontWeight: 400,
            color: '#c6cedd',
          }),
          container: prev => ({
            ...prev,
            width: '100%',
            outline: 'none',
            minHeight: '2.625rem',
            maxHeight: isMulti ? undefined : '2.625rem',
          }),
          valueContainer: prev => ({
            ...prev,
            minHeight: '2.625rem',
            maxHeight: isMulti ? undefined : '2.625rem',
          }),
          indicatorsContainer: prev => ({
            ...prev,
            minHeight: '2.625rem',
            maxHeight: isMulti ? undefined : '2.625rem',
          }),
          menu: prev => ({
            ...prev,
            fontSize: '1rem',
            fontFamily: 'Hind Siliguri',
            fontWeight: 400,
            color: '#252729',
            borderRadius: '0.75rem',
            width: '100%',
            backgroundColor: '#ffffff',
          }),
          singleValue: prev => ({
            ...prev,
            fontSize: '1rem',
            fontFamily: 'Hind Siliguri',
            fontWeight: 400,
            color: '#515258',
          }),
          option: (prev, state) => ({
            ...prev,
            fontSize: '1rem',
            fontFamily: 'Hind Siliguri',
            fontWeight: 400,
            color: '#252729',
            backgroundColor: state.isSelected ? '#fff' : '#fff',
            borderRadius: '0.75rem',
          }),
        }}
      />
      <ErrorMessage>{error && <span>{error}</span>}</ErrorMessage>
    </Label>
  );
};
export default Select;

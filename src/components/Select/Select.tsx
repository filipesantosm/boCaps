import { Props as SelectProps } from 'react-select';
import { CSSProperties } from 'react';
import { ErrorMessage, Label, LabelText, SelectComponent } from './styles';

interface Props extends SelectProps {
  options: IOption[];
  label?: string;
  error?: string;
  labelStyle?: CSSProperties;
}
export interface IOption {
  value: string;
  label: string;
}
const Select = ({
  labelStyle,
  options,
  label,
  placeholder,
  error,
  ...rest
}: Props) => {
  return (
    <Label style={labelStyle} data-com="SelectLabel">
      <LabelText>{label}</LabelText>
      <SelectComponent
        options={options}
        placeholder={placeholder || 'Selecione...'}
        isSearchable={false}
        {...rest}
        value={options.find(option => option.value === rest.value)}
        styles={{
          control: prev => ({
            ...prev,
            borderRadius: '0.75rem',
            border: error ? '1px solid #BE0F0F' : 'none',
            height: '2.625rem',
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
            maxHeight: '2.625rem',
          }),
          valueContainer: prev => ({
            ...prev,
            minHeight: '2.625rem',
            maxHeight: '2.625rem',
          }),
          indicatorsContainer: prev => ({
            ...prev,
            minHeight: '2.625rem',
            maxHeight: '2.625rem',
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

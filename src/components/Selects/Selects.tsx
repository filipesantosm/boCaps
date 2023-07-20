import { Controller } from 'react-hook-form';
import Select from 'react-select';

interface SelectProps {
  placeholder: string;
  name: string;
  id: string;
  options: Options[];
  control: any;
  hasError?: boolean;
}

export interface Options {
  value: string | number;
  label: string | number;
}

export const AccountSelect = ({
  placeholder,
  name,
  id,
  options,
  control,
  hasError,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Select
            noOptionsMessage={() => 'Sem opções'}
            onChange={event => onChange(event)}
            onBlur={onBlur}
            value={value}
            className="basic-single"
            classNamePrefix="select"
            placeholder={placeholder}
            name={name}
            options={options}
            id={id}
            styles={{
              control: prev => ({
                ...prev,
                borderRadius: '0.75rem',
                border: hasError ? '1px solid #ff0000' : 'none',
                height: '2.625rem',
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
        );
      }}
    />
  );
};

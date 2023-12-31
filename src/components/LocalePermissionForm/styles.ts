import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 80rem;

  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;

  grid-row-gap: 1.25rem;
  grid-column-gap: 2rem;
`;

export const FormRow = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  > * {
    width: 100%;
  }
`;

export const Field = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Label = styled.label`
  min-width: 30%;
  width: max-content;

  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray51};
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 1000px) {
    white-space: normal;
  }
`;

export const SelectLabel = styled.label`
  min-width: 50%;
  width: max-content;

  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray51};
  white-space: nowrap;

  @media (max-width: 1000px) {
    white-space: normal;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;

  width: 100%;
  height: 2.625rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray89};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayc6};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.25rem;
  left: 35%;
  color: red;
  font-size: 0.75rem;
`;

export const FilledButton = styled.button`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: ${({ theme }) => theme.colors.primary};

  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

interface LabelProps {
  isActive: boolean;
}

export const ToggleLabel = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 500;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.grayb9};
`;

export const Toggle = styled.input`
  appearance: none;
  width: 2.375rem;
  height: 1.375rem;
  background: #cfcfcf;
  border-radius: 2rem;

  cursor: pointer;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);

  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    margin: 3px;

    display: inline-block;

    margin-left: 0.25rem;

    border-radius: 50%;

    background-color: #fafafa;
    border: none;

    transition: transform 0.2s ease;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};

    &:after {
      width: 1rem;
      height: 1rem;
      background-color: #fafafa;
      transform: translateX(95%);
    }
  }
`;

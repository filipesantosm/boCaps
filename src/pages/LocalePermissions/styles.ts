import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;

  margin-bottom: 1rem;
`;

export const FilterForm = styled.form`
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
  color: #515258;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 1000px) {
    white-space: normal;
  }
`;

export const CheckboxLabel = styled.label`
  min-width: 50%;
  width: max-content;

  font-size: 1.125rem;
  font-weight: 500;
  color: #515258;
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
  color: #898f9a;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.25rem;
  left: 35%;
  color: red;
  font-size: 0.75rem;
`;

export const Checkbox = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  content: none;

  cursor: pointer;

  &:before {
    content: '\f00c';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 0.125rem;
    // background: #c6cedd;
    background: rgba(0, 33, 75, 0.125);

    font-size: 0.5rem;
    font-family: 'FontAwesome';
    color: transparent !important;
  }

  &:checked::before {
    background: #0054bc;
    color: #fff !important;
  }
`;

const tableGridSpacing = '0.75fr 0.75fr 1fr 0.5fr 1fr 0.5fr 1fr 0.25fr';

export const TableHeaderRow = styled.div`
  margin-top: 2rem;

  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: ${tableGridSpacing};
  grid-column-gap: 1rem;

  padding: 0.25rem;
`;

export const TableHeaderData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;

  white-space: normal;

  color: #0054bc;

  &:nth-of-type(1) {
    padding-left: 1rem;
  }
`;

export const EmptyText = styled.p`
  width: 100%;

  text-align: center;

  color: #0054bc;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const TextButton = styled.button`
  border: none;
  background: transparent;

  margin: auto;

  color: #0054bc;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TableBody = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.25rem;

  max-height: 40vh;

  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: auto;

  display: grid;
  grid-row-gap: 1rem;
  place-items: start;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  min-height: 3.5rem;

  display: grid;
  grid-template-columns: ${tableGridSpacing};
  grid-column-gap: 1rem;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

export const TableData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 400;
  font-size: 1rem;

  color: #515258;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:nth-of-type(1) {
    padding-left: 1rem;
  }
`;

export const DataText = styled.div`
  display: block;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-align: center;
  width: 100%;
`;

export const FilledButton = styled.button`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: #0054bc;

  font-family: 'Hindi Siliguri', sans-serif;

  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

export const IconButton = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;

  color: #0054bc;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

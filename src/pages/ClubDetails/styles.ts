import styled from 'styled-components';
import { HiOutlineUsers } from 'react-icons/hi';
import { FiChevronLeft } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;

  padding: 1.875rem 1.875rem 2.5rem 1rem;

  position: relative;
`;

export const Content = styled.div`
  width: calc(100% - 14.75rem);
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 0.125rem 0 0 4.125rem;
`;

export const MainForm = styled.form`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;
  flex-direction: column;

  padding-top: 2.125rem;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.00001px;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const TitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: fit-content;
  height: fit-content;

  padding-left: 2.5rem;

  margin-bottom: 3rem;

  position: relative;
`;

export const TitleIcon = styled(HiOutlineUsers)`
  font-size: 1.875rem;

  color: #515258;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.span`
  font-weight: 700;
  font-size: 2rem;

  color: #c6cedd;

  position: absolute;
  right: -7rem;
  bottom: 0.3rem;
`;

export const BackDivider = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1.875rem;

  gap: 1.5rem;

  margin-bottom: 2.5rem;
`;

export const IconTag = styled.div`
  width: 2.625rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  box-shadow: -3px 7px 13px #f1f7ff;

  transition: 500ms;

  &:hover {
    cursor: pointer;
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  font-size: 1.5rem;
  color: #10275a;
`;

export const BackTitle = styled.span`
  font-weight: 600;
  font-size: 1.75rem;

  color: #2c406e;
`;

export const FormDivider = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 7.5rem;

  width: 100%;
  height: fit-content;

  padding-right: 6.75rem;
  padding-left: 2.5rem;

  margin-bottom: 3.5rem;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    padding-right: 20rem;

    margin-bottom: 0;
  }
`;

export const FormColumn = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.span`
  font-weight: 600;
  font-size: 1.25rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 1.75rem;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1.125rem;

  color: #515258;

  margin-bottom: 0.625rem;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.625rem;

  padding-left: 1rem;

  border: none;
  border-radius: 0.75rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;

  color: #898f9a;

  margin-bottom: 1.25rem;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 2.25rem;

  width: 100%;
  height: fit-content;

  margin-bottom: 1.25rem;
`;

export const RowColumn = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const HourTitle = styled.span`
  font-weight: 600;
  font-size: 1.25rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-left: 2.5rem;
  margin-bottom: 1.75rem;
`;

export const HourForm = styled.div`
  width: fit-content;
  height: fit-content;

  padding-left: 2.5rem;
  padding-right: 6.75rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 7.5rem;
  grid-row-gap: 1rem;

  padding-bottom: 1rem;

  @media (max-width: 1280px) {
    grid-column-gap: 2rem;
  }
`;

export const FirstHourColumn = styled.div`
  width: 100%;
  height: 2.625rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SecondHourColumn = styled.div`
  width: 100%;
  height: 2.625rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RadioboxColumn = styled.div`
  width: 8.25rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  padding-left: 1.125rem;

  border: none;
  border-radius: 0.625rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RadioBox = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: none;
  content: none;

  &:before {
    content: '';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 0.75rem;
    height: 0.75rem;
    border: none;
    border-radius: 50%;
    background: #c6cedd;
  }
  &:checked::before {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

interface LabelProps {
  isSelected: boolean;
}

export const RadioboxLabel = styled.label<LabelProps>`
  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-weight: 400;
  font-size: 1rem;

  color: ${props => (props.isSelected ? '#0054BC' : '#515258')};
`;

export const InputDivider = styled.div`
  width: fit-content;
  height: 2.625rem;

  display: flex;
  align-items: center;
  gap: 0.375rem;

  font-weight: 400;
  font-size: 1rem;

  color: #515258;
`;

export const HourInput = styled.input`
  width: 4.375rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  outline: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.15);

  border: none;
  border-radius: 0.75rem;

  font-weight: 400;
  font-size: 1rem;

  color: #252729;

  &::placeholder {
    color: #c6cedd;
  }

  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

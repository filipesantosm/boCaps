import styled from 'styled-components';
import { HiOutlineTicket } from 'react-icons/hi';
import { FiChevronLeft } from 'react-icons/fi';
import { InputProps } from '../Login/styles';

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

  padding-left: 2.5rem;

  margin-bottom: 4rem;
`;

export const TitleIcon = styled(HiOutlineTicket)`
  font-size: 1.875rem;

  color: #003575;
`;

export const Title = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;

  color: #007126;
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
  font-family: 'Hind Siliguri';
  font-style: normal;
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

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    padding-right: 20rem;
  }
`;

export const FormColumn = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;

  color: #515258;

  margin-bottom: 0.625rem;
`;

export const Input = styled.input<InputProps>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.625rem;

  padding-left: 1rem;

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.75rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #252729;

  margin-bottom: 1.25rem;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const ImageInput = styled.input<InputProps>`
  width: 14.625rem;
  height: 5.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-position: center;

  background-color: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.75rem;

  color: transparent;

  ::-webkit-file-upload-button {
    display: none;
  }

  &::file-selector-button {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonDivider = styled.div`
  width: 100%;
  height: 3.75rem;

  padding-left: 2.5rem;

  display: flex;
  align-items: center;
  gap: 1.875rem;

  margin-top: 2.5rem;
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12.25rem;
  height: 3.75rem;

  border: none;
  border-radius: 0.875rem;

  background: #007126;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }

  @media (max-width: 1280px) {
    margin-bottom: 4.75rem;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10.5rem;
  height: 3.75rem;

  border: 1px solid #007126;
  border-radius: 0.875rem;

  background: #fff;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #007126;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }

  @media (max-width: 1280px) {
    margin-bottom: 4.75rem;
  }
`;

export const RadioboxDivider = styled.div`
  width: 100%;
  height: 2.625rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.875rem;

  margin-bottom: 2.375rem;
`;

export const RadioboxColumn = styled.div<InputProps>`
  width: 100%;
  height: 2.625rem;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  padding-left: 0.625rem;
  padding-right: 0.625rem;

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.75rem;

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
  outline: none;
  content: none;
  &:hover {
    cursor: pointer;
  }
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
    background: #007126;
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

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: ${props => (props.isSelected ? '#007126' : '#003575')};

  &:hover {
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  height: 6.5rem;

  padding: 1rem;

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.75rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #252729;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.75rem;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #c6cedd;

    border-radius: 99px;
  }

  &::placeholder {
    color: #c6cedd;
  }
`;

import styled from 'styled-components';
import { MdLockOutline } from 'react-icons/md';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
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

  padding: 0.125rem 0 0 6.75rem;
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

  margin-bottom: 3.75rem;
`;

export const TitleIcon = styled(MdLockOutline)`
  font-size: 1.875rem;

  color: #515258;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export const FormDivider = styled.div`
  width: 19.625rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  padding-left: 0.5rem;

  position: relative;

  margin-bottom: 1rem;

  &:nth-of-type(2) {
    margin-bottom: 1.75rem;
  }

  &:nth-of-type(3) {
    margin-bottom: 2rem;
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1.125rem;

  color: #515258;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.75rem;

  padding: 0 2rem 0 1rem;

  font-weight: 400;
  font-size: 1rem;

  color: #252729;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const InvisibleIcon = styled(HiOutlineEyeOff)`
  font-size: 1.25rem;

  color: #898f9a;

  position: absolute;
  bottom: 0.75rem;
  right: 0.875rem;

  &:hover {
    cursor: pointer;
  }
`;

export const VisibleIcon = styled(HiOutlineEye)`
  font-size: 1.25rem;

  color: #898f9a;

  position: absolute;
  bottom: 0.75rem;
  right: 0.875rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonDivider = styled.div`
  width: 100%;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 0.5rem;

  margin-bottom: 1rem;
`;

export const SaveButton = styled.button`
  width: 12.25rem;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: ${({ theme }) => theme.colors.primary};

  font-weight: 600;
  font-size: 1rem;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }

  &:disabled {
    background: #c6cedd;

    cursor: not-allowed;
  }
`;

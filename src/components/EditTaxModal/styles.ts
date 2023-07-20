import { FiTrash } from 'react-icons/fi';
import styled from 'styled-components';
import { InputProps } from '../../pages/Login/styles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(5px);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Content = styled.form`
  width: 23.125rem;
  height: fit-content;

  display: flex;
  flex-direction: column;

  padding: 1.5rem 0 1.5rem 2.375rem;

  background: white;

  border-radius: 1.5rem;

  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.75rem;

  color: #0054bc;

  margin-bottom: 2rem;
`;

export const Subtitle = styled.span`
  font-weight: 400;
  font-size: 1.125rem;

  color: #252729;

  margin-bottom: 1rem;
`;

export const InputDivider = styled.div`
  width: fit-content;
  height: 2.75rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 2.75rem;
`;

export const Input = styled.input<InputProps>`
  width: 6rem;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  outline: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.75rem;

  font-weight: 400;
  font-size: 1rem;

  color: #252729;
`;

export const ButtonDivider = styled.div`
  width: fit-content;
  height: 3.125rem;

  display: flex;
  align-items: center;
  gap: 1.875rem;
`;

export const CancelButton = styled.span`
  font-weight: 600;
  font-size: 1rem;

  color: #2c406e;

  transition: 500ms;

  &:hover {
    cursor: pointer;

    opacity: 0.875;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12.125rem;
  height: 3.125rem;

  border: none;
  border-radius: 0.875rem;

  background: #0054bc;

  font-weight: 400;
  font-size: 1rem;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

interface DeleteProps {
  hasTax: boolean;
}

export const DeleteDivider = styled.div<DeleteProps>`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.625rem;

  transition: 500ms;

  font-weight: ${props => (props.hasTax ? '600' : '400')};
  font-size: 1rem;

  color: ${props => (props.hasTax ? '#515258' : '#C6CEDD')};

  &:hover {
    cursor: ${props => (props.hasTax ? 'pointer' : 'default')};

    opacity: ${props => (props.hasTax ? '0.875' : '1')};
  }
`;

export const DeleteIcon = styled(FiTrash)`
  font-size: 1.375rem;
`;

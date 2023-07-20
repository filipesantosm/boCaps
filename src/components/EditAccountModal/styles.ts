import { MdErrorOutline } from 'react-icons/md';
import styled from 'styled-components';

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

export const Content = styled.div`
  width: 32rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.75rem 0 2.125rem 0;
  background: white;
  border-radius: 1.5rem;
  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const ErrorIcon = styled(MdErrorOutline)`
  font-size: 4rem;
  color: #515258;
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 110.7%;
  color: #515258;
  span {
    color: #515258;
  }
`;

export const ButtonDiv = styled.div`
  width: fit-content;
  height: 3.125rem;
  display: flex;
  align-items: flex-start;
  gap: 1.75rem;
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.125rem;
  height: 3.125rem;
  background: #ffffff;
  border: none;
  border-radius: 0.875rem;

  font-weight: 600;
  font-size: 1rem;

  color: #2c406e;

  transition: 500ms;
  &:hover {
    opacity: 0.75;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.125rem;
  height: 3.125rem;
  background: #515258;
  box-shadow: -3px 7px 13px #f1f7ff;
  border: none;
  border-radius: 0.875rem;

  font-weight: 600;
  font-size: 1rem;
  color: #fafafa;
  transition: 500ms;
  &:hover {
    opacity: 0.75;
  }
`;

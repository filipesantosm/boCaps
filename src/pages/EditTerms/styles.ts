import { TbClipboardText } from 'react-icons/tb';
import styled from 'styled-components';

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

export const MainForm = styled.main`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;
  flex-direction: column;

  padding-top: 2.125rem;
`;

export const TitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2.625rem;
  margin-bottom: 2rem;
`;

export const TitleIcon = styled(TbClipboardText)`
  font-size: 1.875rem;
  color: #515258;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;
  line-height: 110.7%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextArea = styled.textarea`
  width: calc(100% - 1.5rem);
  height: calc(100% - 16rem);
  padding: 2.125rem 3.25rem 1.875rem 2.5rem;
  outline: none;
  resize: none;
  background: #ffffff;
  box-shadow: -3px 7px 13px #f1f7ff;
  border: none;
  border-radius: 1.5rem;

  font-weight: 400;
  font-size: 1rem;
  color: #515258;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.625rem;
    display: block;
    border-radius: 7rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #e4e7f9;
    border-radius: 7rem;
  }
`;

export const ButtonDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 3.75rem;
  gap: 1.75rem;
  margin-top: auto;
`;

export const CancelButton = styled.button`
  width: 10.5rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.75rem;

  font-weight: 600;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.primary};

  transition: 500ms;
  &:hover {
    opacity: 0.75;
  }
`;

export const EditButton = styled.button`
  width: 14.375rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: -3px 7px 13px #f1f7ff;
  border: none;
  border-radius: 0.875rem;

  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grayfa};
  transition: 500ms;
  &:hover {
    opacity: 0.75;
  }
`;

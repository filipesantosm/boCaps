import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 35rem;
  height: fit-content;
  padding: 2.75rem 2.5rem 2.125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 1.5rem;
  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.75rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Field = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1.125rem;

  color: ${({ theme }) => theme.colors.gray51};
`;

export const Textarea = styled.textarea`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  height: 11.25rem;

  padding: 1rem;

  border-radius: 0.75rem;

  outline: none;
  border: none;
  resize: none;

  font-weight: 400;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray89};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayc6};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.5rem;
  color: red;
  font-size: 0.75rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const FilledButton = styled.button`
  width: 100%;
  min-height: 3rem;

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

export const OutlinedButton = styled(FilledButton)`
  background: transparent;

  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

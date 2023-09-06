import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  width: 100%;

  display: flex;
  gap: 3rem;
`;

export const ImageWrapper = styled.label`
  background: ${({ theme }) => theme.colors.white};

  min-width: 9rem;
  width: 9rem;
  height: 9rem;

  border-radius: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  cursor: pointer;
`;

export const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;

  object-fit: contain;
`;

export const ImageInput = styled.input`
  display: none;
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

export const Input = styled.input`
  width: 100%;
  height: 2.625rem;

  padding: 0 1rem;

  border: none;
  border-radius: 0.75rem;

  outline: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray89};

  margin-bottom: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayc6};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;

  flex: 1;

  padding: 1rem;

  border: none;
  border-radius: 0.75rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray89};

  margin-bottom: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayc6};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.25rem;
  color: red;
  font-size: 0.75rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  margin-left: auto;

  width: 100%;
  max-width: 40rem;

  display: flex;
  align-items: center;
  gap: 1.75rem;
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

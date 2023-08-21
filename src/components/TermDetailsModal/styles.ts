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
  max-width: 50rem;
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

  color: #0054bc;

  margin-bottom: 2rem;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormRow = styled.div`
  width: 100%;

  display: flex;
  gap: 3rem;
`;

export const ImageWrapper = styled.label`
  min-width: 7.8125rem;
  width: 7.8125rem;
  height: 7.8125rem;

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

  color: #515258;
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

  color: #898f9a;

  margin-bottom: 0.5rem;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 12rem;

  padding: 1rem;

  border: none;
  border-radius: 0.75rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;

  color: #898f9a;

  margin-bottom: 0.5rem;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.25rem;
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

export const OutlinedButton = styled(FilledButton)`
  background: transparent;

  color: #0054bc;
  border: 1px solid #0054bc;
`;

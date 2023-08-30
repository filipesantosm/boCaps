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

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 2rem;
`;

export const Form = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ObservationLabel = styled.label`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ObservationTextLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray51};
  font-size: 1.125rem;
`;

export const ObservationInput = styled.textarea`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  height: 11.25rem;

  padding: 1rem;

  border-radius: 0.75rem;

  outline: none;
  border: none;
  resize: vertical;

  font-weight: 400;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.gray89};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayc6};
  }
`;

export const SelectLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray51};
  white-space: nowrap;
`;

export const SelectWrapper = styled.div`
  width: 20.5rem;

  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  margin-left: auto;
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonSubmit = styled.button`
  margin-left: auto;
  height: 2.625rem;
  width: 12.5rem;
  background-color: #0f5cbe;
  color: #fff;
  border: none;
  border-radius: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

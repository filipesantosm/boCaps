import styled from 'styled-components';

export const InputLabel = styled.label``;
export const LabelText = styled.span`
  font-weight: 400;
  font-size: 1.125rem;

  color: #515258;
  white-space: nowrap;
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

  &::placeholder {
    color: #c6cedd;
  }
  @media (max-width: 480px) {
    width: 100% !important;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ErrorMessage = styled.span`
  display: grid;
  grid-template-rows: 0fr;
  color: #be0f0f;

  transition: all ease 0.2s;
  &:has(> span) {
    grid-template-rows: 1fr;
  }
`;

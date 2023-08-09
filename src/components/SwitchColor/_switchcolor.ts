import styled from 'styled-components';

export const Ball = styled.span`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;

  display: block;

  background-color: #be0f0f;

  transition: transform 0.2s ease-in-out;
`;
export const InputWrapper = styled.label`
  cursor: pointer;

  display: block;

  height: 1.5rem;
  /* padding: 5px; */
  aspect-ratio: 2/1;
  border-radius: 1.5rem;
  user-select: none;

  transition: background-color 0.2s ease-in-out;

  background-color: transparent;
  border: 2px solid #be0f0f;

  input {
    display: none;
    &:checked + ${Ball} {
      transform: translateX(calc(100% + 4px));
    }
  }
  &:has(input:checked) {
    border-color: #15c149;

    ${Ball} {
      background-color: #15c149;
    }
  }
`;

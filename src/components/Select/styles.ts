import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  p {
    padding-left: 16px;
    font-size: 0.925rem;
  }
`;

export const LabelText = styled.span.attrs({ 'data-com': 'LabelText' })`
  font-size: 0.75rem;
`;

export const ErrorMessage = styled.span`
  display: grid;
  grid-template-rows: 0fr;

  transition: all ease 0.2s;
  &:has(> span) {
    grid-template-rows: 1fr;
  }
`;

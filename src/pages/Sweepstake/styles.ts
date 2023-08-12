import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;
  line-height: 110.7%;
  color: #0054bc;
`;

export const Content = styled.form`
  width: calc(100% - 14.75rem);
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 0.125rem 0 0 4.125rem;

  padding-top: 2.125rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GenericSection = styled.section`
  background-color: #fff;
  border-radius: 1.125rem;
  margin-bottom: 3rem;
  padding: 2rem 3rem;
`;

export const MainSection = styled(GenericSection)``;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.375rem;

  margin-bottom: 1rem;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #7d7d7d;
  font-size: 1.125rem;
`;

export const MainInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const InputLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: unset;
    gap: 1.5rem;
  }
`;

export const ChanceSection = styled(GenericSection)``;

export const RetrieveHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.375rem;
`;

export const RetrieveArrowButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #0f5cbe;
  height: 1rem;

  transition: all ease 0.2s;
`;

interface RetrieveTitleProps {
  isExpanded: boolean;
}
export const RetrieveContainer = styled.div<RetrieveTitleProps>`
  display: grid;
  grid-template-rows: 0fr;

  transition: all linear 0.2s;

  > div {
    overflow: hidden;
    transition: all linear 0.2s;
  }

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      grid-template-rows: 1fr;
      padding-top: 1.5rem;

      > div {
        padding-bottom: 1rem;
        overflow: unset;
      }
    `}
`;

export const SelectLabel = styled.label`
  margin-right: 1.25rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: #515258;
  white-space: nowrap;
`;

export const SelectWrapper = styled.div`
  width: 12.5rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ChanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ChanceLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ObservationLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ObservationTextLabel = styled.span``;

export const ObservationInput = styled.textarea`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  height: 11.25rem;

  padding: 1rem;

  border-radius: 0.75rem;

  outline: none;
  border: none;
  resize: vertical;
`;

export const AdditionalDataSection = styled(GenericSection)``;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AdditionalLine = styled.div``;

export const SelectWrapperAdditional = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 2/1;
  object-fit: contain;
`;

export const ImageLabelButton = styled.label`
  input {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f5cbe;
  color: #fff;

  height: 2.5rem;
  width: 12.5rem;

  cursor: pointer;

  user-select: none;

  border-radius: 0.75rem;
`;

export const ButtonFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const SaveButton = styled.button`
  background-color: #0f5cbe;
  color: #fff;
  border: 1px solid #0f5cbe;

  height: 3rem;
  width: 12.5rem;
  border-radius: 0.625rem;

  font-size: 1rem;
  font-weight: 500;

  &:disabled {
    cursor: not-allowed;
  }

  transition: opacity 0.3s;

  &:hover {
    &:not(:disabled) {
      opacity: 0.9;
    }
  }
`;

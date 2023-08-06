import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const GenericSection = styled.section`
  background-color: #fff;
  border-radius: 1.125rem;
  margin-bottom: 3rem;
  padding: 2rem 3rem;
`;

export const AwardSection = styled(GenericSection)``;

export const AwardLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
`;

export const AwardContainer = styled.div``;

export const AwardInputContainer = styled.div``;

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

export const ObservationLabel = styled.label`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ObservationTextLabel = styled.span`
  color: #515258;
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

  color: #898f9a;

  &::placeholder {
    color: #c6cedd;
  }
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

export const AwardTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin-top: 1.5rem;
`;

export const AwardHeadTable = styled.div`
  color: #0f5cbe;
  font-size: 1rem;
  text-align: center;
`;

export const AwardHeadLineTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const AwardCellLineTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  border-radius: 0.813rem;
`;

export const AwardCellTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SeeMoreButton = styled.button`
  color: #4e74a4;
  font-size: 1rem;
  text-align: center;
  border: none;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const IconLink = styled(Link)`
  font-size: 1.8rem;
  color: #1c1c1c;
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.8rem;
  color: #1c1c1c;
`;

export const SelectLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: #515258;
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

import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const IconTag = styled.div`
  width: 2.625rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #fff;

  box-shadow: -3px 7px 13px #f1f7ff;

  transition: 300ms;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  font-size: 1.5rem;
  color: #10275a;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;

  margin-bottom: 1rem;
`;

export const TopSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChartLabel = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;

export const ClientInformationColumn = styled.div`
  width: 100%;
  max-width: max(35vw, 40rem);

  display: flex;
  flex-direction: column;
`;

export const ClientInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 0.5rem;
`;

export const ClientInfoTitle = styled.p`
  min-width: 20%;
  width: max-content;
  max-width: max-content;

  font-size: 1.125rem;
  font-weight: 600;
  color: #0054bc;
`;

export const ClientInfoText = styled.p`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 2.625rem;

  padding: 0.5rem 1.25rem;

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

const tableGridSpacing = '0.75fr 0.75fr 1fr 0.5fr 1fr 0.5fr 0.5fr';

export const TableHeaderRow = styled.div`
  margin-top: 2rem;

  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: ${tableGridSpacing};
  grid-column-gap: 1rem;

  padding: 0.25rem;
`;

export const TableHeaderData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 600;
  font-size: 1.125rem;

  white-space: normal;

  color: #0054bc;

  &:nth-of-type(1) {
    padding-left: 1rem;
  }
`;

export const EmptyText = styled.p`
  width: 100%;

  text-align: center;

  color: #0054bc;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const TextButton = styled.button`
  border: none;
  background: transparent;

  margin: auto;

  color: #0054bc;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TableBody = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.25rem;

  max-height: 35vh;

  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: auto;

  display: grid;
  grid-row-gap: 1rem;
  place-items: start;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  min-height: 3.5rem;

  display: grid;
  grid-template-columns: ${tableGridSpacing};
  grid-column-gap: 1rem;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

export const TableData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 400;
  font-size: 1rem;

  color: #515258;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:nth-of-type(1) {
    padding-left: 1rem;
  }
`;

export const DataText = styled.div`
  display: block;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-align: center;
  width: 100%;
`;

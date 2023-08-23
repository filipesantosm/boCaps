import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 1rem;
`;

const tableGridSpacing = '0.875fr 0.75fr 0.75fr 0.1fr';

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

  color: ${({ theme }) => theme.colors.primary};

  &:nth-of-type(1) {
    padding-left: 1rem;
  }
`;

export const EmptyText = styled.p`
  width: 100%;

  text-align: center;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const TextButton = styled.button`
  border: none;
  background: transparent;

  margin: auto;

  color: ${({ theme }) => theme.colors.primary};
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

  max-height: 40vh;

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

export const IconButton = styled.button`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;

  color: ${({ theme }) => theme.colors.primary};

  transition: 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

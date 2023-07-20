import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 4rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;
`;

export const TableWrapper = styled.div`
  width: 100%;

  max-width: 32rem;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeader = styled.th`
  text-align: center;

  font-size: 1.75rem;
  font-weight: 600;
  color: #0054bc;
`;

export const TableData = styled.td`
  text-align: center;

  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.04em;
`;

export const ChartWrapper = styled.div`
  height: fit-content;

  padding: 4rem;
  padding-top: 2rem;
  border-radius: 0.625rem;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const ChartTitle = styled.p`
  margin-bottom: 2rem;

  font-size: 1.125rem;
  font-weight: 600;
`;

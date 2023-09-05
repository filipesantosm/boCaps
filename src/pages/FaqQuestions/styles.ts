import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 2rem;
`;

export const PageHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
`;

export const HeaderButtons = styled.div`
  width: 100%;
  max-width: 37.5rem;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2.75rem;

  max-width: 15.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: ${({ theme }) => theme.colors.primary};

  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

export const SearchDivider = styled.form`
  width: 100%;
  max-width: 40rem;
  height: 2.75rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  outline: none;

  background: #ffffff;

  padding-left: 2.875rem;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 0.75rem;

  font-weight: 400;
  font-size: 0.875rem;

  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #818da3;
`;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  align-self: center;
  left: 1rem;

  color: ${({ theme }) => theme.colors.grayc6};

  font-size: 1.5rem;
`;

const tableGridSpacing = '1fr 1fr 0.5fr';

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

export const TableBody = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.25rem;

  max-height: 60vh;

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

  color: ${({ theme }) => theme.colors.gray51};

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

export const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const IconButton = styled.button`
  border: none;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.75rem;

  transition: 500ms;

  &:hover {
    opacity: 0.75;
  }
`;

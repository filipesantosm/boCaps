import styled from 'styled-components';
import { HiOutlineTicket } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1.875rem 1.875rem 2.5rem 1rem;

  position: relative;
`;

export const Content = styled.div`
  width: calc(100% - 14.75rem);
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 0.125rem 0 0 4.125rem;
`;

export const MainForm = styled.main`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;
  flex-direction: column;

  padding-top: 2.125rem;
`;

export const TitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding-left: 2.5rem;

  margin-bottom: 4rem;
`;

export const TitleIcon = styled(HiOutlineTicket)`
  font-size: 1.875rem;

  color: #003575;
`;

export const Title = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;

  color: #007126;
`;

export const ManageButton = styled.button`
  width: 22.625rem;
  height: 4.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  border: 1px solid #003575;
  border-radius: 0.75rem;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;

  color: #003575;

  transition: 500ms;

  margin-bottom: 4rem;

  &:hover {
    background: #003575;
    color: #fff;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;

  padding-left: 2.5rem;

  margin-bottom: 2rem;
`;

export const TableHeaderTitle = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;

  color: #007126;
`;

export const SearchDivider = styled.div`
  width: 14.625rem;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  outline: none;

  background: transparent;

  padding-left: 2.875rem;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 0.75rem;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #818da3;
`;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  align-self: center;
  left: 1rem;

  color: #c6cedd;

  font-size: 1.5rem;
`;

export const Table = styled.div`
  width: 100%;
  height: calc(100% - 26.375rem);

  padding-right: 3.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.75rem;
  grid-template-rows: repeat(8, 1fr);
  grid-row-gap: 0.625rem;

  margin-bottom: auto;
`;

export const GreenFeeComp = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 2.5rem;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

export const CompText = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #515258;
`;

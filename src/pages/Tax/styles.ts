import styled from 'styled-components';
import { FaBalanceScaleLeft } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FiTrash } from 'react-icons/fi';

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

export const TitleIcon = styled(FaBalanceScaleLeft)`
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

export const TableHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr;

  margin-bottom: 2rem;
`;

export const TableHeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;

  color: #007126;

  &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(2) {
    gap: 1.625rem;
  }

  &:nth-of-type(3) {
    padding-left: 0.375rem;

    color: #003575;

    gap: 0.875rem;

    &:hover {
      cursor: pointer;
    }
  }
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

export const TableBody = styled.div`
  width: 100%;
  height: calc(100% - 25.625rem);

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 1.25rem;

  margin-bottom: auto;
`;

export const TaxComp = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 0.5rem;
`;

export const TaxCompDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:nth-of-type(1) {
    padding-left: 2.625rem;
  }

  &:nth-of-type(3) {
    padding-left: 0.375rem;
  }

  &:nth-of-type(4) {
    gap: 0.625rem;
  }
`;

interface TaxProps {
  hasTax?: boolean;
}

export const TaxCompText = styled.div<TaxProps>`
  display: block;

  max-width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: ${props => (props.hasTax ? '600' : '400')};
  font-size: 1rem;

  color: ${props => (props.hasTax ? '#003575' : '#252729')};

  &:hover {
    cursor: ${props => (props.hasTax ? 'pointer' : 'default')};
  }
`;

export const EditDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.5rem 0 1.875rem;

  width: 90%;
  height: 2.125rem;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 0.5rem;
`;

export const TaxText = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;

  color: #252729;
`;

export const EditIcon = styled(BsPencil)`
  font-size: 1rem;

  color: #003575;

  transition: 500ms;

  &:hover {
    cursor: pointer;

    opacity: 0.875;
  }
`;

export const DeleteIcon = styled(FiTrash)`
  font-size: 1.375rem;

  color: #003575;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.875;
  }
`;

export const WarnIcon = styled(RiErrorWarningLine)`
  color: #f8c309;

  font-size: 1.375rem;
`;

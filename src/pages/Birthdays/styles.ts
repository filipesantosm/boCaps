import { AiOutlineEye } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FiTrash } from 'react-icons/fi';
import { MdOutlineCake } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;

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

  margin-bottom: 2rem;
`;

export const TitleIcon = styled(MdOutlineCake)`
  font-size: 1.875rem;

  color: #515258;
`;

export const Title = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;
`;

export const FilterDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 4.625rem;

  padding-left: 2.5rem;

  margin-bottom: 5rem;
`;

interface FilterProps {
  isSelected: boolean;
}

export const FilterText = styled.span<FilterProps>`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;

  position: relative;

  color: ${props => (props.isSelected ? '#0054BC' : '#C6CEDD')};

  transition: 500ms;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';

    position: absolute;
    bottom: -0.125rem;
    left: 0;

    display: block;

    width: 2.625rem;
    height: 0.375rem;

    border: none;
    border-radius: 1px;

    background: #00182c;

    visibility: ${props => (props.isSelected ? 'visible' : 'hidden')};
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 12fr 2fr 1fr;

  padding-right: 3.125rem;

  margin-bottom: 2.375rem;
`;

export const ClientHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(8, 1fr);

  padding-right: 3.125rem;

  margin-bottom: 2.375rem;
`;

export const TableHeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;

  color: #0054bc;

  &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(2) {
    gap: 1.625rem;
  }

  &:nth-of-type(3) {
    justify-content: center;
  }

  &:nth-of-type(4) {
    justify-content: flex-end;

    padding-right: 1.375rem;
  }
`;

export const ClientHeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;

  color: #0054bc;

  /* &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(2) {
    gap: 1.625rem;
  }

  &:nth-of-type(3) {
    justify-content: center;

    color: #515258;

    gap: 0.625rem;

    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  &:nth-of-type(4) {
    justify-content: center;
  }

  &:nth-of-type(5) {
    justify-content: flex-end;

    padding-right: 1.375rem;
  } */
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

  background: #0054bc;

  font-family: 'Hindi Siliguri', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

export const SearchDivider = styled.div`
  width: 100%;
  max-width: 20rem;
  height: 2.75rem;

  display: flex;
  align-items: center;

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
  height: calc(100% - 26.625rem);

  padding-right: 3.125rem;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 0.625rem;

  margin-bottom: auto;
`;

export const UserComp = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 12fr 2fr 1fr;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

export const ClientComp = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(8, 1fr);

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

export const CompDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #515258;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(3) {
    justify-content: center;
  }

  &:nth-of-type(4) {
    justify-content: flex-end;

    padding-right: 1.375rem;
  }
`;

export const ClientCompDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #515258;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(3) {
    justify-content: center;

    padding-right: 2.375rem;
  }

  &:nth-of-type(4) {
    justify-content: center;
  }

  &:nth-of-type(5) {
    justify-content: flex-end;

    padding-right: 1.375rem;
  }
`;

export const CompText = styled.div`
  display: block;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const VisualizeIcon = styled(AiOutlineEye)`
  font-size: 1.75rem;

  color: #0054bc;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const DeleteIcon = styled(FiTrash)`
  font-size: 1.5rem;

  color: #515258;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const BirthdayFilter = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.625rem 1.875rem 0.375rem 0.875rem;

  background: #ffffff;

  border: none;
  border-radius: 0px 0px 20px 20px;

  position: absolute;
  top: 2.75rem;
  left: 0;
  z-index: 999;

  filter: drop-shadow(0px 2px 5px rgba(175, 176, 197, 0.1));
`;

export const BirthdayText = styled.div`
  width: 100%;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  letter-spacing: 0.005em;

  padding-bottom: 0.625rem;

  color: #515258;

  border-bottom: 1px solid #e4e7f9;

  &:hover {
    cursor: pointer;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

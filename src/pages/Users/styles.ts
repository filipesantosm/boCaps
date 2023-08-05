import { AiOutlineEye } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const MainForm = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;

  margin-bottom: 2rem;
`;

const clientTableGridSpacing =
  '0.75fr 0.75fr 0.75fr 2.5fr 1.875fr 1fr 1fr 1fr 0.5fr 1fr 1fr 1fr 0.75fr 0.5fr';

export const ClientHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: ${clientTableGridSpacing};
  grid-column-gap: 1rem;

  padding: 0.25rem;
`;

export const ClientHeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  font-weight: 600;
  font-size: 1.125rem;

  color: #0054bc;

  &:nth-of-type(1) {
    padding-left: 1rem;
  }
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
  flex: 1;

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

export const ClientComp = styled.div`
  width: 100%;
  min-height: 3.5rem;

  display: grid;
  grid-template-columns: ${clientTableGridSpacing};
  grid-column-gap: 1rem;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

export const ClientCompDivider = styled.div`
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

export const CompText = styled.div`
  display: block;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-align: center;
  width: 100%;
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

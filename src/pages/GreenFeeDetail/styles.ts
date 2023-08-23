import styled from 'styled-components';
import { HiOutlineTicket } from 'react-icons/hi';
import { FiChevronLeft } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';

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

  margin-bottom: 4rem;
`;

export const TitleIcon = styled(HiOutlineTicket)`
  font-size: 1.875rem;

  color: #515258;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export const BackDivider = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1.875rem;

  gap: 1.5rem;

  margin-bottom: 2.75rem;
`;

export const IconTag = styled.div`
  width: 2.625rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  box-shadow: -3px 7px 13px #f1f7ff;

  transition: 500ms;

  &:hover {
    cursor: pointer;
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  font-size: 1.5rem;
  color: #10275a;
`;

export const BackTitle = styled.span`
  font-weight: 600;
  font-size: 1.75rem;

  color: #2c406e;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 2.5fr 0.875fr 2.5fr 2.5fr 1.5fr;

  padding-right: 3.125rem;

  margin-bottom: 2.375rem;
`;

export const TableHeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 600;
  font-size: 1.75rem;

  color: ${({ theme }) => theme.colors.primary};

  &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(4) {
    justify-content: center;
  }

  &:nth-of-type(6) {
    justify-content: flex-end;

    padding-right: 1.375rem;
  }
`;

export const TableBody = styled.div`
  width: 100%;
  height: calc(100% - 25.625rem);

  padding-right: 3.125rem;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 0.625rem;

  margin-bottom: auto;
`;

export const FeeComp = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 2.5fr 0.875fr 2.5fr 2.5fr 1.5fr;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.5rem;
`;

interface CompProps {
  isActive: boolean;
}

export const CompDivider = styled.div<CompProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 400;
  font-size: 1rem;

  color: ${props => (props.isActive ? '#515258' : '#C6CEDD')};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:nth-of-type(1) {
    padding-left: 2.5rem;
  }

  &:nth-of-type(4) {
    justify-content: center;
  }

  &:nth-of-type(5) {
    color: ${props => (props.isActive ? '#59C076' : '#C6CEDD')};
  }

  &:nth-of-type(6) {
    gap: 1.75rem;

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

export const ButtonDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.75rem;

  width: 100%;
  height: 3.125rem;
`;

export const NewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10.875rem;
  height: 3.125rem;

  border: none;
  border-radius: 0.875rem;

  background: ${({ theme }) => theme.colors.primary};

  font-weight: 400;
  font-size: 1rem;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

export const VisualizeIcon = styled(AiOutlineEye)`
  font-size: 1.75rem;

  color: ${({ theme }) => theme.colors.primary};

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

import styled from 'styled-components';
import { BiWalletAlt } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
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

export const MainForm = styled.div`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;
  flex-direction: column;

  padding-top: 2.125rem;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.00001px;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const TitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding-left: 2.5rem;

  margin-bottom: 3.75rem;
`;

export const TitleIcon = styled(BiWalletAlt)`
  font-size: 1.875rem;

  color: #515258;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;
`;

export const SubtitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  padding-left: 0.5rem;

  margin-bottom: 2.375rem;

  font-weight: 600;
  font-size: 1.75rem;

  color: #0054bc;
`;

export const PaymentDivider = styled.div`
  width: calc(100% - 3.125rem);
  height: fit-content;

  padding-left: 0.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 2.375rem;
  grid-row-gap: 2rem;

  margin-bottom: 3.5rem;
`;

export const Card = styled.div`
  width: 100%;
  height: 8.875rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem 0 2rem 1.5rem;

  background: #ffffff;

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.03);

  filter: drop-shadow(0px 2px 5px rgba(175, 176, 197, 0.42));

  border: none;
  border-radius: 1.5rem;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-weight: 400;
  font-size: 1.5rem;

  color: #252729;
`;

export const PixIcon = styled.img`
  width: 1.25rem;
  height: auto;
`;

export const SwitchDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SwitchText = styled.span`
  font-weight: 500;
  font-size: 1.125rem;

  color: #515258;
`;

export const DescriptionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  padding-left: 0.5rem;

  margin-bottom: 1.5rem;
`;

export const IconDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-weight: 600;
  font-size: 1.25rem;

  color: #252729;
`;

export const Price = styled.span`
  font-weight: 400;
  font-size: 1.25rem;

  color: #515258;
`;

export const AccountContainer = styled.div`
  width: fit-content;
  height: fit-content;

  padding-left: 0.5rem;

  margin-bottom: 2.875rem;
`;

export const AccountCard = styled.div`
  width: 25.75rem;
  height: fit-content;

  padding: 1.25rem 1.625rem 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  border: none;
  border-radius: 1.125rem;
`;

export const AccountTitle = styled.span`
  font-weight: 400;
  font-size: 1.25rem;

  color: #252729;
`;

export const InformationDivider = styled.div`
  display: flex;
  align-items: flex-start;

  height: calc(100% - 2.5rem);
  width: 100%;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  margin-right: 4.75rem;

  font-weight: 400;
  font-size: 1rem;

  color: #898f9a;
`;

export const ColumnSpan = styled.span``;

export const LastColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  font-size: 1.5rem;

  color: #515258;
`;

export const EditIcon = styled(BsPencil)`
  transition: 500ms;

  &:hover {
    cursor: pointer;

    opacity: 0.875;
  }
`;

export const DeleteIcon = styled(FiTrash)`
  transition: 500ms;

  &:hover {
    cursor: pointer;

    opacity: 0.875;
  }
`;

export const ButtonDivider = styled.div`
  padding-left: 0.5rem;

  width: 100%;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 1rem;
`;

export const NewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12.5rem;
  height: 3.75rem;

  border: 1px solid #0054bc;
  border-radius: 0.75rem;

  background: #ffffff;

  font-weight: 600;
  font-size: 1rem;

  color: #0054bc;

  transition: 500ms;

  &:hover {
    background: #0054bc;

    color: #fff;
  }
`;

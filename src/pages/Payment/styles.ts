import styled from 'styled-components';
import { BiWalletAlt } from 'react-icons/bi';

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

  color: #003575;
`;

export const Title = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;

  color: #007126;
`;

export const SubtitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  padding-left: 0.5rem;

  margin-bottom: 2.375rem;

  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;

  color: #007126;
`;

export const PaymentDivider = styled.div`
  width: calc(100% - 3.125rem);
  height: 8.875rem;

  padding-left: 0.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.375rem;

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

  font-family: 'Hind Siliguri';
  font-style: normal;
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
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;

  color: #003575;
`;

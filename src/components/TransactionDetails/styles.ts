import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 40rem;
  height: fit-content;
  padding: 2.75rem 1.25rem 2.125rem 2.5rem;

  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 1.5rem;
  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;

  padding-right: 0.25rem;

  width: 3rem;
  height: 2.75rem;

  font-size: 2.75rem;
  color: #1a1a1a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.75rem;

  color: #0054bc;

  margin-bottom: 2rem;
`;

export const InformationContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  max-height: 60vh;
  overflow: auto;
  padding-right: 1.25rem;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 #f3f3f3;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    width: 6px;
    background: #f3f3f3;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 6px;
    background: #d6d6d6;
  }
`;

export const InformationRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0.5rem;

  border-bottom: 1px solid #dcdcdc;
`;

export const InformationText = styled.p`
  width: fit-content;
  max-width: 50%;

  white-space: normal;
  word-break: break-word;

  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
`;

export const ClientLink = styled(NavLink)`
  max-width: 50%;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0054bc;
  font-size: 1rem;
  font-weight: 500;

  svg {
    font-size: 1.5rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const BottomSection = styled.div`
  padding: 0.5rem;
`;

export const BottomSectionTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
`;

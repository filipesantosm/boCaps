import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: transparent;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  cursor: pointer;
`;

interface SortArrowProps {
  isActive?: boolean;
}

export const SortArrow = styled.div<SortArrowProps>`
  color: ${({ isActive }) => (isActive ? '#0054bc' : '#ccc')};
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

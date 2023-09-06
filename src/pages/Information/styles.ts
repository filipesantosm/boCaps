import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Link = styled(NavLink)`
  width: 100%;
  max-width: 35rem;

  background: ${({ theme }) => theme.colors.white};
  padding: 0.875rem 1.5rem;
  border-radius: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;

  svg {
    font-size: 1.875rem;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.98);
  }
`;

import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  width: 29.125rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  // padding: 1rem 1.5rem 1rem 1rem;
  padding: 0 1.5rem 0.5rem;
  box-shadow: 16px 8px 20px rgba(197, 197, 197, 0.25);
  border-radius: 1.5rem;
`;

export const UserDivider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const UserRole = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: #515258;
`;

export const UserName = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: #898f9a;
`;

export const LogoutDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  transition: 500ms;
  margin-top: auto;
  margin-bottom: 0.5rem;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  font-size: 1.25rem;
  color: #515258;
`;

export const LogoutText = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: #515258;
`;

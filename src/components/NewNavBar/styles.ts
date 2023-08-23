import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const MenuText = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
  margin-left: 1.125rem;
  transition: max-width 0.3s, padding 0.3s, overflow 0.5s;
  white-space: nowrap;
`;

export const HamburgerButton = styled.button`
  border: none;
  background: transparent;

  width: 100%;

  padding-left: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: #c6cedd;

  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;
`;

export const Container = styled.aside<ContainerProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.125rem;
  padding-bottom: 2rem;
  background-color: #fff;

  box-shadow: 16px 8px 20px rgba(197, 197, 197, 0.25);
  border-radius: 1.5rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${({ isOpen }) =>
    isOpen
      ? css`
          ${MenuText} {
            max-width: 14rem;
            padding-right: 2rem;
          }
        `
      : css`
          ${MenuText} {
            max-width: 0;
            overflow: hidden;
          }
        `}
`;

export const Logo = styled.img`
  width: 10.375rem;
  height: auto;
  object-fit: cover;
  margin-bottom: 7.125rem;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: transparent;
  margin-bottom: 2.25rem;
  transition: 500ms;
  position: relative;
  .active {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2rem;
    }
  }
  .active .icon {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #c6cedd;
  text-decoration: none;

  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 1.125rem;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

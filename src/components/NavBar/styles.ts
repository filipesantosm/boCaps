import styled from 'styled-components';

export const Container = styled.div`
  width: 14.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.125rem;
  box-shadow: 16px 8px 20px rgba(197, 197, 197, 0.25);
  border-radius: 3rem;
`;

export const Logo = styled.img`
  width: 10.375rem;
  height: auto;
  object-fit: cover;
  margin-bottom: 7.125rem;

  @media (max-width: 1380px) {
    margin-bottom: 3rem;

    width: 8.75rem;
  }

  @media (max-width: 1280px) {
    @media (min-height: 830px) {
      margin-bottom: 7.125rem;

      width: 10.375rem;
    }
  }
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
      background: #515258;
      border-radius: 2rem;
    }
  }
  .active .icon {
    color: #515258;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  @media (max-width: 1380px) {
    margin-bottom: 1.75rem;
  }

  @media (max-width: 1280px) {
    @media (min-height: 830px) {
      margin-bottom: 2.25rem;
    }
  }
`;

export const MenuText = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
  margin-left: 1.125rem;
`;

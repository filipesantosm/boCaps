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
  max-width: 32rem;
  height: fit-content;
  padding: 2.75rem 2.5rem 2.125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 1.5rem;
  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.gray51};

  span {
    color: ${({ theme }) => theme.colors.error30};
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 4rem;

  width: fit-content;
  height: 3.125rem;
  display: flex;
  align-items: flex-start;
  gap: 1.75rem;
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.125rem;
  height: 3.125rem;
  background: #ffffff;
  box-shadow: -3px 7px 13px #f1f7ff;
  border: none;
  border-radius: 0.875rem;

  font-weight: 400;
  font-size: 1rem;
  color: #2c406e;
  transition: 500ms;
  &:hover {
    opacity: 0.75;
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.125rem;
  height: 3.125rem;
  background: ${({ theme }) => theme.colors.error30};
  box-shadow: -3px 7px 13px #f1f7ff;
  border: none;
  border-radius: 0.875rem;

  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grayfa};
  transition: 500ms;
  &:hover {
    opacity: 0.75;
  }
`;

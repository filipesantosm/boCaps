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
  position: relative;

  margin: 0 auto;
  width: 90%;
  max-width: 35rem;
  height: fit-content;
  padding: 2.75rem 2.5rem 2.125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 1.5rem;
  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;

  position: absolute;
  top: 2.5rem;
  right: 2rem;

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

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 2rem;
`;

export const NumbersContainer = styled.div`
  width: 100%;
  max-width: 22rem;

  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const NumbersHeader = styled.div`
  border-top-right-radius: 0.875rem;
  border-top-left-radius: 0.875rem;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;

  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NumbersGrid = styled.div`
  width: 100%;
  max-width: 22rem;
  min-height: 18rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, minmax(2.125rem, 1fr));
  grid-gap: 1.5rem;

  padding: 1.5rem;
  border-bottom-right-radius: 0.875rem;
  border-bottom-left-radius: 0.875rem;
  background: ${({ theme }) => theme.colors.grayfa};
`;

interface NumberProps {
  isActive?: boolean;
}

export const NumberText = styled.p<NumberProps>`
  background: #fff;

  width: 100%;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.4375rem;

  color: #1a1a1a;
  font-weight: 500;
  font-size: 1rem;
`;

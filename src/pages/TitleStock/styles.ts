import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: flex;

  gap: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  max-width: 18rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const CardValue = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

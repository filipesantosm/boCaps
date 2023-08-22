import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 22rem;

  display: flex;
  flex-direction: column;
  margin: auto;
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
  border-radius: 0.875rem;
  background: #fafafa;
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

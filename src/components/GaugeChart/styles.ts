import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  text-align: center;
  font-weight: 700;
`;

export const Content = styled.div`
  width: 100%;

  background: #fff;

  border-radius: 0.625rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 1rem 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const LegendContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LegendColor = styled.div`
  min-width: 2rem;
  width: 2rem;
  min-height: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
`;

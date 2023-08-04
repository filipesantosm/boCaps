import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.main`
  width: 100%;
  height: 100vh;
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  padding: 2rem 4rem;
`;

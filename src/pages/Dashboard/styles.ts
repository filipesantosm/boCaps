import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;
`;

export const FilterSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FilterRow = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;
`;

export const FilterField = styled.div`
  width: 100%;
`;

export const FilterLabel = styled.label`
  margin-right: 1.25rem;
  min-width: 30%;
  width: 30%;

  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  color: #515258;
  white-space: nowrap;
`;

export const FilterInput = styled.input`
  outline: none;
  border: none;

  width: 100%;
  height: 2.625rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;
  color: #898f9a;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const FilledButton = styled.button`
  margin-top: auto;

  width: 100%;
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: #0054bc;

  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

export const ChartsSection = styled.section`
  margin-top: 2rem;
  padding: 0.375rem;

  height: 65vh;
  overflow: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 #f3f3f3;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    width: 6px;
    background: #f3f3f3;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 6px;
    background: #d6d6d6;
  }
`;

export const ChartContainer = styled.div`
  padding: 1.5rem 3rem 1rem;

  background: #fff;

  border-radius: 0.875rem;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
`;

export const ChartWrapper = styled.div`
  position: relative;

  width: 11vw;

  margin: auto 0;
`;

export const ChartInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TotalValue = styled.p`
  margin-bottom: auto;
  font-size: 1.875rem;
  font-weight: 600;
  color: #1a1a1a;
`;

export const CenterText = styled.p`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  color: #1a1a1a;
`;

export const ChartTitle = styled.p`
  margin-bottom: auto;

  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;

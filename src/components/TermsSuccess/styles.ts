import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(5px);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Content = styled.div`
  width: 32rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.75rem 0 1.5rem 0;

  background: white;

  border-radius: 1.5rem;

  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const SuccessIcon = styled.img`
  width: 3.75rem;
  height: auto;

  margin-bottom: 1.625rem;
`;

export const Title = styled.span`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;

  color: #007126;

  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-family: 'Hind Siliguri';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 110.7%;

  color: #515258;
`;

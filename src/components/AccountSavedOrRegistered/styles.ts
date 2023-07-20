import { RiCloseFill } from 'react-icons/ri';
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
  width: 34rem;
  height: fit-content;

  position: relative;

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
  font-weight: 500;
  font-size: 2rem;

  color: #0054bc;

  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 110.7%;

  color: #515258;
`;

export const CloseIcon = styled(RiCloseFill)`
  font-size: 2rem;

  color: 003575;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

import { FaCheckCircle } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
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
  width: 100%;
  max-width: 22rem;
  height: fit-content;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.75rem 2.5rem 2.125rem;

  background: white;

  border-radius: 1.5rem;

  filter: drop-shadow(-3px 7px 13px #f1f7ff);
`;

export const CloseIcon = styled(RiCloseFill)`
  font-size: 2rem;

  color: #003575;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SuccessIcon = styled(FaCheckCircle)`
  font-size: 4.25rem;

  color: #0054bc;
`;

export const Title = styled.span`
  margin-top: 2rem;

  font-weight: 600;
  font-size: 2rem;

  color: #0054bc;

  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 110.7%;
  text-align: center;

  color: #515258;
`;

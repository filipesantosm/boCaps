import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

interface LoadingIconProps {
  iconColor?: string;
  iconFontSize?: string;
}

export const LoadingContainer = styled.div<LoadingIconProps>`
  width: 100%;
  height: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ iconColor }) => iconColor || '#0f5cbe'};

  font-size: ${({ iconFontSize }) => iconFontSize || '1.5rem'};
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  text-align: center;

  color: inherit;

  animation: ${rotate} 1s linear infinite;

  font-size: inherit;
`;

import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';

interface SwitchProps {
  isChecked: boolean;
}

export const PersonalizedSwitch = styled.div<SwitchProps>`
  width: 4.75rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: ${props => (props.isChecked ? 'flex-end' : 'flex-start')};

  padding: 0 0.34375rem;

  border: none;
  border-radius: 99px;

  background: #fff;

  filter: drop-shadow(0px 2px 5px rgba(175, 176, 197, 0.42));

  &:hover {
    cursor: pointer;
  }
`;

export const SwitchBall = styled.div<SwitchProps>`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => (props.isChecked ? '#003575' : '#C6CEDD')};

  border: none;
  border-radius: 50%;

  color: #fff;
`;

export const SwitchIcon = styled(GoCheck)<SwitchProps>`
  font-size: 1rem;

  color: #fff;

  visibility: ${props => (props.isChecked ? 'visible' : 'hidden')};
`;

import { PersonalizedSwitch, SwitchBall, SwitchIcon } from './styles';

interface SwitchProps {
  isChecked: boolean;
  onClick: () => Promise<void>;
}

const Switch = ({ isChecked, onClick }: SwitchProps) => {
  return (
    <PersonalizedSwitch isChecked={isChecked} onClick={onClick}>
      <SwitchBall isChecked={isChecked}>
        <SwitchIcon isChecked={isChecked} />
      </SwitchBall>
    </PersonalizedSwitch>
  );
};

export default Switch;

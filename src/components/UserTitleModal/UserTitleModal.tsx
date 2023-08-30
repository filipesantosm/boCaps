import { IoIosClose } from 'react-icons/io';
import {
  CloseButton,
  Container,
  Content,
  NumberText,
  NumbersContainer,
  NumbersGrid,
  NumbersHeader,
  Title,
} from './styles';

interface Props {
  onClose: () => void;
  titleNumber: string;
}

const UserTitleModal = ({ titleNumber, onClose }: Props) => {
  return (
    <Container>
      <Content>
        <Title>Título - {titleNumber}</Title>
        <CloseButton type="button" onClick={onClose}>
          <IoIosClose />
        </CloseButton>
        <NumbersContainer>
          <NumbersHeader>
            <p>Número da sorte</p>
            <p>987654321</p>
          </NumbersHeader>
          <NumbersGrid>
            {[
              1, 2, 3, 4, 5, 7, 10, 12, 15, 16, 20, 25, 29, 30, 35, 40, 45, 48,
              52, 59,
            ].map(digit => (
              <NumberText key={digit}>{digit}</NumberText>
            ))}
          </NumbersGrid>
        </NumbersContainer>
      </Content>
    </Container>
  );
};

export default UserTitleModal;

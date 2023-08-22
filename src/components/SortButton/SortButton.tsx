import { ComponentPropsWithoutRef } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { Container, SortArrow } from './styles';

export type SortDirection = '' | 'asc' | 'desc';

interface Props extends ComponentPropsWithoutRef<'button'> {
  direction?: SortDirection;
  onChangeDirection: (direction: SortDirection) => void;
}

const SortButton = ({ direction, onChangeDirection, ...rest }: Props) => {
  const handleChangeDirection = () => {
    if (!direction) {
      onChangeDirection('asc');
    }

    if (direction === 'asc') {
      onChangeDirection('desc');
    }

    if (direction === 'desc') {
      onChangeDirection('');
    }
  };

  return (
    <Container onClick={handleChangeDirection} {...rest}>
      <SortArrow isActive={direction === 'asc'}>
        <BiSolidUpArrow />
      </SortArrow>
      <SortArrow isActive={direction === 'desc'}>
        <BiSolidDownArrow />
      </SortArrow>
    </Container>
  );
};

export default SortButton;

import { useEffect, useState } from 'react';
import { PaginatedResponse } from '../../interfaces/Paginated';
import { ITitle } from '../../interfaces/Title';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import Loading from '../Loading/Loading';
import { Container, NumberText, NumbersGrid } from './styles';

interface Props {
  titleNumber: number;
}

interface DisplayTitle extends ITitle {
  titleNumbers: number[];
}

const UserTitle = ({ titleNumber }: Props) => {
  const [title, setTitle] = useState<DisplayTitle>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUserTitle();
  }, [titleNumber]);

  const getUserTitle = async () => {
    if (!titleNumber) {
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await api.get<PaginatedResponse<ITitle>>('/titles', {
        params: {
          'filters[number]': titleNumber,
        },
      });

      if (data.data.length > 0) {
        const apiTitle = data.data[0];

        const titleNumbers = Object.entries(apiTitle.attributes)
          .filter(([key]) => /^d\d+$/.test(key))
          .map(([_, value]) => value as number);

        setTitle({
          ...apiTitle,
          titleNumbers,
        });
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <NumbersGrid>
        {isLoading ? (
          <Loading
            containerStyles={{
              width: '100%',
              gridColumn: 'span 5',
            }}
            iconFontSize="3rem"
          />
        ) : (
          title?.titleNumbers.map(digit => (
            <NumberText key={digit}>{digit}</NumberText>
          ))
        )}
      </NumbersGrid>
    </Container>
  );
};

export default UserTitle;

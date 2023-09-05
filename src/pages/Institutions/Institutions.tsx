/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from 'react';
import InstitutionForm from '../../components/InstitutionForm/InstitutionForm';
import Loading from '../../components/Loading/Loading';
import PageTitle from '../../components/PageTitle/PageTitle';
import { IInstitution } from '../../interfaces/Institution';
import { PaginatedResponse } from '../../interfaces/Paginated';
import api from '../../services/api';
import handleError from '../../services/handleToast';
import { Content } from './styles';

const Institutions = () => {
  const [institutions, setInstitutions] = useState<IInstitution[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getInstitutions();
  }, []);

  const getInstitutions = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<PaginatedResponse<IInstitution>>(
        '/institution-assitideds',
        {
          params: {
            populate: '*',
          },
        },
      );

      setInstitutions(data.data);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const institution = institutions?.[0];

  return (
    <Content>
      <PageTitle>Instituição Beneficiada</PageTitle>
      {isLoading ? (
        <Loading iconFontSize="4rem" />
      ) : (
        <InstitutionForm
          initialInstitution={institution}
          onFinish={getInstitutions}
        />
      )}
    </Content>
  );
};

export default Institutions;

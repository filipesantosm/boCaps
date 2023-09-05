import { FiChevronRight } from 'react-icons/fi';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Content, Link, LinksList } from './styles';

const Information = () => {
  return (
    <Content>
      <PageTitle>Cadastros de informações</PageTitle>

      <LinksList>
        <Link to="/infos/faqs">
          Ajuda - FAQs - Perguntas
          <FiChevronRight />
        </Link>
        <Link to="/infos/faq-videos">
          Ajuda - Vídeos <FiChevronRight />
        </Link>
        <Link to="/infos/how-it-works">
          Como funciona <FiChevronRight />
        </Link>
        <Link to="/infos/institutions">
          Instituição beneficiada <FiChevronRight />
        </Link>
      </LinksList>
    </Content>
  );
};

export default Information;

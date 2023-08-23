import styled from 'styled-components';

const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 2rem;
`;

export default PageTitle;

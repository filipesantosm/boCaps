import styled from 'styled-components';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import background from '../../assets/img/golf-guy.svg';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  overflow: hidden;

  /* background-image: url(${background});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain; */
`;

export const Content = styled.form`
  width: 34.5rem;
  height: 42.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2.75rem 3.75rem 3.125rem 3.75rem;

  background: #ffffff;

  box-shadow: -3px 7px 13px #e4e9f0;

  border: none;
  border-radius: 3rem;
`;

export const Logo = styled.img`
  width: auto;
  height: 5.875rem;

  align-self: center;

  margin-bottom: 3rem;
`;

export const Title = styled.span`
  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 600;
  font-size: 2.25rem;

  color: ${({ theme }) => theme.colors.gray51};

  margin-bottom: 1rem;
`;

export const Subtitle = styled.span`
  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 400;
  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.gray51};

  margin-bottom: 2.125rem;
`;

export interface InputProps {
  hasError: boolean;
}

export const FormDivider = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  margin-bottom: 1.125rem;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  outline: none;

  background: #ffffff;

  border: ${props => (props.hasError ? '1px solid #ff0000' : 'none')};
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 4px;

  padding: 0 1.75rem;

  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 400;
  font-size: 1.375rem;

  color: ${({ theme }) => theme.colors.gray89};

  &::placeholder {
    font-family: 'Hind Siliguri', sans-serif;

    font-weight: 400;
    font-size: 1.375rem;

    color: ${({ theme }) => theme.colors.gray89};
  }
`;

export const VisibleEye = styled(IoEyeOutline)`
  position: absolute;
  align-self: center;
  right: 2.125rem;

  color: ${({ theme }) => theme.colors.gray89};

  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const InvisibleEye = styled(IoEyeOffOutline)`
  position: absolute;
  align-self: center;
  right: 2.125rem;

  color: ${({ theme }) => theme.colors.gray89};

  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ForgotPassword = styled.span`
  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 600;
  font-size: 1.25rem;

  color: ${({ theme }) => theme.colors.gray51};

  align-self: flex-end;

  margin-bottom: 3.625rem;

  transition: 500ms;

  &:hover {
    cursor: pointer;

    opacity: 0.875;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 4.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: ${({ theme }) => theme.colors.primary};

  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

import styled from 'styled-components';
import { HiOutlineUsers } from 'react-icons/hi';
import { FiChevronLeft } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;

  padding: 1.875rem 1.875rem 2.5rem 1rem;

  position: relative;
`;

export const Content = styled.div`
  width: calc(100% - 14.75rem);
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 0.125rem 0 0 4.125rem;
`;

export const MainForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 2.125rem;

  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: #d6d6d6 #f3f3f3;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 6px;
    background: #f3f3f3;
  }

  ::-webkit-scrollbar-thumb {
    width: 6px;
    border-radius: 6px;
    background: #d6d6d6;
  }
`;

export const TitleDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  width: fit-content;
  height: fit-content;

  padding-left: 2.5rem;

  margin-bottom: 3rem;

  position: relative;
`;

export const TitleIcon = styled(HiOutlineUsers)`
  font-size: 1.875rem;

  color: #515258;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3rem;

  color: #0054bc;
`;

export const Subtitle = styled.span`
  font-weight: 700;
  font-size: 2rem;

  color: #c6cedd;

  position: absolute;
  right: -8rem;
  bottom: 0.3rem;
`;

export const BackDivider = styled.div`
  display: flex;
  align-items: center;

  padding-left: 1.875rem;

  gap: 1.5rem;

  margin-bottom: 2.5rem;
`;

export const IconTag = styled.div`
  width: 2.625rem;
  height: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  box-shadow: -3px 7px 13px #f1f7ff;

  transition: 500ms;

  &:hover {
    cursor: pointer;
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  font-size: 1.5rem;
  color: #10275a;
`;

export const BackTitle = styled.span`
  font-weight: 600;
  font-size: 1.75rem;

  color: #2c406e;
`;

export const FormDivider = styled.div`
  display: flex;
  // grid-template-columns: 0.5fr 1fr;
  gap: 7.5rem;

  width: 100%;
  height: fit-content;

  padding-right: 6.75rem;
  padding-left: 2.5rem;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    padding-right: 20rem;
  }
`;

export const FormColumn = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.span`
  font-weight: 600;
  font-size: 1.25rem;

  color: #0054bc;

  margin-bottom: 1.75rem;
`;

export const Field = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1.125rem;

  color: #515258;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.625rem;

  padding: 0 1rem;

  border: none;
  border-radius: 0.75rem;

  outline: none;
  resize: none;

  background: #ffffff;

  box-shadow: 0px 2px 5px rgba(175, 176, 197, 0.42);

  font-weight: 400;
  font-size: 1rem;

  color: #898f9a;

  margin-bottom: 1.25rem;

  &::placeholder {
    color: #c6cedd;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 0;
  color: red;
  font-size: 0.75rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 2.25rem;

  width: 100%;
  height: fit-content;

  margin-bottom: 1.25rem;
`;

export const RowColumn = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  min-height: 2.75rem;

  max-width: 15.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.875rem;

  background: #0054bc;

  font-family: 'Hind Siliguri', sans-serif;

  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.4px;

  color: #ffffff;

  transition: 500ms;

  &:hover {
    opacity: 0.875;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const AvatarLabel = styled.label`
  cursor: pointer;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const AvatarPreview = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

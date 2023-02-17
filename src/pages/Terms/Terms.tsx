import { TbEditCircle } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  ButtonDivider,
  Container,
  Content,
  EditButton,
  MainForm,
  TextArea,
  Title,
  TitleContainer,
  TitleDivider,
  TitleIcon,
} from './styles';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <TitleContainer>
              <Title>Termos de uso, política</Title>
              <Title>e privacidade</Title>
            </TitleContainer>
          </TitleDivider>

          <TextArea
            id="text"
            name="text"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a nulla nec purus rhoncus lacinia vitae in dolor. Aliquam tincidunt tortor ipsum, sit amet bibendum arcu pulvinar vel. Integer ipsum nibh, suscipit eget leo eget, euismod blandit ante. Suspendisse consequat lectus lorem, id maximus massa cursus tincidunt. Donec id quam vehicula, rhoncus erat id, ornare magna. Donec sapien ligula, molestie sed elit sit amet, tincidunt vestibulum quam. In risus velit, pulvinar gravida nulla vel, cursus tempus nisi. Pellentesque vel nisl nisl. Phasellus viverra quis ante eget rhoncus. Nullam ornare felis risus, non commodo felis tincidunt et. Aliquam erat volutpat. Mauris consectetur est elit. Morbi non semper metus, a volutpat metus. Morbi a nulla metus. Nulla scelerisque congue sodales. Duis vestibulum, tortor rhoncus gravida aliquam, eros elit bibendum nunc, quis faucibus nisi elit accumsan sapien. Aenean ullamcorper, ex non aliquam consequat, orci sapien placerat lectus, ut sodales ligula nunc sit amet erat. In sit amet accumsan sapien. Aliquam dignissim, elit sit amet sollicitudin euismod, justo orci iaculis felis, ac tincidunt lectus nibh eget ipsum. Sed elementum magna vel enim mollis, quis feugiat ex lobortis. Etiam tristique diam vel ante lacinia, eget fringilla sapien laoreet. Pellentesque lacinia congue lorem sed convallis. Integer nec magna pretium, tempor quam at, posuere magna. Duis id commodo lorem, nec porttitor ligula. Vivamus vitae sem lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam justo metus, blandit vitae enim quis, pellentesque ullamcorper lorem. Nulla faucibus consequat lobortis. Fusce nec nunc at turpis lacinia lacinia. Quisque non orci nibh. Aliquam efficitur enim mauris, et egestas elit faucibus id. Phasellus viverra quis ante eget rhoncus. Nullam ornare felis risus, non commodo felis tincidunt et. Aliquam erat volutpat. Mauris consectetur est elit. Morbi non semper metus, a volutpat metus. Morbi a nulla metus. Nulla scelerisque congue sodales. Duis vestibulum, tortor rhoncus gravida aliquam, eros elit bibendum nunc, quis faucibus nisi elit accumsan sapien. Aenean ullamcorper, ex non aliquam consequat, orci sapien placerat lectus, ut sodales ligula nunc sit amet erat. In sit amet accumsan sapien. Aliquam dignissim, elit sit amet sollicitudin euismod, justo orci iaculis felis, ac tincidunt lectus nibh eget ipsum. Sed elementum magna vel enim mollis, quis feugiat ex lobortis. Etiam tristique diam vel ante lacinia, eget fringilla sapien laoreet. Pellentesque lacinia congue lorem sed convallis. Integer nec magna pretium, tempor quam at, posuere magna. Duis id commodo lorem, nec porttitor ligula. Vivamus vitae sem lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam justo metus, blandit vitae enim quis, pellentesque ullamcorper lorem. Nulla faucibus consequat lobortis. Fusce nec nunc at turpis lacinia lacinia. Quisque non orci nibh. Aliquam efficitur enim mauris, et egestas elit faucibus id."
            readOnly
          />

          <ButtonDivider>
            <EditButton
              type="button"
              onClick={() => navigate('/terms/edit-terms')}
            >
              <TbEditCircle size={28} />
              Editar termos
            </EditButton>
          </ButtonDivider>
        </MainForm>
      </Content>
    </Container>
  );
};

export default Terms;

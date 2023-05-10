import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import {
  BackDivider,
  BackIcon,
  BackTitle,
  ColumnTitle,
  Container,
  Content,
  FirstHourColumn,
  FormColumn,
  FormDivider,
  FormRow,
  HourForm,
  HourInput,
  HourTitle,
  IconTag,
  Input,
  InputDivider,
  Label,
  MainForm,
  RadioBox,
  RadioboxColumn,
  RadioboxLabel,
  RowColumn,
  SecondHourColumn,
  Subtitle,
  Title,
  TitleDivider,
  TitleIcon,
} from './styles';

const ClubDetails = () => {
  const [days, setDays] = useState<string[]>([
    'monday',
    'tuesday',
    'friday',
    'saturday',
    'sunday',
  ]);

  const navigate = useNavigate();

  return (
    <Container>
      <NavBar />

      <Content>
        <Header />

        <MainForm>
          <TitleDivider>
            <TitleIcon />

            <Title>Usuários</Title>

            <Subtitle>Clube</Subtitle>
          </TitleDivider>

          <BackDivider>
            <IconTag onClick={() => navigate('/users')}>
              <BackIcon />
            </IconTag>

            <BackTitle>Atenas Golf Club</BackTitle>
          </BackDivider>

          <FormDivider>
            <FormColumn>
              <ColumnTitle>Usuário</ColumnTitle>

              <Label htmlFor="fantasy_name">Nome Fantasia</Label>

              <Input
                type="text"
                id="fantasy_name"
                name="fantasy_name"
                value="Atenas Golf Club"
                readOnly
              />

              <Label htmlFor="cnpj">MEI/CNPJ</Label>

              <Input
                type="text"
                id="cnpj"
                name="cnpj"
                value="000 000 000 0000"
                readOnly
              />

              <Label htmlFor="name">Nome do Responsável</Label>

              <Input
                type="text"
                id="name"
                name="name"
                value="André Barbosa"
                readOnly
              />

              <Label htmlFor="phone">Telefone</Label>

              <Input
                type="text"
                id="phone"
                name="phone"
                value="(32) 9 1234-5678"
                readOnly
              />

              <Label htmlFor="email">E-mail</Label>

              <Input
                type="text"
                id="email"
                name="email"
                value="andre.barbosa@gmail.com"
                readOnly
                style={{ marginBottom: '0' }}
              />
            </FormColumn>

            <FormColumn>
              <ColumnTitle>Endereço</ColumnTitle>

              <FormRow>
                <RowColumn>
                  <Label htmlFor="cep">CEP</Label>

                  <Input
                    type="text"
                    id="cep"
                    name="cep"
                    value="331630-430"
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>

                <RowColumn>
                  <Label htmlFor="street">Rua</Label>

                  <Input
                    type="text"
                    id="street"
                    name="street"
                    value="Santa Amélia"
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>
              </FormRow>

              <FormRow>
                <RowColumn>
                  <Label htmlFor="number">Número</Label>

                  <Input
                    type="text"
                    id="number"
                    name="number"
                    value="1304"
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>

                <RowColumn>
                  <Label htmlFor="neighborhood">Bairro</Label>

                  <Input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value="Horta"
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>
              </FormRow>

              <FormRow>
                <RowColumn>
                  <Label htmlFor="state">Estado</Label>

                  <Input
                    type="text"
                    id="state"
                    name="state"
                    value="MG"
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>

                <RowColumn>
                  <Label htmlFor="city">Cidade</Label>

                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value="Leopoldina"
                    readOnly
                    style={{ marginBottom: '0' }}
                  />
                </RowColumn>
              </FormRow>
            </FormColumn>
          </FormDivider>

          <HourTitle>Horário de Funcionamento</HourTitle>

          <HourForm>
            <FirstHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="monday"
                  name="day"
                  value="monday"
                  readOnly
                  checked={days.includes('monday')}
                />

                <RadioboxLabel
                  htmlFor="monday"
                  isSelected={days.includes('monday')}
                >
                  SEG
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="monday_start"
                  name="monday_start"
                  defaultValue="09:00"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="monday_end"
                  name="monday_end"
                  defaultValue="18:00"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </FirstHourColumn>

            <SecondHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="friday"
                  name="day"
                  value="friday"
                  readOnly
                  checked={days.includes('friday')}
                />

                <RadioboxLabel
                  htmlFor="friday"
                  isSelected={days.includes('friday')}
                >
                  SEX
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="friday_start"
                  name="friday_start"
                  defaultValue="10:00"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="friday_end"
                  name="friday_end"
                  defaultValue="22:00"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </SecondHourColumn>

            <FirstHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="tuesday"
                  name="day"
                  value="tuesday"
                  readOnly
                  checked={days.includes('tuesday')}
                />

                <RadioboxLabel
                  htmlFor="tuesday"
                  isSelected={days.includes('tuesday')}
                >
                  TER
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="tuesday_start"
                  name="tuesday_start"
                  defaultValue="09:00"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="tuesday_end"
                  name="tuesday_end"
                  defaultValue="18:00"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </FirstHourColumn>

            <SecondHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="saturday"
                  name="day"
                  value="saturday"
                  readOnly
                  checked={days.includes('saturday')}
                />

                <RadioboxLabel
                  htmlFor="saturday"
                  isSelected={days.includes('saturday')}
                >
                  SAB
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="saturday_start"
                  name="saturday_start"
                  defaultValue="10:00"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="saturday_end"
                  name="saturday_end"
                  defaultValue="17:00"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </SecondHourColumn>

            <FirstHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="wednesday"
                  name="day"
                  value="wednesday"
                  readOnly
                  checked={days.includes('wednesday')}
                />

                <RadioboxLabel
                  htmlFor="wednesday"
                  isSelected={days.includes('wednesday')}
                >
                  QUA
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="wednesday_start"
                  name="wednesday_start"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="wednesday_end"
                  name="wednesday_end"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </FirstHourColumn>

            <SecondHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="sunday"
                  name="day"
                  value="sunday"
                  readOnly
                  checked={days.includes('sunday')}
                />

                <RadioboxLabel
                  htmlFor="sunday"
                  isSelected={days.includes('sunday')}
                >
                  DOM
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="sunday_start"
                  name="sunday_start"
                  defaultValue="14:00"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="sunday_end"
                  name="sunday_end"
                  defaultValue="22:00"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </SecondHourColumn>

            <FirstHourColumn>
              <RadioboxColumn>
                <RadioBox
                  type="checkbox"
                  id="thursday"
                  name="day"
                  value="thursday"
                  readOnly
                  checked={days.includes('thursday')}
                />

                <RadioboxLabel
                  htmlFor="thursday"
                  isSelected={days.includes('thursday')}
                >
                  QUI
                </RadioboxLabel>
              </RadioboxColumn>

              <InputDivider>
                <HourInput
                  type="time"
                  id="thursday_start"
                  name="thursday_start"
                  placeholder="00:00"
                  readOnly
                />
                às
                <HourInput
                  type="time"
                  id="thursday_end"
                  name="thursday_end"
                  placeholder="00:00"
                  readOnly
                />
              </InputDivider>
            </FirstHourColumn>
          </HourForm>
        </MainForm>
      </Content>
    </Container>
  );
};

export default ClubDetails;

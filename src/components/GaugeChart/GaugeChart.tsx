import ReactGaugeChart from 'react-gauge-chart';
import {
  Container,
  Content,
  LegendColor,
  LegendContainer,
  LegendItem,
  Title,
} from './styles';

const colors = ['#ff0a0a', '#ffff00', '#85e62c'];

const GaugeChart = () => {
  return (
    <Container>
      <Title>Score do cliente</Title>
      <Content>
        <ReactGaugeChart
          id="gauge-chart-client"
          textColor="#1b1b1b"
          needleColor="#bbb"
          needleBaseColor="#bbb"
          percent={0.9}
          formatTextValue={() => {
            return '250';
          }}
          colors={colors}
          style={{
            width: '20vw',
          }}
        />
        <LegendContainer>
          <LegendItem>
            <LegendColor
              style={{
                background: colors[0],
              }}
            />
            0 - 100
          </LegendItem>
          <LegendItem>
            <LegendColor
              style={{
                background: colors[1],
              }}
            />
            100 - 200
          </LegendItem>
          <LegendItem>
            <LegendColor
              style={{
                background: colors[2],
              }}
            />
            +200
          </LegendItem>
        </LegendContainer>
      </Content>
    </Container>
  );
};

export default GaugeChart;

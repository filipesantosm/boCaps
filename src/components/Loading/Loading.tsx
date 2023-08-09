import { LoadingContainer, LoadingIcon } from './styles';

interface Props {
  iconColor?: string;
  iconFontSize?: string;
  containerStyles?: React.CSSProperties;
}

const Loading = ({ iconColor, iconFontSize, containerStyles }: Props) => {
  return (
    <LoadingContainer
      iconColor={iconColor}
      iconFontSize={iconFontSize}
      style={containerStyles}
    >
      <LoadingIcon />
    </LoadingContainer>
  );
};

export default Loading;

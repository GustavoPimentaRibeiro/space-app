import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  max-width: 100%;
  min-height: 328px;

  display: flex;
  align-items: center;
  flex-grow: 1;

  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0;
  border-radius: 20px;
`;

const TituloEstilizado = styled.h1`
  max-width: 300px;

  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;

  padding: 0 64px;
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;

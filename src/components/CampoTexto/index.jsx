import { styled } from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  width: 566px;
  height: 56px;
  box-sizing: border-box;

  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;

  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #d9d9d9;

  padding: 12px 16px;
`;

const IconeLupa = styled.img`
  width: 38px;
  height: 38px;

  position: absolute;
  top: 10px;
  right: 10px;
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado
        onChange={(evento) => {
          setFiltro(evento.target.value);
        }}
        type="text"
        placeholder="O que você procura?"
      />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;

import styled from "styled-components";

const Titulo = styled.h2`
  font-size: 32px;
  text-align: ${(props) => (props.$alinhamento ? props.$alinhamento : "left")};
  color: #7b78e6;
`;

export default Titulo;

import styled from "styled-components";

const ItemEstilizado = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;

  font-size: 24px;
  line-height: 29px;

  margin-bottom: 30px;

  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => (props.$ativo ? "#7b78e5" : "#d9d9d9")};
    font-family: ${(props) =>
      props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  }
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt=""></img>
      {children}
    </ItemEstilizado>
  );
};

export default ItemNavegacao;

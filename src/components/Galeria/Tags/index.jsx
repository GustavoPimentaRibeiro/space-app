import tags from "./tags.json";
import { styled } from "styled-components";

const BarraTags = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;

  margin-top: 56px;
`;

const TituloTags = styled.p`
  color: #d9d9d9;
  font-size: 24px;

  margin: 0;
`;

const Tag = styled.button`
  box-sizing: border-box;

  font-size: 24px;
  color: #ffffff;

  padding: 12px;
  border-radius: 10px;
  border-color: transparent;
  background-color: rgba(217, 217, 217, 0.3);

  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
`;

const Tags = ({ setTag }) => {
  return (
    <BarraTags>
      <TituloTags>Busque por tags:</TituloTags>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
          </Tag>
        ))}
      </Div>
    </BarraTags>
  );
};

export default Tags;

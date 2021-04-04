import { Container } from "./styles";

interface IProps {
  tool?: ITool;
}
interface ITool {
  description: string;
  id: number;
  link: string;
  tags: string[];
  title: string;
}

const ToolCard = ({ tool }: IProps) => {
  return (
    <Container>
      <h1>{tool?.title}</h1>
      <p>{tool?.description}</p>
      <p>{tool?.link}</p>
      <p>{JSON.stringify(tool?.tags)}</p>
    </Container>
  );
};

export default ToolCard;

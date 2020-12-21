import {
  Container,
  Header,
  Section,
  Separator,
  List,
  Item,
  Bullet,
} from "./styled";
import bulletImg from "../../images/list_bullet.svg";
import skills from "./skills";

const Skillset = () => {
  return (
    <Section>
      <Container>
        <Header>My skillset includes 🛠️</Header>
        <Separator />
        <List>
          {skills.map((skill) => {
            return (
              <Item key={skill.valueOf()}>
                <Bullet src={bulletImg} alt="" />
                {skill.valueOf()}
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
export default Skillset;

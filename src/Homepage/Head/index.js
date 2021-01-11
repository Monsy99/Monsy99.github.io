import {
  Button,
  ButtonImg,
  Caption,
  Container,
  Description,
  Name,
  Portrait,
} from "./styled";
import portraitImg from "../../images/Szymon_prof.jpg";
import buttonImg from "../../images/Message.svg";
import ThemeToggleButton from "./ThemeToggleButton";

const Head = () => {
  return (
    <Container>
      <Portrait src={portraitImg}></Portrait>
      <div>
        <ThemeToggleButton></ThemeToggleButton>
        <Caption>Hi, my name is</Caption>
        <Name>Szymon Marczuk</Name>
        <Description>
          👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
          looking for new job opportunities
        </Description>
        <Button>
          <ButtonImg src={buttonImg}></ButtonImg>
          Hire me
        </Button>
      </div>
    </Container>
  );
};
export default Head;

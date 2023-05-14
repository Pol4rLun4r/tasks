import { Container, Text } from "./style/Logo"
import Icon from "./Icon"

interface iText {
  text: string
}

const Logo = ({ text }: iText) => {
  return (
    <Container>
      <Icon />
      <Text>{text}</Text>
    </Container>
  )
}

export default Logo
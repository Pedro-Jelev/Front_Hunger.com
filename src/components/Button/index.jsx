import { Container } from "./style";

export function Button({ ...rest }) {
  return <Container type="button" {...rest}></Container>;
}

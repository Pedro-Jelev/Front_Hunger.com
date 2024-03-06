import { Container } from "./style";

export function Input({ icon, label, type = "text", ...rest }) {
  return (
    <Container>
      <label htmlFor="input" className={icon ? "" : "display-none"}>
        <img src={icon} />
      </label>
      <input id="input" className={icon ? "icon" : ""} type={type} {...rest} />
    </Container>
  );
}

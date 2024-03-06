import { Container } from "./style";

import Plus from "../../assets/Plus.svg";
import Minus from "../../assets/Minus.svg";

export function Ingredients({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        content={value}
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        className={isNew ? "button-delete" : "buttoon-add"}
        type="button"
        onClick={onClick}
      >
        {isNew ? <img src={Plus} /> : <img src={Minus} />}
      </button>
    </Container>
  );
}

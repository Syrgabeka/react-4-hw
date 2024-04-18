import PropTypes from "prop-types";
import css from "./input.module.css";

export const Input = ({ text, onClick, type }) => {
  return (
    <input onClick={onClick} className={css.input} type={type}>
      {text}
    </input>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

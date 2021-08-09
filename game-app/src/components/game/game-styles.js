import styled from "styled-components";
import { spacingScale } from "../../utils/spacing";
import BG from "../../images/bg-triangle.svg";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: ${spacingScale.spacing_xl};
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  top: 8em;
`;

export const Button = styled.button`
  width: auto;
  cursor: pointer;
  padding: ${spacingScale.spacing_l};
  margin: ${spacingScale.spacing_xl};
  border-style: solid;
  border-radius: 5%;
  box-shadow: ${(props) =>
    props.blue
      ? "0 0 0 20px #526df7"
      : props.yellow
      ? "0 0 0 20px #eaab23"
      : "0 0 0 20px #ed5068"};
  filter: drop-shadow(10px 0px 10px rgba(0 0 0 / 30%));
  position: relative;
  left: ${(props) => {
    if (props.left) return "4em";
    if (props.leftL) return "-4em";
    return "0";
  }};
  bottom: ${(props) => {
    if (props.bottom) return "8em";
    if (props.bottomL) return "-4em";
    return "0";
  }};
  & svg {
    cursor: pointer;
  }
`;

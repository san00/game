import styled from "styled-components";
import { spacingScale } from "../../utils/spacing";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: ${spacingScale.spacing_xl};
`;

export const Button = styled.button`
  width: auto;
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
`;

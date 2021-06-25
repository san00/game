import styled from "styled-components";
import { spacingScale } from "../../utils/spacing";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: ${spacingScale.spacing_xl};
`;

export const Button = styled.button`
  width: auto;
  height: 100%;
  padding: ${spacingScale.spacing_l};
`;

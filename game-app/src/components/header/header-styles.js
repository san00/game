import styled from "styled-components";
import { spacingScale } from "../../utils/spacing";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacingScale.spacing_m};
  margin: ${spacingScale.spacing_l};
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScoreText = styled.p`
  margin: 0;
  padding: ${spacingScale.spacing_xxs};
`;

export const ScoreBoard = styled.p`
  margin: ${spacingScale.spacing_l};
`;

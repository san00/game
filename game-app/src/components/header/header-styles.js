import styled from "styled-components";
import { spacingScale } from "../../utils/spacing";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${spacingScale.spacing_l} ${spacingScale.spacing_xl};
  border: 0.2em solid white;
  color: aliceblue;
  border-radius: 0.4em;
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacingScale.spacing_l};
`;

export const ScoreBoardText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  padding: ${spacingScale.spacing_xxs};
`;

export const ScoreBoard = styled.p`
  margin: ${spacingScale.spacing_l};
  padding: ${spacingScale.spacing_l};
  border-radius: 0.2em;
  font-size: 1.4rem;
  font-weight: 700;
  background: white;
  color: hsl(229, 64%, 46%);
  margin-left: auto;
  text-align: center;
`;

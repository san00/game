import styled from "styled-components";
import { spacingScale } from "../../utils/spacing";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: ${spacingScale.spacing_xxl};
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacingScale.spacing_xl};
`;

export const GameIcon = styled.p`
  margin: ${spacingScale.spacing_l};
`;

export const UserMessage = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  color: aliceblue;
`;

export const NewGameButton = styled.button`
  min-width: 10ch;
  min-height: 44px;
  padding: ${spacingScale.spacing_s};
  cursor: pointer;
  background: aliceblue;
  color: #0249ef;
  border-radius: 0.2em;
  transition: 220ms all ease-in-out;
  &:hover,
  :active {
    background-color: #bdc0ef;
  }
  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 4px #ff4f00;
  }
`;

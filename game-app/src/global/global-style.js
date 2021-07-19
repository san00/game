import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  line-height: 1.5em;
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  padding-left: calc((100vw - 60em) / 2);
  padding-right: calc((100vw - 60em) / 2);
}
`;
export default GlobalStyle;

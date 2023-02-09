import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --black: #161617;
    --black-true: #000;
    --white: #fff;

    --lightblue1: #EDF3F8;
    --lightblue2: #cce5e5;
    --lightblue3: #7EC8E3;

    --blue1: #75e6da;
    --blue2: #0FECFE;
    --blue3: #60a3d9;
    --blue4: #6799f4;
    --blue5: #0074B7;
    --blue6: #000C66;

    --red1: #f66060;
    --red2: #890620;

    --gray-main: #8d8d8f;
    --gray-main-dark: #333;

    --lightgray1: #fbfbfb;
    --lightgray2: #f2f2f2;
    --lightgray3: #eee; 
    --lightgray4: #d0d0d0;
    --lightgray5: #ccc;
    --lightgray6: #bbb;

    --gray1: #6d6e71;
    --gray2: #666;
    --gray3: #555;
    --gray4: #222;

    --yellow1: #ffe592;
    --yellow2: #FCBE37;

    --green1: #28CC9E;
    --green2: #1dc690;
    --green3: #00ad85;

    --shadow1: 0 0 14px 0 rgb(0 0 0 / 10%);

    --border-radius1: 3px;
    --border-radius2: 6px;
    --border-radius3: 10px;
    --border-radius4: 20px;
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  h1 {
    font-weight: 900;
  }
  h2 {
    font-weight: 900;
  }
  h3 {
    font-weight: 700;
  }
  p {
    font-weight: 400;
  }
  a {
    font-weight: 400;
  }
`;

export default GlobalStyle;

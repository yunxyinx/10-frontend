import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  body {
    font-family: 'Pridi';
    overflow-x:hidden;
  }
  p {
    font-size:20px;
    color : white;
  }
  .nav-pills .nav-link.active {
    background-color:#e53c35;
  }

`

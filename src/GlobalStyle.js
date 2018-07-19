import { injectGlobal } from 'styled-components';

export default injectGlobal`
body{
  font-family: 'Montserrat', sans-serif;
  margin: 0px;
  padding: 0px;
}

@keyframes runningFrames{
  from{
    transform:translateX(350%);
  }
  to{
    transform:translateX(0%);
  }
}

.switch-wrapper {
  position: relative;
}

.switch-wrapper > div {
  position: absolute;
  width: 100%;
  height:100vh;
}
`;

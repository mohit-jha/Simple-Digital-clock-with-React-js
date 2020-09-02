import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./netflix.css";
import App from "./App";
import Student from "./Students";
import CurrentDateTime from "./Currentime";
import ImgGalary from "./Imggalary";
import Greets from "./Greets";
import Functioncomponent from "./Functioncomponent";
import Calculator from "./Calculator";
import Netflix from "./NetflixComp";
// import Comp from "./mohit"
import IncDec from './IncDec'
import CurrentTime from "./CurrentTime"
import DigitalTime from './DigitalClock';
import BgEvents from './BgEvents'
// ReactDOM.render(<CurrentDateTime /> ,document.getElementById('currentdatetime'));
// ReactDOM.render(<ImgGalary /> ,document.getElementById('img'));
// ReactDOM.render(<App name='mohit'/> ,document.getElementById('root'));

// ReactDOM.render(<Student /> ,document.getElementById('roots'));
// ReactDOM.unmountComponentAtNode(document.getElementById("root"));
// ReactDOM.render(<Greets /> ,document.getElementById('greets'));
// ReactDOM.render(<Functioncomponent /> ,document.getElementById('greets'));
// ReactDOM.render(<Calculator /> ,document.getElementById('calculator'));
ReactDOM.render(
  <>
     <h1 style={{ textAlign: "center" }}>Top 5 Netflix Original Series</h1>
     <Netflix />
   </>,
  document.getElementById("netflix")
);
// ReactDOM.render(<IncDec /> ,document.getElementById('root'));
// ReactDOM.render(<CurrentTime /> ,document.getElementById('time'));
// ReactDOM.render(<DigitalTime /> ,document.getElementById('digitalclock'));
// ReactDOM.render(<BgEvents /> ,document.getElementById('bgevents'));

import nav from "./nav";
import {
  footer
} from "./footer";
import makeBtn from "./button";
import {
  makeStyleColor
} from "./button-style";

const btn = makeBtn('my btn');
btn.style = makeStyleColor('red');
document.body.appendChild(btn);
document.body.appendChild(footer);

console.log(nav(), makeBtn('myBtn'), makeStyleColor('black'));
import {apply, applyBackground, applyStyle} from './index';
import stylefunction from './stylefunction';

const olms = {
  apply: apply,
  applyBackground: applyBackground,
  applyStyle: applyStyle,
  stylefunction: stylefunction
};
if (window) {
  window.olms = olms;
}
export default olms;


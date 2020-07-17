import { helper } from '@ember/component/helper';
import { classify } from '@ember/string';

export function titleize([ string ]: [string]/*, hash*/) {
  return classify(string)
    .replace(/([A-Z]+)/g, " $1")
    .replace(/^\s/, "");
}

export default helper(titleize);

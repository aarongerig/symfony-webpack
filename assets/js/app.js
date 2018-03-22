import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './static-images';
import './modules/header';

const { countdown, util, use } = UIkit;
const { $$ } = util;
const date = (new Date(Date.now() + 864e5 * 7)).toISOString();

use(Icons);

$$('[js-countdown]').forEach(function(el) {
  countdown(el, { date: date });
});
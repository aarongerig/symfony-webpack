import boot from 'uikit/src/js/api/boot';
import UIkit from 'uikit/src/js/uikit-core';
import Countdown from 'uikit/src/js/components/countdown';
import GridParallax from 'uikit/src/js/components/grid-parallax';
import Lightbox from 'uikit/src/js/components/lightbox';
import Notification from 'uikit/src/js/components/notification';
import Parallax from 'uikit/src/js/components/parallax';
import Slider from 'uikit/src/js/components/slider';
import Slideshow from 'uikit/src/js/components/slideshow';
import Sortable from 'uikit/src/js/components/sortable';
import Tooltip from 'uikit/src/js/components/tooltip';
import Upload from 'uikit/src/js/components/upload';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Countdown);
UIkit.use(GridParallax);
UIkit.use(Lightbox);
UIkit.use(Notification);
UIkit.use(Parallax);
UIkit.use(Slider);
UIkit.use(Slideshow);
UIkit.use(Sortable);
UIkit.use(Tooltip);
UIkit.use(Upload);
UIkit.use(Icons);

export default UIkit;
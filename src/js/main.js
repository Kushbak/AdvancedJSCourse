import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeState from './modules/changeState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let deadline = '2020-08-03';
    let modalsState = {};
 

    changeState(modalsState);
    modals();
    tabs('.glazing_slider', '.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_slider', '.decoration_content > div > div', '.no_click', 'after_click');
    tabs('.balcon_icons', '.big_img > img', '.balcon_icons_img', 'do_image_more', 'inline-block');
    forms(modalsState);
    timer('.container1', deadline);
    images();
}) 
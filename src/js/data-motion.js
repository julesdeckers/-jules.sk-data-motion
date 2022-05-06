/**
 * ***********************************************************
 * @jules.sk/data-motion - wowjs/aos alternative w/ animations
 * made to animate elements on scroll
 * ***********************************************************
 */

import styles from './../scss/data-motion.scss';
import throttle from 'lodash.throttle';

let options = {
    throttleDelay: 99,
    offset: 120,
}

const init = function init(settings) {
    options = Object.assign(options, settings);
    console.log("test");
}

export default {
    init
}
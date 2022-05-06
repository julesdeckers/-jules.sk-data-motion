/**
 * ***********************************************************
 * name: data-motion >> SuperKraft Animaton On Scroll
 * usage: add data-skaos="fade-up" to HtmlElement
 * author: jules@superkraft
 * description: port of AOS to work with animations instead of transitions
 * ***********************************************************
 */
import styles from './../scss/data-motion.scss';
import throttle from 'lodash.throttle';

let _settings = {
    throttleDelay: 99,
    offset: 100,
}

let $observableElements = [];

/**
 * Options for InterSectionObserver
 * threshold at 1.0 means callback is invoked when 100% of target is visible ~ origin
 * rootMargin: -100px until callback
 */
let options = {
    root: null,
    rootMargin: '-100px 0px',
    threshold: [0]
};

/**
 * When target is intersecting with observer, attach
 * data-motion-animate class after 100ms, which triggers animation in scss
 * 
 * automatic params from IntersectionObserver API
 * @param {*} entries 
 * @param {*} observer 
 */
const onIntersection = (entries, observer) => {
    throttle(() => {
        for (const { isIntersecting, target } of entries) {
            if (isIntersecting) {
                setTimeout(() => {
                    target.classList.add("data-motion-animate");
                }, 100);
                observer.unobserve(target);
            }
        }
    }, _settings.throttleDelay)
};

const init = function init(settings) {
    _settings = Object.assign(_settings, settings);
    options.rootMargin = `-${_settings.offset}px 0px`;

    $observableElements = document.querySelectorAll('[data-motion]');
    $observableElements.forEach(element => {
        const observer = new IntersectionObserver(onIntersection, options);
        observer.observe(element);
    })
}

export {
    init
}
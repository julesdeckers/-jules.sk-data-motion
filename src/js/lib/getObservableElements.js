export default () => {
    const elements = document.querySelectorAll('[data-motion]');
    return Array.prototype.map.call(elements, node => ({ node }));
}
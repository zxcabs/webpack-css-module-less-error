/**
 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
 */
function renderCat(style) {
    var
        node = document.createElement('DIV');

    node.setAttribute('class', style.root);

    document.body.appendChild(node);
}

window.onload = function () {
    renderCat(require('./cat.css'));

    // error Error: Cannot resolve module 'cat.png'
    renderCat(require('./cat.less'));
};

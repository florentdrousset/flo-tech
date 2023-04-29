/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import './styles/app.scss';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';

// start the Stimulus application
import './bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});

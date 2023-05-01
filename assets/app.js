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

document.addEventListener('DOMContentLoaded', () => {
    const editorElement = document.querySelector('#editor');
    if (editorElement) {
        ClassicEditor
            .create(editorElement, {
                // Add the 'CodeBlock' plugin
                plugins: [ClassicEditor.builtinPlugins, 'CodeBlock'],
                toolbar: {
                    items: [
                        // Add other toolbar items you want to use, for example:
                        'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
                        'code', 'codeBlock'
                    ]
                },
                codeBlock: {
                    languages: [
                        { language: 'plaintext', label: 'Plain text' },
                        { language: 'javascript', label: 'JavaScript' },
                        // Add other languages you want to support
                    ],
                    converter: {
                        toView(element, language) {
                            const code = element.textContent;
                            if (language && hljs.getLanguage(language)) {
                                const highlighted = hljs.highlight(code, { language }).value;
                                return { language, text: highlighted };
                            } else {
                                return { text: code };
                            }
                        },
                        toData(viewElement, language) {
                            return viewElement.innerHTML;
                        }
                    }
                },
            })
            .then((editor) => {
                // Save the editor instance for further use if needed
                window.editor = editor;
            })
            .catch((error) => {
                console.error('Error initializing CKEditor:', error);
            });
    }
});


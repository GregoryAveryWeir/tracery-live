import { helper } from '@ember/component/helper';
import sanitizeHtml from 'ember-cli-sanitize-html';
import {htmlSafe} from '@ember/string';

export function sanitize(params/*, hash*/) {
  return htmlSafe(sanitizeHtml(params[0], {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'img', 'span']),
    transformTags: {
      'a': sanitizeHtml.simpleTransform('a', {rel: 'nofollow'}),
    },
    allowedAttributes: {
      '*': ['style', 'class'],
      a: [ 'href', 'name', 'target' ],
      // We don't currently allow img itself by default, but this
      // would make sense if we did
      img: [ 'src' ]
    },
    allowedStyles: {
      '*': {
        // Match HEX and RGB
        'color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
        'text-align': [/^left$/, /^right$/, /^center$/],
        // Match any number with px, em, or %
        'font-size': [/^\d+(?:px|em|%)$/]
      },
      'p': {
        'font-size': [/^\d+rem$/]
      }
    },
  }));
}

export default helper(sanitize);

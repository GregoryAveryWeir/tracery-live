/**
 * Adapted from Itty Bitty Site: https://github.com/alcor/itty-bitty/
 * which is © 2018 Nicholas Jitkoff with the following license permissions:
 *
 *  "Permission is hereby granted, free of charge, to any person obtaining
 *  a copy of this software and associated documentation files (the
 *  "Software"), to deal in the Software without restriction, including
 *  without limitation the rights to use, copy, modify, merge, publish,
 *  distribute, sublicense, and/or sell copies of the Software, and to
 *  permit persons to whom the Software is furnished to do so, subject to
 *  the following conditions:

 *  The above copyright notice and this permission notice shall be
 *  included in all copies or substantial portions of the Software.

 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 *  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 *  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 *  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.""
**/

/* global LZMA */

import Service from '@ember/service';
import {Promise} from 'rsvp';


export default Service.extend({
  base64ToByteArray(base64) {
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  },

  stringToZip(string) {
    return new Promise(resolve => {
      LZMA.compress(string, 9, function(result) {
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
        return resolve(base64String);
      });
    });
  },

  zipToString(data) {
    return new Promise(resolve => {
      var array = this.base64ToByteArray(data); 
      LZMA.decompress(array, function(result  ) {
        if (!(typeof result === 'string')) result = new Uint8Array(result)
        resolve(result);
      });
    });
  },
});

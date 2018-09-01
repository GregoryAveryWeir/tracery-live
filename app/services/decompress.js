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

var BASE64_MARKER = ';base64,';
var LZMA64_MARKER = ';bxze64,';

export default Service.extend({
  compressDataURI(dataURI, callback) {
    var base64Index = dataURI.indexOf(BASE64_MARKER);
    var base64 = dataURI.substring(base64Index + BASE64_MARKER.length);
    this.stringToZip(this.base64ToByteArray(base64), function(result) {
      callback(dataURI.substring(0, base64Index) + LZMA64_MARKER + result)    
    })
  },

  base64ToByteArray(base64) {
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  },

  stringToZip(string, callback) {
    LZMA.compress(string, 9, function(result) {
      var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
      return callback(base64String);
    });
  },

  decompressDataURI(dataURI, preamble, callback) {
    var base64Index = dataURI.indexOf(LZMA64_MARKER);
    if (base64Index > 0) {
      var base64 = dataURI.substring(base64Index + LZMA64_MARKER.length);
      this.zipToString(base64, function(result) {
        this.stringToData(result, function(data) {
          if (!data) return callback(undefined);
          callback(dataURI.substring(0, base64Index) + BASE64_MARKER + (preamble || '') + data.split(',')[1])     
        })
      })
    } else {
      callback(dataURI)
    }
  },

  zipToString(data, callback) {
    var array = this.base64ToByteArray(data); 
    LZMA.decompress(array, function(result  ) {
      if (!(typeof result === 'string')) result = new Uint8Array(result)
      callback(result);
    });
  },

  stringToData(string, callback) {
    if (!string.length) return callback("");
    var a = new FileReader();
    a.onload = function(e) { callback(e.target.result.replace()) }
    a.readAsDataURL(new Blob([string], {encoding:"UTF-8",type:"text/html;charset=UTF-8"}));
  },

  dataToString(data, callback) {
    var blob = this.dataURItoBlob(data)
    var reader = new FileReader();
    reader.onload = function() { callback(reader.result) }
    reader.readAsText(blob);
  },

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        _ia[i] = byteString.charCodeAt(i);
    }
    var dataView = new DataView(arrayBuffer);
    var blob = new Blob([dataView.buffer], { type: mimeString });
    return blob;
  },
});

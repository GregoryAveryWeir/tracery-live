"use strict";



;define('tracery-live/app', ['exports', 'tracery-live/resolver', 'ember-load-initializers', 'tracery-live/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('tracery-live/application/controller', ['exports', 'tracery-grammar', 'ember-data'], function (exports, _traceryGrammar, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ['json'],
    json: null,
    version: 0,
    editing: false,
    errored: false,
    dirty: false,

    resetDisabled: Ember.computed.not('dirty'),
    tweetDisabled: Ember.computed('twitterURL.{isFulfilled,content}', function () {
      return !(this.twitterURL && this.twitterURL.isFulfilled && this.twitterURL.content);
    }),

    decompress: Ember.inject.service(),

    grammar: Ember.computed('model', function () {
      try {
        var grammar = _traceryGrammar.default.createGrammar(JSON.parse(this.model));
        grammar.addModifiers(_traceryGrammar.default.baseEngModifiers);
        return grammar;
      } catch (e) {
        return _traceryGrammar.default.createGrammar({ origin: 'Error in grammar: ' + e.message });
      }
    }),

    output: Ember.computed('model', 'version', function () {
      return this.grammar.flatten('#origin#');
    }),

    compressed: Ember.computed('model', function () {
      return _emberData.default.PromiseObject.create({
        promise: new Ember.RSVP.Promise((resolve, reject) => {
          try {
            JSON.parse(this.model);
            this.decompress.stringToZip(this.model, result => {
              resolve(result);
            });
          } catch (e) {
            reject(e);
          }
        })
      });
    }),

    twitterURL: Ember.computed('model', 'compressed', function () {
      return _emberData.default.PromiseObject.create({
        promise: new Ember.RSVP.Promise(resolve => this.compressed.then(result => {
          resolve('https://twitter.com/intent/tweet?text=Check%20out%20this%20Tracery%20grammar%20on%20Tracery%20Live:&hashtags=tracery&related=galaxykate%3ACreator%20of%20Tracery,gregoryweir%3ACreator%20of%20Tracery%20Live&url=' + encodeURIComponent(location.protocol + '//' + location.hostname + location.pathname + '?json=' + result));
        }))
      });
    }),

    actions: {
      discardChanges() {
        window.location.reload();
      },
      edit() {
        this.toggleProperty('editing');
      },
      jsonError() {
        this.set('errored', true);
      },
      saveToURL() {
        if (this.model) {
          this.compressed.then(result => {
            this.set('json', result);
            this.set('dirty', false);
          }, e => {
            window.alert('Can\'t save! Error in grammar: ' + e.message);
          });
        }
      },
      setJSON(json) {
        this.set('model', JSON.stringify(json));
        this.set('errored', false);
        this.set('dirty', true);
      },
      shuffle() {
        this.incrementProperty('version');
      }
    }
  });
});
;define('tracery-live/application/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    decompress: Ember.inject.service(),

    model(params) {
      if (params.json) {
        return new Ember.RSVP.Promise(resolve => {
          this.decompress.zipToString(params.json, result => {
            resolve(result);
          });
        });
      }
      return JSON.stringify({
        "origin": ["<h1>Tracery Live</h1>#credits# <p>#intro#</p> <p>#instruction#</p> <p>#more info#</p>"],
        "credits": ["<p>#selfdeprecatingverb# <a href=\"http://ludusnovus.net/\">Gregory Avery-Weir</a> #thanks to# <a href=\"http://www.galaxykate.com/\">GalaxyKate</a>'s <a href=\"http://tracery.io\">Tracery</a>.</p>"],
        "selfdeprecatingverb": ["Created by", "Envisioned by", "Hacked together by", "Copy-pasted by", "Emerged, fully-formed, from the brow of", "Could arguably be credited to", "Packaged by"],
        "thanks to": ["with thanks to", "in honor of", "based on", "as a blatant ripoff of", "but impossible without", "as tribute to", "in support of", "using"],
        "intro": ["#This# lets you #create# #procedural# #works# using #grammars# and #share them# #with their urls#. Try hitting the Shuffle button to see what I mean."],
        "This": ["This", "Tracery Live", "This site", "This site", "This site", "This site", "This site", "This site", "This site", "This microsite", "This thing", "This tool", "This page", "This toy", "This service", "This whirring assembly of sparks and wires", "This travesty", "This abomination", "This delight", "This goddess-send", "This miracle", "This horror", "Whatever this thing is"],
        "create": ["write", "create", "compose", "assemble", "#sillycreate#"],
        "sillycreate": ["generate", "ideate", "hack together", "give birth to"],
        "procedural": ["procedural", "generative", "random", "ever-changing"],
        "works": ["works", "stories", "poems", "cyberpoems", "works of art", "text pieces"],
        "grammars": ["grammars", "some JSON", "a bunch of incomprehensible code", "a special language", "just a few characters", "the sort of code you can see here", "L-systems", "fractals (sort of)"],
        "share them": ["share them", "show them to others", "give them as gifts", "show them off", "distribute them throughout the world", "spread them across the internet"],
        "with their urls": ["with their URLs", "with only their web addresses", "using the query parameters", "by copying and pasting from the address bar"],
        "instruction": "To see how this text is constructed, click the Edit button. You can use <b>HTML</b>, images, Font Awesome classes <i class=\"fa fa-#fa-class#\"></i>, emoji #emoji#, and other stuff!",
        "fa-class": ["fire", "gavel", "fighter-jet", "transgender-alt", "neuter", "mars-double", "venus-double", "rocket", "signing", "ticket", "thermometer-0\"></i><i class=\"fa fa-thermometer-2\"></i><i class=\"fa fa-thermometer-3\"></i><i class=\"fa fa-thermometer-4", "tree", "barcode"],
        "emoji": ["🤘", "🤔", "😅", "🤓", "🤠", "😱", "💩", "😻", "😾", "🙈", "🧕", "🧙", "💁", "🤦", "💆", "👳", "👌", "🤙", "💞", "💖", "👅", "🙏", "💅", "🦍", "🐶", "🐈", "🦀", "🐙", "🦂", "🍱", "🔛", "🔝", "⚠", "🚮", "🆗", "🆒", "🆓", "🆕", "💯", "😓", "😭"],
        "more info": "For more information on Tracery and what you can do with it, visit <a href=\"http://tracery.io\">tracery.io</a>."
      });
    }
  });
});
;define("tracery-live/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "piRrbw+k", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"sticky-footer wrapper\"],[9],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[27,\"sanitize\",[[23,[\"output\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[12,\"class\",[27,\"if\",[[23,[\"editing\"]],\"\",\"hidden\"],null]],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"tracery-json-editor\",null,[[\"json\",\"onChange\",\"mode\",\"modes\",\"onError\",\"onBadChange\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"setJSON\"],null],\"code\",null,[27,\"action\",[[22,0,[]],\"jsonError\"],null],[27,\"action\",[[22,0,[]],\"jsonError\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"p\"],[9],[7,\"small\"],[9],[0,\"Some HTML tags and styles are allowed. Because #hex colors mess with Tracery syntax, use rgb() colors.\"],[10],[10],[0,\"\\n\\n    \"],[7,\"p\"],[11,\"class\",\"actions\"],[9],[0,\"\\n      \"],[7,\"button\"],[12,\"disabled\",[21,\"errored\"]],[3,\"action\",[[22,0,[]],\"saveToURL\"]],[9],[0,\"Save to URL \"],[7,\"i\"],[11,\"class\",\"fa fa-save\"],[9],[10],[10],[0,\"\\n      \"],[7,\"button\"],[12,\"disabled\",[21,\"resetDisabled\"]],[3,\"action\",[[22,0,[]],\"discardChanges\"]],[9],[0,\"Discard Changes \"],[7,\"i\"],[11,\"class\",\"fa fa-trash\"],[9],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"footer\"],[9],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"actions\"],[9],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"shuffle\"]],[9],[0,\"Shuffle \"],[7,\"i\"],[11,\"class\",\"fa fa-random\"],[9],[10],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"edit\"]],[9],[1,[27,\"if\",[[23,[\"editing\"]],\"Close Editor\",\"Edit\"],null],false],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-edit\"],[9],[10],[10],[0,\"\\n    \"],[7,\"a\"],[12,\"disabled\",[21,\"tweetDisabled\"]],[12,\"class\",[28,[\"btn \",[27,\"if\",[[23,[\"tweetDisabled\"]],\"btn-disabled\"],null]]]],[11,\"target\",\"_blank\"],[12,\"href\",[28,[[23,[\"twitterURL\",\"content\"]]]]],[9],[0,\"\\n      Tweet This Grammar \"],[7,\"i\"],[11,\"class\",\"fa fa-twitter\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"footer-text\"],[9],[0,\"\\n    \"],[7,\"a\"],[11,\"href\",\"http://tracery.io\"],[9],[0,\"Tracery\"],[10],[0,\" was created by \"],[7,\"a\"],[11,\"href\",\"http://www.galaxykate.com/\"],[9],[0,\"GalaxyKate\"],[10],[0,\". Compressed URL inspired by \"],[7,\"a\"],[11,\"href\",\"https://itty.bitty.site/\"],[9],[0,\"itty.bitty.site\"],[10],[0,\" by \"],[7,\"a\"],[11,\"href\",\"https://github.com/alcor\"],[9],[0,\"Nicholas Jitkoff\"],[10],[0,\".\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"footer-text\"],[9],[0,\"\\n    Tracery Live was created by \"],[7,\"a\"],[11,\"href\",\"http://ludusnovus.net/\"],[9],[0,\"Gregory Avery-Weir\"],[10],[0,\". \"],[7,\"a\"],[11,\"href\",\"https://github.com/GregoryAveryWeir/tracery-live\"],[9],[0,\"Check out the source on GitHub.\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "tracery-live/application/template.hbs" } });
});
;define('tracery-live/components/json-editor', ['exports', 'ember-cli-jsoneditor/components/json-editor'], function (exports, _jsonEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _jsonEditor.default;
    }
  });
});
;define('tracery-live/components/sanitize-html', ['exports', 'ember-cli-sanitize-html/components/sanitize-html'], function (exports, _sanitizeHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sanitizeHtml.default;
    }
  });
});
;define('tracery-live/components/tracery-json-editor/component', ['exports', 'ember-cli-jsoneditor/components/json-editor'], function (exports, _jsonEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _jsonEditor.default.extend({
    onBadChange: null,

    getOptions() {
      var sup = this._super(...arguments);
      sup.onChange = () => {
        this._isTyping = true;
        const editor = this.get('editor');
        try {
          this.get('onChange')(editor.get());
        } catch (err) {
          if (Ember.isEmpty(editor.getText())) {
            this.get('onChange')({});
          } else {
            this.get('onBadChange')(err);
          }
        }
        this._isTyping = false;
      };
      return sup;
    }
  });
});
;define("tracery-live/components/tracery-json-editor/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dwpix8fM", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "tracery-live/components/tracery-json-editor/template.hbs" } });
});
;define('tracery-live/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('tracery-live/helpers/app-version', ['exports', 'tracery-live/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('tracery-live/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('tracery-live/helpers/sanitize', ['exports', 'ember-cli-sanitize-html'], function (exports, _emberCliSanitizeHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sanitize = sanitize;
  function sanitize(params /*, hash*/) {
    return Ember.String.htmlSafe((0, _emberCliSanitizeHtml.default)(params[0], {
      allowedTags: _emberCliSanitizeHtml.default.defaults.allowedTags.concat(['h1', 'h2', 'img', 'span']),
      transformTags: {
        'a': _emberCliSanitizeHtml.default.simpleTransform('a', { rel: 'nofollow' })
      },
      allowedAttributes: {
        '*': ['style', 'class'],
        a: ['href', 'name', 'target'],
        // We don't currently allow img itself by default, but this
        // would make sense if we did
        img: ['src']
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
      }
    }));
  }

  exports.default = Ember.Helper.helper(sanitize);
});
;define('tracery-live/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('tracery-live/index', ['exports', 'ember-cli-sanitize-html'], function (exports, _emberCliSanitizeHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliSanitizeHtml.default;
    }
  });
});
;define('tracery-live/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tracery-live/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('tracery-live/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('tracery-live/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('tracery-live/initializers/export-application-global', ['exports', 'tracery-live/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("tracery-live/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('tracery-live/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('tracery-live/router', ['exports', 'tracery-live/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
;define('tracery-live/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('tracery-live/services/decompress', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var BASE64_MARKER = ';base64,'; /**
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

  var LZMA64_MARKER = ';bxze64,';

  exports.default = Ember.Service.extend({
    compressDataURI(dataURI, callback) {
      var base64Index = dataURI.indexOf(BASE64_MARKER);
      var base64 = dataURI.substring(base64Index + BASE64_MARKER.length);
      this.stringToZip(this.base64ToByteArray(base64), function (result) {
        callback(dataURI.substring(0, base64Index) + LZMA64_MARKER + result);
      });
    },

    base64ToByteArray(base64) {
      var raw = window.atob(base64);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));
      for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      return array;
    },

    stringToZip(string, callback) {
      LZMA.compress(string, 9, function (result) {
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
        return callback(base64String);
      });
    },

    decompressDataURI(dataURI, preamble, callback) {
      var base64Index = dataURI.indexOf(LZMA64_MARKER);
      if (base64Index > 0) {
        var base64 = dataURI.substring(base64Index + LZMA64_MARKER.length);
        this.zipToString(base64, function (result) {
          this.stringToData(result, function (data) {
            if (!data) return callback(undefined);
            callback(dataURI.substring(0, base64Index) + BASE64_MARKER + (preamble || '') + data.split(',')[1]);
          });
        });
      } else {
        callback(dataURI);
      }
    },

    zipToString(data, callback) {
      var array = this.base64ToByteArray(data);
      LZMA.decompress(array, function (result) {
        if (!(typeof result === 'string')) result = new Uint8Array(result);
        callback(result);
      });
    },

    stringToData(string, callback) {
      if (!string.length) return callback("");
      var a = new FileReader();
      a.onload = function (e) {
        callback(e.target.result.replace());
      };
      a.readAsDataURL(new Blob([string], { encoding: "UTF-8", type: "text/html;charset=UTF-8" }));
    },

    dataToString(data, callback) {
      var blob = this.dataURItoBlob(data);
      var reader = new FileReader();
      reader.onload = function () {
        callback(reader.result);
      };
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
    }
  });
});
;define("tracery-live/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CGEy1JSS", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"welcome-page\"],false],[0,\"\\n\"],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "tracery-live/templates/application.hbs" } });
});
;

;define('tracery-live/config/environment', [], function() {
  var prefix = 'tracery-live';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("tracery-live/app")["default"].create({"name":"tracery-live","version":"0.0.0+efa5a5fe"});
          }
        
//# sourceMappingURL=tracery-live.map

'use strict';

define('tracery-live/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/controller.js should pass ESLint\n\n68:16 - \'error\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });

  QUnit.test('components/tracery-json-editor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tracery-json-editor/component.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/sanitize.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/sanitize.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('services/decompress.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/decompress.js should pass ESLint\n\n');
  });

  QUnit.test('services/shortener.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/shortener.js should pass ESLint\n\n');
  });
});
define('tracery-live/tests/helpers/ember-cli-clipboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.triggerSuccess = triggerSuccess;
  exports.triggerError = triggerError;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });

    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  };

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }

  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }

  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }

  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }

  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */
  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }

  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireActionByName(component, actionName) {
    let action = component[actionName];

    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define('tracery-live/tests/integration/components/tracery-json-editor/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | tracery-json-editor', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Yv1ys6Ur",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"tracery-json-editor\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.expect(0);
    });
  });
});
define('tracery-live/tests/integration/helpers/sanitize-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | sanitize', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "TehzRPyL",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"sanitize\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('tracery-live/tests/test-helper', ['tracery-live/app', 'tracery-live/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('tracery-live/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/tracery-json-editor/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tracery-json-editor/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/sanitize-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/sanitize-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/application/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/decompress-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/decompress-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/shortener-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/shortener-test.js should pass ESLint\n\n');
  });
});
define('tracery-live/tests/unit/application/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('tracery-live/tests/unit/application/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define('tracery-live/tests/unit/services/decompress-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | decompress', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:decompress');
      assert.ok(service);
    });
  });
});
define('tracery-live/tests/unit/services/shortener-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | shortener', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:shortener');
      assert.ok(service);
    });
  });
});
define('tracery-live/config/environment', [], function() {
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

require('tracery-live/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

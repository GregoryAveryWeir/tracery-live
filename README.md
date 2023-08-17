# tracery-live

[https://gregoryaveryweir.github.io/tracery-live/](https://gregoryaveryweir.github.io/tracery-live/)

Tracery Live allows you to flatten Tracery grammars delivered via the query string. You can link a URL that directly returns a plaintext/JSON Tracery grammar using the `?url=` parameter, or directly include an LZMA-compressed version of the grammar using the `?json=` grammar (as is prepared by the app itself).

All calculation happens in the browser.

The limits on URL length are funky. They range from under 2000 characters to arbitrarily high. Because of this, grammars of nontrivial length might not work with the `json=` approach in all formats. If you're worried, use the `url=` approach to load from an externally-hosted grammar.

URL grammar example: [https://gregoryaveryweir.github.io/tracery-live/?url=https%3A%2F%2Fgist.githubusercontent.com%2FGregoryAveryWeir%2Fc855c49dbb3e5af247d707462ac1145f%2Fraw%2Ff040275e1cf6193558de63baffd140d709d43404%2Fgrammar.json](https://gregoryaveryweir.github.io/tracery-live/?url=https%3A%2F%2Fgist.githubusercontent.com%2FGregoryAveryWeir%2Fc855c49dbb3e5af247d707462ac1145f%2Fraw%2Ff040275e1cf6193558de63baffd140d709d43404%2Fgrammar.json)

For more information on Tracery, visit [tracery.io](http://tracery.io). 

Tracery Live includes the hocus-pocus CSS framework, which is now defunct. You can use its classes in your grammars. The docs are archived on [Github Pages](https://gregoryaveryweir.github.io/hocus-pocus/).

# Standard Ember Boilerplate

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm) - Currently, Node 14 is required. You probably want to use nodeenv.
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd tracery-live`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Once you have a production build, run `deploy.sh` to deploy to Github Pages! You should probably fork the repo first unless you're an admin of the one you're in.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# tracery-live

Tracery Live allows you to flatten Tracery grammars delivered via the query string. You can link a URL that directly returns a plaintext/JSON Tracery grammar using the `?url=` parameter, or directly include an LZMA-compressed version of the grammar using the `?json=` grammar (as is prepared by the app itself).

The limits on URL length are funky. They range from under 2000 characters to arbitrarily high. Because of this, grammars of nontrivial length might not work with the `json=` approach in all formats. If you're worried, use the `url=` approach. URL grammars are not currently generated in an automated fashion, so they're for more advanced users.

For more information on Tracery, visit [tracery.io](http://tracery.io). 

# Standard Ember Boilerplate

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
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

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

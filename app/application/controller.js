import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {not, or} from '@ember/object/computed';
import {inject as service} from '@ember/service';
import tracery from 'tracery-grammar';
import {Promise} from 'rsvp';
import DS from 'ember-data';
import {htmlSafe} from '@ember/string';

export default Controller.extend({
  queryParams: ['json', 'url'],
  json: null,
  version: 0,
  editing: false,
  errored: false,
  dirty: false,
  shortUrl: null,
  shareUrl: null,
  remoteError: null,

  overlongUrl: computed('compressed', 'compressed.isSettled', function() {
    return DS.PromiseObject.create({promise: this.get('compressed').then(result => result.length > 4000)});
  }),

  resetDisabled: not('dirty'),

  shortDisabled: or('shortUrl', 'errored'),

  decompress: service(),
  shortener: service(),

  grammar: computed('model', function() {
    try {
      var grammar = tracery.createGrammar(JSON.parse(this.model));
      grammar.addModifiers(tracery.baseEngModifiers);
      return grammar;
    } catch(e) {
      return tracery.createGrammar({origin: 'Error in grammar: ' + e.message})
    }
  }),

  output: computed('model', 'version', function() {
    return this.grammar.flatten('#origin#');
  }),

  compressed: computed('model', function() {
    try {
      JSON.parse(this.model);
      return DS.PromiseObject.create({promise: this.decompress.stringToZip(this.model)});
    } catch(e) {
      return DS.PromiseObject.create({promise: Promise.reject()});
    }
  }),

  baseURL: computed(function() {
    let prot = location.protocol;
    let host = location.host;
    let path = location.pathname;

    return `${prot}//${host}${path}`;
  }),

  makeShortURL() {
    if(location.hostname == 'localhost') {
      this.set('remoteError', "Oops, is.gd doesn't like shortening localhost URLs. If you want to run locally, use a hosts entry so it thinks this is a real website.");
      return Promise.reject();
    }
    if(this.url) {
      return this.shortener.shorten(`${this.baseURL}?url=${encodeURIComponent(this.url)}`)
        .then(short => {
          this.set('shortUrl', short);
          return short;
        }).catch(() => {
          this.set('remoteError', htmlSafe('Error shortening URL. Please <a href="https://github.com/GregoryAveryWeir/tracery-live/issues">report this as a bug</a> with the URL of the grammar!'));
        });
    } else {
      return this.compressed.then(comp => {

        return this.shortener.shorten(`${this.baseURL}?json=${encodeURIComponent(comp)}`)
        .then(short => {
          this.set('shortUrl', short);
          return short;
        }).catch(() => {
          this.set('remoteError', `Error shortening URL. It may be too long. Try making a Gist or other remotely-hosted file and link the raw URL like ${this.baseURL}?url=[URL-component-encoded address of a grammar file]`);
        });
      });
    }
  },

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
    makeShortURLAction() {
      if(!this.shortUrl) {
        this.makeShortURL();
      }
    },
    loadURLAction() {
      var url = prompt("Enter a URL of a grammar as a JSON file:")
      if(url) {
        window.location.search = `?url=${encodeURIComponent(url)}`;
      }
    },
    saveToURL() {
      if(this.model) {
        this.compressed.then(result => {
          this.set('json', result);
          this.set('dirty', false);
        }, e => {
          window.alert('Can\'t save! Error in grammar: ' + e.message);
        });
      }
    },
    setJSON(json) {
      this.setProperties({
        model: JSON.stringify(json),
        errored: false,
        dirty: true,
        shortUrl: null,
        shareUrl: null,
      });
    },
    share() {
      if(this.shortUrl) {
        this.set('shareUrl', this.shortUrl);
      } else {
        this.makeShortURL().then(shortUrl => {
          this.set('shareUrl', shortUrl);
        });
      }
    },
    shuffle() {
      this.incrementProperty('version');
    },
  }
});

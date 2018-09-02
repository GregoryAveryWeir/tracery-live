import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {not, or} from '@ember/object/computed';
import {inject as service} from '@ember/service';
import tracery from 'tracery-grammar';
import {Promise} from 'rsvp';

export default Controller.extend({
  queryParams: ['json'],
  json: null,
  version: 0,
  editing: false,
  errored: false,
  dirty: false,
  shortUrl: null,
  shareUrl: null,

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
      return this.decompress.stringToZip(this.model);
    } catch(e) {
      return new Promise((resolve, reject) => reject());
    }
  }),

  makeShortURL() {
    return this.compressed.then(comp => {
      let prot = location.protocol;
      let host = location.hostname;
      let path = location.pathname;
      return this.shortener.shorten(`${prot}//${host}${path}?json=${encodeURIComponent(comp)}`)
      .then(short => {
        this.set('shortUrl', short);
        return short;
      });
    });
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

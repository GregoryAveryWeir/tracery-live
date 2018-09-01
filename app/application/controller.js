import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {not} from '@ember/object/computed';
import {inject as service} from '@ember/service';
import tracery from 'tracery-grammar';
import {Promise} from 'rsvp';
import DS from 'ember-data';

export default Controller.extend({
  queryParams: ['json'],
  json: null,
  version: 0,
  editing: false,
  errored: false,
  dirty: false,

  resetDisabled: not('dirty'),
  tweetDisabled: computed('twitterURL.{isFulfilled,content}', function() {
    return !(this.twitterURL && this.twitterURL.isFulfilled && this.twitterURL.content);
  }),

  decompress: service(),

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
    return DS.PromiseObject.create({
      promise: new Promise((resolve, reject) => {
        try {
          JSON.parse(this.model);
          this.decompress.stringToZip(this.model, result => {
            resolve(result);
          });
        } catch(e) {
          reject(e);
        }
      })
    });
  }),

  twitterURL: computed('model','compressed', function() {
    return DS.PromiseObject.create({
      promise: new Promise(resolve => 
        this.compressed.then(result => {
          resolve('https://twitter.com/intent/tweet?text=Check%20out%20this%20Tracery%20grammar%20on%20Tracery%20Live:&hashtags=tracery&related=galaxykate%3ACreator%20of%20Tracery,gregoryweir%3ACreator%20of%20Tracery%20Live&url=' +
          encodeURIComponent(location.protocol + '//' + location.hostname + location.pathname + '?json=' + result));
        })
      )
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
      this.set('model', JSON.stringify(json));
      this.set('errored', false);
      this.set('dirty', true);
    },
    shuffle() {
      this.incrementProperty('version');
    }
  }
});

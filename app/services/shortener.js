import Service from '@ember/service';
import $ from 'jquery';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';

export default Service.extend({
  shorten(URL) {
    return new RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'GET',
        url: `https://is.gd/create.php?format=json&url=${encodeURIComponent(URL)}`,
        dataType: 'jsonp',
      }).then(function(data) {
        run(null, resolve, data.shorturl);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        run(null, reject, jqXHR);
      });
    });
  }
});

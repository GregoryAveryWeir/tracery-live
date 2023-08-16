import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import $ from 'jquery';

export default Route.extend({
  decompress: service(),

  model(params) {
    if(params.json) {
      return this.decompress.zipToString(params.json);
    }
    if(params.url) {
      return $.get(decodeURIComponent(params.url)).then(result => result);
    }
    return JSON.stringify({
  "origin": [
    "<h1>Tracery Live</h1>#credits# <p>#intro#</p> <p>#instruction#</p> <p>#more info#</p>"
  ],
  "credits": [
    "<p>#selfdeprecatingverb# <a href=\"http://ludusnovus.net/\">Gregory Avery-Weir</a> #thanks to# <a href=\"http://www.galaxykate.com/\">GalaxyKate</a>'s <a href=\"http://tracery.io\">Tracery</a>.</p>"
  ],
  "selfdeprecatingverb": [
    "Created by",
    "Envisioned by",
    "Hacked together by",
    "Copy-pasted by",
    "Emerged, fully-formed, from the brow of",
    "Could arguably be credited to",
    "Packaged by"
  ],
  "thanks to": [
    "with thanks to",
    "in honor of",
    "based on",
    "as a blatant ripoff of",
    "but impossible without",
    "as tribute to",
    "in support of",
    "using"
  ],
  "intro": [
    "#This# lets you #create# #procedural# #works# using #grammars# and #share them# #with their urls#. Try hitting the Shuffle button to see what I mean."
  ],
  "This": [
    "This",
    "Tracery Live",
    "This site",
    "This site",
    "This site",
    "This site",
    "This site",
    "This site",
    "This site",
    "This microsite",
    "This thing",
    "This tool",
    "This page",
    "This toy",
    "This service",
    "This whirring assembly of sparks and wires",
    "This travesty",
    "This abomination",
    "This delight",
    "This goddess-send",
    "This miracle",
    "This horror",
    "Whatever this thing is"
  ],
  "create": [
    "write",
    "create",
    "compose",
    "assemble",
    "#sillycreate#"
  ],
  "sillycreate": [
    "generate",
    "ideate",
    "hack together",
    "give birth to"
  ],
  "procedural": [
    "procedural",
    "generative",
    "random",
    "ever-changing"
  ],
  "works": [
    "works",
    "stories",
    "poems",
    "cyberpoems",
    "works of art",
    "text pieces"
  ],
  "grammars": [
    "grammars",
    "some JSON",
    "a bunch of incomprehensible code",
    "a special language",
    "just a few characters",
    "the sort of code you can see here",
    "L-systems",
    "fractals (sort of)"
  ],
  "share them": [
    "share them",
    "show them to others",
    "give them as gifts",
    "show them off",
    "distribute them throughout the world",
    "spread them across the internet"
  ],
  "with their urls": [
    "with their URLs",
    "with only their web addresses",
    "using the query parameters",
    "by copying and pasting from the address bar"
  ],
  "instruction": "To see how this text is constructed, click the Edit button. You can use <b>HTML</b>, images, Font Awesome classes <i class=\"fa fa-#fa-class#\"></i>, emoji #emoji#, and other stuff!",
  "fa-class": ["fire", "gavel", "fighter-jet", "transgender-alt", "neuter", "mars-double", "venus-double", "rocket", "signing", "ticket", "thermometer-0\"></i><i class=\"fa fa-thermometer-2\"></i><i class=\"fa fa-thermometer-3\"></i><i class=\"fa fa-thermometer-4", "tree", "barcode"],
  "emoji": ["🤘", "🤔", "😅", "🤓", "🤠", "😱", "💩", "😻", "😾", "🙈", "🧕", "🧙", "💁", "🤦", "💆", "👳", "👌", "🤙", "💞", "💖", "👅", "🙏", "💅", "🦍", "🐶", "🐈", "🦀", "🐙", "🦂", "🍱", "🔛", "🔝", "⚠", "🚮", "🆗", "🆒", "🆓", "🆕", "💯", "😓", "😭"],
  "more info": "For more information on Tracery and what you can do with it, visit <a href=\"http://tracery.io\">tracery.io</a>."
});
  },
});

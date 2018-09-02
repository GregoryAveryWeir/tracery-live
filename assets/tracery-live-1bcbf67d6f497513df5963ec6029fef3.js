"use strict"
define("tracery-live/app",["exports","tracery-live/resolver","ember-load-initializers","tracery-live/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(o,n.default.modulePrefix),e.default=o}),define("tracery-live/application/controller",["exports","tracery-grammar"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({queryParams:["json"],json:null,version:0,editing:!1,errored:!1,dirty:!1,shortUrl:null,shareUrl:null,resetDisabled:Ember.computed.not("dirty"),shortDisabled:Ember.computed.or("shortUrl","errored"),decompress:Ember.inject.service(),shortener:Ember.inject.service(),grammar:Ember.computed("model",function(){try{var e=t.default.createGrammar(JSON.parse(this.model))
return e.addModifiers(t.default.baseEngModifiers),e}catch(e){return t.default.createGrammar({origin:"Error in grammar: "+e.message})}}),output:Ember.computed("model","version",function(){return this.grammar.flatten("#origin#")}),compressed:Ember.computed("model",function(){try{return JSON.parse(this.model),this.decompress.stringToZip(this.model)}catch(e){return new Ember.RSVP.Promise(function(e,t){return t()})}}),makeShortURL:function(){var e=this
return this.compressed.then(function(t){var r=location.protocol,n=location.hostname,o=location.pathname
return e.shortener.shorten(r+"//"+n+o+"?json="+encodeURIComponent(t)).then(function(t){return e.set("shortUrl",t),t})})},actions:{discardChanges:function(){window.location.reload()},edit:function(){this.toggleProperty("editing")},jsonError:function(){this.set("errored",!0)},makeShortURLAction:function(){this.shortUrl||this.makeShortURL()},saveToURL:function(){var e=this
this.model&&this.compressed.then(function(t){e.set("json",t),e.set("dirty",!1)},function(e){window.alert("Can't save! Error in grammar: "+e.message)})},setJSON:function(e){this.setProperties({model:JSON.stringify(e),errored:!1,dirty:!0,shortUrl:null,shareUrl:null})},share:function(){var e=this
this.shortUrl?this.set("shareUrl",this.shortUrl):this.makeShortURL().then(function(t){e.set("shareUrl",t)})},shuffle:function(){this.incrementProperty("version")}}})}),define("tracery-live/application/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({decompress:Ember.inject.service(),model:function(e){return e.json?this.decompress.zipToString(e.json):JSON.stringify({origin:["<h1>Tracery Live</h1>#credits# <p>#intro#</p> <p>#instruction#</p> <p>#more info#</p>"],credits:['<p>#selfdeprecatingverb# <a href="http://ludusnovus.net/">Gregory Avery-Weir</a> #thanks to# <a href="http://www.galaxykate.com/">GalaxyKate</a>\'s <a href="http://tracery.io">Tracery</a>.</p>'],selfdeprecatingverb:["Created by","Envisioned by","Hacked together by","Copy-pasted by","Emerged, fully-formed, from the brow of","Could arguably be credited to","Packaged by"],"thanks to":["with thanks to","in honor of","based on","as a blatant ripoff of","but impossible without","as tribute to","in support of","using"],intro:["#This# lets you #create# #procedural# #works# using #grammars# and #share them# #with their urls#. Try hitting the Shuffle button to see what I mean."],This:["This","Tracery Live","This site","This site","This site","This site","This site","This site","This site","This microsite","This thing","This tool","This page","This toy","This service","This whirring assembly of sparks and wires","This travesty","This abomination","This delight","This goddess-send","This miracle","This horror","Whatever this thing is"],create:["write","create","compose","assemble","#sillycreate#"],sillycreate:["generate","ideate","hack together","give birth to"],procedural:["procedural","generative","random","ever-changing"],works:["works","stories","poems","cyberpoems","works of art","text pieces"],grammars:["grammars","some JSON","a bunch of incomprehensible code","a special language","just a few characters","the sort of code you can see here","L-systems","fractals (sort of)"],"share them":["share them","show them to others","give them as gifts","show them off","distribute them throughout the world","spread them across the internet"],"with their urls":["with their URLs","with only their web addresses","using the query parameters","by copying and pasting from the address bar"],instruction:'To see how this text is constructed, click the Edit button. You can use <b>HTML</b>, images, Font Awesome classes <i class="fa fa-#fa-class#"></i>, emoji #emoji#, and other stuff!',"fa-class":["fire","gavel","fighter-jet","transgender-alt","neuter","mars-double","venus-double","rocket","signing","ticket",'thermometer-0"></i><i class="fa fa-thermometer-2"></i><i class="fa fa-thermometer-3"></i><i class="fa fa-thermometer-4',"tree","barcode"],emoji:["🤘","🤔","😅","🤓","🤠","😱","💩","😻","😾","🙈","🧕","🧙","💁","🤦","💆","👳","👌","🤙","💞","💖","👅","🙏","💅","🦍","🐶","🐈","🦀","🐙","🦂","🍱","🔛","🔝","⚠","🚮","🆗","🆒","🆓","🆕","💯","😓","😭"],"more info":'For more information on Tracery and what you can do with it, visit <a href="http://tracery.io">tracery.io</a>.'})}})}),define("tracery-live/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"l2R8h86z",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","sticky-footer wrapper"],[9],[0,"\\n"],[7,"div"],[11,"class","container"],[9],[0,"\\n  "],[7,"p"],[9],[0,"\\n    "],[1,[27,"sanitize",[[23,["output"]]],null],false],[0,"\\n  "],[10],[0,"\\n\\n  "],[7,"div"],[12,"class",[27,"if",[[23,["editing"]],"","hidden"],null]],[9],[0,"\\n    "],[7,"p"],[9],[0,"\\n        "],[1,[27,"tracery-json-editor",null,[["json","onChange","mode","modes","onError","onBadChange"],[[23,["model"]],[27,"action",[[22,0,[]],"setJSON"],null],"code",null,[27,"action",[[22,0,[]],"jsonError"],null],[27,"action",[[22,0,[]],"jsonError"],null]]]],false],[0,"\\n    "],[10],[0,"\\n\\n    "],[7,"p"],[9],[7,"small"],[9],[0,"Some HTML tags and styles are allowed. Because #hex colors mess with Tracery syntax, use rgb() colors."],[10],[10],[0,"\\n\\n    "],[7,"p"],[11,"class","actions"],[9],[0,"\\n      "],[7,"button"],[12,"disabled",[21,"errored"]],[3,"action",[[22,0,[]],"saveToURL"]],[9],[0,"Save to URL "],[7,"i"],[11,"class","fa fa-save"],[9],[10],[10],[0,"\\n      "],[7,"button"],[12,"disabled",[21,"resetDisabled"]],[3,"action",[[22,0,[]],"discardChanges"]],[9],[0,"Discard Changes "],[7,"i"],[11,"class","fa fa-trash"],[9],[10],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"],[7,"footer"],[9],[0,"\\n  "],[7,"p"],[11,"class","actions"],[9],[0,"\\n    "],[7,"button"],[3,"action",[[22,0,[]],"shuffle"]],[9],[0,"Shuffle "],[7,"i"],[11,"class","fa fa-random"],[9],[10],[10],[0,"\\n    "],[7,"button"],[3,"action",[[22,0,[]],"edit"]],[9],[1,[27,"if",[[23,["editing"]],"Close Editor","Edit"],null],false],[0," "],[7,"i"],[11,"class","fa fa-edit"],[9],[10],[10],[0,"\\n    "],[7,"button"],[12,"disabled",[21,"shareUrl"]],[3,"action",[[22,0,[]],"share"]],[9],[0,"\\n      Share This Grammar "],[7,"i"],[11,"class","fa fa-share-alt"],[9],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"button"],[12,"disabled",[21,"shortDisabled"]],[3,"action",[[22,0,[]],"makeShortURLAction"]],[9],[0,"\\n      Make Short URL "],[7,"i"],[11,"class","fa fa-link"],[9],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"],[4,"if",[[23,["shareUrl"]]],null,{"statements":[[0,"    "],[7,"p"],[11,"class","actions"],[9],[0,"\\n      "],[1,[27,"share-panel",null,[["buttons","labels","url","title","hashtags"],["fb,vk,twitter,linkedin,gplus","Share,Share,Tweet,Share,Share",[23,["shareUrl"]],"Check out this Tracery grammar on Tracery Live","tracery"]]],false],[0,"\\n    "],[10],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,["shortUrl"]]],null,{"statements":[[0,"    "],[7,"p"],[11,"class","actions"],[9],[0,"\\n      "],[1,[27,"input",null,[["id","value"],["shortUrl",[23,["shortUrl"]]]]],false],[0,"\\n"],[4,"if",[[27,"is-clipboard-supported",null,null]],null,{"statements":[[4,"copy-button",null,[["class","clipboardTarget"],["btn-outline","#shortUrl"]],{"statements":[[0,"          Copy "],[7,"i"],[11,"class","fa fa-copy"],[9],[10],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"]],"parameters":[]},null],[0,"  \\n  "],[7,"p"],[11,"class","footer-text"],[9],[0,"\\n    "],[7,"a"],[11,"href","http://tracery.io"],[9],[0,"Tracery"],[10],[0," was created by "],[7,"a"],[11,"href","http://www.galaxykate.com/"],[9],[0,"GalaxyKate"],[10],[0,". Compressed URL inspired by "],[7,"a"],[11,"href","https://itty.bitty.site/"],[9],[0,"itty.bitty.site"],[10],[0," by "],[7,"a"],[11,"href","https://github.com/alcor"],[9],[0,"Nicholas Jitkoff"],[10],[0,".\\n  "],[10],[0,"\\n  "],[7,"p"],[11,"class","footer-text"],[9],[0,"\\n    Tracery Live was created by "],[7,"a"],[11,"href","http://ludusnovus.net/"],[9],[0,"Gregory Avery-Weir"],[10],[0,". "],[7,"a"],[11,"href","https://github.com/GregoryAveryWeir/tracery-live"],[9],[0,"Check out the source on GitHub."],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"tracery-live/application/template.hbs"}})}),define("tracery-live/components/copy-button",["exports","ember-cli-clipboard/components/copy-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/email-share-button",["exports","ember-social-share/components/email-share-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/fa-icon",["exports","@fortawesome/ember-fontawesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/fb-share-button",["exports","ember-social-share/components/fb-share-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/fontawesome-node",["exports","@fortawesome/ember-fontawesome/components/fontawesome-node"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/gplus-share-button",["exports","ember-social-share/components/gplus-share-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/json-editor",["exports","ember-cli-jsoneditor/components/json-editor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/linkedin-share-button",["exports","ember-social-share/components/linkedin-share-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/sanitize-html",["exports","ember-cli-sanitize-html/components/sanitize-html"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/share-panel",["exports","ember-social-share/components/share-panel"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/tracery-json-editor/component",["exports","ember-cli-jsoneditor/components/json-editor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({onBadChange:null,getOptions:function(){var e=this,t=this._super.apply(this,arguments)
return t.onChange=function(){e._isTyping=!0
var t=e.get("editor")
try{e.get("onChange")(t.get())}catch(r){Ember.isEmpty(t.getText())?e.get("onChange")({}):e.get("onBadChange")(r)}e._isTyping=!1},t}})}),define("tracery-live/components/tracery-json-editor/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"dwpix8fM",block:'{"symbols":["&default"],"statements":[[14,1]],"hasEval":false}',meta:{moduleName:"tracery-live/components/tracery-json-editor/template.hbs"}})}),define("tracery-live/components/twitter-share-button",["exports","ember-social-share/components/twitter-share-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/components/vk-share-button",["exports","ember-social-share/components/vk-share-button"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/helpers/app-version",["exports","tracery-live/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,s=null
return i&&(n.showExtended&&(s=o.match(r.versionExtendedRegExp)),s||(s=o.match(r.versionRegExp))),a&&(s=o.match(r.shaRegExp)),s?s[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=Ember.Helper.helper(n)}),define("tracery-live/helpers/is-clipboard-supported",["exports","ember-cli-clipboard/helpers/is-clipboard-supported"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isClipboardSupported",{enumerable:!0,get:function(){return t.isClipboardSupported}})}),define("tracery-live/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("tracery-live/helpers/sanitize",["exports","ember-cli-sanitize-html"],function(e,t){function r(e){return Ember.String.htmlSafe((0,t.default)(e[0],{allowedTags:t.default.defaults.allowedTags.concat(["h1","h2","img","span"]),transformTags:{a:t.default.simpleTransform("a",{rel:"nofollow"})},allowedAttributes:{"*":["style","class"],a:["href","name","target"],img:["src"]},allowedStyles:{"*":{color:[/^#(0x)?[0-9a-f]+$/i,/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],"text-align":[/^left$/,/^right$/,/^center$/],"font-size":[/^\d+(?:px|em|%)$/]},p:{"font-size":[/^\d+rem$/]}}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=r,e.default=Ember.Helper.helper(r)}),define("tracery-live/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("tracery-live/index",["exports","ember-cli-sanitize-html"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","tracery-live/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,o=void 0
r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,o)}}),define("tracery-live/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("tracery-live/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("tracery-live/initializers/export-application-global",["exports","tracery-live/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("tracery-live/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("tracery-live/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default})
define("tracery-live/router",["exports","tracery-live/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){}),e.default=r}),define("tracery-live/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("tracery-live/services/decompress",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
e.default=Ember.Service.extend({base64ToByteArray:function(e){for(var t=window.atob(e),r=t.length,n=new Uint8Array(new ArrayBuffer(r)),o=0;o<r;o++)n[o]=t.charCodeAt(o)
return n},stringToZip:function(e){return new Ember.RSVP.Promise(function(t){LZMA.compress(e,9,function(e){var r=btoa(String.fromCharCode.apply(null,new Uint8Array(e)))
return t(r)})})},zipToString:function(e){var t=this
return new Ember.RSVP.Promise(function(r){var n=t.base64ToByteArray(e)
LZMA.decompress(n,function(e){"string"!=typeof e&&(e=new Uint8Array(e)),r(e)})})}})}),define("tracery-live/services/shortener",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Service.extend({shorten:function(e){return new Ember.RSVP.Promise(function(t,r){Ember.$.ajax({type:"GET",url:"https://is.gd/create.php?format=json&url="+encodeURIComponent(e),dataType:"jsonp"}).then(function(e){Ember.run(null,t,e.shorturl)},function(e){e.then=null,Ember.run(null,r,e)})})}})}),define("tracery-live/config/environment",[],function(){try{var e="tracery-live/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("tracery-live/app").default.create({name:"tracery-live",version:"0.0.0+534e132e"})

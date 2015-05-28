/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
!function(){window.WebComponents=window.WebComponents||{flags:{}};var o="webcomponents.js",s=document.querySelector('script[src*="'+o+'"]'),e={};if(!e.noOpts){if(location.search.slice(1).split("&").forEach(function(o){var s,t=o.split("=");t[0]&&(s=t[0].match(/wc-(.+)/))&&(e[s[1]]=t[1]||!0)}),s)for(var t,n=0;t=s.attributes[n];n++)"src"!==t.name&&(e[t.name]=t.value||!0);if(e.log&&e.log.split){var a=e.log.split(",");e.log={},a.forEach(function(o){e.log[o]=!0})}else e.log={}}e.shadow=e.shadow||e.shadowdom||e.polyfill,e.shadow="native"===e.shadow?!1:e.shadow||!HTMLElement.prototype.createShadowRoot;var c=["WebComponents/shadowdom.js"],r=["ShadowDOM/ShadowDOM.js","WebComponents/shadowdom.js","ShadowCSS/ShadowCSS.js"],l=e.shadow?r:c,m=[].concat(l,["HTMLImports/HTMLImports.js","CustomElements/CustomElements.js","WebComponents/lang.js","WebComponents/dom.js","WebComponents/unresolved.js","WebComponents/bc.js"]),d=s.getAttribute("src"),i=d.slice(0,d.lastIndexOf(o));m.forEach(function(o){document.write('<script src="'+i+"src/"+o+'"></script>')}),WebComponents.flags=e}();
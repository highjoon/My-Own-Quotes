(self.webpackChunkmy_own_dictionary=self.webpackChunkmy_own_dictionary||[]).push([[249],{7249:function(t,r,e){"use strict";e.r(r);e(2526),e(1817),e(1539),e(2165),e(6992),e(8783),e(3948),e(7042),e(8309),e(1038),e(4916),e(7941),e(7327),e(5003),e(4747),e(9337);var n=e(7294),o=e(6974),i=e(3710),c=e(6556),u=e(6564);function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function l(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],c=!0,u=!1;try{for(e=e.call(t);!(c=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}r.default=function(){var t=(0,o.UO)().id,r=(0,o.s0)(),e=(0,o.TH)().state,s=l((0,u.Df)(),2),y=s[0],p=s[1],b=p.error,g=p.isLoading,O=p.isSuccess,d=p.isError;(0,n.useEffect)((function(){O&&r("/quotes",{replace:!0})}),[O,r]);return b||d?n.createElement(c.Z,{error:b}):n.createElement(n.Fragment,null,n.createElement(i.Z,{isLoading:g,onUpdateQuote:function(r){y(function(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){f(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}({id:t},r))},originalQuote:e.quoteData}))}},7327:function(t,r,e){"use strict";var n=e(2109),o=e(2092).filter;n({target:"Array",proto:!0,forced:!e(1194)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5003:function(t,r,e){var n=e(2109),o=e(7293),i=e(5656),c=e(1236).f,u=e(9781),a=o((function(){c(1)}));n({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(t,r){return c(i(t),r)}})},9337:function(t,r,e){var n=e(2109),o=e(9781),i=e(3887),c=e(5656),u=e(1236),a=e(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var r,e,n=c(t),o=u.f,f=i(n),l={},s=0;f.length>s;)void 0!==(e=o(n,r=f[s++]))&&a(l,r,e);return l}})}}]);
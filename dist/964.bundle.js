"use strict";(self.webpackChunkmy_own_dictionary=self.webpackChunkmy_own_dictionary||[]).push([[964],{4964:function(r,t,e){e.r(t);e(2526),e(1817),e(1539),e(2165),e(6992),e(8783),e(3948),e(7042),e(8309),e(1038),e(4916);var n=e(7294),o=e(6974),u=e(3710),a=e(6556),i=e(6564);function l(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,o,u=[],a=!0,i=!1;try{for(e=e.call(r);!(a=(n=e.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(r){i=!0,o=r}finally{try{a||null==e.return||e.return()}finally{if(i)throw o}}return u}(r,t)||function(r,t){if(!r)return;if("string"==typeof r)return c(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}t.default=function(){var r=(0,o.s0)(),t=l((0,i.fw)(),2),e=t[0],c=t[1],f=c.error,s=c.isLoading,y=c.isSuccess,m=c.isError;(0,n.useEffect)((function(){y&&r("/quotes",{replace:!0})}),[y,r]);return m?n.createElement(a.Z,{error:f}):n.createElement(n.Fragment,null,n.createElement(u.Z,{isLoading:s,onAddQuote:function(r){e(r)}}))}}}]);
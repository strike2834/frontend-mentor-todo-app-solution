module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="QfWi")}({HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);var r,o,i,u=n("HteQ"),a=0,c=[],l=u.options.__b,f=u.options.__r,_=u.options.diffed,d=u.options.__c,p=u.options.unmount;function h(t,e){u.options.__h&&u.options.__h(o,t,a||e),a=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function s(t){return a=1,function(t,e,n){var i=h(r++,2);return i.t=t,i.__c||(i.__=[n?n(e):g(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__=[e,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}(g,t)}function b(){for(var t;t=c.shift();)if(t.__P)try{t.__H.__h.forEach(v),t.__H.__h.forEach(y),t.__H.__h=[]}catch(e){t.__H.__h=[],u.options.__e(e,t.__v)}}u.options.__b=function(t){o=null,l&&l(t)},u.options.__r=function(t){f&&f(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(v),e.__h.forEach(y),e.__h=[])},u.options.diffed=function(t){_&&_(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==c.push(e)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),m&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);m&&(e=requestAnimationFrame(n))})(b)),o=null},u.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(v),t.__h=t.__h.filter((function(t){return!t.__||y(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],u.options.__e(n,t.__v)}})),d&&d(t,e)},u.options.unmount=function(t){p&&p(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{v(t)}catch(t){e=t}})),e&&u.options.__e(e,n.__v))};var m="function"==typeof requestAnimationFrame;function v(t){var e=o,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),o=e}function y(t){var e=o;t.__c=t.__(),o=e}function g(t,e){return"function"==typeof e?e(t):e}var j={container:"container__UgmKE"};function O(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}(t,e)||A(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H=function(){var t=S(s([{text:"Hello world!",done:!1,id:(+new Date(2022,1,1,10,33,30)).toString(36),order:1},{text:"This is a todo app.",done:!1,id:(+new Date(2022,2,28,7,24,16)).toString(36),order:2},{text:"You can drag the todo to rearrange its order!",done:!1,id:(+new Date(2022,3,14,6,31,2)).toString(36),order:3},{text:"And check the item you have done.",done:!1,id:(+new Date(2022,4,20,19,4,5)).toString(36),order:4}]),2),e=t[0],n=t[1],r=S(s(""),2),o=r[0],i=r[1],a=S(s(),2),c=a[0],l=a[1],f=function(t){l(t.currentTarget.id)},_=function(t){var r=e.find((function(t){return t.id===c})),o=e.find((function(e){return e.id===t.currentTarget.id})),i=r.order,u=o.order,a=e.map((function(e){return e.id===c&&(e.order=u),e.id===t.currentTarget.id&&(e.order=i),e}));n(a)},d=S(s(!1),2),p=d[0],h=d[1],b=S(s("all"),2),m=b[0],v=b[1],y=function(t){v(t.target.value)};return Object(u.h)("div",{className:[j.container,p?"darkmode":null].join(" ")},Object(u.h)("h1",null,"TODO"),Object(u.h)("button",{type:"button",onClick:function(){h(!p)}},"DarkMode"),Object(u.h)("span",null,p.toString()),Object(u.h)("form",{onSubmit:function(){var t;t={text:o,done:!1,id:(+new Date).toString(36),order:e.length+1},n([].concat(O(e),[t])),i("")},action:"javascript:"},Object(u.h)("label",null,Object(u.h)("span",null,"Add Todo"),Object(u.h)("input",{value:o,onInput:function(t){var e=t.target;i(e.value)}})),Object(u.h)("button",{type:"submit"},"Add")),Object(u.h)("ul",null,e.sort((function(t,e){return t.order-e.order})).filter((function(t){return"all"===m?t:"active"===m?!t.done:"completed"===m?t.done:void 0})).map((function(t){return Object(u.h)("li",{key:t.id,id:t.id,draggable:!0,onDragStart:f,onDragOver:function(t){return t.preventDefault()},onDrop:_},Object(u.h)("button",{type:"button",onClick:function(){return r=t.id,o=e.findIndex((function(t){return t.id===r})),(i=O(e))[o].done=!i[o].done,void n(i);var r,o,i}},"Check"),t.done?"O":"X",": ",t.text,Object(u.h)("button",{type:"button",onClick:function(){return r=t.id,void n(e.filter((function(t){return t.id!==r})));var r}},"remove"))}))),Object(u.h)("span",null,e.filter((function(t){return!1===t.done})).length," items left"),Object(u.h)("input",{type:"radio",value:"all",id:"filter-all",name:"filter",onChange:y,checked:"all"===m}),Object(u.h)("label",{htmlFor:"filter-all"},"All"),Object(u.h)("input",{type:"radio",value:"active",id:"filter-active",name:"filter",onChange:y,checked:"active"===m}),Object(u.h)("label",{htmlFor:"filter-active"},"Active"),Object(u.h)("input",{type:"radio",value:"completed",id:"filter-completed",name:"filter",onChange:y,checked:"completed"===m}),Object(u.h)("label",{htmlFor:"filter-completed"},"Completed"),Object(u.h)("button",{type:"button",onClick:function(){n(e.filter((function(t){return!t.done})))}},"Clear Completed"),Object(u.h)("p",null,"Drag and drop to reorder list"))},w=function(){return Object(u.h)("div",{id:"app"},Object(u.h)(H,{path:"/"}))};e.default=w}});
//# sourceMappingURL=ssr-bundle.js.map
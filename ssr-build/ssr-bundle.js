module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/frontend-mentor-todo-app-solution/",e(e.s="QfWi")}({HteQ:function(t,n){t.exports=require("preact")},QfWi:function(t,n,e){"use strict";e.r(n);var r,o,i,u=e("HteQ"),a="/".concat("frontend-mentor-todo-app-solution"),c=0,l=[],f=u.options.__b,_=u.options.__r,d=u.options.diffed,p=u.options.__c,h=u.options.unmount;function s(t,n){u.options.__h&&u.options.__h(o,t,c||n),c=0;var e=o.__H||(o.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function b(t){return c=1,function(t,n,e){var i=s(r++,2);return i.t=t,i.__c||(i.__=[e?e(n):j(void 0,n),function(t){var n=i.t(i.__[0],t);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}(j,t)}function m(){for(var t;t=l.shift();)if(t.__P)try{t.__H.__h.forEach(y),t.__H.__h.forEach(g),t.__H.__h=[]}catch(n){t.__H.__h=[],u.options.__e(n,t.__v)}}u.options.__b=function(t){o=null,f&&f(t)},u.options.__r=function(t){_&&_(t),r=0;var n=(o=t.__c).__H;n&&(n.__h.forEach(y),n.__h.forEach(g),n.__h=[])},u.options.diffed=function(t){d&&d(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==l.push(n)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),v&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);v&&(n=requestAnimationFrame(e))})(m)),o=null},u.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(y),t.__h=t.__h.filter((function(t){return!t.__||g(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],u.options.__e(e,t.__v)}})),p&&p(t,n)},u.options.unmount=function(t){h&&h(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{y(t)}catch(t){n=t}})),n&&u.options.__e(n,e.__v))};var v="function"==typeof requestAnimationFrame;function y(t){var n=o,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),o=n}function g(t){var n=o;t.__c=t.__(),o=n}function j(t,n){return"function"==typeof n?n(t):n}var O={container:"container__UgmKE"};function S(t){return function(t){if(Array.isArray(t))return H(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,n)||x(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,n){if(t){if("string"==typeof t)return H(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?H(t,n):void 0}}function H(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var w=function(){var t=A(b([{text:"Hello world!",done:!1,id:(+new Date(2022,1,1,10,33,30)).toString(36),order:1},{text:"This is a todo app.",done:!1,id:(+new Date(2022,2,28,7,24,16)).toString(36),order:2},{text:"You can drag the todo to rearrange its order!",done:!1,id:(+new Date(2022,3,14,6,31,2)).toString(36),order:3},{text:"And check the item you have done.",done:!1,id:(+new Date(2022,4,20,19,4,5)).toString(36),order:4}]),2),n=t[0],e=t[1],r=A(b(""),2),o=r[0],i=r[1],a=A(b(),2),c=a[0],l=a[1],f=function(t){l(t.currentTarget.id)},_=function(t){var r=n.find((function(t){return t.id===c})),o=n.find((function(n){return n.id===t.currentTarget.id})),i=r.order,u=o.order,a=n.map((function(n){return n.id===c&&(n.order=u),n.id===t.currentTarget.id&&(n.order=i),n}));e(a)},d=A(b(!1),2),p=d[0],h=d[1],s=A(b("all"),2),m=s[0],v=s[1],y=function(t){v(t.target.value)};return Object(u.h)("div",{className:[O.container,p?"darkmode":null].join(" ")},Object(u.h)("h1",null,"TODO"),Object(u.h)("button",{type:"button",onClick:function(){h(!p)}},"DarkMode"),Object(u.h)("span",null,p.toString()),Object(u.h)("form",{onSubmit:function(){var t;t={text:o,done:!1,id:(+new Date).toString(36),order:n.length+1},e([].concat(S(n),[t])),i("")},action:"javascript:"},Object(u.h)("label",null,Object(u.h)("span",null,"Add Todo"),Object(u.h)("input",{value:o,onInput:function(t){var n=t.target;i(n.value)}})),Object(u.h)("button",{type:"submit"},"Add")),Object(u.h)("ul",null,n.sort((function(t,n){return t.order-n.order})).filter((function(t){return"all"===m?t:"active"===m?!t.done:"completed"===m?t.done:void 0})).map((function(t){return Object(u.h)("li",{key:t.id,id:t.id,draggable:!0,onDragStart:f,onDragOver:function(t){return t.preventDefault()},onDrop:_},Object(u.h)("button",{type:"button",onClick:function(){return r=t.id,o=n.findIndex((function(t){return t.id===r})),(i=S(n))[o].done=!i[o].done,void e(i);var r,o,i}},"Check"),t.done?"O":"X",": ",t.text,Object(u.h)("button",{type:"button",onClick:function(){return r=t.id,void e(n.filter((function(t){return t.id!==r})));var r}},"remove"))}))),Object(u.h)("span",null,n.filter((function(t){return!1===t.done})).length," items left"),Object(u.h)("input",{type:"radio",value:"all",id:"filter-all",name:"filter",onChange:y,checked:"all"===m}),Object(u.h)("label",{htmlFor:"filter-all"},"All"),Object(u.h)("input",{type:"radio",value:"active",id:"filter-active",name:"filter",onChange:y,checked:"active"===m}),Object(u.h)("label",{htmlFor:"filter-active"},"Active"),Object(u.h)("input",{type:"radio",value:"completed",id:"filter-completed",name:"filter",onChange:y,checked:"completed"===m}),Object(u.h)("label",{htmlFor:"filter-completed"},"Completed"),Object(u.h)("button",{type:"button",onClick:function(){e(n.filter((function(t){return!t.done})))}},"Clear Completed"),Object(u.h)("p",null,"Drag and drop to reorder list"))},T=function(){return Object(u.h)("div",{id:"app"},Object(u.h)(w,{path:"".concat(a,"/")}))};n.default=T}});
//# sourceMappingURL=ssr-bundle.js.map
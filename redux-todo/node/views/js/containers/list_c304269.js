define("js/containers/list",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return e}function u(e){return{checks:function(t){e(d.setVisibilityFilter(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,i=t,c=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,i);if(void 0!==u){if("value"in u)return u.value;var a=u.get;return void 0===a?void 0:a.call(c)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=i,r=c,n=!0,u=l=void 0}},s=e("node_modules/react/react"),f=n(s),p=e("node_modules/react-redux/lib/index"),d=e("js/actions/index"),h=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"check",value:function(e){this.props.checks(e)}},{key:"render",value:function(){return f["default"].createElement("div",{className:"footer"},f["default"].createElement("a",{className:"SHOW_ALL"==this.props.todoApp.filter?"hover":"",onClick:this.check.bind(this,"SHOW_ALL")},"全部"),f["default"].createElement("a",{className:"SHOW_ACTIVE"==this.props.todoApp.filter?"hover":"",onClick:this.check.bind(this,"SHOW_ACTIVE")},"活动"),f["default"].createElement("a",{className:"SHOW_COMPENT"==this.props.todoApp.filter?"hover":"",onClick:this.check.bind(this,"SHOW_COMPENT")},"完成"))}}]),t}(f["default"].Component),v=p.connect(c,u)(h);t["default"]=v,r.exports=t["default"]});
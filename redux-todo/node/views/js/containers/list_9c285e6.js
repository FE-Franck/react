define("js/containers/list",function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return console.log(e),e}function c(e){return{touchTodo:function(){e(d.changeActive(text))}}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=function(e,t,o){for(var n=!0;n;){var r=e,i=t,u=o;n=!1,null===r&&(r=Function.prototype);var c=Object.getOwnPropertyDescriptor(r,i);if(void 0!==c){if("value"in c)return c.value;var l=c.get;return void 0===l?void 0:l.call(u)}var a=Object.getPrototypeOf(r);if(null===a)return void 0;e=a,t=i,o=u,n=!0,c=a=void 0}},s=e("node_modules/react/react"),p=n(s),f=e("node_modules/react-redux/lib/index"),d=e("js/actions/index"),v=function(e){function t(){r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),l(t,[{key:"touch",value:function(e){this.props.touchTodo(e)}},{key:"show",value:function(){var e=this;switch(this.props.todoApp.filter){case"SHOW_ALL":return this.props.todoApp.list.map(function(t){return p["default"].createElement("li",{onClick:e.touch.bind(e,t.id),className:t.complete?"complete":""},t.text)});case"SHOW_ACTIVE":return this.props.todoApp.list.map(function(t){return t.complete?void 0:p["default"].createElement("li",{onClick:e.touch.bind(e,t.id)},t.text)});case"SHOW_COMPENT":return this.props.todoApp.list.map(function(t){return t.complete?p["default"].createElement("li",{onClick:e.touch.bind(e,t.id),className:"complete"},t.text):void 0})}}},{key:"render",value:function(){return p["default"].createElement("div",{className:"list"},p["default"].createElement("ul",null,this.show()))}}]),t}(p["default"].Component),h=f.connect(u,c)(v);t["default"]=h,o.exports=t["default"]});
define("js/containers/input",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return e}function i(e){return{addTodo:function(t){e(s.addToDo(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function(e,t,n){for(var o=!0;o;){var r=e,u=t,a=n;o=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=u,n=a,o=!0,i=l=void 0}},f=e("node_modules/react/react"),d=o(f),p=e("node_modules/react-redux/lib/index"),s=e("js/actions/index"),v=function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),c(t,[{key:"addTodo",value:function(){var e=this.refs.myInput;return""==e.value?void alert("请输入值"):(this.props.addTodo(e.value),void(e.value=""))}},{key:"render",value:function(){return d["default"].createElement("div",null,d["default"].createElement("input",{className:"userInput",ref:"myInput",type:"text"}),d["default"].createElement("a",{onClick:this.addTodo.bind(this)},"增加"))}}]),t}(d["default"].Component),y=p.connect(a,i)(v);t["default"]=y,n.exports=t["default"]});
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _react=require("node_modules/react/react"),_react2=_interopRequireDefault(_react),_reactDom=require("node_modules/react-dom/index"),_reactDom2=_interopRequireDefault(_reactDom),_reactRouter=require("node_modules/react-router/lib/index"),_componentsApp=require("js/components/app"),_componentsApp2=_interopRequireDefault(_componentsApp);_reactDom2["default"].render(_react2["default"].createElement(_reactRouter.Router,{history:_reactRouter.browserHistory},_react2["default"].createElement(_reactRouter.Route,{path:"/",component:_componentsApp2["default"]})),document.body);
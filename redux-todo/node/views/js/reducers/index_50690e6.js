define("js/reducers/index",function(e,t,i){"use strict";function r(e,t){switch(void 0===e&&(e=n),t.type){case"SET_VISIBILITY_FILTER":return Object.assign({},e,{filter:t.filter});case"ADD_TODO":return Object.assign({},e,{list:e.list.concat([{text:t.text,complete:!1}])});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var s=e("node_modules/redux/lib/index"),n={filter:"SHOW_ALL",list:[]},c=s.combineReducers({todoApp:r});t["default"]=c,i.exports=t["default"]});
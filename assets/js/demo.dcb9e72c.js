(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo"],{"0768":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",[n("button",{on:{click:function(t){return e.fetch()}}},[e._v("Fetch typicode api by cors")])]),e.error?n("div",[n("h2",[e._v(e._s(e.error.message))]),n("pre",[n("code",[e._v(e._s(e.error.stack))])])]):n("ul",e._l(e.photos,function(t){return n("li",{key:t},[e._v(e._s(t.title))])}),0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("CORS")])])}],s={name:"demo-cors",data:function(){return{photos:{},error:!1}},methods:{fetch:function(){var e=this,t="http://jsonplaceholder.typicode.com/photos";this.$axios.get(t).then(function(t){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config),e.photos=t.data,e.error=!1}).catch(function(t){e.error=t})}}},o=s,a=n("2877"),i=Object(a["a"])(o,r,c,!1,null,null,null);t["default"]=i.exports},"0a49":function(e,t,n){var r=n("9b43"),c=n("626a"),s=n("4bf8"),o=n("9def"),a=n("cd1c");e.exports=function(e,t){var n=1==e,i=2==e,l=3==e,u=4==e,d=6==e,f=5==e||d,v=t||a;return function(t,a,m){for(var _,h,p=s(t),g=c(p),b=r(a,m,3),y=o(g.length),x=0,C=n?v(t,y):i?v(t,0):void 0;y>x;x++)if((f||x in g)&&(_=g[x],h=b(_,x,p),e))if(n)C[x]=h;else if(h)switch(e){case 3:return!0;case 5:return _;case 6:return x;case 2:C.push(_)}else if(u)return!1;return d?-1:l||u?u:C}}},1169:function(e,t,n){var r=n("2d95");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"36ad":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("h2",[e._v(e._s(e.count))]),n("div",{staticClass:"actions"},[n("button",{on:{click:e.increment}},[e._v("INC")]),n("button",{on:{click:e.incrementAsync}},[e._v("INC ASYNC")]),n("button",{on:{click:e.decrement}},[e._v("DEC")]),n("button",{on:{click:e.decrementAsync}},[e._v("DEC ASYNC")])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("Vuex - Counter")])])}],s=n("2f62"),o={name:"demo-vuex",computed:Object(s["c"])({count:"count"}),methods:Object(s["b"])({increment:"increment",incrementAsync:"incrementAsync",decrement:"decrement",decrementAsync:"decrementAsync"})},a=o,i=(n("b7ba"),n("2877")),l=Object(i["a"])(a,r,c,!1,null,"66b762da",null);t["default"]=l.exports},"46a4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("ul",{staticClass:"demos-links"},e._l(e.demos,function(t){return n("li",{key:t},[n("router-link",{attrs:{to:t}},[e._v(e._s(t.text))])],1)}),0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("演示")])])}],s=(n("7f7f"),n("7514"),{name:"demo",computed:{demos:function(){return this.$store.getters.header.menus.find(function(e){return"demo"===e.name}).children.filter(function(e){return e.name})}}}),o=s,a=n("2877"),i=Object(a["a"])(o,r,c,!1,null,null,null);t["default"]=i.exports},"4e54":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("p",[e._v(e._s(e.$t("message.hello")))]),n("p",[e._v(e._s(e.$t("message.hello2",{name:"汪磊"})))])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("多语言")])])}],s={name:"demo-i18n"},o=s,a=n("2877"),i=Object(a["a"])(o,r,c,!1,null,null,null);t["default"]=i.exports},6806:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",[n("p",[e._v("本示例只有在本地开发环境工作，线上托管环境没有代理配置。")]),n("p",[e._v("！！！过时的示例！！！")]),n("button",{on:{click:function(t){return e.fetch()}}},[e._v("Fetch jsonplaceholder api by proxy")])]),e.error?n("div",[n("h2",[e._v(e._s(e.error.message))]),n("pre",[n("code",[e._v(e._s(e.error.stack))])])]):n("ul",e._l(e.posts,function(t){return n("li",{key:t},[e._v(e._s(t.title))])}),0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("HTTP 代理")])])}],s={name:"demo-proxy",data:function(){return{posts:{},error:!1}},methods:{fetch:function(){var e=this;this.$axios.get("/posts").then(function(t){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config),e.posts=t.data,e.error=!1}).catch(function(t){e.error=t})}}},o=s,a=n("2877"),i=Object(a["a"])(o,r,c,!1,null,null,null);t["default"]=i.exports},7514:function(e,t,n){"use strict";var r=n("5ca1"),c=n("0a49")(5),s="find",o=!0;s in[]&&Array(1)[s](function(){o=!1}),r(r.P+r.F*o,"Array",{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(s)},b7ba:function(e,t,n){"use strict";var r=n("ed07"),c=n.n(r);c.a},b8c7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("ul",e._l(e.todos,function(t){return n("li",{key:t},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.competed,expression:"todo.competed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.competed)?e._i(t.competed,null)>-1:t.competed},on:{change:function(n){var r=t.competed,c=n.target,s=!!c.checked;if(Array.isArray(r)){var o=null,a=e._i(r,o);c.checked?a<0&&e.$set(t,"competed",r.concat([o])):a>-1&&e.$set(t,"competed",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(t,"competed",s)}}}),n("span",[e._v(e._s(t.text))])])}),0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("数据绑定")])])}],s={name:"demo-data",data:function(){for(var e=[],t=0;t<100;t++)e.push({text:"JavaScript "+t,competed:t%2});return{todos:e}}},o=s,a=n("2877"),i=Object(a["a"])(o,r,c,!1,null,null,null);t["default"]=i.exports},ca51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("h3",[e._v("Param: "+e._s(e.$route.params.name))]),e._m(1)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heading"},[n("h1",{staticClass:"title"},[e._v("路由参数")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("尝试修改URL中的"),n("strong",[e._v("汪磊")]),e._v("为其他的值，然后回车查看。")])}],s={name:"demo-params"},o=s,a=n("2877"),i=Object(a["a"])(o,r,c,!1,null,null,null);t["default"]=i.exports},cd1c:function(e,t,n){var r=n("e853");e.exports=function(e,t){return new(r(e))(t)}},e853:function(e,t,n){var r=n("d3f4"),c=n("1169"),s=n("2b4c")("species");e.exports=function(e){var t;return c(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!c(t.prototype)||(t=void 0),r(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?Array:t}},ed07:function(e,t,n){}}]);
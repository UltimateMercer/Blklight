(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(t,e,r){var content=r(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("08c13071",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";r(321)},329:function(t,e,r){(e=r(30)(!1)).push([t.i,".hover-stories-uv:hover{transition:all .2s ease-in-out;box-shadow:0 0 0 8px #4b00ff}.hover-stories-yellow:hover{transition:all .2s ease-in-out;box-shadow:0 0 0 8px #ff0}",""]),t.exports=e},332:function(t,e,r){"use strict";r(32),r(51);var n=r(8),o=r(20),c=r(382),l=r(383);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Stories",components:{ChannelBadge:r(310).default},props:{story:{type:Object,default:null}},computed:f(f({},Object(o.b)(["isDarkMode"])),{},{slugName:function(){return this.story.dir.replace("/","")}}),methods:{formatDate:function(t){var time=new Date(t);return Object(c.a)(new Date(time),"dd MMM yyyy",{locale:l.a})},imageSrc:function(t){return t.imgAlt?t.imgAlt:t.img}}},y=(r(328),r(19)),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-4",class:t.isDarkMode?"hover-card-yellow":"hover-card-uv card-raised"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imageSrc(t.story),expression:"imageSrc(story)"}],staticClass:"card-image-stories card-img-border cyberpunk-effect",attrs:{alt:t.story.title}}),t._v(" "),r("div",{staticClass:"card-img-overlay d-flex flex-column"},[r("div",{staticClass:"d-flex mb-2"},[r("span",{staticClass:"badge badge-dark badge-tag ml-0 mr-2"},[t._v("\n        "+t._s(t.formatDate(t.story.createdAt))+"\n      ")]),t._v(" "),r("ChannelBadge",{attrs:{channel:t.story.channel,isTag:!0}})],1),t._v(" "),r("h3",{staticClass:"mb-2"},[r("span",{staticClass:"marker marker-dark py-1"},[r("strong",[r("em",[t._v(t._s(t.story.title))])])])]),t._v(" "),t.story.description?r("p",{staticClass:"d-none d-sm-block"},[r("span",{staticClass:"marker marker-dark"},[t._v("\n        "+t._s(t.story.description)+"\n      ")])]):t._e(),t._v(" "),r("div"),t._v(" "),r("div",{staticClass:"mt-auto ml-auto"},[r("nuxt-link",{staticClass:"btn btn-uv btn-flat",attrs:{tag:"a",to:{name:t.slugName+"-slug",params:{slug:""+t.story.slug}}}},[t._v("\n        Ler mais...\n      ")])],1)])])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{ChannelBadge:r(310).default})},341:function(t,e,r){var content=r(355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("54960469",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";r(341)},355:function(t,e,r){(e=r(30)(!1)).push([t.i,"",""]),t.exports=e},386:function(t,e,r){"use strict";r.r(e);r(32),r(131);var n=r(8),o=(r(33),r(5)),c=r(20),l=r(334),d=r(332),f=r(382),m=r(383);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{DuotoneFilters:l.default,Stories:d.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r({deep:!0},n.slug).only(["title","description","img","imgAlt","channel","slug","dir","createdAt","updatedAt","isStories","isFeatured"]).sortBy("updatedAt","desc").where({isStories:!0}).fetch();case 3:return o=e.sent,e.abrupt("return",{stories:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{query:"",results:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["isDarkMode"])),watch:{query:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.results=[],r.abrupt("return");case 3:return r.next=5,e.$content({deep:!0}).only(["title","img","imgAlt","channel","slug","isFeatured","createdAt"]).sortBy("createdAt","desc").search(t).fetch();case 5:e.results=r.sent;case 6:case"end":return r.stop()}}),r)})))()}},methods:{formatDate:function(t){var time=new Date(t);return Object(f.a)(new Date(time),"dd MMM yyyy",{locale:m.a})},imageSrc:function(article){return article.imgAlt?article.imgAlt:article.img}}},h=(r(354),r(19)),component=Object(h.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{"bg-dark":this.isDarkMode}},[e("div",{staticClass:"container px-md-0 px-4 pt-3 mb-4"},[e("h2",[e("span",{staticClass:"marker marker-title",class:this.isDarkMode?"marker-light":"marker-dark"},[this._m(0)])])]),this._v(" "),this._l(this.stories,(function(t,i){return e("div",{key:i,staticClass:"mb-4"},[e("Stories",{attrs:{story:t}})],1)})),this._v(" "),e("DuotoneFilters")],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("em",[this._v(" Todos os artigos")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DuotoneFilters:r(334).default})}}]);
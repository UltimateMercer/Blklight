(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{310:function(e,t,r){"use strict";r.r(t);var n={name:"ChannelBadge",props:{channel:{type:String,default:null},isTag:{type:Boolean,default:!1}}},c=r(19),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["dev-corporation"===e.channel?r("span",{staticClass:"badge badge-primary",class:e.isTag?"badge-tag":""},[e._v("\n    Dev Corporation\n  ")]):e._e(),e._v(" "),"nerdstation"===e.channel?r("span",{staticClass:"badge badge-dark text-danger",class:e.isTag?"badge-tag":""},[e._v("\n    Danger Zone\n  ")]):e._e(),e._v(" "),"arts"===e.channel?r("span",{staticClass:"badge badge-indigo",class:e.isTag?"badge-tag":""},[e._v("\n    Arts\n  ")]):e._e(),e._v(" "),"redlight"===e.channel?r("span",{staticClass:"badge badge-pink",class:e.isTag?"badge-tag":""},[e._v("\n    Redlight\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},313:function(e,t,r){var content=r(320);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("3d2f009e",content,!0,{sourceMap:!1})},314:function(e,t,r){"use strict";r.r(t);r(32),r(51);var n=r(8),c=r(20),f=r(382),o=r(383);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={name:"Cards",components:{ChannelBadge:r(310).default},props:{article:{type:Object,default:null},isFeatured:{type:Boolean,default:!1}},computed:d(d({},Object(c.b)(["isDarkMode"])),{},{slugName:function(){return this.article.dir.replace("/","").replace("/articles","")}}),methods:{formatDate:function(e){var time=new Date(e);return Object(f.a)(new Date(time),"dd MMM yyyy",{locale:o.a})},imageSrc:function(article){return article.imgAlt?article.imgAlt:article.img}}},m=(r(319),r(19)),component=Object(m.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"card card-background mb-4",class:[{"card-featured-post":e.isFeatured},e.isDarkMode?"hover-card-yellow":"hover-card-uv card-raised"]},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imageSrc(e.article),expression:"imageSrc(article)"}],staticClass:"card-background-image card-img-border cyberpunk-effect",class:[{"featured-image":e.isFeatured}],attrs:{alt:e.article.title}}),e._v(" "),r("div",{staticClass:"card-img-overlay h-100 d-flex flex-column justify-content-end"},[r("div",{staticClass:"d-flex mb-1"},[r("span",{staticClass:"badge badge-dark badge-tag ml-0"},[e._v("\n          "+e._s(e.formatDate(e.article.createdAt))+"\n        ")]),e._v(" "),r("ChannelBadge",{attrs:{channel:e.article.channel,isTag:e.isFeatured}})],1),e._v(" "),r("h4",[r("span",{staticClass:"marker marker-dark py-1"},[r("strong",[r("em",[e._v(" "+e._s(e.article.title)+" ")])])])]),e._v(" "),r("p",{staticClass:"d-none d-sm-block mb-1"},[r("span",{staticClass:"marker marker-dark"},[e._v("\n          "+e._s(e.article.description)+"\n        ")])]),e._v(" "),r("div",{staticClass:"d-flex mb-2"},[r("div",{staticClass:"ml-auto"},[r("nuxt-link",{staticClass:"badge badge-uv badge-tag",attrs:{tag:"a",to:{name:e.slugName+"-slug",params:{slug:""+e.article.slug}}}},[e._v("\n            Ler mais...\n          ")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ChannelBadge:r(310).default})},319:function(e,t,r){"use strict";r(313)},320:function(e,t,r){(t=r(30)(!1)).push([e.i,".card{border-radius:.5rem!important;transition:all .3s}.hover-card-uv:hover{-webkit-animation:shadow-pop-br-uv .2s cubic-bezier(.47,0,.745,.715) both;animation:shadow-pop-br-uv .2s cubic-bezier(.47,0,.745,.715) both;border-radius:0!important;border:1px solid #4c00ff}.hover-card-yellow:hover{-webkit-animation:shadow-pop-br-yellow .3s cubic-bezier(.47,0,.745,.715) both;animation:shadow-pop-br-yellow .3s cubic-bezier(.47,0,.745,.715) both;border-radius:0!important;border:1px solid #ff0}@-webkit-keyframes shadow-pop-br-yellow{0%{box-shadow:0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0;transform:translateX(0) translateY(0)}to{box-shadow:1px 1px #ff0,2px 2px #ff0,3px 3px #ff0,4px 4px #ff0,5px 5px #ff0,6px 6px #ff0,7px 7px #ff0,8px 8px #ff0;transform:translateX(-8px) translateY(-8px)}}@keyframes shadow-pop-br-yellow{0%{box-shadow:0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0,0 0 #ff0;transform:translateX(0) translateY(0)}to{box-shadow:1px 1px #ff0,2px 2px #ff0,3px 3px #ff0,4px 4px #ff0,5px 5px #ff0,6px 6px #ff0,7px 7px #ff0,8px 8px #ff0;transform:translateX(-8px) translateY(-8px)}}@-webkit-keyframes shadow-pop-br-uv{0%{box-shadow:0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff;transform:translateX(0) translateY(0)}to{box-shadow:1px 1px #4c00ff,2px 2px #4c00ff,3px 3px #4c00ff,4px 4px #4c00ff,5px 5px #4c00ff,6px 6px #4c00ff,7px 7px #4c00ff,8px 8px #4c00ff;transform:translateX(-8px) translateY(-8px)}}@keyframes shadow-pop-br-uv{0%{box-shadow:0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff,0 0 #4c00ff;transform:translateX(0) translateY(0)}to{box-shadow:1px 1px #4c00ff,2px 2px #4c00ff,3px 3px #4c00ff,4px 4px #4c00ff,5px 5px #4c00ff,6px 6px #4c00ff,7px 7px #4c00ff,8px 8px #4c00ff;transform:translateX(-8px) translateY(-8px)}}",""]),e.exports=t},389:function(e,t,r){"use strict";r.r(t);r(33);var n=r(5),c={components:{Cards:r(314).default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$content,(n=e.params).query.category){t.next=6;break}return t.next=4,r("dev-corporation").only(["title","img","imgAlt","channel","category","slug","createdAt"]).sortBy("createdAt","desc").where({channel:"dev-corporation"}).fetch();case 4:return c=t.sent,t.abrupt("return",{articles:c});case 6:return t.next=8,r("dev-corporation",n.slug).only(["title","img","imgAlt","channel","category","slug","createdAt"]).sortBy("createdAt","desc").where({channel:"dev-corporation",category:n.category}).fetch();case 8:return f=t.sent,t.abrupt("return",{articles:f});case 10:case"end":return t.stop()}}),t)})))()}},f=r(19),component=Object(f.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container pb-4"},[t("h2",{staticClass:"pt-3 mb-3",class:this.isDarkMode?"text-light":""},[t("strong",[this._v(" Artigos recentes ")])]),this._v(" "),t("div",{staticClass:"row"},this._l(this.articles,(function(article,i){return t("div",{key:i,staticClass:"col-lg-4 col-md-6 col-12"},[t("Cards",{attrs:{article:article}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Cards:r(314).default})}}]);
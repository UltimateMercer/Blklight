(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(e,t,r){var content=r(327);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("13afa0df",content,!0,{sourceMap:!1})},318:function(e,t,r){"use strict";r.r(t);var l=r(8),c=r(20),n=r(382),o=r(383);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"HeaderLayout",props:{article:{type:Object,default:null}},data:function(){return{}},computed:m(m({},Object(c.b)(["isDarkMode"])),{},{imageSrc:function(){return this.article.img?this.article.img:this.article.imgAlt},dateFormat:function(){return Object(n.a)(new Date(this.article.date),"dd 'de' MMMM 'de' yyyy",{locale:o.a})},headerTemplate:function(){var e=["portrait-left","portrait-right"],t=Math.floor(Math.random()*e.length);return this.article.headerLayout?this.article.headerLayout:e[t]}})},f=(r(326),r(19)),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["portrait-left"===e.headerTemplate?r("div",[r("div",{staticClass:"header-content header-h-full d-md-inline-flex"},[r("div",{staticClass:"header-image-half header-h-full header-border-right hover-header"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imageSrc,expression:"imageSrc",arg:"background-image"}],staticClass:"header-image-background header-h-full cyberpunk-effect fade-in-left"})]),e._v(" "),r("div",{staticClass:"header-info-half header-h-full"},[r("div",{staticClass:"h-100 d-flex flex-column justify-content-end"},[r("h1",{staticClass:"blog-title"},[r("span",{staticClass:"marker marker-title",class:e.isDarkMode?"marker-light":"marker-dark"},[r("em",[e._v(" "+e._s(e.article.title))])])]),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{staticClass:"marker",class:e.isDarkMode?"marker-light":"marker-dark"},[e._v("\n              "+e._s(e.dateFormat)+"\n            ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},["dev-corporation"===e.article.channel?r("span",{staticClass:"badge badge-tag badge-primary mx-0"},[e._v("\n                Dev Corporation\n              ")]):e._e(),e._v(" "),"nerdstation"===e.article.channel?r("span",{staticClass:"badge badge-tag badge-orange mx-0"},[e._v("\n                Nerdstation\n              ")]):e._e(),e._v(" "),e.article.category?r("span",{staticClass:"badge badge-tag badge-dark mx-0"},[e._v("\n                "+e._s(e.article.category)+"\n              ")]):e._e()])])])])])]):e._e(),e._v(" "),"portrait-right"===e.headerTemplate?r("div",[r("div",{staticClass:"header-content header-h-full d-md-inline-flex"},[r("div",{staticClass:"header-info-half header-h-full"},[r("div",{staticClass:"h-100 d-flex flex-column justify-content-end"},[r("h1",{staticClass:"blog-title"},[r("span",{staticClass:"marker marker-title",class:e.isDarkMode?"marker-light":"marker-dark"},[r("em",[e._v("\n                "+e._s(e.article.title)+"\n              ")])])]),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{staticClass:"marker",class:e.isDarkMode?"marker-light":"marker-dark"},[e._v("\n              "+e._s(e.dateFormat)+"\n            ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},["dev-corporation"===e.article.channel?r("span",{staticClass:"badge badge-tag badge-primary mx-0"},[e._v("\n                Dev Corporation\n              ")]):e._e(),e._v(" "),"nerdstation"===e.article.channel?r("span",{staticClass:"badge badge-tag badge-orange mx-0"},[e._v("\n                Nerdstation\n              ")]):e._e(),e._v(" "),e.article.category?r("span",{staticClass:"badge badge-tag badge-dark mx-0"},[e._v("\n                "+e._s(e.article.category)+"\n              ")]):e._e()])])])]),e._v(" "),r("div",{staticClass:"header-image-half header-h-full header-border-left hover-header"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imageSrc,expression:"imageSrc",arg:"background-image"}],staticClass:"header-image-background header-h-full cyberpunk-effect fade-in-right"})])])]):e._e(),e._v(" "),"landscape"===e.headerTemplate?r("div",[r("div",{staticClass:"header-content d-md-inline-flex hover-header"},[r("div",{staticClass:"header-info"},[r("div",{staticClass:"h-100 d-flex flex-column justify-content-end"},[r("h1",{staticClass:"blog-title"},[r("span",{staticClass:"marker marker-dark marker-title"},[r("em",[e._v(" "+e._s(e.article.title)+" ")])])]),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{staticClass:"marker marker-dark sm-mark"},[e._v("\n              "+e._s(e.dateFormat)+"\n            ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},["Design"===e.article.category?r("span",[r("span",{staticClass:"badge badge-tag badge-uv mx-0"},[e._v("\n                  "+e._s(e.article.category)+"\n                ")])]):e._e(),e._v(" "),"Dev"===e.article.category?r("span",[r("span",{staticClass:"badge badge-tag badge-primary text-dark mx-0"},[e._v("\n                  "+e._s(e.article.category)+"\n                ")])]):e._e(),e._v(" "),"Pro"===e.article.type?r("span",[r("span",{staticClass:"badge badge-tag badge-dark mx-0"},[e._v("\n                  "+e._s(e.article.type)+"\n                ")])]):e._e(),e._v(" "),"Pessoal"===e.article.type?r("span",[r("span",{staticClass:"badge badge-tag badge-orange mx-0"},[e._v("\n                  "+e._s(e.article.type)+"\n                ")])]):e._e()])])])]),e._v(" "),r("div",{staticClass:"header-image"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imageSrc,expression:"imageSrc",arg:"background-image"}],staticClass:"header-image-background header-h-full cyberpunk-effect fade-in"})])])]):e._e(),e._v(" "),"parallax"===e.headerTemplate?r("div",[r("div",{staticClass:"header-simple"},[r("div",{staticClass:"col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12"},[r("div",{staticClass:"header-simple-info mb-0 mx-lg-0"},[r("h1",{staticClass:"blog-title"},[r("span",{staticClass:"marker marker-title",class:e.isDarkMode?"marker-light":"marker-dark"},[r("em",[e._v(" "+e._s(e.article.title))])])]),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{staticClass:"marker",class:e.isDarkMode?"marker-light":"marker-dark"},[e._v("\n              "+e._s(e.dateFormat)+"\n            ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},[r("span",["Design"===e.article.category?r("span",{staticClass:"badge badge-tag badge-uv mx-0"},[e._v("\n                  "+e._s(e.article.category)+"\n                ")]):e._e()]),e._v(" "),"Dev"===e.article.category?r("span",{staticClass:"badge badge-tag badge-primary text-dark mx-0"},[e._v("\n                "+e._s(e.article.category)+"\n              ")]):e._e(),e._v(" "),"Pro"===e.article.type?r("span",{staticClass:"badge badge-tag badge-dark mx-0"},[e._v("\n                "+e._s(e.article.type)+"\n              ")]):e._e(),e._v(" "),"Pessoal"===e.article.type?r("span",{staticClass:"badge badge-tag badge-orange mx-0"},[e._v("\n                "+e._s(e.article.type)+"\n              ")]):e._e()])])])]),e._v(" "),r("div",{staticClass:"hover-header"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imageSrc,expression:"imageSrc",arg:"background-image"}],staticClass:"header-simple-image-parallax cyberpunk-effect fade-in"})])])]):e._e(),e._v(" "),"square-profile"===e.headerTemplate?r("div",[r("div",{staticClass:"container-fluid p-0"},[r("div",{staticClass:"container p-0"},[r("div",{staticClass:"col-12 pt-lg-3 py-2 px-3"},[r("div",{staticClass:"header-profile"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-4 col-xs-12 col-12"},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"head-avatar"},[r("img",{staticClass:"rounded img-fluid mx-auto d-block mb-4",attrs:{"data-src":e.imageSrc,width:"325",alt:e.article.title}})])]),e._v(" "),r("div",{staticClass:"col-lg-8 col-md-8 col-xs-12 col-12"},[r("div",{staticClass:"head-text my-3"},[r("h1",{staticClass:"blog-title"},[r("span",{class:e.isDarkMode?"text-light":"text-dark"},[r("em",[e._v(" "+e._s(e.article.title))])])]),e._v(" "),e.article.description?[r("h5",{staticClass:"blog-meta"},[r("span",{class:e.isDarkMode?"text-light":"text-dark"},[e._v("\n                        "+e._s(e.article.description)+"\n                      ")])])]:e._e(),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{class:e.isDarkMode?"text-light":"text-dark"},[e._v("\n                      "+e._s(e.dateFormat)+"\n                    ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},["Design"===e.article.category?r("span",{staticClass:"badge badge-tag badge-uv mx-0"},[e._v("\n                        "+e._s(e.article.category)+"\n                      ")]):e._e(),e._v(" "),"Dev"===e.article.category?r("span",{staticClass:"badge badge-tag badge-primary text-dark mx-0"},[e._v("\n                        "+e._s(e.article.category)+"\n                      ")]):e._e(),e._v(" "),"Pro"===e.article.type?r("span",{staticClass:"badge badge-tag badge-dark mx-0"},[e._v("\n                        "+e._s(e.article.type)+"\n                      ")]):e._e(),e._v(" "),"Pessoal"===e.article.type?r("span",{staticClass:"badge badge-tag badge-orange mx-0"},[e._v("\n                        "+e._s(e.article.type)+"\n                      ")]):e._e()])])],2)])])])])])])]):e._e(),e._v(" "),"circle-profile"===e.headerTemplate?r("div",[r("div",{staticClass:"container-fluid p-0"},[r("div",{staticClass:"container p-0"},[r("div",{staticClass:"col-12 pt-lg-3 py-2 px-3"},[r("div",{staticClass:"header-profile"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-4 col-xs-12 col-12"},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"head-avatar"},[r("img",{staticClass:"rounded-circle shadow-image img-fluid mx-auto d-block mb-4",attrs:{"data-src":e.imageSrc,width:"325",alt:e.article.title}})])]),e._v(" "),r("div",{staticClass:"col-lg-8 col-md-8 col-xs-12 col-12"},[r("div",{staticClass:"head-text my-3"},[r("h1",{staticClass:"blog-title"},[r("span",{staticClass:"marker marker-dark title"},[e._v("\n                      "+e._s(e.article.title)+"\n                    ")])]),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{staticClass:"marker marker-dark sm-mark"},[e._v("\n                      "+e._s(e.article.description)+"\n                    ")])]),e._v(" "),r("h5",{staticClass:"blog-meta"},[r("span",{staticClass:"marker marker-dark sm-mark"},[e._v("\n                      "+e._s(e.dateFormat)+"\n                    ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},["Design"===e.article.category?r("span",[r("span",{staticClass:"badge badge-tag badge-uv mx-1"},[e._v("\n                          "+e._s(e.article.category)+"\n                        ")])]):e._e(),e._v(" "),"Dev"===e.article.category?r("span",[r("span",{staticClass:"badge badge-tag badge-primary text-dark mx-1"},[e._v("\n                          "+e._s(e.article.category)+"\n                        ")])]):e._e(),e._v(" "),"Pro"===e.article.type?r("span",[r("span",{staticClass:"badge badge-tag badge-dark mx-1"},[e._v("\n                          "+e._s(e.article.type)+"\n                        ")])]):e._e(),e._v(" "),"Pessoal"===e.article.type?r("span",[r("span",{staticClass:"badge badge-tag badge-orange mx-1"},[e._v("\n                          "+e._s(e.article.type)+"\n                        ")])]):e._e()])])])])])])])])])]):e._e(),e._v(" "),"image-top"===e.headerTemplate?r("div",[r("div",{staticClass:"container-fluid p-0"},[r("div",{staticClass:"col-lg-10 offset-lg-1 col-12 p-lg-0"},[r("div",{staticClass:"header-simple"},[r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"hover-header"},[r("img",{staticClass:"header-simple-image-top cyberpunk-effect",attrs:{"data-src":e.imageSrc,alt:""}})])])]),e._v(" "),r("div",{staticClass:"col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12"},[r("div",{staticClass:"header-simple-info mt-2 mb-0 mx-lg-0"},[r("h1",{staticClass:"blog-title exo-font",staticStyle:{"font-style":"italic"}},[r("span",{staticClass:"marker marker-title",class:e.isDarkMode?"marker-light":"marker-dark"},[e._v("\n              "+e._s(e.article.title)+"\n            ")])]),e._v(" "),r("h5",{staticClass:"blog-meta exo-font",staticStyle:{"font-style":"italic"}},[r("span",{staticClass:"marker px-1",class:e.isDarkMode?"marker-light":"marker-dark"},[e._v("\n              "+e._s(e.dateFormat)+"\n            ")])]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mt-1"},["Design"===e.article.category?r("span",{staticClass:"badge badge-tag badge-uv mx-0"},[e._v("\n                "+e._s(e.article.category)+"\n              ")]):e._e(),e._v(" "),"Dev"===e.article.category?r("span",{staticClass:"badge badge-tag badge-primary text-dark mx-0"},[e._v("\n                "+e._s(e.article.category)+"\n              ")]):e._e(),e._v(" "),"Pro"===e.article.type?r("span",{staticClass:"badge badge-tag badge-dark mx-0"},[e._v("\n                "+e._s(e.article.type)+"\n              ")]):e._e(),e._v(" "),"Pessoal"===e.article.type?r("span",{staticClass:"badge badge-tag badge-orange mx-0"},[e._v("\n                "+e._s(e.article.type)+"\n              ")]):e._e()])])])])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},326:function(e,t,r){"use strict";r(316)},327:function(e,t,r){(t=r(30)(!1)).push([e.i,".fade-in{-webkit-animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1) both}.scale-in-tl{-webkit-animation:scale-in-tl .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-tl .5s cubic-bezier(.25,.46,.45,.94) both}.fade-in-left{-webkit-animation:fade-in-left .6s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-left .6s cubic-bezier(.39,.575,.565,1) both}.fade-in-right{-webkit-animation:fade-in-right .6s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-right .6s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes scale-in-tl{0%{transform:scale(0);transform-origin:0 0;opacity:1}to{transform:scale(1);transform-origin:0 0;opacity:1}}@keyframes scale-in-tl{0%{transform:scale(0);transform-origin:0 0;opacity:1}to{transform:scale(1);transform-origin:0 0;opacity:1}}@-webkit-keyframes fade-in-left{0%{transform:translateX(-50px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fade-in-left{0%{transform:translateX(-50px);opacity:0}to{transform:translateX(0);opacity:1}}@-webkit-keyframes fade-in-right{0%{transform:translateX(50px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fade-in-right{0%{transform:translateX(50px);opacity:0}to{transform:translateX(0);opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}",""]),e.exports=t},404:function(e,t,r){"use strict";r.r(t);r(206),r(207);var l=r(8),c=(r(33),r(5)),n=r(318),o=r(20);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{HeaderLayout:n.default},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,l,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,l=e.params,t.next=3,r({deep:!0},l.slug).fetch();case 3:return article=t.sent,t.abrupt("return",{article:article});case 5:case"end":return t.stop()}}),t)})))()},computed:m(m({},Object(o.b)(["isDarkMode"])),{},{headerInfo:function(article){return{title:this.article.title,date:this.article.createdAt,description:this.article.description,category:this.article.category,img:this.article.img,imgAlt:this.article.imgAlt,headerLayout:this.article.headerLayout}}}),methods:{formatDate:function(e){return new Date(e).toLocaleDateString("pt-br",{year:"numeric",month:"long",day:"numeric"})}}},f=r(19),component=Object(f.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{"bg-dark":this.isDarkMode}},[t("HeaderLayout",{attrs:{article:this.headerInfo}}),this._v(" "),t("div",{staticClass:"container-fluid px-lg-0 px-md-0 py-4"},[t("div",{staticClass:"col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12"},[t("div",{staticClass:"page"},[t("div",{staticClass:"post monospace",class:{"dark-post":this.isDarkMode}},[t("nuxt-content",{attrs:{document:this.article}})],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderLayout:r(318).default})}}]);
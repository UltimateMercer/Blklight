(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{315:function(e,t,n){var content=n(325);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("4a9928d1",content,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n.r(t);n(130),n(37),n(32),n(51);var o={name:"ChannelHeader",components:{ImageFilter:n(92).default},props:{routeName:{type:String,default:null}},data:function(){return{channel:{base:"",name:"",routes:{home:"",about:""},cover:""},channelsData:[{base:"dev-corporation",name:"Dev Corporation",routes:{home:"/dev-corporation",about:"/dev-corporation/about"},cover:"https://i.imgur.com/Te8hqVv.jpg"},{base:"nerdstation",name:"Nerdstation",routes:{home:"/nerdstation",about:"/nerdstation/about"},cover:"https://i.imgur.com/HzkfSgI.jpg"},{base:"blklist",name:"Blklist",routes:{home:"/blklist",about:"/blklist/about"},cover:"https://i.imgur.com/HzkfSgI.jpg"},{base:"arts",name:"Arts",routes:{home:"/arts",about:"/arts/about"},cover:"https://i.imgur.com/E2xsDvG.jpg"},{base:"redlight",name:"Redlight",routes:{home:"/redlight",about:"/redlight/about"},cover:"https://i.imgur.com/1k8By32.png"}]}},created:function(){var e=this.routeName.replace("-about","");console.log(e);var t=this.channelsData.find((function(t){return t.base===e}));console.log(t),t&&(this.channel.base=t.base,this.channel.name=t.name,this.channel.cover=t.cover,this.channel.routes.home=t.routes.home,this.channel.routes.about=t.routes.about)},methods:{validateRoute:function(e){}}},r=(n(324),n(19)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card mt-0 mb-4"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.channel.cover,expression:"channel.cover"}],staticClass:"card-image-header cyberpunk-header"}),e._v(" "),n("div",{staticClass:"card-img-overlay d-flex flex-column"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1"},[n("h1",[n("span",{staticClass:"marker marker-dark marker-title"},[n("strong",[n("em",[e._v(e._s(e.channel.name))])])])])])]),e._v(" "),n("div",{staticClass:"container-fluid mt-auto"},[n("div",{staticClass:"col-xl-10 col-12 offset-xl-1 offset-0 px-xl-0 px-1"},[n("div",{staticClass:"d-flex"},[n("nuxt-link",{staticClass:"btn btn-dark btn-flat btn-sm",attrs:{to:e.channel.routes.home}},[n("font-awesome-icon",{attrs:{icon:["fas","home"]}})],1),e._v(" "),n("span",{staticClass:"btn btn-dark btn-flat btn-sm ml-auto"},[n("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1),e._v(" "),n("nuxt-link",{staticClass:"btn btn-dark btn-flat btn-sm",attrs:{to:e.channel.routes.about}},[e._v("\n            Sobre\n          ")])],1)])])]),e._v(" "),n("ImageFilter")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ImageFilter:n(92).default})},324:function(e,t,n){"use strict";n(315)},325:function(e,t,n){(t=n(30)(!1)).push([e.i,".card-image-header{width:100%;height:250px;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},398:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n(20);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={components:{ChannelHeader:n(317).default},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)(["isDarkMode"]))},m=n(19),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("ChannelHeader",{attrs:{routeName:this.$route.name}}),e._v(" "),n("div",{staticClass:"container py-4",class:e.isDarkMode?"text-light":"text-dark"},[n("h1",[e._v("Nerdstation")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")]),e._v(" "),n("p",[e._v("\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam atque\n      necessitatibus modi in, eveniet iure. Nesciunt earum quia ut, at nemo\n      hic qui nostrum voluptates esse dolorum alias asperiores ea.\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ChannelHeader:n(317).default})}}]);
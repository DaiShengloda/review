webpackJsonp([2],{0:function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KQ6f"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App"},a,!1,function(t){n("XKLb")},null,null).exports,o=n("KGCO"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){n("tGEK")},"data-v-d8ec41bc",null).exports,c=n("FPxW");if("server"!==Object({NODE_ENV:"production"}).VUE_ENV){var u=n("2U7F").default,f=n("fuJa");if("undefined"!=typeof window&&"Worker"in window&&-1===navigator.appVersion.indexOf("MSIE 10")){var d=n("iWIB");f.GlobalWorkerOptions.workerPort=new d}var p=Object(c.a)(u(f))}else p=Object(c.a)({});var h=p;var v=n("C7Lr")(h,null,!1,function(t){n("RFUm")},null,null).exports,m={name:"Pdf",components:{pdf:v},data:function(){return{pdfUrl:"./static/password.pdf",pageNum:1,pageTotalNum:1,pageRotate:0,loadedRatio:0,curPageNum:0}},mounted:function(){},methods:{prePage:function(){var t=this.pageNum;t=t>1?t-1:this.pageTotalNum,this.pageNum=t},nextPage:function(){var t=this.pageNum;t=t<this.pageTotalNum?t+1:1,this.pageNum=t},clock:function(){this.pageRotate+=90},counterClock:function(){this.pageRotate-=90},password:function(t,e){t(prompt('password is "123456"')),console.log("...reason..."),console.log(e),console.log("...reason...")},pageLoaded:function(t){this.curPageNum=t},pdfError:function(t){console.error(t)},pdfPrintAll:function(){this.$refs.pdf.print()},pdfPrint:function(){this.$refs.pdf.print(100,[1,2])}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("div",{staticClass:"pdf-tab"},[n("div",{staticClass:"btn-def btn-pre",on:{click:function(e){return e.stopPropagation(),t.prePage(e)}}},[t._v("上一页")]),t._v(" "),n("div",{staticClass:"btn-def btn-next",on:{click:function(e){return e.stopPropagation(),t.nextPage(e)}}},[t._v("下一页")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.clock(e)}}},[t._v("顺时针")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.counterClock(e)}}},[t._v("逆时针")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.pdfPrintAll(e)}}},[t._v("全部打印")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.pdfPrint(e)}}},[t._v("部分打印")])]),t._v(" "),n("div",[t._v(t._s(t.pageNum)+"/"+t._s(t.pageTotalNum))]),t._v(" "),n("div",[t._v("进度："+t._s(t.loadedRatio))]),t._v(" "),n("div",[t._v("页面加载成功: "+t._s(t.curPageNum))]),t._v(" "),n("pdf",{ref:"pdf",attrs:{src:t.pdfUrl,page:t.pageNum,rotate:t.pageRotate},on:{password:t.password,progress:function(e){t.loadedRatio=e},"page-loaded":function(e){return t.pageLoaded(e)},"num-pages":function(e){t.pageTotalNum=e},error:function(e){return t.pdfError(e)},"link-clicked":function(e){t.page=e}}})],1)},staticRenderFns:[]};var _=n("C7Lr")(m,g,!1,function(t){n("vtSI")},"data-v-12704f03",null).exports,b={name:"Pdf",components:{pdf:v},data:function(){return{pdfList:[{pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-29/1546049718768.pdf",title:"你好，2019年"},{pdfUrl:"http://file.gp58.com/file/2018-11-14/111405.pdf",title:"中信证券观点"},{pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf",title:"12月投资月刊"},{pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003282521.pdf",title:"丰岭资本观点"}],pdfUrl:"",numPages:1,activeIndex:0}},mounted:function(){this.pdfTask(this.pdfList[0].pdfUrl)},methods:{pdfTask:function(t){var e=this,n=v.createLoadingTask(t);n.then(function(t){e.pdfUrl=n,e.numPages=t.numPages}).catch(function(t){console.error("pdf加载失败")})},pdfClick:function(t,e){e!=this.activeIndex&&(this.activeIndex=e,this.pdfUrl=null,this.pdfTask(t))}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("div",{staticClass:"pdf-tab"},t._l(t.pdfList,function(e,i){return n("div",{class:["btn-def",{"btn-active":t.activeIndex==i}],on:{click:function(n){return n.stopPropagation(),t.pdfClick(e.pdfUrl,i)}}},[t._v(t._s(e.title))])}),0),t._v(" "),t._l(t.numPages,function(e){return n("pdf",{key:e,attrs:{src:t.pdfUrl,page:e}})})],2)},staticRenderFns:[]};var w=n("C7Lr")(b,k,!1,function(t){n("a31c")},"data-v-86bac1a0",null).exports;i.a.use(o.a);var P=new o.a({routes:[{path:"/hello",name:"HelloWorld",component:l},{path:"/",name:"Pdf",component:_},{path:"/pdf",name:"Pdf",component:w}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:P,components:{App:s},template:"<App/>"})},RFUm:function(t,e){},XKLb:function(t,e){},Za0R:function(t,e,n){"use strict";var i={props:{initial:{type:Boolean,default:!1}},data:function(){return{size:{width:-1,height:-1}}},methods:{reset:function(){var t=this.$el.firstChild,e=this.$el.lastChild;t.scrollLeft=1e5,t.scrollTop=1e5,e.scrollLeft=1e5,e.scrollTop=1e5},update:function(){this.size.width=this.$el.offsetWidth,this.size.height=this.$el.offsetHeight}},watch:{size:{deep:!0,handler:function(t){this.reset(),this.$emit("resize",{width:this.size.width,height:this.size.height})}}},render:function(t){var e="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",n="position: absolute; left: 0; top: 0;";return t("div",{style:e+"animation-name: resizeSensorVisibility;",on:{"~animationstart":this.update}},[t("div",{style:e,on:{scroll:this.update}},[t("div",{style:n+"width: 100000px; height: 100000px;"})]),t("div",{style:e,on:{scroll:this.update}},[t("div",{style:n+"width: 200%; height: 200%;"})])])},beforeDestroy:function(){this.$emit("resize",{width:0,height:0}),this.$emit("resizeSensorBeforeDestroy")},mounted:function(){if(!0===this.initial&&this.$nextTick(this.update),this.$el.offsetParent!==this.$el.parentNode&&(this.$el.parentNode.style.position="relative"),"attachEvent"in this.$el&&!("AnimationEvent"in window)){var t=function(){this.update(),e()}.bind(this),e=function(){this.$el.detachEvent("onresize",t),this.$off("resizeSensorBeforeDestroy",e)}.bind(this);this.$el.attachEvent("onresize",t),this.$on("resizeSensorBeforeDestroy",e),this.reset()}}};var a=n("C7Lr")(i,null,!1,function(t){n("dQmp")},null,null);e.a=a.exports},a31c:function(t,e){},dQmp:function(t,e){},tGEK:function(t,e){},vtSI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2b3b07572601443df12c.js.map
webpackJsonp([2],{0:function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},HFMp:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KQ6f"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App"},a,!1,function(t){n("HFMp")},null,null).exports,s=n("KGCO"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"list"},t._l(t.listData,function(e,i){return n("div",{staticClass:"li",on:{click:function(n){return n.stopPropagation(),t.link(e.listLink)}}},[t._v(t._s(e.listName)+"\n    ")])}),0)])},staticRenderFns:[]};var l=n("C7Lr")({name:"Index",data:function(){return{listData:[{listName:"1.Vue-Pdf插件",listLink:"/pdf"},{listName:"1.Vue-Pdf插件",listLink:"/pdf"},{listName:"1.Vue-Pdf插件",listLink:"/pdf"}]}},methods:{link:function(t){this.$router.push(t)}}},r,!1,function(t){n("yagc")},"data-v-59da0778",null).exports,d=n("FPxW");if("server"!==Object({NODE_ENV:"production"}).VUE_ENV){var c=n("2U7F").default,p=n("fuJa");if("undefined"!=typeof window&&"Worker"in window&&-1===navigator.appVersion.indexOf("MSIE 10")){var f=n("iWIB");p.GlobalWorkerOptions.workerPort=new f}var u=Object(d.a)(c(p))}else u=Object(d.a)({});var h=u;var m=n("C7Lr")(h,null,!1,function(t){n("RFUm")},null,null).exports,v={name:"Pdf",components:{pdf:m},data:function(){return{pdfUrl:"http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf",pageNum:1,pageTotalNum:1,pageRotate:0,loadedRatio:0,curPageNum:0}},mounted:function(){},methods:{prePage:function(){var t=this.pageNum;t=t>1?t-1:this.pageTotalNum,this.pageNum=t},nextPage:function(){var t=this.pageNum;t=t<this.pageTotalNum?t+1:1,this.pageNum=t},clock:function(){this.pageRotate+=90},counterClock:function(){this.pageRotate-=90},password:function(t,e){t(prompt('password is "123456"')),console.log("...reason..."),console.log(e),console.log("...reason...")},pageLoaded:function(t){this.curPageNum=t},pdfError:function(t){console.error(t)},pdfPrintAll:function(){this.$refs.pdf.print()},pdfPrint:function(){this.$refs.pdf.print(100,[1,2])}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("div",{staticClass:"pdf-tab"},[n("div",{staticClass:"btn-def btn-pre",on:{click:function(e){return e.stopPropagation(),t.prePage(e)}}},[t._v("上一页")]),t._v(" "),n("div",{staticClass:"btn-def btn-next",on:{click:function(e){return e.stopPropagation(),t.nextPage(e)}}},[t._v("下一页")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.clock(e)}}},[t._v("顺时针")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.counterClock(e)}}},[t._v("逆时针")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.pdfPrintAll(e)}}},[t._v("全部打印")]),t._v(" "),n("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.pdfPrint(e)}}},[t._v("部分打印")])]),t._v(" "),n("div",{staticClass:"pdf-total"},[t._v(t._s(t.pageNum)+"/"+t._s(t.pageTotalNum))]),t._v(" "),n("div",{staticClass:"pdf-process"},[t._v("进度："+t._s(t.loadedRatio))]),t._v(" "),n("div",{staticClass:"pdf-num"},[t._v("页面加载成功: "+t._s(t.curPageNum))]),t._v(" "),n("pdf",{ref:"pdf",attrs:{src:t.pdfUrl,page:t.pageNum,rotate:t.pageRotate},on:{password:t.password,progress:function(e){t.loadedRatio=e},"page-loaded":function(e){return t.pageLoaded(e)},"num-pages":function(e){t.pageTotalNum=e},error:function(e){return t.pdfError(e)},"link-clicked":function(e){t.page=e}}})],1)},staticRenderFns:[]};var _=n("C7Lr")(v,g,!1,function(t){n("g+lD")},"data-v-4e45be4e",null).exports,b={name:"Pdf",components:{pdf:m},data:function(){return{pdfList:[{pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-29/1546049718768.pdf",title:"你好，2019年"},{pdfUrl:"http://file.gp58.com/file/2018-11-14/111405.pdf",title:"中信证券观点"},{pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf",title:"12月投资月刊"},{pdfUrl:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003282521.pdf",title:"丰岭资本观点"}],pdfUrl:"",numPages:1,activeIndex:0}},mounted:function(){this.pdfTask(this.pdfList[0].pdfUrl)},methods:{pdfTask:function(t){var e=this,n=m.createLoadingTask(t);n.then(function(t){e.pdfUrl=n,e.numPages=t.numPages}).catch(function(t){console.error("pdf加载失败")})},pdfClick:function(t,e){e!=this.activeIndex&&(this.activeIndex=e,this.pdfUrl=null,this.pdfTask(t))}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf"},[n("div",{staticClass:"pdf-tab"},t._l(t.pdfList,function(e,i){return n("div",{class:["btn-def",{"btn-active":t.activeIndex==i}],on:{click:function(n){return n.stopPropagation(),t.pdfClick(e.pdfUrl,i)}}},[t._v(t._s(e.title))])}),0),t._v(" "),t._l(t.numPages,function(e){return n("pdf",{key:e,attrs:{src:t.pdfUrl,page:e}})})],2)},staticRenderFns:[]};var w=n("C7Lr")(b,x,!1,function(t){n("YXmI")},"data-v-5c81ee64",null).exports;i.a.use(s.a);var k=new s.a({routes:[{path:"/",name:"Index",component:l},{path:"/pdf",name:"Pdf",component:_},{path:"/pdfBasic",name:"Pdf",component:w}]}),C=n("zzYx"),P=n.n(C);i.a.config.productionTip=!1,i.a.use(P.a),new i.a({el:"#app",router:k,components:{App:o},template:"<App/>"})},RFUm:function(t,e){},YXmI:function(t,e){},Za0R:function(t,e,n){"use strict";var i={props:{initial:{type:Boolean,default:!1}},data:function(){return{size:{width:-1,height:-1}}},methods:{reset:function(){var t=this.$el.firstChild,e=this.$el.lastChild;t.scrollLeft=1e5,t.scrollTop=1e5,e.scrollLeft=1e5,e.scrollTop=1e5},update:function(){this.size.width=this.$el.offsetWidth,this.size.height=this.$el.offsetHeight}},watch:{size:{deep:!0,handler:function(t){this.reset(),this.$emit("resize",{width:this.size.width,height:this.size.height})}}},render:function(t){var e="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",n="position: absolute; left: 0; top: 0;";return t("div",{style:e+"animation-name: resizeSensorVisibility;",on:{"~animationstart":this.update}},[t("div",{style:e,on:{scroll:this.update}},[t("div",{style:n+"width: 100000px; height: 100000px;"})]),t("div",{style:e,on:{scroll:this.update}},[t("div",{style:n+"width: 200%; height: 200%;"})])])},beforeDestroy:function(){this.$emit("resize",{width:0,height:0}),this.$emit("resizeSensorBeforeDestroy")},mounted:function(){if(!0===this.initial&&this.$nextTick(this.update),this.$el.offsetParent!==this.$el.parentNode&&(this.$el.parentNode.style.position="relative"),"attachEvent"in this.$el&&!("AnimationEvent"in window)){var t=function(){this.update(),e()}.bind(this),e=function(){this.$el.detachEvent("onresize",t),this.$off("resizeSensorBeforeDestroy",e)}.bind(this);this.$el.attachEvent("onresize",t),this.$on("resizeSensorBeforeDestroy",e),this.reset()}}};var a=n("C7Lr")(i,null,!1,function(t){n("dQmp")},null,null);e.a=a.exports},dQmp:function(t,e){},"g+lD":function(t,e){},yagc:function(t,e){},zzYx:function(t,e){!function(t,e){var n,i=t.document,a=i.documentElement,o=i.querySelector('meta[name="viewport"]'),s=i.querySelector('meta[name="flexible"]'),r=0,l=0,d=e.flexible||(e.flexible={});if(o){var c=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(l=parseFloat(c[1]),r=parseInt(1/l))}else if(s){var p=s.getAttribute("content");if(p){var f=p.match(/initial\-dpr=([\d\.]+)/),u=p.match(/maximum\-dpr=([\d\.]+)/);f&&(r=parseFloat(f[1]),l=parseFloat((1/r).toFixed(2))),u&&(r=parseFloat(u[1]),l=parseFloat((1/r).toFixed(2)))}}if(!r&&!l){t.navigator.appVersion.match(/android/gi);var h=t.navigator.appVersion.match(/iphone/gi),m=t.devicePixelRatio;l=1/(r=h?m>=3&&(!r||r>=3)?3:m>=2&&(!r||r>=2)?2:1:1)}if(a.setAttribute("data-dpr",r),!o)if((o=i.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(o);else{var v=i.createElement("div");v.appendChild(o),i.write(v.innerHTML)}function g(){var e=a.getBoundingClientRect().width;e/r>540&&(e=540*r);var n=e/10;a.style.fontSize=n+"px",d.rem=t.rem=n}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(g,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(g,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*r+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=12*r+"px"},!1),g(),d.dpr=t.dpr=r,d.refreshRem=g,d.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},d.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.e013e60fb07cb2a768b8.js.map
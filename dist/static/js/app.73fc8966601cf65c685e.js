webpackJsonp([2],{0:function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},"4xho":function(t,e){},"5qBF":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("ZLEe"),n=a.n(i),s=a("KQ6f"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("C7Lr")({name:"App"},o,!1,function(t){a("5qBF")},null,null).exports,l=a("KGCO"),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticClass:"list"},t._l(t.listData,function(e,i){return a("div",{staticClass:"li",on:{click:function(a){return a.stopPropagation(),t.link(e.listLink)}}},[t._v(t._s(e.listName)+"\n    ")])}),0)])},staticRenderFns:[]};var u=a("C7Lr")({name:"Index",data:function(){return{listData:[{listName:"1、Vue-Pdf插件",listLink:"/pdf"},{listName:"2、Vue自定义日历组件",listLink:"/calendar"}]}},methods:{link:function(t){this.$router.push(t)}}},c,!1,function(t){a("QUUF")},"data-v-3889e169",null).exports,h=a("FPxW");if("server"!==Object({NODE_ENV:"production"}).VUE_ENV){var d=a("2U7F").default,f=a("fuJa");if("undefined"!=typeof window&&"Worker"in window&&-1===navigator.appVersion.indexOf("MSIE 10")){var p=a("iWIB");f.GlobalWorkerOptions.workerPort=new p}var m=Object(h.a)(d(f))}else m=Object(h.a)({});var v=m;var g=a("C7Lr")(v,null,!1,function(t){a("RFUm")},null,null).exports,y={name:"Pdf",components:{pdf:g},data:function(){return{pdfUrl:"./static/pdf/p1.pdf",pageNum:1,pageTotalNum:1,pageRotate:0,loadedRatio:0,curPageNum:0}},mounted:function(){},methods:{prePage:function(){var t=this.pageNum;t=t>1?t-1:this.pageTotalNum,this.pageNum=t},nextPage:function(){var t=this.pageNum;t=t<this.pageTotalNum?t+1:1,this.pageNum=t},clock:function(){this.pageRotate+=90},counterClock:function(){this.pageRotate-=90},password:function(t,e){t(prompt('password is "123456"')),console.log("...reason..."),console.log(e),console.log("...reason...")},pageLoaded:function(t){this.curPageNum=t},pdfError:function(t){console.error(t)},pdfPrintAll:function(){this.$refs.pdf.print()},pdfPrint:function(){this.$refs.pdf.print(100,[1,2])}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pdf"},[a("div",{staticClass:"pdf-tab"},[a("div",{staticClass:"btn-def btn-pre",on:{click:function(e){return e.stopPropagation(),t.prePage(e)}}},[t._v("上一页")]),t._v(" "),a("div",{staticClass:"btn-def btn-next",on:{click:function(e){return e.stopPropagation(),t.nextPage(e)}}},[t._v("下一页")]),t._v(" "),a("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.clock(e)}}},[t._v("顺时针")]),t._v(" "),a("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.counterClock(e)}}},[t._v("逆时针")]),t._v(" "),a("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.pdfPrintAll(e)}}},[t._v("全部打印")]),t._v(" "),a("div",{staticClass:"btn-def",on:{click:function(e){return e.stopPropagation(),t.pdfPrint(e)}}},[t._v("部分打印")])]),t._v(" "),a("div",{staticClass:"pdf-total"},[t._v(t._s(t.pageNum)+"/"+t._s(t.pageTotalNum))]),t._v(" "),a("div",{staticClass:"pdf-process"},[t._v("进度："+t._s(t._f("fixedTwo")(t.loadedRatio)))]),t._v(" "),a("div",{staticClass:"pdf-num"},[t._v("页面加载成功: "+t._s(t.curPageNum))]),t._v(" "),a("pdf",{ref:"pdf",attrs:{src:t.pdfUrl,page:t.pageNum,rotate:t.pageRotate},on:{password:t.password,progress:function(e){t.loadedRatio=e},"page-loaded":function(e){return t.pageLoaded(e)},"num-pages":function(e){t.pageTotalNum=e},error:function(e){return t.pdfError(e)},"link-clicked":function(e){t.page=e}}})],1)},staticRenderFns:[]};var _=a("C7Lr")(y,D,!1,function(t){a("TaAT")},"data-v-3c31fae8",null).exports,w={name:"Pdf",components:{pdf:g},data:function(){return{pdfList:[{pdfUrl:"./static/pdf/b1.pdf",title:"你好，2019年"},{pdfUrl:"./static/pdf/b2.pdf",title:"中信证券观点"},{pdfUrl:"./static/pdf/b3.pdf",title:"12月投资月刊"},{pdfUrl:"./static/pdf/b4.pdf",title:"丰岭资本观点"}],pdfUrl:"",numPages:1,activeIndex:0}},mounted:function(){this.pdfTask(this.pdfList[0].pdfUrl)},methods:{pdfTask:function(t){var e=this,a=g.createLoadingTask(t);a.then(function(t){e.pdfUrl=a,e.numPages=t.numPages}).catch(function(t){console.error("pdf加载失败")})},pdfClick:function(t,e){e!=this.activeIndex&&(this.activeIndex=e,this.pdfUrl=null,this.pdfTask(t))}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pdf"},[a("div",{staticClass:"pdf-tab"},t._l(t.pdfList,function(e,i){return a("div",{class:["btn-def",{"btn-active":t.activeIndex==i}],on:{click:function(a){return a.stopPropagation(),t.pdfClick(e.pdfUrl,i)}}},[t._v(t._s(e.title))])}),0),t._v(" "),t._l(t.numPages,function(e){return a("pdf",{key:e,attrs:{src:t.pdfUrl,page:e}})})],2)},staticRenderFns:[]};var M=a("C7Lr")(w,C,!1,function(t){a("QH6h")},"data-v-22812274",null).exports,T=a("HzJ8"),k=a.n(T),x=a("KH7x"),P=a.n(x),b=a("IHPB"),L=a.n(b),F={getMonthList:function(t){return[].concat(L()(this.getLeftArr(t)),L()(this.getMonthListNoOther(t)),L()(this.getRightArr(t)))},getLeftArr:function(t){for(var e,a,i=[],n=this.getMonthweek(t),s=this.getDaysInOneMonth(this.getOtherMonth(t,"preMonth"))-n+1,o=this.getOtherMonth(t,"preMonth"),r=this.dateFormat(new Date),l=0;l<n;l++){var c=o.getFullYear()+"/"+(e=(e=o.getMonth()+1)>9?e:"0"+e)+"/"+(a=(a=s+l)>9?a:"0"+a),u=this.isFutherByDay(r,c);i.push({id:s+l,date:c,isToday:!1,otherMonth:"preMonth",isFuther:u})}return i},getRightArr:function(t){for(var e,a,i=[],n=this.getOtherMonth(t,"nextMonth"),s=this.getDaysInOneMonth(t)+this.getMonthweek(t),o=this.dateFormat(new Date),r=7-s%7,l=0;l<r;l++){var c=n.getFullYear()+"/"+(e=(e=n.getMonth()+1)>9?e:"0"+e)+"/"+(a=(a=l+1)>9?a:"0"+a),u=this.isFutherByDay(o,c);i.push({id:l+1,date:c,isToday:!1,otherMonth:"nextMonth",isFuther:u})}return i},getMonthListNoOther:function(t){for(var e,a,i=[],n=this.getDaysInOneMonth(t),s=t.getFullYear(),o=t.getMonth()+1,r=this.dateFormat(new Date),l=0;l<n;l++){var c=s+"/"+(e=(e=o)>9?e:"0"+e)+"/"+(a=(a=l+1)>9?a:"0"+a),u=this.isFutherByDay(r,c);i.push({id:l+1,date:c,isToday:r===c,otherMonth:"nowMonth",isFuther:u})}return i},getMonthweek:function(t){var e=t.getFullYear(),a=t.getMonth()+1,i=new Date(e+"/"+a+"/1");return this.sundayStart?0==i.getDay()?7:i.getDay():0==i.getDay()?6:i.getDay()-1},getDaysInOneMonth:function(t){var e=t.getFullYear(),a=t.getMonth()+1;return new Date(e,a,0).getDate()},getOtherMonth:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nextMonth",a=this.dateFormat(t).split("/"),i=a[0],n=a[1],s=a[2],o=i,r=void 0;"nextMonth"===e?13==(r=parseInt(n)+1)&&(o=parseInt(o)+1,r=1):0==(r=parseInt(n)-1)&&(o=parseInt(o)-1,r=12);var l=s,c=new Date(o,r,0).getDate();return l>c&&(l=c),r<10&&(r="0"+r),l<10&&(l="0"+l),new Date(o+"/"+r+"/"+l)},dateFormat:function(t){var e,a;return(t="string"==typeof t?new Date(t.replace(/\-/g,"/")):t).getFullYear()+"/"+(e=(e=t.getMonth()+1)>9?e:"0"+e)+"/"+(a=(a=t.getDate())>9?a:"0"+a)},sundayStart:!1,isFutherByDay:function(t,e){var a=new Date(t).getTime()/1e3;return new Date(e).getTime()/1e3>a}},N={data:function(){return{textTop:["一","二","三","四","五","六","日"],myDate:[],list:[],historyChose:[],dateTop:"",newList:[],toDayRow:1,choDayRow:null}},computed:{showRow:function(){var t=this.choDayRow,e=this.toDayRow;return null==t?e:t}},props:{markDate:{type:Array,default:function(){return[]}},markDateClass:{type:Array,default:function(){return[]}},sundayStart:{type:Boolean,default:function(){return!0}},agoDayPrevent:{type:String,default:"0"},futureDayPrevent:{type:String,default:"2554387200"},calendarClass:{type:String,default:""},calendarType:{type:Number,default:1}},watch:{markDate:function(t,e){this.getList(this.myDate)},markDateClass:function(t,e){this.getList(this.myDate)},agoDayPrevent:function(t,e){this.getList(this.myDate)},futureDayPrevent:function(t,e){this.getList(this.myDate)},sundayStart:function(t,e){this.intStart(),this.getList(this.myDate)}},created:function(){this.intStart(),this.myDate=new Date},mounted:function(){this.getList(this.myDate)},methods:{intStart:function(){this.sundayStart?this.textTop=["日","一","二","三","四","五","六"]:this.textTop=["一","二","三","四","五","六","日"],F.sundayStart=this.sundayStart},setClass:function(t){var e={};return e[t.markClassName]=t.markClassName,e},clickDay:function(t,e){"nowMonth"!==t.otherMonth||t.dayHide||this.getList(this.myDate,t.date),"nowMonth"!==t.otherMonth&&("preMonth"===t.otherMonth?this.PreMonth(t.date):this.NextMonth(t.date))},ChoseMonth:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=F.dateFormat(t),this.myDate=new Date(t),this.$emit("changeMonth",F.dateFormat(this.myDate)),e?this.getList(this.myDate,t,e):this.getList(this.myDate)},PreMonth:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=F.dateFormat(t),this.myDate=F.getOtherMonth(this.myDate,"preMonth"),this.$emit("changeMonth",F.dateFormat(this.myDate)),e?this.getList(this.myDate,t,e):this.getList(this.myDate)},NextMonth:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=F.dateFormat(t),this.myDate=F.getOtherMonth(this.myDate,"nextMonth"),this.$emit("changeMonth",F.dateFormat(this.myDate)),e?this.getList(this.myDate,t,e):this.getList(this.myDate)},forMatArgs:function(){var t=this.markDate,e=this.markDateClass;return[t=t.map(function(t){return F.dateFormat(t)}),e=e.map(function(t){return t.date=F.dateFormat(t.date),t})]},getList:function(t,e){!(arguments.length>2&&void 0!==arguments[2])||arguments[2];var a=this.forMatArgs(),i=P()(a,2),n=i[0],s=i[1];this.dateTop=t.getFullYear()+"年"+(t.getMonth()+1)+"月";for(var o=F.getMonthList(this.myDate),r=0;r<o.length;r++){var l="",c=o[r];c.chooseDay=!1;var u=c.date,h=new Date(u).getTime()/1e3,d=!0,f=!1,p=void 0;try{for(var m,v=k()(s);!(d=(m=v.next()).done);d=!0){var g=m.value;g.date===u&&(l=g.className||"")}}catch(t){f=!0,p=t}finally{try{!d&&v.return&&v.return()}finally{if(f)throw p}}c.markClassName=l,c.isMark=n.indexOf(u)>-1,c.dayHide=h<this.agoDayPrevent||h>this.futureDayPrevent;var y=!c.dayHide&&"nowMonth"===c.otherMonth;e&&e===u&&y?(this.$emit("choseDay",u),this.historyChose.push(u),c.chooseDay=!0,this.choDayRow=Math.floor(r/7)):this.historyChose[this.historyChose.length-1]===u&&!e&&y&&(c.chooseDay=!0,this.choDayRow=Math.floor(r/7))}this.list=o,this.formateList()},formateList:function(){this.newList=[];for(var t=Math.floor(this.list.length/7),e=this.list.length%7,a=0;a<t;a++)this.newList[a]=this.list.slice(7*a,7*a+7);e>0&&(this.newList[t]=this.list.slice(7*t,7*t+e))},PreRow:function(){var t,e,a=this.showRow-1;if(a<0){for(var i=(t=this.newList[0]).length-1;i>-1;i--)if("preMonth"==t[i].otherMonth){e=t[i].date,this.PreMonth(e);break}}else this.choDayRow=a;this.$forceUpdate()},NextRow:function(){var t,e,a=this.showRow+1;if(a>this.newList.length-1){t=this.newList[this.newList.length-1];for(var i=0;i<t.length;i++)if("nextMonth"==t[i].otherMonth){e=t[i].date,this.NextMonth(e);break}}else this.choDayRow=a;this.$forceUpdate()}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["calendar",t.calendarClass]},[1==t.calendarType?a("div",{staticClass:"calendar_type"},[a("div",{staticClass:"calendar_header"},[a("li",{on:{click:function(e){return e.stopPropagation(),t.PreMonth(t.myDate,!1)}}},[a("div",{staticClass:"header_lef"})]),t._v(" "),a("li",{staticClass:"header_mid"},[t._v(t._s(t.dateTop))]),t._v(" "),a("li",{on:{click:function(e){return e.stopPropagation(),t.NextMonth(t.myDate,!1)}}},[a("div",{staticClass:"header_rig"})])]),t._v(" "),a("div",{staticClass:"calendar_week"},t._l(t.textTop,function(e){return a("div",{staticClass:"week_day"},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._v(" "),a("div",{staticClass:"calendar_body"},t._l(t.newList,function(e,i){return a("div",{class:["body_row",{even:i%2==0}]},t._l(e,function(e,n){return a("div",{staticClass:"row_item",on:{click:function(a){return a.stopPropagation(),t.clickDay(e,i,n)}}},[a("div",{class:["item_time",{item_isMark:e.isMark},{item_other_dayhide:"nowMonth"!==e.otherMonth},{item_want_dayhide:e.dayHide},{item_isToday:e.isToday},{item_chose_day:e.chooseDay},t.setClass(e)]},[t._v("\n            "+t._s(e.id)+"\n          ")])])}),0)}),0)]):2==t.calendarType?a("div",{staticClass:"calendar_type"},[a("div",{staticClass:"calendar_header"},[a("li",{on:{click:function(e){return e.stopPropagation(),t.PreRow(t.myDate,!1)}}},[a("div",{staticClass:"header_lef"})]),t._v(" "),a("li",{staticClass:"header_mid"},[t._v(t._s(t.dateTop))]),t._v(" "),a("li",{on:{click:function(e){return e.stopPropagation(),t.NextRow(t.myDate,!1)}}},[a("div",{staticClass:"header_rig"})])]),t._v(" "),a("div",{staticClass:"calendar_week"},t._l(t.textTop,function(e){return a("div",{staticClass:"week_day"},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._v(" "),a("div",{staticClass:"calendar_body"},t._l(t.newList,function(e,i){return i==t.showRow?a("div",{class:["body_row"]},t._l(e,function(e,n){return a("div",{staticClass:"row_item",on:{click:function(a){return a.stopPropagation(),t.clickDay(e,i,n)}}},[a("div",{class:["item_time",{item_isMark:e.isMark},{item_other_dayhide:"nowMonth"!==e.otherMonth},{item_want_dayhide:e.dayHide},{item_isToday:e.isToday},{item_chose_day:e.chooseDay}]},[t._v("\n            "+t._s(e.id)+"\n          ")])])}),0):t._e()}),0)]):t._e()])},staticRenderFns:[]};var $={name:"CalIns",components:{Calendar:a("C7Lr")(N,R,!1,function(t){a("4xho")},"data-v-531ce318",null).exports},data:function(){return{calendarClass:"cal_common",chooseDate:"",showCalendar:1,markDate:[],markDateClass:[{date:"2019/02/20",className:"mark1"},{date:"2018/02/21",className:"mark2"}],agoDayPrevent:"0",futureDayPrevent:"2551024000",agoTimeYear:null,agoTimeMonth:null,agoTimeDay:null,futureTimeYear:null,futureTimeMonth:null,futureTimeDay:null}},created:function(){var t,e=(new Date).getFullYear()+"",a=(new Date).getMonth()+1,i=(new Date).getDate();a=a>9?a:"0"+a,i=i>9?i:"0"+i,this.chooseDate=e+"/"+a+"/"+i,(t=(i=i-2>0?i-2:0)>0?e+"/"+a+"/"+i:"")&&this.markDate.push(t),(t=(i=i+2<30?i+2:0)>0?e+"/"+a+"/"+i:"")&&this.markDate.push(t)},methods:{choseDay:function(t){this.chooseDate=t},toggleCal:function(t){this.showCalendar=t},changeMonth:function(t){console.log("changeMonth"+t)},agoClick:function(){this.checkTime(this.agoTimeYear,this.agoTimeMonth,this.agoTimeDay)||alert("请输入正确日期"),this.agoDayPrevent=this.dateToStamp(this.agoTimeYear,this.agoTimeMonth,this.agoTimeDay),this.$forceUpdate()},futureClick:function(){this.checkTime(this.futureTimeYear,this.futureTimeMonth,this.futureTimeDay)||alert("请输入正确日期"),this.futureDayPrevent=this.dateToStamp(this.futureTimeYear,this.futureTimeMonth,this.futureTimeDay),this.$forceUpdate()},checkTime:function(t,e,a){return!!t&&(!(!e||e>12||e<1)&&!(!a||a>31||a<1))},dateToStamp:function(t,e,a){var i=new Date(t+"/"+e+"/"+a);return Date.parse(i)/1e3+""}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calIns"},[1==t.showCalendar?a("div",[a("Calendar",{attrs:{sundayStart:!0,calendarType:1,markDate:t.markDate,markDateClass:t.markDateClass,agoDayPrevent:t.agoDayPrevent,futureDayPrevent:t.futureDayPrevent},on:{choseDay:t.choseDay,changeMonth:t.changeMonth}})],1):a("div",[a("Calendar",{attrs:{sundayStart:!0,calendarType:2,markDate:t.markDate,markDateClass:t.markDateClass,agoDayPrevent:t.agoDayPrevent,futureDayPrevent:t.futureDayPrevent,calendarClass:t.calendarClass},on:{choseDay:t.choseDay}})],1),t._v(" "),a("div",{staticClass:"cal-content"},[a("div",{staticClass:"cal-time"},[t._v("选中日期："),a("span",{staticClass:"time-msg"},[t._v(t._s(t.chooseDate))])]),t._v(" "),a("div",{staticClass:"cal-pre"},[a("div",{staticClass:"pre-txt"},[t._v("该日期前不可点：")]),t._v(" "),a("div",{staticClass:"pre-time"},[a("div",{staticClass:"time-type"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agoTimeYear,expression:"agoTimeYear"}],attrs:{type:"number"},domProps:{value:t.agoTimeYear},on:{input:function(e){e.target.composing||(t.agoTimeYear=e.target.value)}}}),t._v("年\r\n        ")]),t._v(" "),a("div",{staticClass:"time-type"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agoTimeMonth,expression:"agoTimeMonth"}],attrs:{type:"number"},domProps:{value:t.agoTimeMonth},on:{input:function(e){e.target.composing||(t.agoTimeMonth=e.target.value)}}}),t._v("月\r\n        ")]),t._v(" "),a("div",{staticClass:"time-type"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agoTimeDay,expression:"agoTimeDay"}],attrs:{type:"number"},domProps:{value:t.agoTimeDay},on:{input:function(e){e.target.composing||(t.agoTimeDay=e.target.value)}}}),t._v("日\r\n        ")])]),t._v(" "),a("button",{staticClass:"pre-btn",on:{click:function(e){return e.stopPropagation(),t.agoClick(e)}}},[t._v("确定")])]),t._v(" "),a("div",{staticClass:"cal-future"},[a("div",{staticClass:"cal-pre"},[a("div",{staticClass:"pre-txt"},[t._v("该日期后不可点：")]),t._v(" "),a("div",{staticClass:"pre-time"},[a("div",{staticClass:"time-type"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.futureTimeYear,expression:"futureTimeYear"}],attrs:{type:"number"},domProps:{value:t.futureTimeYear},on:{input:function(e){e.target.composing||(t.futureTimeYear=e.target.value)}}}),t._v("年\r\n        ")]),t._v(" "),a("div",{staticClass:"time-type"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.futureTimeMonth,expression:"futureTimeMonth"}],attrs:{type:"number"},domProps:{value:t.futureTimeMonth},on:{input:function(e){e.target.composing||(t.futureTimeMonth=e.target.value)}}}),t._v("月\r\n        ")]),t._v(" "),a("div",{staticClass:"time-type"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.futureTimeDay,expression:"futureTimeDay"}],attrs:{type:"number"},domProps:{value:t.futureTimeDay},on:{input:function(e){e.target.composing||(t.futureTimeDay=e.target.value)}}}),t._v("日\r\n        ")])]),t._v(" "),a("button",{staticClass:"pre-btn",on:{click:function(e){return e.stopPropagation(),t.futureClick(e)}}},[t._v("确定")])])]),t._v(" "),a("div",{staticClass:"cal-mark"},[t._v("标记当天前后两天")])]),t._v(" "),a("div",{staticClass:"cal-tab"},[a("div",{class:["tab-btn",{"tab-active":1==t.showCalendar}],on:{click:function(e){return e.stopPropagation(),t.toggleCal(1)}}},[t._v("日历一")]),t._v(" "),a("div",{class:["tab-btn",{"tab-active":2==t.showCalendar}],on:{click:function(e){return e.stopPropagation(),t.toggleCal(2)}}},[t._v("日历二")])])])},staticRenderFns:[]};var E=a("C7Lr")($,S,!1,function(t){a("mpY2")},"data-v-a5f2410c",null).exports;s.a.use(l.a);var Y=new l.a({routes:[{path:"/",name:"Index",component:u},{path:"/pdf",name:"Pdf",component:_},{path:"/pdfBasic",name:"Pdf",component:M},{path:"/calendar",name:"CalIns",component:E}]}),z=a("zzYx"),U=a.n(z),O={fixedTwo:function(t){return isNaN(t)?0:t=parseFloat(t).toFixed(2)}};s.a.config.productionTip=!1,s.a.use(U.a),n()(O).forEach(function(t){s.a.filter(t,O[t])}),new s.a({el:"#app",router:Y,components:{App:r},template:"<App/>"})},QH6h:function(t,e){},QUUF:function(t,e){},RFUm:function(t,e){},TaAT:function(t,e){},Za0R:function(t,e,a){"use strict";var i={props:{initial:{type:Boolean,default:!1}},data:function(){return{size:{width:-1,height:-1}}},methods:{reset:function(){var t=this.$el.firstChild,e=this.$el.lastChild;t.scrollLeft=1e5,t.scrollTop=1e5,e.scrollLeft=1e5,e.scrollTop=1e5},update:function(){this.size.width=this.$el.offsetWidth,this.size.height=this.$el.offsetHeight}},watch:{size:{deep:!0,handler:function(t){this.reset(),this.$emit("resize",{width:this.size.width,height:this.size.height})}}},render:function(t){var e="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",a="position: absolute; left: 0; top: 0;";return t("div",{style:e+"animation-name: resizeSensorVisibility;",on:{"~animationstart":this.update}},[t("div",{style:e,on:{scroll:this.update}},[t("div",{style:a+"width: 100000px; height: 100000px;"})]),t("div",{style:e,on:{scroll:this.update}},[t("div",{style:a+"width: 200%; height: 200%;"})])])},beforeDestroy:function(){this.$emit("resize",{width:0,height:0}),this.$emit("resizeSensorBeforeDestroy")},mounted:function(){if(!0===this.initial&&this.$nextTick(this.update),this.$el.offsetParent!==this.$el.parentNode&&(this.$el.parentNode.style.position="relative"),"attachEvent"in this.$el&&!("AnimationEvent"in window)){var t=function(){this.update(),e()}.bind(this),e=function(){this.$el.detachEvent("onresize",t),this.$off("resizeSensorBeforeDestroy",e)}.bind(this);this.$el.attachEvent("onresize",t),this.$on("resizeSensorBeforeDestroy",e),this.reset()}}};var n=a("C7Lr")(i,null,!1,function(t){a("dQmp")},null,null);e.a=n.exports},dQmp:function(t,e){},mpY2:function(t,e){},zzYx:function(t,e){!function(t,e){var a,i=t.document,n=i.documentElement,s=i.querySelector('meta[name="viewport"]'),o=i.querySelector('meta[name="flexible"]'),r=0,l=0,c=e.flexible||(e.flexible={});if(s){var u=s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(l=parseFloat(u[1]),r=parseInt(1/l))}else if(o){var h=o.getAttribute("content");if(h){var d=h.match(/initial\-dpr=([\d\.]+)/),f=h.match(/maximum\-dpr=([\d\.]+)/);d&&(r=parseFloat(d[1]),l=parseFloat((1/r).toFixed(2))),f&&(r=parseFloat(f[1]),l=parseFloat((1/r).toFixed(2)))}}if(!r&&!l){t.navigator.appVersion.match(/android/gi);var p=t.navigator.appVersion.match(/iphone/gi),m=t.devicePixelRatio;l=1/(r=p?m>=3&&(!r||r>=3)?3:m>=2&&(!r||r>=2)?2:1:1)}if(n.setAttribute("data-dpr",r),!s)if((s=i.createElement("meta")).setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(s);else{var v=i.createElement("div");v.appendChild(s),i.write(v.innerHTML)}function g(){var e=n.getBoundingClientRect().width;e/r>540&&(e=540*r);var a=e/10;n.style.fontSize=a+"px",c.rem=t.rem=a}t.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(g,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(a),a=setTimeout(g,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*r+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=12*r+"px"},!1),g(),c.dpr=t.dpr=r,c.refreshRem=g,c.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},c.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.73fc8966601cf65c685e.js.map
webpackJsonp([19],{"0r9k":function(n,e,t){var o=t("G4zy");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("FIqI")("2c213010",o,!1,{})},G4zy:function(n,e,t){(n.exports=t("UTlt")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"CallRecord.vue",sourceRoot:""}])},YCdj:function(n,e,t){(n.exports=t("UTlt")(!0)).push([n.i,"\n.right-side-dialog[data-v-1f7dbcce] .el-dialog__body{padding:5px 20px 20px\n}\n.clue-follow-record[data-v-1f7dbcce]{max-height:780px;overflow-y:auto\n}\n","",{version:3,sources:["D:/liu/vue-project/MyTest/src/pages/call-center/record/D:/liu/vue-project/MyTest/src/pages/call-center/record/CallFollow.vue"],names:[],mappings:";AAwFA,qDACI,qBAAsB;CACzB;AAAA,qCAGG,iBACA,eAAgB;CACnB",file:"CallFollow.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.right-side-dialog /deep/.el-dialog__body {\r\n    padding: 5px 20px 20px;\r\n}\r\n\r\n.clue-follow-record {\r\n    max-height: 780px;\r\n    overflow-y: auto;\r\n}\r\n"],sourceRoot:""}])},lSat:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("aA9S"),l=t.n(o),a=t("/Uby"),i=t("IaGi"),r=t("ufHF"),c=t("IHPB"),s=t.n(c),d={components:{FollowRecord:t("Y1jt").a},props:{row:{type:Object,default:function(){return{}}}},data:function(){return{dialogVisible:!0,recordList:[],followPage:{totalCount:0,page:1,pageSize:10,totalPage:1}}},created:function(){this.getFollowList("init")},methods:{cancel:function(){this.$emit("cancel")},getFollowList:function(n){var e=this;"init"==n&&(this.followList=[],this.followPage.page=1);var t=this.followPage,o=t.page,l=t.pageSize,a={typeId:this.row.dataType,id:this.row.dataId,page:o,pageSize:l};this.$fetch.common.followListByType(a).then(function(n){e.$handleResponse(n,function(n){var t=n.list,o=n.page;t&&t.length>0&&(e.recordList=[].concat(s()(e.recordList),s()(t))),e.followPage.totalCount=o.totalCount,e.followPage.totalPage=o.totalPage},!0)}).catch(function(){e.$store.commit("closeLoading")})},handleFollowScroll:function(){this.followPage.page>=this.followPage.totalPage||(this.followPage.page++,this.getFollowList())}}},p=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("el-dialog",{staticClass:"right-side-dialog call-follow-dialog",attrs:{title:"跟进记录",visible:n.dialogVisible,width:"450px","append-to-body":"","close-on-click-modal":!1,"before-close":n.cancel},on:{"update:visible":function(e){n.dialogVisible=e}}},[t("follow-record",{staticClass:"m-t-20 p-20 clue-follow-record reset-scrollbar",attrs:{"record-list":n.recordList,scrollEvent:!0},on:{"event-scroll":n.handleFollowScroll}})],1)};p._withStripped=!0;var u={render:p,staticRenderFns:[]},h=u;var f=!1;var g=t("C7Lr")(d,h,!1,function(n){f||t("loMY")},"data-v-1f7dbcce",null);g.options.__file="src/pages/call-center/record/CallFollow.vue";var b=g.exports,w=t("F+dp"),v=t("RbfQ"),m=t("CKy9"),C=t("PdD4"),y={components:{SearchBar:a.a,SearchCol:i.a,DataTable:r.a,CallFollow:b,AudioPlayer:w.a,ExportLog:v.a,CommonExport:m.a},mixins:[C.a],data:function(){return{search:{},dataTable:{},showFollow:!1,showAudio:!1,voiceFile:""}},created:function(){this.initData(),this.queryData()},methods:{initData:function(){this.row={},this.initExport(),this.initSearch(),this.initTable(),this.getDccList()},initExport:function(){this.exportConfig={fileName:"通话记录导出",ext:"csv",idName:"id",select:[],taskType:"",url:"business.exportClueExcel",other:{}}},initSearch:function(){this.search={list:[{type:"select",label:"DCC邀约员",currentVal:"",isAll:!0,isAllTitle:"全部",selectOptions:[],optionLabel:"dccName",optionValue:"id"},{type:"select",label:"通话方式",currentVal:"",isAll:!0,isAllTitle:"全部",selectOptions:[{title:"呼出",id:1},{title:"呼入",id:2}],optionLabel:"title",optionValue:"id"},{type:"select",label:"通话结果",currentVal:"",isAll:!0,isAllTitle:"全部",selectOptions:[{title:"成功",id:1},{title:"失败",id:2},{title:"未接通",id:3}],optionLabel:"title",optionValue:"id"},{type:"datePicker",label:"通话时间",currentVal:""},{type:"select",label:"坐席组",currentVal:"",isAll:!0,isAllTitle:"全部",selectOptions:[],optionLabel:"dccGroupName",optionValue:"id"}],dccId:0,type:1,result:2,time:3,dccGroup:4}},initTable:function(){this.dataTable={tr:[{id:"1",label:"操作",prop:"caozuo",show:"template",width:"170"},{id:"2",label:"DCC邀约员",prop:"dccName",tooltip:!0},{id:"3",label:"坐席组",prop:"dccGroupName",tooltip:!0},{id:"4",label:"通话时间",prop:"createDate",tooltip:!0},{id:"5",label:"客户姓名",prop:"customerName",tooltip:!0},{id:"6",label:"客户手机号",prop:"customerTel",tooltip:!0},{id:"7",label:"通话方式",prop:"callTypeTitle",tooltip:!0},{id:"8",label:"通过结果",prop:"callResultTitle",tooltip:!0},{id:"9",label:"通话时长",prop:"duration",tooltip:!0}],data:[],page:{totalCount:0,pageSize:20,currentPage:1},border:!1,hasSelect:!0,hasExpand:!1,hasFirstPagination:!0,search:{value:"",show:!0,keyword:"kwd",url:"callCenter.dccCallList",width:"300",placeholder:"客户名称、客户手机号",displayCol:["customerName","customerTel"],parma:{id:""}}}},getDccList:function(){var n=this;this.$fetch.common.commonDccList({},!1,!1).then(function(e){n.$handleResponse(e,function(e){n.search.list[n.search.dccGroup].selectOptions=n.$hasArrContent(e)?e:[];var t=[];n.$hasArrContent(e)&&(e.forEach(function(e){n.$hasArrContent(e.dccList)&&(t=t.concat(e.dccList))}),n.search.list[n.search.dccId].selectOptions=t)},!1)})},getParams:function(){var n=this.dataTable.page,e=n.currentPage,t=n.pageSize,o=this.search,l=o.dccId,a=o.type,i=o.result,r=o.time,c=o.dccGroup,s=o.list;return{dccId:s[l].currentVal,callType:s[a].currentVal,callResult:s[i].currentVal,dateStart:s[r].currentVal&&s[r].currentVal[0],dateEnd:s[r].currentVal&&s[r].currentVal[1],dccGroupId:s[c].currentVal,pageSize:t,page:e}},queryData:function(){var n=this,e=this,t=this.getParams();this.exportConfig.other=l()({},t),this.$fetch.callCenter.dccCallList(t).then(function(t){n.$handleResponse(t,function(n){e.dataTable.data=n.list?n.list:[],e.dataTable.page=n.page?n.page:e.dataTable.page},!0)}).catch(function(){n.$store.commit("closeLoading")})},seeFollow:function(n){this.showFollow=!0,this.row=n},showAudioFn:function(n){this.showAudio=!0,this.voiceFile=n.voiceFile}}},A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"call-record-page m-20 common-box"},[t("search-bar",{staticClass:"m-t-10 p-20",attrs:{size:"medium"},on:{clear:n.clear,find:n.find}},[t("div",{staticClass:"search-flex"},[t("search-col",{attrs:{info:n.search.list[n.search.dccId],filterable:""}}),n._v(" "),t("search-col",{attrs:{info:n.search.list[n.search.type]}}),n._v(" "),t("search-col",{attrs:{info:n.search.list[n.search.result]}}),n._v(" "),t("search-col",{attrs:{info:n.search.list[n.search.time],type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"}}),n._v(" "),t("search-col",{attrs:{info:n.search.list[n.search.dccGroup],filterable:""}})],1)]),n._v(" "),t("div",{staticClass:"p-20"},[t("data-table",{ref:"DataTableRef",attrs:{table:n.dataTable},on:{searchTable:n.searchTable,onHandleSelectionChange:n.handleSelectionChange},scopedSlots:n._u([{key:"caozuo",fn:function(e){return[t("el-button",{staticClass:"blue_font_white_bg",attrs:{plain:"",round:"",size:"mini",disabled:0==e.obj.row.dataId},on:{click:function(t){return n.seeFollow(e.obj.row)}}},[n._v("查看跟进")]),n._v(" "),t("el-button",{staticClass:"blue_font_white_bg",attrs:{plain:"",round:"",size:"mini",disabled:!e.obj.row.voiceFile},on:{click:function(t){return n.showAudioFn(e.obj.row)}}},[n._v("录音")])]}}])},[t("div",{attrs:{slot:"buttons"},slot:"buttons"})])],1),n._v(" "),n.showFollow?t("call-follow",{attrs:{row:n.row},on:{cancel:function(e){n.showFollow=!1}}}):n._e(),n._v(" "),n.showAudio?t("audio-player",{attrs:{url:n.voiceFile},on:{cancel:function(e){n.showAudio=!1}}}):n._e()],1)};A._withStripped=!0;var _={render:A,staticRenderFns:[]},F=_;var T=!1;var x=t("C7Lr")(y,F,!1,function(n){T||(t("ldRa"),t("0r9k"))},"data-v-77c4c524",null);x.options.__file="src/pages/call-center/record/CallRecord.vue";e.default=x.exports},lThF:function(n,e,t){(n.exports=t("UTlt")(!0)).push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CallRecord.vue",sourceRoot:""}])},ldRa:function(n,e,t){var o=t("lThF");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("FIqI")("0e87ec21",o,!1,{})},loMY:function(n,e,t){var o=t("YCdj");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("FIqI")("25715c3e",o,!1,{})}});
//# sourceMappingURL=19.5c8a11a05053e9939b10.js.map
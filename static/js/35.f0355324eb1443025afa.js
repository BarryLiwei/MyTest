webpackJsonp([35],{Nd61:function(n,e,t){(n.exports=t("UTlt")(!0)).push([n.i,"\n.title[data-v-0f683be8]{height:60px;line-height:60px;padding-left:20px;color:#444;font-size:20px;font-family:PingFang-SC-Medium;background-color:#fafcff\n}\n.box-wrap[data-v-0f683be8]{width:950px\n}\n.el-tree[data-v-0f683be8]{border-top:1px solid #eee;border-left:1px solid #eee;border-right:1px solid #eee\n}\n.el-tree[data-v-0f683be8] .el-icon-arrow-right{font-size:14px;font-weight:700;color:#606266;margin-left:10px;margin-right:5px\n}\n.el-tree[data-v-0f683be8] .el-icon-arrow-right.el-tree-node__expand-icon.is-leaf{color:transparent\n}\n.el-tree[data-v-0f683be8] .el-tree-node__content{height:50px;line-height:50px;border-bottom:1px solid #eee;font-size:14px\n}\n.el-tree[data-v-0f683be8] .el-tree-node>.el-tree-node__children{background-color:#f3f8fc\n}\n.add-source-dialog[data-v-0f683be8] .el-dialog__body{padding:40px 30px 0\n}\n.add-source-dialog[data-v-0f683be8] .el-dialog__footer{padding-bottom:30px\n}\n","",{version:3,sources:["D:/liu/vue-project/MyTest/src/pages/call-center/param/D:/liu/vue-project/MyTest/src/pages/call-center/param/Source.vue"],names:[],mappings:";AA0OA,wBACI,YACA,iBACA,kBACA,WACA,eACA,+BACA,wBACJ;CAAC;AAAA,2BAGG,WAAY;CACf;AAAA,0BAGG,0BACA,2BACA,2BAA4B;CAC/B;AAAA,+CAGG,eACA,gBACA,cACA,iBACA,gBACJ;CAAC;AAAA,iFAEG,iBAAkB;CACrB;AAAA,iDAGG,YACA,iBACA,6BACA,cAAe;CAClB;AAAA,gEAGG,wBAAyB;CAC5B;AAAA,qDAGG,mBAAoB;CACvB;AAAA,uDAGG,mBAAoB;CACvB",file:"Source.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.title {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    padding-left: 20px;\r\n    color: #444;\r\n    font-size: 20px;\r\n    font-family: PingFang-SC-Medium;\r\n    background-color: #fafcff\r\n}\r\n\r\n.box-wrap {\r\n    width: 950px;\r\n}\r\n\r\n.el-tree {\r\n    border-top: 1px solid #eee;\r\n    border-left: 1px solid #eee;\r\n    border-right: 1px solid #eee;\r\n}\r\n\r\n.el-tree /deep/ .el-icon-arrow-right {\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    color: #606266;\r\n    margin-left: 10px;\r\n    margin-right: 5px\r\n}\r\n.el-tree /deep/ .el-icon-arrow-right.el-tree-node__expand-icon.is-leaf{\r\n    color: transparent;\r\n}\r\n\r\n.el-tree /deep/ .el-tree-node__content {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border-bottom: 1px solid #eee;\r\n    font-size: 14px;\r\n}\r\n\r\n.el-tree /deep/ .el-tree-node > .el-tree-node__children {\r\n    background-color: #f3f8fc;\r\n}\r\n\r\n.add-source-dialog /deep/.el-dialog__body {\r\n    padding: 40px 30px 0;\r\n}\r\n\r\n.add-source-dialog /deep/ .el-dialog__footer {\r\n    padding-bottom: 30px;\r\n}\r\n"],sourceRoot:""}])},P1SL:function(n,e,t){var o=t("Nd61");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("FIqI")("9f63935c",o,!1,{})},ruhI:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={components:{ScrmFormItem:t("kfhN").a},data:function(){return{sourceList:[],defaultProps:{children:"children",label:"title"},dialog:{show:!1,title:"新增",label:"一级线索",value:"",row:{}},expandKeys:[]}},created:function(){this.queryData()},methods:{initTestData:function(){this.sourceList=[{name:"微信",parent_id:0,status:1,id:1,showSub:!0,sub:[{name:"个人二维码地方嘎达",parent_id:1,id:12,status:0},{name:"客流二维码",parent_id:1,id:13,status:0},{name:"推广二维码",parent_id:1,status:0,id:14}]},{name:"自行添加",parent_id:0,status:1,id:2}]},queryData:function(){var n=this;this.$fetch.callCenter.clueFrom({}).then(function(e){n.$handleResponse(e,function(e){n.sourceList=e,n.statusBoolean(n.sourceList)},!0)}).catch(function(){n.$store.commit("closeLoading")})},statusBoolean:function(n){var e=this;this.$hasArrContent(n)&&n.forEach(function(n){n.status=!!n.status,n.children&&e.statusBoolean(n.children)})},addFn:function(n){this.dialog.title="新增",this.dialog.value="",this.dialog.label=n&&n.id?"二级来源":"一级来源",this.dialog.row=this.$deepCopyContent(n),this.dialog.show=!0},edit:function(n){this.dialog.title="编辑",this.dialog.value=n.title,this.dialog.label=n.pid?"二级来源":"一级来源",this.dialog.row=this.$deepCopyContent(n),this.dialog.show=!0},saveFn:function(){var n=this;this.dialog.value?"新增"==this.dialog.title?this.$fetch.callCenter.createClueFrom({title:this.dialog.value,pid:this.dialog.row.id}).then(function(e){n.$handleResponse(e,function(e){n.dialog.show=!1,n.$message.success("新增成功"),n.queryData()},!0)}).catch(function(){n.$store.commit("closeLoading")}):this.$fetch.callCenter.updateClueFrom({title:this.dialog.value,id:this.dialog.row.id}).then(function(e){n.$handleResponse(e,function(e){n.dialog.show=!1,n.$message.success("编辑成功"),n.queryData()},!0)}).catch(function(){n.$store.commit("closeLoading")}):this.$message.error("请输入内容")},changeState:function(n){var e=this;this.$fetch.callCenter.toggleClueFrom({status:n.status?1:0,id:n.id}).then(function(n){e.$handleResponse(n,function(n){e.dialog.show=!1,e.$message.success("编辑成功"),e.queryData()},!0)}).catch(function(){e.$store.commit("closeLoading")})},deleteFn:function(n){var e=this,t="你确定要删除该"+(n.pid?"二级":"一级")+"来源吗";this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",customClass:"needCenterStyle",cancelButtonClass:"big cancel",confirmButtonClass:"big",roundButton:!0}).then(function(){e.$fetch.callCenter.deleteClueFrom({id:n.id}).then(function(n){e.$handleResponse(n,function(n){e.$message.success("删除成功"),e.queryData()},!0)}).catch(function(){e.$store.commit("closeLoading")})})},cancel:function(){this.dialog.show=!1},nodeExpandFn:function(n){this.expandKeys.push(n.id)},nodeCollapseFn:function(n){this.expandKeys=this.expandKeys.filter(function(e){return e!=n.id})}}},i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"param-source-setting m-20 common-box min-h-750"},[t("div",{staticClass:"title line"},[n._v("线索/客户来源设置")]),n._v(" "),t("div",{staticClass:"p-30"},[t("el-button",{staticClass:"m-b-30 w-90",attrs:{round:"",icon:"el-icon-plus",size:"small",type:"primary"},on:{click:function(e){return n.addFn({})}}},[n._v("新增")]),n._v(" "),t("div",{staticClass:"box-wrap"},[t("el-tree",{ref:"tagTree",attrs:{data:n.sourceList,props:n.defaultProps,"default-expanded-keys":n.expandKeys,"node-key":"id","expand-on-click-node":!1,"icon-class":"el-icon-arrow-right"},on:{"node-expand":n.nodeExpandFn,"node-collapse":n.nodeCollapseFn},scopedSlots:n._u([{key:"default",fn:function(e){var o=e.node,i=e.data;return t("div",{staticClass:"custom-tree-node flex-1 flex"},[t("div",{staticClass:"flex-1 p-r-20"},[n._v(n._s(o.label))]),n._v(" "),t("div",{staticClass:"w-300"},[t("el-switch",{staticClass:"switch-scrm",attrs:{disabled:!!i.isSystem,"active-text":"ON","inactive-text":"OFF"},on:{change:function(e){return n.changeState(i)}},model:{value:i.status,callback:function(e){n.$set(i,"status",e)},expression:"data.status"}})],1),n._v(" "),t("div",{staticClass:"w-250"},[t("el-button",{attrs:{type:"text",disabled:!!i.isSystem},on:{click:function(e){return n.edit(i)}}},[n._v("编辑")]),n._v(" "),0==i.pid?t("el-button",{staticClass:"btn-split",attrs:{type:"text"},on:{click:function(e){return n.addFn(i)}}},[n._v("新增二级来源")]):n._e(),n._v(" "),t("el-button",{staticClass:"btn-split",class:{red_font:!i.isSystem},attrs:{type:"text",disabled:!!i.isSystem},on:{click:function(e){return n.deleteFn(i)}}},[n._v("删除")])],1)])}}])})],1)],1),n._v(" "),t("el-dialog",{staticClass:"add-source-dialog",attrs:{title:n.dialog.title,visible:n.dialog.show,width:"470px","append-to-body":"","close-on-click-modal":!1,"before-close":n.cancel},on:{"update:visible":function(e){return n.$set(n.dialog,"show",e)}}},[t("el-form",{ref:"form",attrs:{"label-width":"80px"}},[t("scrm-form-item",{attrs:{itemLabel:n.dialog.label,itemType:"input",subClass:"w-100-percent",maxlength:"16",placeholder:"请输入内容，最多16个字符",itemInfo:n.dialog,itemKey:"value"}})],1),n._v(" "),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticClass:"w-90",attrs:{round:"",size:"small"},on:{click:n.cancel}},[n._v("取 消")]),n._v(" "),t("el-button",{staticClass:"w-90",attrs:{round:"",size:"small",type:"primary"},on:{click:n.saveFn}},[n._v(" 确定")])],1)],1)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]},s=a;var r=!1;var l=t("C7Lr")(o,s,!1,function(n){r||t("P1SL")},"data-v-0f683be8",null);l.options.__file="src/pages/call-center/param/Source.vue";e.default=l.exports}});
//# sourceMappingURL=35.f0355324eb1443025afa.js.map
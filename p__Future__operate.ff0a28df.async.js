"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[559],{49173:function(V,S,e){var m=e(18201),o=e(66342),p=e(23960),D=e(75271),U=e(20605),c=e(34098),I=e(52676),r=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],B=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],j=function(a,M){var s=a.fieldProps,T=a.children,b=a.params,n=a.proFieldProps,L=a.mode,C=a.valueEnum,f=a.request,x=a.showSearch,R=a.options,A=(0,o.Z)(a,r),F=(0,D.useContext)(U.Z);return(0,I.jsx)(c.Z,(0,m.Z)((0,m.Z)({valueEnum:(0,p.h)(C),request:f,params:b,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,m.Z)({options:R,mode:L,showSearch:x,getPopupContainer:F.getPopupContainer},s),ref:M,proFieldProps:n},A),{},{children:T}))},l=D.forwardRef(function(d,a){var M=d.fieldProps,s=d.children,T=d.params,b=d.proFieldProps,n=d.mode,L=d.valueEnum,C=d.request,f=d.options,x=(0,o.Z)(d,B),R=(0,m.Z)({options:f,mode:n||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},M),A=(0,D.useContext)(U.Z);return(0,I.jsx)(c.Z,(0,m.Z)((0,m.Z)({valueEnum:(0,p.h)(L),request:C,params:T,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,m.Z)({getPopupContainer:A.getPopupContainer},R),ref:a,proFieldProps:b},x),{},{children:s}))}),h=D.forwardRef(j),u=l,_=h;_.SearchSelect=u,_.displayName="ProFormComponent",S.Z=_},92187:function(V,S,e){var m=e(90228),o=e.n(m),p=e(87999),D=e.n(p),U=e(4076),c=e(3765),I=e(49173),r=e(91650),B=e(75271),j=e(10090),l=e(63835),h=e(95641),u=e(52676),_=function(a){var M=a.done,s=a.visible,T=a.onDone,b=a.futureId,n=a.futureOperate,L=a.onSubmit,C=(0,j.useIntl)();return s?(0,u.jsxs)(U.Y,{open:s,title:M?null:"".concat(n!=null&&n.id?C.formatMessage({id:"pages.edit"}):C.formatMessage({id:"pages.new"})),className:l.Z.standardListForm,width:640,onFinish:function(){var f=D()(o()().mark(function x(R){return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:L(R);case 1:case"end":return F.stop()}},x)}));return function(x){return f.apply(this,arguments)}}(),initialValues:n,submitter:{render:function(x,R){return M?null:R}},modalProps:{onCancel:function(){return T()},destroyOnClose:!0},children:[(0,u.jsx)(h.Z,{}),(0,u.jsx)(c.Z,{name:"id",hidden:!0,initialValue:n==null?void 0:n.id}),(0,u.jsx)(c.Z,{name:"futureId",hidden:!0,initialValue:b}),(0,u.jsx)(c.Z,{name:"iDevice",hidden:!0,initialValue:"WEB"}),(0,u.jsx)(c.Z,{name:"state",hidden:!0,initialValue:n==null?void 0:n.state}),(0,u.jsx)(I.Z,{name:"side",label:"\u9009\u62E9\u65B9\u5411",width:"md",rules:[{required:!0,message:"\u9009\u62E9\u65B9\u5411"}],options:[{label:"\u4E70\u5165",value:"OPEN"},{label:"\u5356\u51FA",value:"CLOSE"}]}),(0,u.jsx)(r.Z,{name:"tradePercent",label:"\u4EA4\u6613\u6BD4\u4F8B",tooltip:"\u6839\u636E\u5408\u7EA6\u8D26\u6237USDT\u4F59\u989D\u7684\u767E\u5206\u6BD4",width:"sm",min:0,max:100,fieldProps:{addonAfter:"%"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA4\u6613\u6BD4\u4F8B"}]}),(0,u.jsx)(I.Z,{name:"operateType",tooltip:"\u5E02\u4EF7\u5355\u5C06\u7ACB\u5373\u6267\u884C",label:"\u9009\u62E9\u7C7B\u578B",width:"md",rules:[{required:!0,message:"\u9009\u62E9\u7C7B\u578B"}],options:[{label:"\u9650\u4EF7\u5355",value:"ENTRUST"},{label:"\u5E02\u4EF7\u5355",value:"MARKET"}]}),(0,u.jsx)(r.Z,{name:"entrustPrice",label:"\u59D4\u6258\u4EF7\u683C",tooltip:"\u9009\u62E9\u9650\u4EF7\u5355\u65F6\u5FC5\u586B",width:"sm",dependencies:["operateType"],fieldProps:{addonAfter:"USDT"}})]}):null};S.Z=_},43529:function(V,S,e){var m=e(4076),o=e(15118),p=e(10090),D=e(75271),U=e(79498),c=e(63835),I=e(60762),r=e(52676),B=function(l){var h=l.done,u=l.visible,_=l.current,d=l.onDone;if(!u)return null;var a=[{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.create.time"}),dataIndex:"createTime",hideInSearch:!0,valueType:"dateTime",width:"180px"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.future.trade.orderId"}),dataIndex:"orderId",hideInForm:!0,hideInTable:!0,hideInSearch:!0,valueType:"text"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.future.trade.clientOrderId"}),dataIndex:"clientOrderId",hideInForm:!0,hideInTable:!0,hideInSearch:!0,valueType:"text"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.future.trade.price"}),dataIndex:"tradePrice",valueType:"digit",hideInSearch:!0,hideInForm:!0,width:"md"},{title:"Token",dataIndex:"tokenQty",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md"},{title:"USDT",dataIndex:"stableTokenQty",valueType:"text",hideInSearch:!0,hideInForm:!0,width:"md"},{title:"\u76C8\u4E8F",dataIndex:"realizedPnl",hideInSearch:!0,valueType:"digit",width:"120px"},{title:"\u5206\u6210",dataIndex:"fee",hideInSearch:!0,valueType:"digit",width:"120px"},{title:"\u624B\u7EED\u8D39",valueType:"digit",hideInSearch:!0,hideInForm:!0,width:"md",render:function(b,n){return n.commission}},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.future.trade.state"}),dataIndex:"status",valueType:"text",hideInSearch:!0,width:"120px",valueEnum:{ERROR:{text:"\u9519\u8BEF",status:"error"},FILLED:{text:"\u5B8C\u6210",status:"Success"},NEW:{text:"\u521B\u5EFA",status:"Processing"}}},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.future.trade.systemMsg"}),dataIndex:"systemMsg",hideInForm:!0,hideInSearch:!0,valueType:"textarea"}],M={futureOperateId:_==null?void 0:_.id},s={showSizeChanger:!0,showQuickJumper:!0};return(0,r.jsx)(o._z,{children:(0,r.jsx)(m.Y,{open:u,title:"\u4EA4\u6613\u8BB0\u5F55",className:c.Z.standardListForm,width:"80%",submitter:!1,modalProps:{onCancel:function(){d()},destroyOnClose:!0},children:(0,r.jsx)(I.ZP,{rowKey:"id",columns:a,pagination:s,params:M,request:U.Wq,search:!1})})})};S.Z=B},41400:function(V,S,e){e.r(S);var m=e(90228),o=e.n(m),p=e(26068),D=e.n(p),U=e(87999),c=e.n(U),I=e(48305),r=e.n(I),B=e(15118),j=e(60762),l=e(10090),h=e(33985),u=e(44560),_=e(75271),d=e(92187),a=e(79498),M=e(43529),s=e(52676),T=function(){var n=(0,_.useRef)(),L=(0,_.useState)(!1),C=r()(L,2),f=C[0],x=C[1],R=(0,_.useState)(!1),A=r()(R,2),F=A[0],w=A[1],Y=(0,_.useState)(!1),$=r()(Y,2),X=$[0],z=$[1],k=(0,_.useState)(),G=r()(k,2),y=G[0],N=G[1],g=(0,l.useIntl)(),q=(0,l.useRequest)(function(){return(0,a.dX)({})}),Q=q.data,H={};Q&&Q.map(function(E){H[E.id]={text:E.label,value:E.value}});var ee=function(){var E=c()(o()().mark(function v(i){var O,K,P,W,Z;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(O=h.ZP.loading(g.formatMessage({id:"pages.tip.loading"})),O(),t.prev=2,i.id==null){t.next=13;break}return t.next=6,(0,a.GZ)(D()({},i));case 6:if(K=t.sent,P=K.success,!P){t.next=11;break}return h.ZP.success(g.formatMessage({id:"pages.tip.success"})),t.abrupt("return",!0);case 11:t.next=20;break;case 13:return t.next=15,(0,a.xx)(D()({},i));case 15:if(W=t.sent,Z=W.success,!Z){t.next=20;break}return h.ZP.success(g.formatMessage({id:"pages.tip.success"})),t.abrupt("return",!0);case 20:return t.abrupt("return",!1);case 23:return t.prev=23,t.t0=t.catch(2),h.ZP.error(g.formatMessage({id:"pages.tip.error"})),t.abrupt("return",!1);case 27:case"end":return t.stop()}},v,null,[[2,23]])}));return function(i){return E.apply(this,arguments)}}(),te=function(v){u.Z.confirm({title:g.formatMessage({id:"pages.tip.title"}),content:g.formatMessage({id:"pages.tip.content"}),okText:g.formatMessage({id:"pages.tip.ok"}),cancelText:g.formatMessage({id:"pages.tip.cancel"}),onOk:function(){var i=c()(o()().mark(function K(){var P,W,Z;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(v){t.next=2;break}return t.abrupt("return",!0);case 2:return t.prev=2,P=h.ZP.loading(g.formatMessage({id:"pages.tip.loading"})),t.next=6,(0,a.e8)({id:v.id});case 6:if(W=t.sent,Z=W.success,!Z){t.next=13;break}return P(),h.ZP.success(g.formatMessage({id:"pages.tip.success"})),n.current&&n.current.reload(),t.abrupt("return",!0);case 13:return t.abrupt("return",!1);case 16:return t.prev=16,t.t0=t.catch(2),t.abrupt("return",!1);case 19:case"end":return t.stop()}},K,null,[[2,16]])}));function O(){return i.apply(this,arguments)}return O}()})},J=function(){x(!1),w(!1),z(!1),N(void 0)},ae={showSizeChanger:!0,showQuickJumper:!0},ne=[{title:"\u96C6\u7FA4\u4EA4\u6613\u5BF9",dataIndex:"futureId",valueType:"select",width:"xs",hideInForm:!0,hideInTable:!0,hideInDescriptions:!0,valueEnum:H,fieldProps:{placeholder:"\u8BF7\u9009\u62E9\u96C6\u7FA4\u4EA4\u6613\u5BF9"}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",hideInSearch:!0},{title:"\u8BBE\u5907",dataIndex:"iDevice",valueType:"text",width:"xs",hideInSearch:!0},{title:"\u4E70\u5356",dataIndex:"side",valueType:"text",width:"xs",hideInSearch:!0},{title:"\u7C7B\u578B",dataIndex:"operateType",valueType:"select",valueEnum:{ENTRUST:{text:"\u9650\u4EF7\u5355"},MARKET:{text:"\u5E02\u4EF7\u5355"}}},{title:"\u59D4\u6258\u4EF7",dataIndex:"entrustPrice",valueType:"digit",hideInSearch:!0},{title:"\u4EA4\u6613\u6BD4\u4F8B(%)",tooltip:"\u4E70\u5165\u4E3AUSDT\u4F59\u989D\u767E\u5206\u6BD4\uFF0C\u5356\u51FA\u4E3A\u6301\u4ED3\u767E\u5206\u6BD4",dataIndex:"tradePercent",valueType:"digit",hideInSearch:!0},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:{MONITOR:{text:"\u76D1\u542C\u4E2D"},PROGRESS:{text:"\u6267\u884C\u4E2D"},STOP:{text:"\u505C\u6B62"},CANCELLED:{text:"\u5DF2\u53D6\u6D88"},FINISHED:{text:"\u5B8C\u6210"}}},{title:"\u8FDB\u5EA6\u60C5\u51B5",valueType:"text",fieldProps:{size:10},hideInSearch:!0,render:function(v,i){return"\u5B8C\u6210("+i.filledCount+"),\u9519\u8BEF("+i.errorCount+")"}},{title:(0,s.jsx)(l.FormattedMessage,{id:"pages.option"}),dataIndex:"option",valueType:"option",hideInDescriptions:!0,render:function(v,i){return[(0,s.jsx)("a",{onClick:function(){w(!0),N(i)},children:(0,s.jsx)(l.FormattedMessage,{id:"pages.edit"})},"edit"),(0,s.jsx)("a",{onClick:function(){N(i),z(!0)},children:"\u8FDB\u5EA6"},"edit"),(0,s.jsx)("a",{onClick:function(){te(i)},children:(0,s.jsx)(l.FormattedMessage,{id:"pages.delete"})},"delete")]}}];return(0,s.jsxs)(B._z,{children:[(0,s.jsx)(j.ZP,{actionRef:n,pagination:ae,rowKey:function(v){return v.id},request:a.Vw,columns:ne}),(0,s.jsx)(d.Z,{done:f,visible:F,futureId:y==null?void 0:y.futureId,futureOperate:y||{},onDone:J,onSubmit:function(){var E=c()(o()().mark(function v(i){var O;return o()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,ee(i);case 2:O=P.sent,O&&(w(!1),N(void 0),n.current&&n.current.reload());case 4:case"end":return P.stop()}},v)}));return function(v){return E.apply(this,arguments)}}()}),(0,s.jsx)(M.Z,{done:f,current:y,visible:X,onDone:J})]})};S.default=T}}]);

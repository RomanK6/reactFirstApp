"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[108],{3108:function(e,i,n){n.r(i),n.d(i,{default:function(){return L}});var t="Dialogs_dialog__BfbLU",a="Dialogs_chatList__pie1-",A="Dialogs_chatItem__L9HEk",s="Dialogs_dialogWindow__OzPvt",r=n(3504),l=n(2807),p="Newmessage_newMessage__wofws",o="Newmessage_button__ByDE2",u=n(2791),c=n(6139),d=n(704),K=n(2688),f=n(5304),U=n(184),g=(0,f.D)(12),h=(0,d.Z)({form:"addMessageForm"})((function(e){return(0,U.jsxs)("form",{className:p,onSubmit:e.handleSubmit,children:[(0,U.jsx)(c.Z,{component:K.gx,validate:[f.C,g],name:"newMessageBody",placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}),(0,U.jsx)("button",{className:o,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),S=n(8687),m=(0,S.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{onSubmit:function(i){e((0,l.b)(i.newMessageBody))}}}))(h),C=n(1413),Q=n(5671),B=n(3144),I=n(136),j=n(2882),b=n(5796),k=n(6713),H="Message_message__N2vvV",v="Message_userMessage__Swqkr",E="Message_User__AV5fk",P=n(262),M=function(e){return(0,U.jsxs)("div",{className:H,children:[(0,U.jsxs)("div",{className:E,children:[(0,U.jsx)("img",{src:P,alt:"avatar"}),e.name]}),(0,U.jsx)("div",{className:v,children:e.message})]})},D=function(e){(0,I.Z)(n,e);var i=(0,j.Z)(n);function n(){return(0,Q.Z)(this,n),i.apply(this,arguments)}return(0,B.Z)(n,[{key:"componentDidMount",value:function(){var e=this;(0,k.pn)().then((function(i){if(0===i.resultCode){var n=i.data,t=n.email,a=n.id,A=n.login;e.props.setAuthUserData(a,t,A,e.props.isAuth)}}))}},{key:"render",value:function(){return(0,U.jsx)(M,(0,C.Z)({},this.props))}}]),n}(u.Component),w=(0,S.$j)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:b.v})(D),x=function(e){var i=e.profilePage.messagesData.map((function(i){return(0,U.jsx)(w,{id:i.id,name:i.user,message:i.message,profile:e.profile},i.id)}));return(0,U.jsxs)("div",{children:[i,(0,U.jsx)(m,{profilePage:e.profilePage,dispatch:e.dispatch})]})},N=function(e){return(0,U.jsx)("li",{children:(0,U.jsx)(r.OL,{to:"/dialogs/"+e.id,className:A,children:e.name})})},R=function(e){var i=e.profilePage.dialogsData.map((function(e){return(0,U.jsx)(N,{name:e.name,id:e.id},e.id)}));return(0,U.jsxs)("div",{className:t,children:[(0,U.jsx)("ul",{className:a,children:i}),(0,U.jsx)("div",{className:s,children:(0,U.jsx)(x,{profilePage:e.profilePage,dispatch:e.dispatch,profile:e.profile})})]})},Z=n(6871),W=function(e){return{isAuth:e.auth.isAuth}},L=(0,n(7781).qC)((0,S.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{}})),(function(e){var i=function(i){(0,I.Z)(t,i);var n=(0,j.Z)(t);function t(){return(0,Q.Z)(this,t),n.apply(this,arguments)}return(0,B.Z)(t,[{key:"render",value:function(){return this.props.isAuth?(0,U.jsx)(e,(0,C.Z)({},this.props)):(0,U.jsx)(Z.Fg,{to:"/login"})}}]),t}(u.Component);return(0,S.$j)(W)(i)}))(R)},262:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=108.33749acc.chunk.js.map
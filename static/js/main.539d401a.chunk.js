(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),i=n.n(c),r=(n(100),n(71)),l=n.n(r),d=n(81),s=(n(102),n(15)),j=n(154),m=n(155),b=n(51),u=n(150),h=n(149),O=n(26),p=n(4);function x(e){var t=e.children,n=e.window,a=Object(h.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return o.a.cloneElement(t,{elevation:a?4:0})}function f(e){return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(u.a,{}),Object(p.jsx)(x,Object(s.a)(Object(s.a)({},e),{},{children:Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(b.a,{variant:"h6",children:Object(p.jsx)(O.b,{style:{textDecoration:"none",color:"#fff"},to:"/blog_post",children:"Blog Post"})})})})})),Object(p.jsx)(m.a,{})]})}var g=n(176),v=n(13),y=n(23),C=n(156),S=n(86),w=n(64),I=n(62),N=n(43),W=Object(I.b)({name:"blogReducer",initialState:{posts:[]},reducers:{addPost:function(e,t){var n=[].concat(Object(w.a)(e.posts),[t.payload]);Object(N.b)("posts",JSON.stringify(n)),e.posts=n},setPosts:function(e,t){var n=t.payload;e.posts=n},addComment:function(e,t){var n=e.posts.map((function(e){var n;if((null===e||void 0===e?void 0:e.blogId.toString())===(null===(n=t.payload)||void 0===n?void 0:n.blogId.toString())){var a,o,c,i,r=(null===e||void 0===e?void 0:e.comments)||[];e.comments=[].concat(Object(w.a)(r),[{name:null===(a=t.payload)||void 0===a?void 0:a.name,comment:null===(o=t.payload)||void 0===o?void 0:o.comment,commentId:null===(c=t.payload)||void 0===c?void 0:c.commentId,date:null===(i=t.payload)||void 0===i?void 0:i.date,children:[]}])}return e}));Object(N.b)("posts",JSON.stringify(n)),e.posts=n},replyComment:function(e,t){var n=t.payload,a=n.blogId,o=n.name,c=n.comment,i=n.commentId,r=n.date,l=n.parentCommentId,d=e.posts.map((function(e){if((null===e||void 0===e?void 0:e.blogId.toString())===a.toString()){var t=(e.comments||[]).map((function(e){return function e(t,n){if(t.commentId===n){var a=t.children||[];return t.children=[].concat(Object(w.a)(a),[{name:o,comment:c,commentId:i,date:r}]),t}var d,s=(null===t||void 0===t?void 0:t.children)||[],j=Object(S.a)(s);try{for(j.s();!(d=j.n()).done;){var m=e(d.value,l);if(m)return m}}catch(b){j.e(b)}finally{j.f()}}(e,l),e}));e.comments=t}return e}));Object(N.b)("posts",JSON.stringify(d)),e.posts=d}}}),k=W.actions,A=k.addPost,P=k.setPosts,T=k.addComment,z=k.replyComment,D=function(e){return e.blogReducer.posts},H=W.reducer,R=n(38),B=function(){return Object(R.b)()},J=R.c,_=n(87),E=n(165),F=n(164),L=n(166),U=n(167),M=n(168),G=n(169),$=n(170),q=n(171),K=n(178),Q=n(39),V=n(180),X=n(157),Y=n(158),Z=n(159),ee=n(160),te=n(181),ne=n(113),ae=n(163),oe=n(49),ce=Object(C.a)((function(e){var t;return{formControl:{margin:e.spacing(3),display:"flex"},dialog:(t={},Object(Q.a)(t,e.breakpoints.down("xs"),{minWidth:200,overflow:"hidden"}),Object(Q.a)(t,e.breakpoints.down("sm"),{minWidth:300,overflow:"hidden"}),Object(Q.a)(t,e.breakpoints.up("md"),{minWidth:500}),Object(Q.a)(t,e.breakpoints.up("lg"),{minWidth:500}),t),textArea:{minHeight:100,border:"1px solid #949494",marginTop:16,fontSize:15,color:"#212121",width:"100%"}}}));function ie(e){var t=e.handleAddPost,n=e.handleClose,o=e.open,c=ce(),i=Object(a.useState)({title:"",blogId:Object(oe.v4)(),content:"",date:(new Date).toLocaleDateString()}),r=Object(y.a)(i,2),l=r[0],d=r[1];return Object(p.jsx)("div",{children:Object(p.jsxs)(V.a,{open:o,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(p.jsx)(X.a,{id:"form-dialog-title",children:"New Post"}),Object(p.jsxs)(Y.a,{className:c.dialog,children:[Object(p.jsxs)(Z.a,{component:"fieldset",className:c.formControl,children:[Object(p.jsx)(ee.a,{children:"Title"}),Object(p.jsx)(te.a,{autoFocus:!0,margin:"dense",id:"name",fullWidth:!0,value:l.title,onChange:function(e){return d((function(t){return Object(s.a)(Object(s.a)({},t),{},{title:e.target.value})}))}})]}),Object(p.jsxs)(Z.a,{component:"fieldset",className:c.formControl,children:[Object(p.jsx)(ee.a,{children:"Content"}),Object(p.jsx)(ne.a,{className:c.textArea,placeholder:"Please enter content of post",value:l.content,onChange:function(e){return d((function(t){return Object(s.a)(Object(s.a)({},t),{},{content:e.target.value})}))}})]}),Object(p.jsxs)(Z.a,{component:"fieldset",className:c.formControl,children:[Object(p.jsx)(ee.a,{children:"Date"}),Object(p.jsx)(te.a,{id:"date",fullWidth:!0,disabled:!0,value:l.date})]})]}),Object(p.jsxs)(ae.a,{children:[Object(p.jsx)(F.a,{onClick:n,color:"primary",children:"Cancel"}),Object(p.jsx)(F.a,{onClick:function(){return t(l)},color:"primary",disabled:!l.title||!l.content,children:"Save"})]})]})})}var re=[{id:"title",label:"Title",minWidth:170},{id:"content",label:"Content",minWidth:100},{id:"date",label:"Date",minWidth:170,align:"right"}],le=Object(C.a)({root:{width:"100%",padding:20},container:{maxHeight:500,marginTop:30}});function de(){var e=J(D),t=B(),n=le(),a=o.a.useState(0),c=Object(y.a)(a,2),i=c[0],r=c[1],l=o.a.useState(10),d=Object(y.a)(l,2),s=d[0],j=d[1],m=o.a.useState(!1),u=Object(y.a)(m,2),h=u[0],x=u[1],f=function(){x(!1)};return Object(p.jsxs)(_.a,{className:n.root,children:[Object(p.jsxs)(E.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",children:[Object(p.jsx)(E.a,{item:!0,xs:9,children:Object(p.jsx)(b.a,{variant:"h5",component:"h5",children:"Blog Post list"})}),Object(p.jsx)(E.a,{item:!0,xs:!0,children:Object(p.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){x(!0)},children:"Add Post"})})]}),Object(p.jsx)(L.a,{className:n.container,children:Object(p.jsxs)(U.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(p.jsx)(M.a,{children:Object(p.jsx)(G.a,{children:re.map((function(e){return Object(p.jsx)($.a,{style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(p.jsx)(q.a,{children:e.slice(i*s,i*s+s).map((function(e){return Object(p.jsx)(G.a,{hover:!0,role:"checkbox",tabIndex:-1,children:re.map((function(t){var n=e[t.id];return"title"===t.id?Object(p.jsx)($.a,{align:t.align,children:Object(p.jsx)(O.b,{style:{textDecoration:"none"},to:"/blog_post/blog-details/".concat(e.blogId),children:t.format&&"number"===typeof n?t.format(n):n})},t.id):Object(p.jsx)($.a,{align:t.align,children:t.format&&"number"===typeof n?t.format(n):n},t.id)}))},e.code)}))})]})}),Object(p.jsx)(K.a,{rowsPerPageOptions:[10,25,100],component:"div",count:e.length,rowsPerPage:s,page:i,onChangePage:function(e,t){r(t)},onChangeRowsPerPage:function(e){j(+e.target.value),r(0)}}),h&&Object(p.jsx)(ie,{open:h,handleClose:f,handleAddPost:function(e){t(A(e)),f()}})]})}var se=n(172),je=n(173),me=n(183),be=n(174),ue=n(175),he=Object(C.a)((function(e){return{commentTitle:{textAlign:"left",fontWeight:900,color:"#383232e8",fontSize:18},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,display:"flex"},textArea:{minHeight:100,border:"1px solid #949494",fontSize:15,color:"#212121",width:"100%"},rootCard:{minWidth:275},button:{display:"flex"}}}));function Oe(e){var t=e.isReply,n=void 0!==t&&t,o=e.handleCancel,c=e.commentId,i=he(),r=Object(R.b)(),l=Object(a.useState)({name:"",comment:"",commentId:Object(oe.v4)(),date:(new Date).toString()}),d=Object(y.a)(l,2),j=d[0],m=d[1],u=Object(v.f)().blogId;return Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(_.a,{className:i.paper,children:Object(p.jsxs)(E.a,{container:!0,spacing:1,children:[!n&&Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{component:"h5",variant:"h5",className:i.commentTitle,children:"Add a comment"})}),Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(te.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,variant:"outlined",value:j.name,onChange:function(e){return m((function(t){return Object(s.a)(Object(s.a)({},t),{},{name:e.target.value})}))}})}),Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(ne.a,{className:i.textArea,"aria-label":"maximum height",placeholder:n?"Reply":"Comments",value:j.comment,onChange:function(e){return m((function(t){return Object(s.a)(Object(s.a)({},t),{},{comment:e.target.value})}))}})}),Object(p.jsxs)(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(p.jsx)(F.a,{className:i.button,variant:"contained",onClick:function(){r(n?z(Object(s.a)(Object(s.a)({},j),{},{blogId:u,parentCommentId:c})):T(Object(s.a)(Object(s.a)({},j),{},{blogId:u}))),m({name:"",comment:"",commentId:Object(oe.v4)(),date:(new Date).toString()}),null===o||void 0===o||o()},disabled:!j.name||!j.comment,color:"primary",children:n?"Reply":"Submit"}),n&&Object(p.jsx)(F.a,{className:i.button,variant:"contained",onClick:o,children:"Cancel"})]})]})})})}function pe(e){var t,n,o,c,i,r=e.comment,l=e.parentId,d=e.paddingComment,s=void 0===d?1:d,j=(c={paddingComment:s},Object(C.a)((function(){return{commentTitle:{textAlign:"left",fontWeight:900,color:"#383232e8",fontSize:18},textArea:{minHeight:100,border:"1px solid #949494",fontSize:15,color:"#212121",width:"100%"},rootCard:{minWidth:275},rootNestedCard:{minWidth:275,background:"#f3f6ff",padding:10,margin:10,marginLeft:10*(null===c||void 0===c?void 0:c.paddingComment)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},titleCard:{fontSize:14},pos:{marginBottom:12},button:{display:"flex"},cardHeader:{textAlign:"left"},content:{display:"flex"},cardTitle:{color:"#5c5fe3"}}})))(),m=Object(a.useState)(!1),u=Object(y.a)(m,2),h=u[0],O=u[1],x=((null===r||void 0===r?void 0:r.children)||[]).map((function(e){return l?s++:s=1,Object(p.jsx)(pe,{comment:e,parentId:null===e||void 0===e?void 0:e.commentId,paddingComment:s},e.id)})),f=new Date(r.date).toLocaleTimeString("en-US",{month:"long",day:"numeric",year:"numeric"});return Object(p.jsxs)(E.a,{item:!0,xs:12,children:[Object(p.jsxs)(se.a,{className:l?j.rootNestedCard:j.rootCard,children:[Object(p.jsx)(je.a,{className:j.cardHeader,avatar:Object(p.jsx)(me.a,{"aria-label":"recipe",children:null===(t=r.name.toString())||void 0===t||null===(n=t[0])||void 0===n?void 0:n.toUpperCase()}),title:Object(p.jsx)(b.a,{className:j.cardTitle,children:(i=r.name,i.charAt(0).toUpperCase()+i.slice(1))}),subheader:f}),Object(p.jsx)(be.a,{children:Object(p.jsx)(b.a,{className:j.content,component:"p",children:r.comment})}),Object(p.jsx)(ue.a,{children:Object(p.jsx)(F.a,{color:"primary",onClick:function(){return O(!0)},children:"Reply"})}),h&&Object(p.jsx)(Oe,{isReply:!0,handleCancel:function(){return O(!1)},commentId:r.commentId})]}),(null===r||void 0===r||null===(o=r.children)||void 0===o?void 0:o.length)>0&&x]})}var xe=Object(C.a)((function(e){return{root:{flexGrow:1,marginTop:30},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,display:"flex"},title:{textAlign:"left",fontWeight:900,color:"#383232e8",fontSize:20},content:{display:"flex"},commentTitle:{textAlign:"left",fontWeight:900,color:"#383232e8",fontSize:18},textArea:{minHeight:100,border:"1px solid #949494",fontSize:15,color:"#212121",width:"100%"},rootCard:{minWidth:275},rootNestedCard:{minWidth:275,background:" #d8d8ea",padding:10,margin:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},titleCard:{fontSize:14},pos:{marginBottom:12},button:{display:"flex"}}}));function fe(){var e,t=xe(),n=Object(v.f)().blogId,o=J(D),c=Object(a.useMemo)((function(){return o.find((function(e){return(null===e||void 0===e?void 0:e.blogId)===n}))||{}}),[n,o]);return Object(p.jsx)("div",{className:t.root,children:Object(p.jsx)(_.a,{className:t.paper,children:Object(p.jsxs)(E.a,{container:!0,spacing:3,children:[Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{className:t.title,component:"h5",variant:"h5",children:null===c||void 0===c?void 0:c.title})}),Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(b.a,{className:t.content,component:"p",children:null===c||void 0===c?void 0:c.content})}),Object(p.jsx)(Oe,{}),Object(p.jsx)(E.a,{item:!0,xs:12,children:Object(p.jsx)(E.a,{container:!0,spacing:3,children:null===c||void 0===c||null===(e=c.comments)||void 0===e?void 0:e.map((function(e){return Object(p.jsx)(pe,{comment:e})}))})})]})})})}var ge=function(){var e=B();return Object(a.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(N.a)("posts").then((function(t){var n=JSON.parse(t)||[];e(P(n))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(O.a,{children:[Object(p.jsx)(f,{children:Object(p.jsx)("div",{})}),Object(p.jsx)(g.a,{children:Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{exact:!0,path:"/blog_post/",children:Object(p.jsx)(de,{})}),Object(p.jsx)(v.a,{exact:!0,path:"/blog_post/blog-details/:blogId",children:Object(p.jsx)(fe,{})})]})})]})})},ve=Object(I.a)({reducer:{blogReducer:H}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(R.a,{store:ve,children:Object(p.jsx)(ge,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.539d401a.chunk.js.map
(this["webpackJsonpgrocery-bud"]=this["webpackJsonpgrocery-bud"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(9),i=c.n(r),a=(c(15),c(10)),l=c(4),u=c(2),o=(c(8),c(7)),j=(c(16),c(0));var b=function(e){var t=e.items,c=e.deleteItem,n=e.editItem;return Object(j.jsx)("section",{className:"grocery-list",children:t.map((function(e){var t=e.title,s=e.id;return Object(j.jsxs)("article",{className:"article",children:[Object(j.jsx)("p",{className:"text",children:t}),Object(j.jsxs)("div",{className:"btn-container",children:[Object(j.jsx)("button",{className:"edit",onClick:function(){return n(s)},children:Object(j.jsx)(o.a,{})}),Object(j.jsx)("button",{className:"delete",onClick:function(){return c(s)},children:Object(j.jsx)(o.b,{})})]})]},s)}))})};var d=function(e){var t=e.msg,c=e.type,s=e.removeAlert,r=e.list;return Object(n.useEffect)((function(){var e=setTimeout((function(){s()}),2e3);return function(){return clearTimeout(e)}}),[r]),Object(j.jsx)("p",{className:"alert alert-".concat(c),children:t})};var m=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],m=i[1],O=Object(n.useState)(function(){var e=localStorage.getItem("list");return e?JSON.parse(e):[]}()),f=Object(u.a)(O,2),h=f[0],g=f[1],v=Object(n.useState)(null),x=Object(u.a)(v,2),p=x[0],N=x[1],y=Object(n.useState)({show:!1,msg:"",type:""}),S=Object(u.a)(y,2),I=S[0],w=S[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";w({show:e,type:t,msg:c})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(h))}),[h]),Object(j.jsxs)("section",{className:"section-center",children:[Object(j.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),c)if(c&&o)g(h.map((function(e){return e.id===p?Object(l.a)(Object(l.a)({},e),{},{title:c}):e}))),k(!0,"success","edit successfully"),s(""),m(!1),N(null);else{k(!0,"success","list added successfully");var t={id:(new Date).getTime().toString(),title:c};g([].concat(Object(a.a)(h),[t])),s("")}else k(!0,"danger","please enter text")},children:[I.show&&Object(j.jsx)(d,Object(l.a)(Object(l.a)({},I),{},{removeAlert:k,list:h})),Object(j.jsx)("h3",{className:"head",children:"Grocery Bud"}),Object(j.jsx)("input",{type:"text",value:c,placeholder:"eg: eggs",onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{className:"btn",children:o?"Edit":"Submit"})]}),h.length>0&&Object(j.jsxs)("div",{className:"grocery-container",children:[Object(j.jsx)(b,{items:h,deleteItem:function(e){k(!0,"danger","item deleted"),g(h.filter((function(t){return t.id!==e})))},editItem:function(e){var t=h.find((function(t){return t.id===e}));m(!0),N(t.id),s(t.title)}}),Object(j.jsx)("button",{className:"btn-clear",onClick:function(){k(!0,"danger","empty list"),g([])},children:"Clear items"})]})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.8c2726f3.chunk.js.map
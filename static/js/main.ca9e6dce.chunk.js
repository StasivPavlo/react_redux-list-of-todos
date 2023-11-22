(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(4),r=c(17),l=c(7),o=c(14),i=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},b=c(5),h=function(e){return{type:"filterQuery/SET",payload:e}},O=function(e){return{type:"filterStatus/SET",payload:e}},f={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filterQuery/SET":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filterStatus/SET":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},x=c(12),p=function(e){return{type:"todos/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?[].concat(Object(x.a)(e),Object(x.a)(t.payload)):e},y=Object(l.combineReducers)({currentTodo:u,filter:m,todos:v}),N=Object(l.createStore)(y,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),g=c(2),S=c(0),T=(c(25),c(26),c(16)),E=c.n(T),w=(s.b,s.c),k=c(1),C=function(e){var t=e.todos,c=Object(s.b)(),a=w((function(e){return e.currentTodo}));return Object(k.jsxs)(k.Fragment,{children:[!(null!==t&&void 0!==t&&t.length)&&Object(k.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(k.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("th",{children:"Title"}),Object(k.jsx)("th",{children:" "})]})}),Object(k.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(k.jsxs)("tr",{"data-cy":"todo",children:[Object(k.jsx)("td",{className:"is-vcentered",children:e.id}),Object(k.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(k.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(k.jsx)("td",{className:"has-text-right is-vcentered",children:Object(k.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){c(d(e))}(e)},children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:E()("far",(null===a||void 0===a?void 0:a.id)===e.id?"fa-eye-slash":"fa-eye")})})})})]},"".concat(e.title,"-").concat(e.id))}))})]})]})},_=function(){var e=Object(S.useState)("all"),t=Object(g.a)(e,2),c=t[0],a=t[1],n=Object(S.useState)(""),r=Object(g.a)(n,2),l=r[0],o=r[1],i=Object(s.b)();return Object(S.useEffect)((function(){i(h(l))}),[l]),Object(S.useEffect)((function(){i(O(c))}),[c]),Object(k.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsx)("p",{className:"control",children:Object(k.jsx)("span",{className:"select",children:Object(k.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return a(e.target.value)},children:[Object(k.jsx)("option",{value:"all",children:"All"}),Object(k.jsx)("option",{value:"active",children:"Active"}),Object(k.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(k.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(k.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:l,onChange:function(e){return o(e.target.value)}}),Object(k.jsx)("span",{className:"icon is-left",children:Object(k.jsx)("i",{className:"fas fa-magnifying-glass"})}),l&&Object(k.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(k.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return o("")}})})]})]})},L=(c(28),function(){return Object(k.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(k.jsx)("div",{className:"Loader__content"})})});function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var B=function(e){var t=e.todo,c=Object(S.useState)(null),a=Object(g.a)(c,2),n=a[0],r=a[1],l=Object(S.useState)(!1),o=Object(g.a)(l,2),i=o[0],d=o[1],u=Object(s.b)();return Object(S.useEffect)((function(){var e;d(!1),(e=t.userId,q("/users/".concat(e))).then((function(e){r(e),d(!0)}))}),[]),Object(k.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(k.jsx)("div",{className:"modal-background"}),i?Object(k.jsxs)("div",{className:"modal-card",children:[Object(k.jsxs)("header",{className:"modal-card-head",children:[Object(k.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(k.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){u(j())}})]}),Object(k.jsxs)("div",{className:"modal-card-body",children:[Object(k.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(k.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(k.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(k.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(k.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(k.jsx)(L,{})]})},D=function(){var e=Object(S.useState)(!1),t=Object(g.a)(e,2),c=t[0],a=t[1],n=Object(S.useState)(null),r=Object(g.a)(n,2),l=r[0],o=r[1],i=Object(s.b)(),d=w((function(e){return e.todos})),j=w((function(e){return e.filter})),u=j.query,b=j.status,h=w((function(e){return e.currentTodo}));return Object(S.useEffect)((function(){o(d.filter((function(e){var t=u.toLowerCase(),c=e.title.toLowerCase(),a=!u||c.includes(t);switch(b){case"completed":return a&&e.completed;case"active":return a&&!e.completed;default:return a}})))}),[d,u,b]),Object(S.useEffect)((function(){a(!1),q("/todos").then((function(e){i(p(e)),a(!0)}))}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"section",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h1",{className:"title",children:"Todos:"}),Object(k.jsx)("div",{className:"block",children:Object(k.jsx)(_,{})}),Object(k.jsx)("div",{className:"block",children:c?Object(k.jsx)(C,{todos:l}):Object(k.jsx)(L,{})})]})})}),h&&Object(k.jsx)(B,{todo:h})]})},I=function(){return Object(k.jsx)(s.a,{store:N,children:Object(k.jsx)(r.a,{children:Object(k.jsx)(D,{})})})};n.a.render(Object(k.jsx)(I,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ca9e6dce.chunk.js.map
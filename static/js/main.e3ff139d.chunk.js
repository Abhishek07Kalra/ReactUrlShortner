(this.webpackJsonpurlshorter=this.webpackJsonpurlshorter||[]).push([[0],{29:function(t,e,s){},41:function(t,e,s){},43:function(t,e,s){},64:function(t,e,s){},69:function(t,e,s){"use strict";s.r(e);var n=s(0),c=s(1),r=s.n(c),i=s(31),a=s.n(i),l=(s(41),s(18)),o=s.n(l),u=s(32),h=s(10),j=(s(43),s(33)),b=s.n(j).a.create({baseURL:"https://cgcshrt.herokuapp.com"}),A=s(11);s(62);A.a.initializeApp({apiKey:"AIzaSyDXf0Xh_pnqIS3knpQeDD0fMnZ0LmD-V24",authDomain:"authurl.firebaseapp.com",projectId:"authurl",storageBucket:"authurl.appspot.com",messagingSenderId:"860888935488",appId:"1:860888935488:web:a1f861959399d6aff143a5"});var E=A.a.auth();var x=function(t){var e=t.myfunction,s=Object(c.useState)(""),r=Object(h.a)(s,2),i=r[0],a=r[1],l=Object(c.useState)(""),o=Object(h.a)(l,2),u=o[0],j=o[1];function A(){var t,e,s=!1;if(""!==u&&(u.includes(".")||u.includes("myshorturl"))){if("myshorturl"===u){t=prompt("Enter your password"),e=prompt("Enter your original link");var n=prompt("Enter your short link");j(e),s=!0}a("Please Wait..."),b.post("/addurl",{originalUrl:"myshorturl"===u?e:u,passcode:s,pass:t,short:n,user:E.currentUser?E.currentUser.email:"anonymous"}).then((function(t){a(t.data),j("")})).catch((function(t){a(""),alert(t)}))}else alert("Invalid Input")}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"data:image/png;base64,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"})}),Object(n.jsx)("button",{className:"logout",onClick:function(){E.signOut(),e(null)},children:" Logout"})]}),Object(n.jsx)("div",{className:"hello",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("input",{type:"text",className:"inputbar",placeholder:"Enter Your Link Here",value:u,onKeyDown:function(t){return"Enter"==t.key?A():1},onChange:function(t){return j(t.target.value)}}),"\xa0\xa0\xa0",Object(n.jsx)("button",{onClick:A,children:"Create"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{className:"linkaddress",onClick:function(){var t=document.createElement("textarea");t.innerText=i,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},children:i}),Object(n.jsx)("br",{}),i?Object(n.jsx)("button",{children:"Copy Text"}):Object(n.jsx)("h1",{})]})})]})},I=(s(64),s(29),s(13)),O=function(t){var e=t.myfunction,s=Object(c.useState)(""),r=Object(h.a)(s,2),i=r[0],a=r[1],l=Object(c.useState)(""),o=Object(h.a)(l,2),u=o[0],j=o[1];return Object(n.jsxs)("div",{className:"container top",children:[Object(n.jsx)("h1",{className:"text-center font-bold",style:{color:"white"},children:"Sign In"}),Object(n.jsx)("div",{className:"container sign",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"email",className:"text-center input",value:i,onChange:function(t){return a(t.target.value)},placeholder:"Enter your email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",className:"text-center input ",value:u,onChange:function(t){return j(t.target.value)},placeholder:"Enter your password"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"but",onClick:function(){E.setPersistence(A.a.auth.Auth.Persistence.LOCAL).then((function(){E.signInWithEmailAndPassword(i,u).then((function(t){e(t.user.email),console.log(t.user)})).catch((function(t){alert(t.message)}))}))},children:"LOGIN"}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:"or"}),Object(n.jsx)("h5",{style:{marginBottom:"10px"},children:Object(n.jsx)(I.b,{to:"/signup",children:"Signup"})}),Object(n.jsx)("p",{style:{cursor:"pointer"},onClick:function(){e("anonymous")},children:"Skip for now"}),Object(n.jsx)("br",{})]})})]})},C=function(t){t.myfunction;var e=Object(c.useState)(""),s=Object(h.a)(e,2),r=s[0],i=s[1],a=Object(c.useState)(""),l=Object(h.a)(a,2),o=l[0],u=l[1];return Object(n.jsxs)("div",{className:"container top",children:[Object(n.jsx)("h1",{className:"text-center font-bold",style:{color:"white"},children:"Sign up"}),Object(n.jsx)("div",{className:"container sign",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"email",className:"text-center input",value:r,onChange:function(t){return i(t.target.value)},placeholder:"Enter your email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",className:"text-center input ",value:o,onChange:function(t){return u(t.target.value)},placeholder:"Enter your password"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"but",onClick:function(){E.setPersistence(A.a.auth.Auth.Persistence.LOCAL).then((function(){E.createUserWithEmailAndPassword(r,o).then((function(t){})).catch((function(t){alert(t.message)}))}))},children:"Sign up"}),Object(n.jsx)("h5",{children:"or"}),Object(n.jsx)("h5",{style:{marginBottom:"10px"},children:Object(n.jsx)(I.b,{to:"/",children:"SignIn"})}),Object(n.jsx)("br",{})]})})]})},d=s(3);var g=function(){var t=Object(c.useState)(E.currentUser||null),e=Object(h.a)(t,2),s=e[0],r=e[1],i=function(t){r(t)};return E.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&r(E.currentUser);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),s?Object(n.jsx)(x,{myfunction:i}):Object(n.jsxs)(I.a,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",children:Object(n.jsx)(O,{myfunction:i})}),Object(n.jsx)(d.a,{exact:!0,path:"/signup",children:Object(n.jsx)(C,{myfunction:i})})]})},p=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;s(t),n(t),c(t),r(t),i(t)}))};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),p()}},[[69,1,2]]]);
//# sourceMappingURL=main.e3ff139d.chunk.js.map
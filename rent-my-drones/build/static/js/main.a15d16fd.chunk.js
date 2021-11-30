(this["webpackJsonprent-my-drones"]=this["webpackJsonprent-my-drones"]||[]).push([[0],{122:function(e,n,t){},183:function(e,n,t){},186:function(e,n,t){},286:function(e,n,t){},287:function(e,n,t){},288:function(e,n,t){},289:function(e,n,t){},290:function(e,n,t){},291:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(31),s=t.n(c),i=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,297)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),c(e),s(e)}))},o=t(65),d=t(144),l=t.n(d),j=t(145),u=t(38),b=t(67),h=t(11),p=t(54),O=t.n(p),m="SIGNUP_START",g="SIGNUP_SUCCESS",f="SIGNUP_FAILURE",x={signup:{},loading:!1,error:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case g:return Object(h.a)(Object(h.a)({},e),{},{signup:n.payload,loading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{error:n.payload,loading:!1});default:return e}},y="LOGIN_START",N="LOGIN_SUCCESS",D="LOGIN_FAILURE",R={login:{},loading:!1,error:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case N:return Object(h.a)(Object(h.a)({},e),{},{login:n.payload,loading:!1});case D:return Object(h.a)(Object(h.a)({},e),{},{error:n.payload,loading:!1});default:return e}},w=function(){return O.a.create({baseURL:"https://rent-my-drones-be.herokuapp.com",headers:{authorization:localStorage.getItem("token")}})},A="AVAILABLE_START",L="AVAILABLE_SUCCESS",C="AVAILABLE_FAILURE",k={drones:{},loading:!0,error:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case L:return Object(h.a)(Object(h.a)({},e),{},{drones:n.payload,loading:!1});case C:return Object(h.a)(Object(h.a)({},e),{},{error:n.payload,loading:!1});default:return e}},_="RENTED_START",E="RENTED_SUCCESS",T="RENTED_FAILURE",U={rentedDrones:{},loading:!0,error:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case E:return Object(h.a)(Object(h.a)({},e),{},{loading:!1,rentedDrones:n.payload});case T:return Object(h.a)(Object(h.a)({},e),{},{loading:!1,error:n.payload});default:return e}},P=Object(b.b)({rentedReducer:q,signupReducer:v,loginReducer:S,availableReducer:I}),F=t(10),G=(t(183),t(61)),B=t(154),z=(t(122),t(5)),M=function(){var e=Object(F.g)().push;return Object(z.jsx)("div",{className:"nav-container",children:Object(z.jsxs)(G.a,{className:"navbar",children:[Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),e("/")},children:"Home"}),Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),e("/Signup")},children:"Sign Up"}),Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),e("/Login")},children:"Login"})]})})},V=function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)(M,{}),Object(z.jsxs)("div",{className:"home-container",children:[Object(z.jsx)("div",{className:"drone-img"}),Object(z.jsxs)("main",{className:"main-doc",children:[Object(z.jsx)("h1",{children:"Rent My Drones"}),Object(z.jsx)("p",{children:"Here at Rent My Drone, we allow the drone enthusiast to directly rent from a local drone owner."}),Object(z.jsx)("p",{children:"We also allow an owner to rent out their drone to earn money"}),Object(z.jsx)("p",{children:"So if your a drone owner lookign to earn some extra money by renting out your drone or a drone enthusiast who needs a drone quickly for use. then signup/login at the top of the page."})]})]})]})},H=t(25),J=(t(186),t(294)),$=t(296),W=t(39),K=W.a().shape({username:W.c().trim().required("Username/Password is required. Please fill out field"),password:W.c().trim().required("Username/Password is required. Please fill out field")}),Q=t(59),X={username:"",password:""},Y={username:"",password:""},Z=function(e){var n=Object(a.useState)(X),t=Object(H.a)(n,2),r=t[0],c=t[1],s=Object(a.useState)(Y),i=Object(H.a)(s,2),o=i[0],d=i[1];return[r,o,function(n){var t=n.target,a=t.name,s=t.value;W.b(e,a).validate(s).then((function(){d(Object(h.a)(Object(h.a)({},o),{},Object(Q.a)({},a,"")))})).catch((function(e){d(Object(h.a)(Object(h.a)({},o),{},Object(Q.a)({},a,e.errors[0])))})),c(Object(h.a)(Object(h.a)({},r),{},Object(Q.a)({},a,s)))}]},ee={postLogin:function(e,n){return function(t){t({type:y}),O.a.post("https://rent-my-drones-be.herokuapp.com/api/auth/Login",e).then((function(e){t({type:N,payload:e.data}),localStorage.setItem("token",e.data.token),n("/Dashboard")})).catch((function(e){t({type:D,payload:e.message})}))}}},ne=Object(u.b)((function(e){return{login:e.loginReducer.login,loading:e.loginReducer.loading,error:e.loginReducer.error}}),ee)((function(e){var n=Object(F.g)().push,t=Z(K),r=Object(H.a)(t,3),c=r[0],s=r[1],i=r[2],d=Object(a.useState)(!0),l=Object(H.a)(d,2),j=l[0],u=l[1],b=function(e){i(e,K)};return Object(z.jsxs)("div",{children:[Object(z.jsx)(M,{}),Object(z.jsx)("div",{className:"login-container",children:Object(z.jsxs)(J.a,{className:"container",onSubmitCapture:function(){e.postLogin(c,n)},children:[Object(z.jsx)("h2",{children:"Login"}),Object(z.jsxs)("div",{className:"input-group",children:[Object(z.jsxs)(J.a.Item,{name:"username",label:"username",children:[Object(z.jsx)($.a,{id:"username",type:"text",name:"username",placeholder:"username",required:!0,onChange:b}),Object(z.jsx)("div",{className:"errors",children:Object(z.jsx)("p",{children:s.username})})]}),Object(z.jsxs)(J.a.Item,{name:"password",label:"password",children:[Object(z.jsx)($.a.Password,{id:"password",type:"password",name:"password",placeholder:"password",required:!0,onChange:b}),Object(z.jsx)("div",{className:"errors",children:Object(z.jsx)("p",{children:s.password})})]}),Object(z.jsx)(B.a,{type:"primary",htmlType:"submit",disabled:function(e){e.preventDefault(),c.username.length>=12&&c.password.length>=12?u((function(){return{disabled:!j}})):u((function(){return{disabled:j}}))},children:"Login"}),Object(z.jsxs)("p",{children:["If you don't have an account click ",Object(z.jsx)(o.b,{to:"/Signup",children:"here"})]})]})]})})]})})),te=(t(286),function(){var e=Object(F.g)().push;return Object(z.jsx)("div",{className:"nav-container",children:Object(z.jsxs)(G.a,{className:"navbar",children:[Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),e("/Dashboard")},children:"Dashboard"}),Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),e("/Dashboard/available")},children:"Available "}),Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),e("/Dashboard/rented")},children:"Rented"}),Object(z.jsx)(B.a,{onClick:function(n){n.preventDefault(),localStorage.removeItem("token"),e("/")},children:"Log out"})]})})}),ae=function(){var e=Object(F.g)().push;return Object(z.jsxs)("div",{className:"dashboard-container",children:[Object(z.jsx)(te,{}),Object(z.jsx)("div",{className:"dashboard-header",children:Object(z.jsx)("h1",{children:"Dashboard"})}),Object(z.jsxs)("div",{className:"dashboard-card-container",children:[Object(z.jsx)(B.a,{id:"available-card",className:"dashboard-card",onClick:function(n){n.preventDefault(),e("/Dashboard/available")},children:"Available"}),Object(z.jsx)(B.a,{id:"rented-card",className:"dashboard-card",onClick:function(n){n.preventDefault(),e("/Dashboard/rented")},children:"Rented"})]})]})},re=(t(287),W.a().shape({username:W.c().trim().required("Username is required. Please fill out field").min(12,"A minimum of 12 characters is required"),password:W.c().trim().required("Password is required. Please fill out field").min(12,"A minimum of 12 characters is required for password")})),ce={register:function(e,n){return function(t){t({type:m}),O.a.post("https://rent-my-drones-be.herokuapp.com/api/auth/Signup",e).then((function(e){t({type:g,payload:e.data}),n("/Login")})).catch((function(e){t({type:f,payload:e.message})}))}}},se=Object(u.b)((function(e){return{signup:e.signupReducer.signup,loading:e.signupReducer.loading,error:e.signupReducer.error}}),ce)((function(e){var n=Object(F.g)().push,t=Z(re),r=Object(H.a)(t,3),c=r[0],s=r[1],i=r[2],o=Object(a.useState)(1),d=Object(H.a)(o,2),l=d[0],j=d[1],u=function(e){i(e,re)};return Object(z.jsxs)("div",{children:[Object(z.jsx)(M,{}),Object(z.jsx)("div",{className:"signup-container",children:Object(z.jsxs)(J.a,{className:"container",onSubmitCapture:function(t){t.preventDefault(),e.register(c,n)},children:[Object(z.jsx)("h2",{children:"Sign up"}),Object(z.jsxs)("div",{className:"input-group",children:[Object(z.jsxs)(J.a.Item,{name:"username",label:"username",children:[Object(z.jsx)($.a,{id:"username",type:"text",name:"username",placeholder:"username",required:!0,onChange:u}),Object(z.jsx)("div",{className:"errors",children:Object(z.jsx)("p",{children:s.username})})]}),Object(z.jsxs)(J.a.Item,{name:"password",label:"password",children:[Object(z.jsx)($.a.Password,{id:"password",type:"password",name:"password",placeholder:"password",required:!0,onChange:u}),Object(z.jsx)("div",{className:"errors",children:Object(z.jsx)("p",{children:s.password})})]}),Object(z.jsx)(B.a,{type:"primary",htmlType:"submit",disabled:function(e){e.preventDefault(),c.username.length>=12&&c.password.length>=12?j((function(){return{disabled:!l}})):j((function(){return{disabled:l}}))},children:"Submit"})]})]})})]})})),ie=t(295),oe=(t(288),{getAvailableDrones:function(){return function(e){e({type:A}),w().get("/api/users/available").then((function(n){e({type:L,payload:n.data})})).catch((function(n){e({type:C,payload:n.message})}))}},rentAvailableDrone:function(e){return function(n){n({type:A}),w().put("/api/users/available/".concat(e)).then((function(e){n({type:L,payload:e.data})})).catch((function(e){n({type:C,payload:e.message})}))}}}),de=Object(u.b)((function(e){return{drones:e.availableReducer.drones,loading:e.availableReducer.loading,error:e.availableReducer.error}}),oe)((function(e){var n=Object(F.g)().push,t=Object(a.useState)(!1),r=Object(H.a)(t,2),c=r[0],s=r[1];Object(a.useEffect)((function(){e.getAvailableDrones()}),[c]);return e.loading?Object(z.jsx)("h1",{children:"...Loading"}):0===e.drones.length?Object(z.jsxs)("div",{className:"available-container",children:[Object(z.jsx)(te,{}),Object(z.jsx)("div",{className:"available-header",children:Object(z.jsx)("h1",{children:"Available Drones"})}),Object(z.jsx)("div",{className:"available-card-container",children:Object(z.jsx)("h2",{style:{fontSize:"xx-large"},children:"No Available Drones"})})]}):Object(z.jsxs)("div",{className:"available-container",children:[Object(z.jsx)(te,{}),Object(z.jsx)("div",{className:"available-header",children:Object(z.jsx)("h1",{children:"Available Drones"})}),Object(z.jsx)("div",{className:"available-card-container",children:e.drones.map((function(t,a){return Object(z.jsxs)(ie.a,{className:"available-card",title:t.drone_name,data:t,children:[Object(z.jsx)("div",{className:"drone-image-container",children:Object(z.jsx)("img",{className:"drone-images",src:t.drone_image,alt:"The drone your buying"})}),Object(z.jsxs)("div",{className:"drone-info",children:[Object(z.jsxs)("p",{children:["$ ",t.drone_cost]}),Object(z.jsx)("p",{children:t.drone_description})]}),Object(z.jsx)("div",{className:"drone-button",children:Object(z.jsx)(B.a,{type:"ghost",onClick:function(a){return function(t,a){t.preventDefault(),e.rentAvailableDrone(a,n),s((function(){return{isRented:!c}})),n("/Dashboard/rented")}(a,t.drone_id)},children:"Rent Drone"})})]},a)}))})]})})),le=(t(289),t(157)),je=["component"],ue=function(e){var n=e.component,t=Object(le.a)(e,je);return localStorage.getItem("token")?Object(z.jsx)(F.b,Object(h.a)({component:n},t)):Object(z.jsx)(F.a,{to:"/Login"})},be=(t(290),{getRentedDrones:function(){return function(e){e({type:_}),w().get("/api/users/rented").then((function(n){e({type:E,payload:n.data})})).catch((function(n){e({type:T,payload:n.message})}))}},returnRentedDrone:function(e){return function(n){n({type:_}),w().put("/api/users/rented/".concat(e)).then((function(e){n({type:E,payload:e.data})})).catch((function(e){n({type:T,payload:e.message})}))}}}),he=Object(u.b)((function(e){return{rentedDrones:e.rentedReducer.rentedDrones,loading:e.rentedReducer.loading,error:e.rentedReducer.error}}),be)((function(e){var n=Object(F.g)().push,t=Object(a.useState)(!1),r=Object(H.a)(t,2),c=r[0],s=r[1];Object(a.useEffect)((function(){e.getRentedDrones()}),[c]);return e.loading?Object(z.jsx)("h1",{children:"...Loading"}):0===e.rentedDrones.length?Object(z.jsxs)("div",{className:"renter-container",children:[Object(z.jsx)(te,{}),Object(z.jsx)("div",{className:"renter-header",children:Object(z.jsx)("h1",{children:"Rented Drones"})}),Object(z.jsx)("div",{className:"renter-card-container",children:Object(z.jsx)("h2",{style:{fontSize:"xx-large"},children:"No Rented Drones"})})]}):Object(z.jsxs)("div",{className:"renter-container",children:[Object(z.jsx)(te,{}),Object(z.jsx)("div",{className:"renter-header",children:Object(z.jsx)("h1",{children:"Rented Drones"})}),Object(z.jsx)("div",{className:"renter-card-container",children:e.rentedDrones.map((function(t,a){return Object(z.jsxs)(ie.a,{className:"renter-card",title:t.drone_name,data:t,children:[Object(z.jsx)("div",{className:"drone-image-container",children:Object(z.jsx)("img",{className:"drone-images",src:t.drone_image,alt:"The drone your returning"})}),Object(z.jsxs)("div",{className:"drone-info",children:[Object(z.jsxs)("p",{children:["$ ",t.drone_cost]}),Object(z.jsx)("p",{children:t.drone_description})]}),Object(z.jsx)("div",{className:"drone-button",children:Object(z.jsx)(B.a,{type:"ghost",onClick:function(a){return function(t,a){t.preventDefault(),e.returnRentedDrone(a),s((function(){return{isReturned:!c}})),n("/Dashboard/available")}(a,t.drone_id)},children:"Return Drone"})})]},a)}))})]})}));var pe=function(){return Object(z.jsx)("div",{className:"App",children:Object(z.jsxs)(F.d,{children:[Object(z.jsx)(F.b,{exact:!0,path:"/",component:V}),Object(z.jsx)(F.b,{path:"/Login",component:ne}),Object(z.jsx)(F.b,{path:"/Signup",component:se}),Object(z.jsx)(ue,{exact:!0,path:"/Dashboard",component:ae}),Object(z.jsx)(ue,{path:"/Dashboard/available",component:de}),Object(z.jsx)(ue,{path:"/Dashboard/rented",component:he})]})})},Oe=Object(b.c)(P,Object(b.a)(j.a,l.a));s.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(u.a,{store:Oe,children:Object(z.jsx)(o.a,{children:Object(z.jsx)(pe,{})})})}),document.getElementById("root")),i()}},[[291,1,2]]]);
//# sourceMappingURL=main.a15d16fd.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(21).concat([function(e,t,a){},,,,,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(10),i=a.n(l),o=(a(31),a(2)),s=a(7),u=a(3),m=a.n(u),d=a(6),p=a(1),E=a(57),f=(a(33),function(e){return i.a.createPortal(c.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),v=(a(34),function(e){var t=c.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},c.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},c.a.createElement("h2",null,e.header)),c.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),c.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return i.a.createPortal(t,document.getElementById("modal-hook"))}),b=function(e){return c.a.createElement(c.a.Fragment,null,e.show&&c.a.createElement(f,{onClick:e.onCancel}),c.a.createElement(E.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},c.a.createElement(v,e)))},h=(a(37),function(e){return e.href?c.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?c.a.createElement(s.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):c.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),g=function(e){return c.a.createElement(b,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:c.a.createElement(h,{onClick:e.onClear},"Okay")},c.a.createElement("p",null,e.error))},O=(a(41),function(e){return c.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},c.a.createElement("div",{className:"lds-dual-ring"}))}),k=(a(42),function(e){return c.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},c.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),j=(a(43),function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),N=(a(44),function(e){return c.a.createElement("li",{className:"user-item"},c.a.createElement(j,{className:"user-item__content"},c.a.createElement(s.b,{to:"/".concat(e.id,"/places")},c.a.createElement("div",{className:"user-item__image"},c.a.createElement(k,{image:"".concat("https://backpackd.herokuapp.com/").concat(e.image),alt:e.name})),c.a.createElement("div",{className:"user-item__info"},c.a.createElement("h2",null,e.name),c.a.createElement("h4",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),y=(a(45),function(e){return 0===e.items.length?c.a.createElement("div",{className:"center"},c.a.createElement(j,null,c.a.createElement("h2",null,"No users found."))):c.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return c.a.createElement(N,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))}),C=function(){var e=Object(r.useState)(null),t=Object(p.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),l=Object(p.a)(c,2),i=l[0],o=l[1],s=Object(r.useRef)([]),u=Object(r.useCallback)(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,r,c,l,i,u,d=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>1&&void 0!==d[1]?d[1]:"GET",r=d.length>2&&void 0!==d[2]?d[2]:null,c=d.length>3&&void 0!==d[3]?d[3]:{},o(!0),l=new AbortController,s.current.push(l),e.prev=6,e.next=9,fetch(t,{method:a,body:r,headers:c,signal:l.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(u=e.sent,s.current=s.current.filter((function(e){return e!==l})),i.ok){e.next=16;break}throw new Error(u.message);case 16:return o(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),n(e.t0.message||"Something went wrong, please try again."),o(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(r.useEffect)((function(){return s.current.forEach((function(e){return e.abort()}))}),[]),{isLoading:i,error:a,sendRequest:u,clearError:function(){n(null)}}},I=function(){var e=C(),t=e.isLoading,a=e.error,n=e.sendRequest,l=e.clearError,i=Object(r.useState)(),o=Object(p.a)(i,2),s=o[0],u=o[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://backpackd.herokuapp.com/api","/users"));case 3:t=e.sent,u(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:a,onClear:l}),t&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),!t&&s&&c.a.createElement(y,{items:s}))},w=a(8),x=a(23),T=function(e){return{type:"MINLENGTH",val:e}},S=function(e,t){var a,n=!0,r=Object(x.a)(t);try{for(r.s();!(a=r.n()).done;){var c=a.value;"REQUIRE"===c.type&&(n=n&&e.trim().length>0),"MINLENGTH"===c.type&&(n=n&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(n=n&&e.trim().length<=c.val),"MIN"===c.type&&(n=n&&+e>=c.val),"MAX"===c.type&&(n=n&&+e<=c.val),"EMAIL"===c.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){r.e(l)}finally{r.f()}return n},_=(a(46),function(e,t){switch(t.type){case"CHANGE":return Object(w.a)(Object(w.a)({},e),{},{value:t.val,isValid:S(t.val,t.validators)});case"TOUCH":return Object(w.a)(Object(w.a)({},e),{},{isTouched:!0});default:return e}}),V=function(e){var t=Object(r.useReducer)(_,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(p.a)(t,2),n=a[0],l=a[1],i=e.id,o=e.onInput,s=n.value,u=n.isValid;Object(r.useEffect)((function(){o(i,s,u)}),[i,s,u,o]);var m=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},d=function(){l({type:"TOUCH"})},E="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:m,onBlur:d,value:n.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:m,onBlur:d,value:n.value});return c.a.createElement("div",{className:"form-control ".concat(!n.isValid&&n.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),E,!n.isValid&&n.isTouched&&c.a.createElement("p",null,e.errorText))},P=a(14),A=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(w.a)(Object(w.a)({},e),{},{inputs:Object(w.a)(Object(w.a)({},e.inputs),{},Object(P.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},D=function(e,t){var a=Object(r.useReducer)(A,{inputs:e,isValid:t}),n=Object(p.a)(a,2),c=n[0],l=n[1];return[c,Object(r.useCallback)((function(e,t,a){l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(r.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},L=(a(21),Object(r.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})),R=(a(47),function(e){var t=Object(r.useRef)(),a=Object(r.useState)(),n=Object(p.a)(a,2),l=n[0],i=n[1],o=Object(r.useState)(),s=Object(p.a)(o,2),u=s[0],m=s[1],d=Object(r.useState)(!1),E=Object(p.a)(d,2),f=E[0],v=E[1];Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(l)}}),[l]);return c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{id:e.id,ref:t,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=f;t.target.files&&1===t.target.files.length?(a=t.target.files[0],i(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}}),c.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},c.a.createElement("div",{className:"image-upload__preview"},u&&c.a.createElement("img",{src:u,alt:"Preview"}),!u&&c.a.createElement("p",null,"Please Pick An Image")),c.a.createElement(h,{type:"button",onClick:function(){t.current.click()}},"Pick Image")),!f&&c.a.createElement("p",null,e.errorText))}),U=function(){var e=Object(r.useContext)(L),t=Object(o.g)(),a=D({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:"",isValid:!1}},!1),n=Object(p.a)(a,2),l=n[0],i=n[1],s=C(),u=s.isLoading,E=s.error,f=s.sendRequest,v=s.clearError,b=function(){var a=Object(d.a)(m.a.mark((function a(n){var r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,(r=new FormData).append("title",l.inputs.title.value),r.append("description",l.inputs.description.value),r.append("address",l.inputs.address.value),r.append("image",l.inputs.image.value),a.next=9,f("".concat("https://backpackd.herokuapp.com/api","/places"),"POST",r,{Authorization:"Bearer ".concat(e.token)});case 9:t.push("/"),a.next=14;break;case 12:a.prev=12,a.t0=a.catch(1);case 14:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:E,onClear:v}),c.a.createElement("form",{className:"place-form",onSubmit:b},u&&c.a.createElement("div",{className:"center"},c.a.createElement(O,{asOverlay:!0})),c.a.createElement(V,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:i}),c.a.createElement(V,{id:"description",element:"textarea",label:"Description",validators:[T(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:i}),c.a.createElement(R,{center:!0,id:"image",onInput:i}),c.a.createElement(V,{id:"address",element:"input",label:"Address",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid address.",onInput:i}),c.a.createElement(h,{type:"submit",disabled:!l.isValid},"ADD PLACE")))},F=(a(48),function(e){var t=Object(r.useRef)(),a=e.center,n=e.zoom;return Object(r.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:a,zoom:n});new window.google.maps.Marker({position:a,map:e})}),[a,n]),c.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),G=(a(49),function(e){var t=Object(r.useContext)(L),a=Object(r.useState)(!1),n=Object(p.a)(a,2),l=n[0],i=n[1],o=Object(r.useState)(!1),s=Object(p.a)(o,2),u=s[0],E=s[1],f=C(),v=f.isLoading,k=f.error,N=f.sendRequest,y=f.clearError,I=function(){return i(!1)},w=function(){E(!1)},x=function(){var a=Object(d.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return E(!1),a.prev=1,a.next=4,N("".concat("https://backpackd.herokuapp.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer ".concat(t.token)});case 4:e.onDelete(e.id),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:k,onClear:y}),v&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement(b,{show:l,onCancel:I,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:c.a.createElement(h,{onClick:I},"CLOSE")},c.a.createElement("div",{className:"map-container"},c.a.createElement(F,{center:e.coordinates,zoom:16}))),c.a.createElement(b,{show:u,onCancel:w,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{inverse:!0,onClick:w},"CANCEL"),c.a.createElement(h,{danger:!0,onClick:x},"DELETE"))},c.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")),c.a.createElement("li",{className:"place-item"},c.a.createElement(j,{className:"place-item__content"},c.a.createElement("div",{className:"place-item__image"},c.a.createElement("img",{src:"".concat("https://backpackd.herokuapp.com/").concat(e.image),alt:e.title})),c.a.createElement("div",{className:"place-item__info"},c.a.createElement("h2",null,e.title),c.a.createElement("h3",null,e.address),c.a.createElement("p",null,e.description)),c.a.createElement("div",{className:"place-item__actions"},c.a.createElement(h,{inverse:!0,onClick:function(){return i(!0)}},"VIEW ON MAP"),t.userId===e.creatorId&&c.a.createElement(h,{to:"/places/".concat(e.id)},"EDIT"),t.userId===e.creatorId&&c.a.createElement(h,{danger:!0,onClick:function(){E(!0)}},"DELETE")))))}),M=(a(50),function(e){return 0===e.items.length?c.a.createElement("div",{className:"place-list center"},c.a.createElement(j,null,c.a.createElement("h2",null,"No places found. Maybe create one?"),c.a.createElement(h,{to:"/places/new"},"Share Place"))):c.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return c.a.createElement(G,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))}),H=function(){var e=Object(o.h)().userId,t=C(),a=t.isLoading,n=t.error,l=t.sendRequest,i=t.clearError,s=Object(r.useState)(),u=Object(p.a)(s,2),E=u[0],f=u[1];Object(r.useEffect)((function(){(function(){var t=Object(d.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("".concat("https://backpackd.herokuapp.com/api","/places/user/").concat(e));case 3:a=t.sent,f(a.places),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[l,e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:n,onClear:i}),a&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),!a&&E&&c.a.createElement(M,{items:E,onDeletePlace:function(e){f((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},B=function(){var e=C(),t=e.isLoading,a=e.error,n=e.sendRequest,l=e.clearError,i=Object(o.g)(),s=Object(r.useState)(),u=Object(p.a)(s,2),E=u[0],f=u[1],v=Object(r.useContext)(L),b=Object(o.h)().placeId,k=D({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),N=Object(p.a)(k,3),y=N[0],I=N[1],w=N[2];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("https://backpackd.herokuapp.com/api","/places/").concat(b));case 3:t=e.sent,f(t.place),w({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[n,b,w]);var x=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,n("".concat("https://backpackd.herokuapp.com/api","/places/").concat(b),"PATCH",JSON.stringify({title:y.inputs.title.value,description:y.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer ".concat(v.token)});case 4:i.push("/".concat(v.userId,"/")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return E||a||t?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:a,onClear:l}),t&&c.a.createElement("div",{className:"center"},c.a.createElement(O,null)),!t&&E&&c.a.createElement("form",{className:"place-form",onSubmit:x},c.a.createElement(V,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a valid title.",onInput:I,initialValue:E.title,initialValid:!0}),c.a.createElement(V,{id:"description",element:"textarea",label:"Description",validators:[T(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:I,initialValue:E.description,initialValid:!0}),c.a.createElement(h,{type:"submit",disabled:!y.isValid},"UPDATE PLACE"))):c.a.createElement("div",{className:"center"},c.a.createElement(j,null,c.a.createElement("h2",null,"Could not find place!")))},z=(a(51),function(){var e=Object(r.useContext)(L),t=Object(r.useState)(!0),a=Object(p.a)(t,2),n=a[0],l=a[1],i=C(),o=i.isLoading,s=i.error,u=i.sendRequest,E=i.clearError,f=D({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),v=Object(p.a)(f,3),b=v[0],k=v[1],N=v[2],y=function(){var t=Object(d.a)(m.a.mark((function t(a){var r,c,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!n){t.next=13;break}return t.prev=2,t.next=5,u("".concat("https://backpackd.herokuapp.com/api","/users/login"),"POST",JSON.stringify({email:b.inputs.email.value,password:b.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=t.sent,e.login(r.userId,r.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(c=new FormData).append("email",b.inputs.email.value),c.append("name",b.inputs.name.value),c.append("password",b.inputs.password.value),c.append("image",b.inputs.image.value),t.next=21,u("".concat("https://backpackd.herokuapp.com/api","/users/signup"),"POST",c);case 21:l=t.sent,e.login(l.userId,l.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{error:s,onClear:E}),c.a.createElement(j,{className:"authentication"},o&&c.a.createElement(O,{asOverlay:!0}),c.a.createElement("h2",null,"Login Required"),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:y},!n&&c.a.createElement(V,{element:"input",id:"name",type:"text",label:"Your Name",validators:[{type:"REQUIRE"}],errorText:"Please enter a name.",onInput:k}),!n&&c.a.createElement(R,{center:!0,id:"image",onInput:k}),c.a.createElement(V,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"Please enter a valid email address.",onInput:k}),c.a.createElement(V,{element:"input",id:"password",type:"password",label:"Password",validators:[T(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:k}),c.a.createElement(h,{type:"submit",disabled:!b.isValid},n?"LOGIN":"SIGNUP")),c.a.createElement(h,{inverse:!0,onClick:function(){n?N(Object(w.a)(Object(w.a)({},b.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):N(Object(w.a)(Object(w.a)({},b.inputs),{},{name:void 0,image:void 0}),b.inputs.email.isValid&&b.inputs.password.isValid),l((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}),q=(a(52),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),J=(a(53),function(e){var t=Object(r.useContext)(L);return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/".concat(t.userId,"/places")},"MY PLACES")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/places/new"},"ADD PLACE")),!t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(s.c,{to:"/auth"},"AUTHENTICATE")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),Q=(a(54),function(e){var t=c.a.createElement(E.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return i.a.createPortal(t,document.getElementById("drawer-hook"))}),W=(a(55),function(e){var t=Object(r.useState)(!1),a=Object(p.a)(t,2),n=a[0],l=a[1],i=function(){l(!1)};return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(f,{onClick:i}),c.a.createElement(Q,{show:n,onClick:i},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(J,null))),c.a.createElement(q,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(s.b,{to:"/"},"Backpackd")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(J,null))))}),X=function(){var e,t=function(){var e=Object(r.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(),i=Object(p.a)(l,2),o=i[0],s=i[1],u=Object(r.useState)(null),m=Object(p.a)(u,2),d=m[0],E=m[1],f=Object(r.useCallback)((function(e,t,a){c(t),E(e);var n=a||new Date((new Date).getTime()+36e5);s(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),v=Object(r.useCallback)((function(){c(null),s(null),E(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){if(a&&o){var e=o.getTime()-(new Date).getTime();n=setTimeout(v,e)}else clearTimeout(n)}),[a,v,o]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&f(e.userId,e.token,new Date(e.expiration))}),[f]),{login:f,logout:v,token:a,userId:d}}(),a=t.token,l=t.login,i=t.logout,u=t.userId;return e=a?c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/",exact:!0},c.a.createElement(I,null)),c.a.createElement(o.b,{path:"/:userId/places",exact:!0},c.a.createElement(H,null)),c.a.createElement(o.b,{path:"/places/new",exact:!0},c.a.createElement(U,null)),c.a.createElement(o.b,{path:"/places/:placeId"},c.a.createElement(B,null)),c.a.createElement(o.a,{to:"/"})):c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/",exact:!0},c.a.createElement(I,null)),c.a.createElement(o.b,{path:"/:userId/places",exact:!0},c.a.createElement(H,null)),c.a.createElement(o.b,{path:"/auth"},c.a.createElement(z,null)),c.a.createElement(o.a,{to:"/auth"})),c.a.createElement(L.Provider,{value:{isLoggedIn:!!a,token:a,userId:u,login:l,logout:i}},c.a.createElement(s.a,null,c.a.createElement(W,null),c.a.createElement("main",null,e)))};i.a.render(c.a.createElement(X,null),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.b9cc6c34.chunk.js.map
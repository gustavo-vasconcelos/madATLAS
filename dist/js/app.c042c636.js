(function(e){function t(t){for(var a,r,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)r=o[d],n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"04db":function(e,t,s){"use strict";var a=s("ba12"),n=s.n(a);n.a},"0cd0":function(e,t,s){},"2c19":function(e,t,s){},"4ffd":function(e,t,s){e.exports=s.p+"img/logo.50252c0e.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),s("vue-snotify")],1)},i=[],r=s("be94"),o=s("2f62"),l={users:[{id:1,profileId:3,name:"Administrador",username:"admin",password:"12345",email:"admin@atlas.pt",picture:"https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",gender:1,idInstitution:1},{id:2,profileId:2,name:"Proponente de evento",username:"proponente",password:"12345",email:"proponente@atlas.pt",picture:"https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",gender:1,idInstitution:1},{id:3,profileId:1,name:"Atlas",username:"atlas",password:"12345",email:"atlas@atlas.pt",picture:"https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",gender:1,idInstitution:1}],institutions:[{id:1,name:"ESMAD"},{id:2,name:"ESHT"}]},u={methods:Object(r["a"])({},Object(o["b"])(["setUsers","setInstitutions","userLoggedIn"])),created:function(){var e=this;window.addEventListener("beforeunload",function(){e.$destroy()}),localStorage.users?this.setUsers(JSON.parse(localStorage.users)):(localStorage.users=JSON.stringify(l.users),this.setUsers(l.users)),localStorage.loggedUserId&&this.userLoggedIn(parseInt(localStorage.loggedUserId)),localStorage.institutions?this.setInstitutions(JSON.parse(localStorage.institutions)):(localStorage.institutions=JSON.stringify(l.institutions),this.setInstitutions(l.institutions)),this.$store.subscribe(function(t){switch(t.type){case"USER_LOGGED_IN":e.$snotify.success("Bem vindo, ".concat(e.getUserById(e.getLoggedUserId).username,"!"),"Sessão iniciada",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,position:"centerTop"});break;case"USER_LOGGED_OUT":e.$snotify.success("Até logo!","Sessão terminada",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,position:"centerTop"});break;case"SIGNED_UP":e.$snotify.info("Faça login com os seus dados.","Conta criada.",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,position:"centerTop"});break}})},computed:Object(r["a"])({},Object(o["c"])(["getUsers","getInstitutions","getLoggedUserId","getUserById"])),destroyed:function(){localStorage.users=JSON.stringify(this.getUsers),localStorage.institutions=JSON.stringify(this.getInstitutions),localStorage.loggedUserId=JSON.stringify(this.getLoggedUserId)}},c=u,d=(s("5c0b"),s("2877")),m=Object(d["a"])(c,n,i,!1,null,null,null);m.options.__file="App.vue";var f=m.exports,p=(s("7514"),s("7f7f"),s("8c4f")),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},[s("Navbar",{staticStyle:{"margin-bottom":"75px"}}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{staticStyle:{padding:"50px 0 60px 0"}})],1)],1),s("AtlasFooter")],1)},b=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"atlas1",fixed:"top"}},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[a("img",{attrs:{src:s("4ffd"),alt:"ATLAS",height:"50"}})]),a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("router-link",{staticClass:"nav-link",class:{"active-route":e.isActive("home")},attrs:{to:{name:"home"}}},[e._v("Início")]),a("router-link",{staticClass:"nav-link",class:{"active-route":e.isActive("events")},attrs:{to:{name:"events"}}},[e._v("Eventos")]),a("router-link",{staticClass:"nav-link",class:{"active-route":e.isActive("about")},attrs:{to:{name:"about"}}},[e._v("Sobre")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[-1===e.getLoggedUserId?a("router-link",{staticClass:"nav-link",class:{"active-route":e.isActive("login")},attrs:{to:{name:"login"}}},[e._v("Iniciar sessão")]):a("div",[a("b-dropdown",{attrs:{variant:"link",id:"nav-user-logged"}},[a("template",{slot:"button-content"},[a("b-img",{attrs:{rounded:"circle",height:"35",width:"35",fluid:"",src:e.getUserById(e.getLoggedUserId).picture,alt:e.getUserById(e.getLoggedUserId).username}}),a("span",{staticClass:"ml-2",staticStyle:{color:"white"}},[e._v(e._s(e.getUserById(e.getLoggedUserId).username[0].toUpperCase()+e.getUserById(e.getLoggedUserId).username.substr(1,e.getUserById(e.getLoggedUserId).username.length-1)))])],1),1!==e.getUserById(e.getLoggedUserId).profileId?[a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"backoffice"}}},[e._v("Painel de controlo")]),a("b-dropdown-divider")]:e._e(),a("b-dropdown-item-button",[e._v("Perfil")]),a("b-dropdown-item-button",{on:{click:e.userLoggedOut}},[e._v("Terminar sessão")])],2)],1)],1)],1)],1)])],1)},g=[],_={name:"Navbar",methods:Object(r["a"])({isActive:function(e){return"events"===e?this.$route.name===e||"eventsInfo"===this.$route.name:this.$route.name===e}},Object(o["b"])(["userLoggedOut"])),computed:Object(r["a"])({},Object(o["c"])(["getLoggedUserId","getUserById"]))},w=_,I=(s("66f5"),Object(d["a"])(w,h,g,!1,null,"6d6a69ed",null));I.options.__file="Navbar.vue";var k=I.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid bg-atlas1 py-3"},[e._v("\n        © ATLAS 2018 - Todos os direitos reservados.\n    ")])},y=[],U={name:"AtlasFooter"},O=U,x=(s("04db"),Object(d["a"])(O,S,y,!1,null,"300f6a41",null));x.options.__file="AtlasFooter.vue";var E=x.exports,C={name:"MainView",components:{Navbar:k,AtlasFooter:E}},P=C,A=Object(d["a"])(P,v,b,!1,null,null,null);A.options.__file="Main.vue";var j=A.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("Home")])},T=[],B={name:"HomeView"},H=B,$=Object(d["a"])(H,L,T,!1,null,null,null);$.options.__file="Home.vue";var F=$.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v("Lista de eventos")]),s("router-link",{attrs:{to:{name:"eventsInfo",params:{id:1}}}},[e._v("Evento 1")]),s("br"),s("router-link",{attrs:{to:{name:"eventsInfo",params:{id:2}}}},[e._v("Evento 2")]),s("br"),s("router-link",{attrs:{to:{name:"eventsInfo",params:{id:3}}}},[e._v("Evento 3")]),s("br"),e._v("...\n")],1)},N=[],D={name:"EventsView"},R=D,G=Object(d["a"])(R,z,N,!1,null,null,null);G.options.__file="Events.vue";var V=G.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("Evento "+e._s(e.$route.params.id))])},J=[],q={name:"EventInfoView"},W=q,K=Object(d["a"])(W,M,J,!1,null,null,null);K.options.__file="EventInfo.vue";var Q=K.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("Sobre")])},Y=[],Z={name:"AboutView"},ee=Z,te=Object(d["a"])(ee,X,Y,!1,null,null,null);te.options.__file="About.vue";var se=te.exports,ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("Panel",{staticClass:"col-md-8 col-sm-9 col-10 mr-auto ml-auto",attrs:{title:"Iniciar sessão"}},[s("b-form",{on:{submit:function(t){t.preventDefault(),e.verifyCredentials()}}},[s("b-form-group",{staticClass:"mt-4",attrs:{label:"Utilizador","label-for":"username","invalid-feedback":e.usernameInvalidFeedback,state:e.usernameState}},[s("b-form-input",{attrs:{id:"username",state:e.usernameState,type:"text",maxlength:"15"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Palavra-passe","label-for":"password","invalid-feedback":e.passwordInvalidFeedback,state:e.passwordState}},[s("b-form-input",{attrs:{id:"password",state:e.passwordState,type:"password",maxlength:"15"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("button",{staticClass:"btn btn-atlas1 col-12 mt-2",attrs:{type:"submit"}},[e._v("Iniciar sessão")])],1),s("div",{staticClass:"mt-2"},[s("small",[e._v("Sem conta? Registe-se\n\t\t\t\t"),s("router-link",{attrs:{to:{name:"signup"}}},[e._v("aqui")]),e._v(".\n\t\t\t")],1)])],1),s("vue-snotify")],1)},ne=[],ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"border border-atlas rounded bg-white px-0"},[s("h4",{staticClass:"bg-atlas1 text-white pl-3 py-2"},[e._v(e._s(e.title))]),s("div",{staticClass:"px-3 pb-3"},[e._t("default")],2)])},re=[],oe={name:"Panel",props:["title"]},le=oe,ue=Object(d["a"])(le,ie,re,!1,null,null,null);ue.options.__file="Panel.vue";var ce=ue.exports,de={name:"LoginView",components:{Panel:ce},data:function(){return{username:"",password:"",attemptSubmit:!1}},methods:{verifyCredentials:function(){this.attemptSubmit=!0;var e=this.getUserByUsername(this.username);e&&e.password===this.password?(this.$store.dispatch("userLoggedIn",e.id),this.$router.push({name:"home"})):this.username&&this.password?this.$snotify.error("Dados de autenticação incorretos","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}):this.$snotify.error("Preencha todos os campos","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})}},computed:Object(r["a"])({},Object(o["c"])(["getUserByUsername"]),{usernameState:function(){return!(!this.username&&this.attemptSubmit)&&null},usernameInvalidFeedback:function(){return!this.username&&this.attemptSubmit?"Introduza o nome de utilizador":null},passwordState:function(){return!(!this.password&&this.attemptSubmit)&&null},passwordInvalidFeedback:function(){return!this.password&&this.attemptSubmit?"Introduza a palavra-passe":null}})},me=de,fe=(s("d6db"),Object(d["a"])(me,ae,ne,!1,null,null,null));fe.options.__file="Login.vue";var pe=fe.exports,ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("Panel",{staticClass:"col-md-8 col-sm-9 col-10 mr-auto ml-auto",attrs:{title:"Criar conta"}},[s("FormCreateAccount",{attrs:{backoffice:!1}})],1)],1)},be=[],he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-form",{on:{submit:function(t){t.preventDefault(),e.createAccount()}}},[s("b-form-group",{staticClass:"mt-4",attrs:{label:"Nome","label-for":"name","invalid-feedback":e.nameInvalidFeedback,"valid-feedback":e.nameValidFeedback,state:e.nameState}},[s("b-form-input",{attrs:{id:"name",state:e.nameState,type:"text",maxlength:"50"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Utilizador","label-for":"username","invalid-feedback":e.usernameInvalidFeedback,"valid-feedback":e.usernameValidFeedback,state:e.usernameState}},[s("b-form-input",{attrs:{id:"username",state:e.usernameState,type:"text",maxlength:"15"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Palavra-passe","label-for":"password","invalid-feedback":e.passwordInvalidFeedback,state:e.passwordState}},[s("b-form-input",{attrs:{id:"password",state:e.passwordState,type:"password",maxlength:"15"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e.backoffice?e._e():s("b-form-group",{staticClass:"mt-4",attrs:{label:"Confirmar palavra-passe","label-for":"confirmPassword","invalid-feedback":e.confirmPasswordInvalidFeedback,state:e.confirmPasswordState}},[s("b-form-input",{attrs:{id:"confirmPassword",state:e.confirmPasswordState,type:"password",maxlength:"15"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Email","label-for":"email","invalid-feedback":e.emailInvalidFeedback,state:e.emailState}},[s("b-form-input",{attrs:{id:"email",state:e.emailState,type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{"label-for":"picture","invalid-feedback":e.pictureInvalidFeedback,state:e.pictureState}},[s("template",{slot:"label"},[s("span",[e._v("URL foto -")]),s("span",{staticStyle:{"font-style":"italic",color:"rgb(80, 80, 80)"}},[e._v("opcional")])]),s("b-form-input",{attrs:{id:"picture",state:e.pictureState,type:"url"},model:{value:e.picture,callback:function(t){e.picture=t},expression:"picture"}})],2),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Género"}},[s("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-atlas2",options:e.genders,name:"genders"},model:{value:e.selectedGender,callback:function(t){e.selectedGender=t},expression:"selectedGender"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Instituição de ensino"}},[s("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-atlas2",options:e.institutions,name:"institutions"},model:{value:e.selectedInstitution,callback:function(t){e.selectedInstitution=t},expression:"selectedInstitution"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Tipo de utilizador"}},[s("b-form-radio-group",{attrs:{buttons:"",stacked:e.windowWidth<595,"button-variant":"outline-atlas2",options:e.userTypes,name:"userTypes"},model:{value:e.selectedUserType,callback:function(t){e.selectedUserType=t},expression:"selectedUserType"}})],1),s("button",{staticClass:"btn btn-atlas1 col-12 mt-2",attrs:{type:"submit"}},[e._v("Criar conta")])],1),s("vue-snotify")],1)},ge=[],_e=(s("a481"),s("ac6a"),{name:"FormCreateAccount",props:["backoffice"],data:function(){return{name:"",username:"",password:"",confirmPassword:"",email:"",picture:"",pictureLoaded:!1,genders:[{text:"Masculino",value:1},{text:"Feminino",value:2}],selectedGender:1,institutions:[],selectedInstitution:"",userTypes:[{text:"Aluno",value:1},{text:"Proponente de evento",value:2},{text:"Administrador",value:3}],selectedUserType:1,attemptSubmit:!1,windowWidth:0}},created:function(){var e=this;this.getInstitutions.forEach(function(t){e.institutions.push({text:t.name,value:t.id})}),this.selectedInstitution=this.institutions[0].value,window.addEventListener("resize",this.handleResize),this.handleResize()},methods:{createAccount:function(){this.attemptSubmit=!0,this.nameState&&this.usernameState&&this.passwordState&&(this.confirmPasswordState&&!this.backoffice||this.backoffice)&&this.emailState?this.backoffice?this.$store.dispatch("createAccount",{id:this.getLastUserId+1,profileId:this.selectedUserType,username:this.username,password:this.password,email:this.email,name:this.name,picture:this.picture?this.picture:"https://imgix.ranker.com/user_node_img/50025/1000492230/original/brandon-stark-tv-characters-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces",gender:this.selectedGender,institution:this.selectedInstitution}):(this.$store.dispatch("signUp",{id:this.getLastUserId+1,profileId:1,username:this.username,password:this.password,email:this.email,name:this.name,picture:this.picture?this.picture:"https://imgix.ranker.com/user_node_img/50025/1000492230/original/brandon-stark-tv-characters-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces",gender:this.selectedGender,institution:this.selectedInstitution}),this.$router.push({name:"login"})):this.$snotify.error("Preencha todos os campos corretamente","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})},handleResize:function(){this.windowWidth=window.innerWidth},verifyImgExists:function(e,t){var s=new Image;s.onerror=function(){t(!1)},s.onload=function(){t(!0)},s.src=e}},computed:Object(r["a"])({},Object(o["c"])(["getUserByUsername","getUserByEmail","getLastUserId","getInstitutions"]),{nameState:function(){return this.name||this.attemptSubmit?!(!this.name&&this.attemptSubmit):null},nameInvalidFeedback:function(){return!this.name&&this.attemptSubmit?"Introduza o nome":null},nameValidFeedback:function(){return 50===this.name.length?"Máximo 50 caracteres":null},usernameState:function(){return this.username||this.attemptSubmit?!(!this.username&&this.attemptSubmit)&&(this.username===this.username.replace(/[^a-z0-9]/gi,"")&&!this.getUserByUsername(this.username)):null},usernameInvalidFeedback:function(){return this.username!==this.username.replace(/[^a-z0-9]/gi,"")?"Introduza apenas letras e/ou números":this.getUserByUsername(this.username)?"Nome de utilizador em uso":"Introduza o nome de utilizador"},usernameValidFeedback:function(){return 15===this.username.length?"Máximo 15 caracteres":null},passwordState:function(){return this.password||this.attemptSubmit?!(!this.password&&this.attemptSubmit):null},passwordInvalidFeedback:function(){return this.passwordState?null:"Introduza a palavra-passe"},confirmPasswordState:function(){return(this.confirmPassword||this.attemptSubmit)&&(this.confirmPassword||!this.attemptSubmit||this.password)?this.confirmPassword===this.password:null},confirmPasswordInvalidFeedback:function(){return!this.confirmPassword&&this.attemptSubmit&&this.password?"As passwords devem ser iguais":this.confirmPassword!==this.password?"As passwords devem ser iguais":null},emailState:function(){return this.email||this.attemptSubmit?!(!this.email&&this.attemptSubmit)&&!this.getUserByEmail(this.email):null},emailInvalidFeedback:function(){return!this.email&&this.attemptSubmit?"Introduza o email":this.getUserByEmail(this.email)?"Email em uso":null},pictureState:function(){return!0},pictureInvalidFeedback:function(){return this.picture&&!this.pictureLoaded?"Imagem inválida":null}})}),we=_e,Ie=Object(d["a"])(we,he,ge,!1,null,null,null);Ie.options.__file="FormCreateAccount.vue";var ke=Ie.exports,Se={name:"SignUpView",components:{Panel:ce,FormCreateAccount:ke}},ye=Se,Ue=Object(d["a"])(ye,ve,be,!1,null,null,null);Ue.options.__file="SignUp.vue";var Oe=Ue.exports,xe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row container col-12",attrs:{id:"backofficeParent"}},[s("BackofficeSidebar",{staticClass:"col-xl-3 col-md-4 col-2"}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{staticClass:"col-xl-9 col-md-8 col-10 view"})],1)],1)},Ee=[],Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{refs:"backoffice"}},[a("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"atlas1",fixed:"top"}},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand ml-auto mr-auto",attrs:{to:{name:"home"}}},[a("img",{attrs:{src:s("4ffd"),alt:"ATLAS",height:"50"}})])],1)]),a("vs-sidebar",{directives:[{name:"show",rawName:"v-show",value:e.sidebarActive,expression:"sidebarActive"}],staticClass:"sidebar",attrs:{parent:e.$refs.backoffice,"default-index":e.getIndex,color:"primary",staticPosition:!0,"hidden-background":!0,reduce:e.sidebarReduced}},[a("vs-sidebar-item",{attrs:{index:"1",icon:"question_answer",to:{name:"backoffice"}}},[e._v("Início")]),3===e.getUserById(e.getLoggedUserId).profileId?a("vs-sidebar-item",{attrs:{index:"2",icon:"person",to:{name:"backofficeUsers"}}},[e._v("Utilizadores")]):e._e(),a("vs-sidebar-item",{attrs:{index:"3",icon:"event",to:{name:"backofficeEvents"}}},[e._v(e._s(2===e.getUserById(e.getLoggedUserId).profileId?"Meus eventos":"Eventos"))])],1)],1)},Pe=[],Ae={name:"BackofficeSidebar",data:function(){return{sidebarActive:!0,active:!1,windowWidth:0,windowHeight:0}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},methods:Object(r["a"])({handleResize:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight},toggleSidebar:function(){this.sidebarActive=!this.sidebarActive,this.toggleBackofficeSidebar(this.sidebarActive)}},Object(o["b"])(["toggleBackofficeSidebar"])),computed:Object(r["a"])({},Object(o["c"])(["getUserById","getLoggedUserId"]),{sidebarReduced:function(){return this.windowWidth<=768},getIndex:function(){switch(this.$route.name){case"backoffice":return 1;case"backofficeUsers":return 2;case"backofficeEvents":return 3}}})},je=Ae,Le=(s("9d14"),Object(d["a"])(je,Ce,Pe,!1,null,null,null));Le.options.__file="BackofficeSidebar.vue";var Te=Le.exports,Be={name:"BackofficeView",components:{BackofficeSidebar:Te}},He=Be,$e=(s("cb31"),Object(d["a"])(He,xe,Ee,!1,null,null,null));$e.options.__file="Backoffice.vue";var Fe=$e.exports,ze=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ne=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")]),s("p",[e._v("Home")])])}],De={name:"BackofficeHomeView"},Re=De,Ge=Object(d["a"])(Re,ze,Ne,!1,null,null,null);Ge.options.__file="Home.vue";var Ve=Ge.exports,Me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pb-5"},[s("Panel",{attrs:{title:"Criar utilizador"}},[s("FormCreateAccount",{attrs:{backoffice:!0}})],1),s("Panel",{staticClass:"mt-5",attrs:{title:"Lista de utilizadores - "+e.getUsers.length}},[s("DataTable",{attrs:{items:e.getUsers,fields:e.userFields}})],1)],1)},Je=[],qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 my-1"},[s("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Filtrar"}},[s("b-input-group",[s("b-form-input",{attrs:{placeholder:"Escreva para filtrar..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)],1)],1),s("div",{staticClass:"col-md-6 my-1 mb-3"},[s("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Por página"}},[s("b-form-select",{attrs:{options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1)]),s("b-table",{attrs:{items:e.items,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection,outlined:"",hover:"",responsive:"","empty-filtered-text":"Não há resultados para a sua pesquisa"},on:{"update:sortBy":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},filtered:e.onFiltered,"row-clicked":function(t){e.$router.push({name:"backofficeUserInfo",params:{username:t.username}})}},scopedSlots:e._u([{key:"userType",fn:function(t){return[e._v("\n\t\t\t"+e._s(e.getNameUserType(t.item.profileId))+"\n\t\t")]}}])}),s("div",{staticClass:"row"},[s("div",{staticClass:"my-1 mr-auto ml-auto"},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])],1)},We=[],Ke={name:"DataTable",props:["items","fields"],data:function(){return{currentPage:1,perPage:5,totalRows:this.items.length,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,modalInfo:{title:"",content:""}}},computed:{sortOptions:function(){return this.fields.filter(function(e){return e.sortable}).map(function(e){return{text:e.label,value:e.key}})}},methods:{getNameUserType:function(e){switch(e){case 1:return"Aluno";case 2:return"Propon. evento.";case 3:return"Administrador"}},clicked:function(){console.log("clicked")},info:function(e,t,s){this.modalInfo.title="Row index: ".concat(t),this.modalInfo.content=JSON.stringify(e,null,2),this.$root.$emit("bv::show::modal","modalInfo",s)},resetModal:function(){this.modalInfo.title="",this.modalInfo.content=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}}},Qe=Ke,Xe=(s("6224"),Object(d["a"])(Qe,qe,We,!1,null,null,null));Xe.options.__file="DataTable.vue";var Ye=Xe.exports,Ze={name:"BackofficeUsersView",components:{Panel:ce,FormCreateAccount:ke,DataTable:Ye},data:function(){return{userFields:[{key:"id",label:"ID",sortable:!0,sortDirection:"desc"},{key:"name",label:"Nome",sortable:!0},{key:"username",label:"Nome de utilizador",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"userType",label:"Tipo de utilizador"},{key:"actions",label:""}]}},computed:Object(r["a"])({},Object(o["c"])(["getUsers"]))},et=Ze,tt=Object(d["a"])(et,Me,Je,!1,null,null,null);tt.options.__file="Users.vue";var st=tt.exports,at=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(e._s(e.$route.params.username))])},nt=[],it={},rt=Object(d["a"])(it,at,nt,!1,null,null,null);rt.options.__file="UserInfo.vue";var ot=rt.exports,lt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("Eventos")])},ut=[],ct={},dt=Object(d["a"])(ct,lt,ut,!1,null,null,null);dt.options.__file="Events.vue";var mt=dt.exports,ft=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("Event info")])},pt=[],vt={},bt=Object(d["a"])(vt,ft,pt,!1,null,null,null);bt.options.__file="EventInfo.vue";var ht=bt.exports,gt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("404 not found")])},_t=[],wt={name:"NotFound"},It=wt,kt=Object(d["a"])(It,gt,_t,!1,null,null,null);kt.options.__file="NotFound.vue";var St=kt.exports;a["default"].use(o["a"]);var yt=new o["a"].Store({state:{users:[],loggedUserId:-1,institutions:[],notifications:[]},getters:{getUserById:function(e){return function(t){return e.users.find(function(e){return e.id===t})}},getUserByUsername:function(e){return function(t){return e.users.find(function(e){return e.username.toLowerCase()===t.toLowerCase()})}},getUserByEmail:function(e){return function(t){return e.users.find(function(e){return e.email.toLowerCase()===t.toLowerCase()})}},getLoggedUserId:function(e){return e.loggedUserId},getLastUserId:function(e){var t=0;return e.users.length&&e.users.forEach(function(e){e.id>=t&&(t=e.id)}),t},getUsers:function(e){return e.users},getInstitutions:function(e){return e.institutions}},mutations:{SET_USERS:function(e,t){e.users=t},USER_LOGGED_IN:function(e,t){e.loggedUserId=t},USER_LOGGED_OUT:function(e){e.loggedUserId=-1},SIGNED_UP:function(e,t){e.users.push(t)},SET_INSTITUTIONS:function(e,t){e.institutions=t},CREATED_ACCOUNT:function(e,t){e.users.push(t)}},actions:{setUsers:function(e,t){e.commit("SET_USERS",t)},setInstitutions:function(e,t){e.commit("SET_INSTITUTIONS",t)},userLoggedIn:function(e,t){e.commit("USER_LOGGED_IN",t)},userLoggedOut:function(e,t){e.commit("USER_LOGGED_OUT",t)},signUp:function(e,t){e.commit("SIGNED_UP",t)},createAccount:function(e,t){e.commit("CREATED_ACCOUNT",t)}}});a["default"].use(p["a"]);var Ut=new p["a"]({mode:"history",base:"/",routes:[{path:"/",component:j,meta:{title:"Início"},children:[{path:"",component:F,name:"home",meta:{title:"Início"}},{path:"eventos",name:"events",component:V,meta:{title:"Eventos"}},{path:"evento/:id",name:"eventsInfo",component:Q},{path:"sobre",name:"about",component:se},{path:"iniciar-sessao",name:"login",component:pe,meta:{requiresNotAuth:!0}},{path:"criar-conta",name:"signup",component:Oe,meta:{requiresNotAuth:!0}}]},{path:"/painel-controlo",component:Fe,meta:{requiresAuth:!0},children:[{path:"",name:"backoffice",component:Ve,meta:{authorizedProfiles:[2,3]}},{path:"utilizadores",name:"backofficeUsers",component:st,meta:{authorizedProfiles:[3]}},{path:"utilizador/:username",name:"backofficeUserInfo",component:ot,meta:{authorizedProfiles:[3]}},{path:"eventos",name:"backofficeEvents",component:mt,meta:{authorizedProfiles:[2,3]}},{path:"evento/:id",name:"backofficeEventInfo",component:ht,meta:{authorizedProfiles:[2,3]}}]},{path:"*",component:St}],scrollBehavior:function(e,t,s){return s||{x:0,y:0}}}),Ot=-1,xt=[],Et=null;Ut.beforeEach(function(e,t,s){if(t.name?(Ot=yt.state.loggedUserId,xt=yt.getters.getUsers):(Ot=parseInt(localStorage.loggedUserId),xt=JSON.parse(localStorage.users)),Et=xt.find(function(e){return e.id===Ot}),e.matched.some(function(e){return e.meta.requiresAuth}))if(-1===Ot)s({name:"login"});else{var a=e.matched.some(function(e){return!!e.meta.authorizedProfiles&&e.meta.authorizedProfiles.some(function(e){return e===Et.profileId})});a||1!==Et.profileId?a||2!==Et.profileId?s():s({name:"backoffice"}):s({name:"home"})}else e.matched.some(function(e){return e.meta.requiresNotAuth})&&-1!==Ot?s({name:"home"}):s()});var Ct=Ut,Pt=s("9f7b"),At=s("f213"),jt=s("fb9a"),Lt=s.n(jt);s("04f2"),s("c789");a["default"].config.productionTip=!1,a["default"].use(Pt["a"]),a["default"].use(At["a"]),a["default"].use(Lt.a,{theme:{colors:{primary:"#00225B",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"#008FC1"}}}),new a["default"]({router:Ct,store:yt,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(e,t,s){},6224:function(e,t,s){"use strict";var a=s("2c19"),n=s.n(a);n.a},"66f5":function(e,t,s){"use strict";var a=s("0cd0"),n=s.n(a);n.a},"81bc":function(e,t,s){},"9d14":function(e,t,s){"use strict";var a=s("81bc"),n=s.n(a);n.a},a9e7:function(e,t,s){},b3f0:function(e,t,s){},ba12:function(e,t,s){},cb31:function(e,t,s){"use strict";var a=s("b3f0"),n=s.n(a);n.a},d6db:function(e,t,s){"use strict";var a=s("a9e7"),n=s.n(a);n.a}});
//# sourceMappingURL=app.c042c636.js.map
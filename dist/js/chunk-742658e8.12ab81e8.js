(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-742658e8"],{"29ad":function(t,e,s){},"7cb4":function(t,e,s){"use strict";var a=s("29ad"),i=s.n(a);i.a},a09f:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form",{on:{submit:function(e){e.preventDefault(),t.edit?t.editDiscussion():t.createDiscussion()}}},[s("b-form-group",{attrs:{label:"Título","label-for":"name",state:t.titleState,"invalid-feedback":t.titleInvalidFeedback}},[s("b-form-input",{attrs:{id:"name",type:"text",maxlength:"50",state:t.titleState},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),s("b-form-group",{attrs:{label:"Categoria"}},[s("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-atlas2",options:t.categories,name:"categories"},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}})],1),s("b-form-group",{attrs:{label:"Texto","label-for":"text",state:t.textState,"invalid-feedback":t.textInvalidFeedback}},[s("b-form-textarea",{attrs:{id:"text",rows:3,"max-rows":6,state:t.textState},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),s("button",{staticClass:"btn btn-atlas1 col-12",attrs:{type:"submit"}},[t.loading?[s("b-spinner",{attrs:{variant:"atlas",small:"",label:"A carregar..."}})]:[t._v(t._s(t.edit?"Editar discussão":"Criar discussão"))]],2)],1)},i=[],n=s("be94"),r=(s("96cf"),s("1da1")),o=s("2f62"),c={props:["eventId","edit"],created:function(){this.edit&&(this.title=this.edit.title,this.selectedCategory=this.edit.category,this.text=this.edit.content),-1!==this.getLoggedUserId&&(this.getLoggedUserId!==this.getEventById(this.eventId).authorId&&3!==this.getUserById(this.getLoggedUserId).profileId||this.categories.push("Anúncio"))},data:function(){return{attemptSubmit:!1,title:"",categories:["Dúvida","Sugestão"],selectedCategory:"Dúvida",text:"",loading:!1}},methods:{createDiscussion:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.attemptSubmit=!0,!this.titleState||!this.textState){t.next=17;break}return t.prev=2,this.loading=!0,t.next=6,this.$http.post("/events/ids/".concat(this.$route.params.id,"/discussions"),{category:this.selectedCategory,title:this.title,content:this.text});case 6:e=t.sent,this.$store.commit("ADDED_DISCUSSION",e.data.content.discussion),this.loading=!1,this.$snotify.success("Discussão criada","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.resetFormCreateDiscussion(),t.next=15;break;case 13:t.prev=13,t.t0=t["catch"](2);case 15:t.next=18;break;case 17:this.$snotify.error("Preencha todos os campos corretamente","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0});case 18:case"end":return t.stop()}},t,this,[[2,13]])}));function e(){return t.apply(this,arguments)}return e}(),editDiscussion:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.attemptSubmit=!0,!this.titleState||!this.textState){t.next=17;break}return t.prev=2,this.loading=!0,t.next=6,this.$http.put("/events/ids/".concat(this.$route.params.id,"/discussions/").concat(this.edit._id),{category:this.selectedCategory,title:this.title,content:this.text});case 6:e=t.sent,this.$store.commit("EDITED_DISCUSSION",e.data.content.discussion),this.loading=!1,this.$snotify.success("Discussão editada","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0);case 15:t.next=18;break;case 17:this.$snotify.error("Preencha todos os campos corretamente","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0});case 18:case"end":return t.stop()}},t,this,[[2,12]])}));function e(){return t.apply(this,arguments)}return e}(),resetFormCreateDiscussion:function(){this.attemptSubmit=!1,this.title="",this.selectedCategory="Dúvida",this.text=""}},computed:Object(n["a"])({},Object(o["c"])(["getLastDiscussionIdByEventId","getLoggedUserId","getEventById","getUserById"]),{titleState:function(){return this.title||this.attemptSubmit?!(!this.title&&this.attemptSubmit):null},titleInvalidFeedback:function(){return!this.title&&this.attemptSubmit?"Introduza o título":null},textState:function(){return this.text||this.attemptSubmit?!(!this.text&&this.attemptSubmit):null},textInvalidFeedback:function(){return!this.text&&this.attemptSubmit?"Introduza o texto":null}})},l=c,d=s("2877"),u=Object(d["a"])(l,a,i,!1,null,null,null);e["a"]=u.exports},a481:function(t,e,s){s("214f")("replace",2,function(t,e,s){return[function(a,i){"use strict";var n=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,n,i):s.call(String(n),a,i)},s]})},d77f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading.page?s("div",{staticClass:"text-center"},[s("p",{staticClass:"mb-5"},[t._v(" ")]),s("b-spinner",{staticClass:"mt-5",staticStyle:{width:"8rem",height:"8rem"},attrs:{variant:"atlas",label:"A carregar..."}})],1):s("div",[s("TitleAtlas",{staticClass:"mb-0"},[s("router-link",{staticClass:"text-atlas2",attrs:{to:{name:"eventsInfo",params:{id:t.event._id}}}},[s("b",[t._v("["+t._s(t.event.category)+"]")]),t._v("\n\t\t\t\t"+t._s(t.event.name)+"\n\t\t\t")]),t._v(" /\n\t\t\t"),s("b",{staticClass:"text-atlas3",class:"Anúncio"===t.discussion.category?"bg-atlas2 p-1 rounded":""},[t._v("["+t._s(t.discussion.category)+"]")]),t._v("\n\t\t\t"+t._s(t.discussion.title)+"\n\t\t\t"),t.btnConditions()?s("button",{staticClass:"btn btn-atlas2",on:{click:function(e){t.modal=!0}}},[s("i",{staticClass:"fa fa-edit",attrs:{"aria-hidden":"true"}})]):t._e(),t.btnConditions()?s("button",{staticClass:"btn btn-danger ml-2",on:{click:function(e){t.btnRemoveClicked()}}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]):t._e()],1),s("div",{staticClass:"bg-white p-2 border-bottom border-left border-right rounded-bottom mb-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"ml-3"},[s("router-link",{staticClass:"text-atlas2",attrs:{to:{name:"profile",params:{username:t.discussion.author.username}}}},[s("i",{staticClass:"fa fa-user text-atlas1",attrs:{"aria-hidden":"true"}}),s("small",[t._v(" @"+t._s(t.discussion.author.username))])])],1),s("div",{staticClass:"ml-3"},[s("i",{staticClass:"fa fa-comments text-atlas1",attrs:{"aria-hidden":"true"}}),s("small",[t._v(" "+t._s(t.discussion.answers.length)+" "+t._s(1===t.discussion.answers.length?"resposta":"respostas"))])]),s("div",{staticClass:"ml-3"},[s("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),s("small",[t._v(" "+t._s(t.$moment(t.discussion.moment).format("LL")))])]),s("div",{staticClass:"ml-3"},[s("i",{staticClass:"fa fa-clock text-atlas1",attrs:{"aria-hidden":"true"}}),s("small",[t._v(" "+t._s(t.$moment(t.discussion.moment).format("HH:mm")))])])])]),s("EventDiscussionAnswer",{attrs:{answer:{id:0,author:t.discussion.author,content:t.discussion.content}}}),t._l(t.discussion.answers,function(t){return s("EventDiscussionAnswer",{key:t.id,attrs:{answer:t}})}),s("b-form",{on:{submit:function(e){e.preventDefault(),t.addAnswer()}}},[s("b-form-group",{staticClass:"mt-4",attrs:{label:"Responder"}},[s("b-form-textarea",{attrs:{id:"description",placeholder:"Escreva aqui a sua resposta...",rows:3},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1),s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.answer?s("div",[s("input",{staticClass:"btn float-right col-lg-2 col-md-3 col-5",attrs:{type:"reset",value:"Cancelar",disabled:t.btnsAnswerDisabled},on:{click:function(e){t.answer=""}}}),s("button",{staticClass:"btn btn-atlas1 float-right mr-2 col-lg-2 col-md-3 col-5",attrs:{type:"submit",disabled:t.btnsAnswerDisabled}},[t.loading.answer?[s("b-spinner",{attrs:{variant:"atlas",small:"",label:"A carregar..."}})]:[t._v("Responder")]],2)]):t._e()])],1),s("b-modal",{attrs:{title:"Editar discussão","header-bg-variant":"atlas1","header-text-variant":"white",centered:!0,"hide-footer":!0},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[s("FormDiscussion",{attrs:{eventId:t.event.id,edit:t.discussion}})],1)],2)])},i=[],n=(s("a481"),s("96cf"),s("1da1")),r=s("be94"),o=(s("20d6"),s("fc6e")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.windowWidth>768?s("div",{staticClass:"discussion"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-3 col-md-3 col-12 text-center"},[s("router-link",{attrs:{to:{name:"profile",params:{username:t.answer.author.username}}}},[s("img",{staticClass:"rounded-circle img-fluid col-8",attrs:{src:t.answer.author.picture,alt:""}}),s("br"),s("span",{staticClass:"mt-2 text-atlas2"},[t._v("@"+t._s(t.answer.author.username))])]),s("button",{staticClass:"btn btn-atlas1 col-12",attrs:{id:"profile-name"}},[t._v(t._s(t.getProfileName()))])],1),s("div",{staticClass:"col-xl-9 col-md-9 col-12"},[s("div",{staticClass:"bg-white border rounded pl-3 pr-1 py-2",staticStyle:{height:"100%"}},[0!==t.answer.id?[s("small",[s("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$moment(t.answer.createdAt).format("LL"))+"\n\t\t\t\t\t\t\t"),s("i",{staticClass:"fa fa-clock text-atlas1 ml-2",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$moment(t.answer.createdAt).format("HH:mm"))+"\n\t\t\t\t\t\t\t"),t.btnRemoveConditions()?s("button",{staticClass:"btn btn-danger float-right",on:{click:function(e){t.btnRemoveClicked()}}},[t.btnRemoveLoading?[s("b-spinner",{attrs:{variant:"atlas",small:"",label:"A carregar..."}})]:[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]],2):t._e()]),s("hr",{staticClass:"my-1"})]:t._e(),s("div",{staticClass:"row px-3"},[t._v(t._s(t.answer.content))])],2)])])]):s("div",{staticClass:"bg-white border rounded discussion"},[0!==t.answer.id?[s("div",{staticClass:"col-12 mt-2"},[s("small",[s("router-link",{attrs:{to:{name:"profile",params:{username:t.answer.author.username}}}},[s("img",{staticClass:"rounded-circle img-fluid",staticStyle:{width:"35px",height:"35px"},attrs:{src:t.answer.author.picture,alt:""}})]),t._v(" \n\t\t\t\t\t"),s("router-link",{staticClass:"text-atlas2",attrs:{to:{name:"profile",params:{username:t.answer.author.username}}}},[t._v("@"+t._s(t.answer.author.username))]),t._v("/\n\t\t\t\t\t"),s("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t"+t._s(t.$moment(t.answer.createdAt).format("LL"))+"\n\t\t\t\t\t/\n\t\t\t\t\t"),s("i",{staticClass:"fa fa-clock text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t"+t._s(t.$moment(t.answer.createdAt).format("HH:mm"))+"\n\t\t\t\t\t"),t.btnRemoveConditions()?s("button",{staticClass:"btn btn-danger float-right",on:{click:function(e){t.btnRemoveClicked()}}},[t.btnRemoveLoading?[s("b-spinner",{attrs:{variant:"atlas",small:"",label:"A carregar..."}})]:[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]],2):t._e()],1)]),s("hr",{staticClass:"my-1"})]:t._e(),s("div",{staticClass:"col-12 mt-2"},[t._v(t._s(t.answer.content))])],2),s("hr")])},l=[],d=(s("cadf"),s("551c"),s("097d"),s("2f62")),u={props:["answer"],created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},data:function(){return{windowWidth:0,btnRemoveLoading:!1}},methods:{handleResize:function(){this.windowWidth=window.innerWidth},getProfileName:function(){switch(this.answer.author.profileId){case 1:return"Aluno";case 2:return"Proponente de evento";case 3:return"Administrador"}},btnRemoveConditions:function(){return!(!this.getLoggedUser.username||0===this.answer.id||this.getLoggedUser._id!==this.answer.author._id&&1===this.getLoggedUser.profileId)},btnRemoveClicked:function(){var t=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Apagar resposta?",acceptText:"Apagar",cancelText:"Cancelar",text:"Esta reposta será apagada.",accept:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.btnRemoveLoading=!0,e.prev=1,e.next=4,t.$http.delete("/events/ids/".concat(t.$route.params.id,"/discussions/").concat(t.$route.params.discussionId,"/answers/").concat(t.answer._id));case 4:s=e.sent,t.$store.commit("REMOVED_ANSWER",s.data.content.answerId),t.$snotify.success("Resposta apagada","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0.response),t.$snotify.error("Erro ao apagar resposta","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0});case 13:t.btnRemoveLoading=!1;case 14:case"end":return e.stop()}},e,this,[[1,9]])}));function s(){return e.apply(this,arguments)}return s}()})}},computed:Object(r["a"])({},Object(d["c"])(["getLoggedUser"]))},m=u,h=s("2877"),p=Object(h["a"])(m,c,l,!1,null,null,null),v=p.exports,f=s("a09f"),g={components:{TitleAtlas:o["a"],EventDiscussionAnswer:v,FormDiscussion:f["a"]},created:function(){var t=this;this.loadPage(),this.$store.subscribe(function(e){if("EDITED_DISCUSSION"===e.type){t.modal=!1;var s=e.payload,a=s.title,i=s.category,n=s.content;t.discussion.title=a,t.discussion.category=i,t.discussion.content=n}if("REMOVED_ANSWER"===e.type){var r=t.discussion.answers.findIndex(function(t){return t._id===e.payload});t.discussion.answers.splice(r,1)}})},data:function(){return{loading:{page:!1,answer:!1},btnsAnswerDisabled:!1,event:{},discussion:{},answer:"",modal:!1,totalPages:1,currentPage:1,answersPerPage:10}},computed:Object(r["a"])({},Object(d["c"])(["getLoggedUser"])),methods:{loadPage:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading.page=!0,t.next=4,this.$http.get("/events/ids/".concat(this.$route.params.id,"/discussions/").concat(this.$route.params.discussionId));case 4:e=t.sent,this.event=e.data.content.event,this.discussion=e.data.content.discussion,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:this.loading.page=!1;case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}(),addAnswer:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.btnsAnswerDisabled=!0,this.loading.answer=!0,t.prev=2,t.next=5,this.$http.post("/events/ids/".concat(this.$route.params.id,"/discussions/").concat(this.$route.params.discussionId,"/answers"),{content:this.answer});case 5:e=t.sent,this.$snotify.success("Resposta adicionada","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.discussion.answers.push(e.data.content.answer),this.answer="",t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),this.$snotify.error("Não foi possível adicionar a resposta","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0});case 14:this.loading.answer=!1,this.btnsAnswerDisabled=!1;case 16:case"end":return t.stop()}},t,this,[[2,11]])}));function e(){return t.apply(this,arguments)}return e}(),btnConditions:function(){return!(!this.getLoggedUser.username||3!==this.getLoggedUser.profileId&&this.getLoggedUser._id!==this.event.author._id&&this.getLoggedUser._id!==this.discussion.author._id)},btnRemoveClicked:function(){var t=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Remover discussão?",acceptText:"Remover",cancelText:"Cancelar",text:"Esta discussão será removida para sempre.",accept:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading.page=!0,e.next=4,t.$http.delete("/events/ids/".concat(t.event._id,"/discussions/").concat(t.discussion._id));case 4:s=e.sent,s.data.success&&(t.$router.replace({name:"eventsInfo",params:{id:t.event._id}}),t.$snotify.success("Discussão removida","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$snotify.error("Erro ao remover discussão","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),t.loading.page=!1;case 12:case"end":return e.stop()}},e,this,[[0,8]])}));function s(){return e.apply(this,arguments)}return s}()})}}},b=g,w=(s("7cb4"),Object(h["a"])(b,a,i,!1,null,null,null));e["default"]=w.exports},fc6e:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"bg-atlas1 text-white pl-3 py-2 atlas-bold"},[t._t("default")],2)},i=[],n=s("2877"),r={},o=Object(n["a"])(r,a,i,!1,null,null,null);e["a"]=o.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74ad7354"],{"2fdb":function(t,e,s){"use strict";var o=s("5ca1"),n=s("d2c8"),a="includes";o(o.P+o.F*s("5147")(a),"String",{includes:function(t){return!!~n(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,s){var o=s("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[o]=!1,!"/./"[t](e)}catch(n){}}return!0}},6762:function(t,e,s){"use strict";var o=s("5ca1"),n=s("c366")(!0);o(o.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"9c8c":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Panel",{attrs:{title:"Pesquisar eventos"}},[s("div",{staticClass:"row"},[s("b-form-group",{staticClass:"col-lg-3 col-12",attrs:{label:"Nome/proponente","label-for":"name"},on:{input:t.getUrlQuery}},[s("b-form-input",{attrs:{id:"name",type:"text",maxlength:"50",disabled:t.loading.next||t.loading.previous},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),s("b-form-group",{staticClass:"col-lg-3 col-sm-6",attrs:{label:"Depois de","label-for":"dateStart"}},[s("b-form-input",{attrs:{id:"dateStart",type:"date",disabled:t.loading.next||t.loading.previous},model:{value:t.dateStart,callback:function(e){t.dateStart=e},expression:"dateStart"}})],1),s("b-form-group",{staticClass:"col-lg-3 col-sm-6",attrs:{label:"Antes de","label-for":"dateEnd"}},[s("b-form-input",{attrs:{id:"dateEnd",type:"date",disabled:t.loading.next||t.loading.previous},model:{value:t.dateEnd,callback:function(e){t.dateEnd=e},expression:"dateEnd"}})],1),s("b-form-group",{staticClass:"col-lg-3 col-12",attrs:{label:t.windowWidth>=992?".":""}},[s("button",{staticClass:"btn btn-atlas1 col-12",attrs:{disabled:t.loading.next||t.loading.previous},on:{click:function(e){t.searchCollapse=!t.searchCollapse}}},[s("i",{staticClass:"fa",class:t.searchCollapse?"fa-arrow-up":"fa-arrow-down",attrs:{"aria-hidden":"true"}}),t._v(" Pesquisa avançada\n\t\t\t\t")])]),s("b-collapse",{staticClass:"col-12 mb-3",attrs:{id:"searchCollapse"},model:{value:t.searchCollapse,callback:function(e){t.searchCollapse=e},expression:"searchCollapse"}},[s("b-card",[s("div",{staticClass:"row"},[s("b-form-group",{staticClass:"col-12",attrs:{label:"Tags","label-for":"filterTag"}},[s("b-form-input",{attrs:{id:"filterTag",type:"text",maxlength:"50",placeholder:"Filtrar tags..."},model:{value:t.filterTags,callback:function(e){t.filterTags=e},expression:"filterTags"}}),s("b-form-checkbox-group",{staticClass:"mt-2 px-1",staticStyle:{"overflow-y":"scroll","max-height":"200px"},attrs:{name:"tags",options:t.getFilteredTags,stacked:!0},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1),s("b-form-group",{staticClass:"col-lg-6 col-sm-6 col-12",attrs:{label:"Curso","label-for":"course"},on:{input:t.getUrlQuery}},[s("b-form-input",{attrs:{id:"course",type:"text",maxlength:"50"},model:{value:t.course,callback:function(e){t.course=e},expression:"course"}})],1),s("b-form-group",{staticClass:"col-lg-6 col-sm-6 col-12",attrs:{label:"Sala"}},[s("b-form-select",{model:{value:t.classroom,callback:function(e){t.classroom=e},expression:"classroom"}},[s("option",{attrs:{value:""}},[t._v("Selecione uma sala")]),t.classrooms.length?[t.classrooms.some(function(t){return"Associação de Estudantes"===t})?s("option",{attrs:{value:"Associação de Estudantes"}},[t._v("Associação de Estudantes")]):t._e(),t.classrooms.some(function(t){return"Auditório"===t})?s("option",{attrs:{value:"Auditório"}},[t._v("Auditório")]):t._e(),t.classroomFloorCondition("Piso 0")?s("optgroup",{attrs:{label:"Piso 0"}},[t.classrooms.some(function(t){return"Anfiteatro Joaquim Ribeiro"===t})?s("option",{attrs:{value:"Anfiteatro Joaquim Ribeiro"}},[t._v("Anfiteatro Joaquim Ribeiro")]):t._e(),t.classrooms.some(function(t){return"B102"===t})?s("option",{attrs:{value:"B102"}},[t._v("B102")]):t._e(),t.classrooms.some(function(t){return"B103A"===t})?s("option",{attrs:{value:"B103A"}},[t._v("B103A")]):t._e(),t.classrooms.some(function(t){return"B103B"===t})?s("option",{attrs:{value:"B103B"}},[t._v("B103B")]):t._e(),t.classrooms.some(function(t){return"B104"===t})?s("option",{attrs:{value:"B104"}},[t._v("B104")]):t._e(),t.classrooms.some(function(t){return"B105"===t})?s("option",{attrs:{value:"B105"}},[t._v("B105")]):t._e(),t.classrooms.some(function(t){return"B106"===t})?s("option",{attrs:{value:"B106"}},[t._v("B106")]):t._e(),t.classrooms.some(function(t){return"B107"===t})?s("option",{attrs:{value:"B107"}},[t._v("B107")]):t._e(),t.classrooms.some(function(t){return"B108"===t})?s("option",{attrs:{value:"B108"}},[t._v("B108")]):t._e(),t.classrooms.some(function(t){return"B109"===t})?s("option",{attrs:{value:"B109"}},[t._v("B109")]):t._e(),t.classrooms.some(function(t){return"B110"===t})?s("option",{attrs:{value:"B110"}},[t._v("B110")]):t._e(),t.classrooms.some(function(t){return"B111"===t})?s("option",{attrs:{value:"B111"}},[t._v("B111")]):t._e(),t.classrooms.some(function(t){return"B112"===t})?s("option",{attrs:{value:"B112"}},[t._v("B112")]):t._e()]):t._e(),t.classroomFloorCondition("Piso 1")?s("optgroup",{attrs:{label:"Piso 1"}},[t.classrooms.some(function(t){return"B201"===t})?s("option",{attrs:{value:"B201"}},[t._v("B201")]):t._e(),t.classrooms.some(function(t){return"B202"===t})?s("option",{attrs:{value:"B202"}},[t._v("B202")]):t._e(),t.classrooms.some(function(t){return"B203"===t})?s("option",{attrs:{value:"B203"}},[t._v("B203")]):t._e(),t.classrooms.some(function(t){return"B204"===t})?s("option",{attrs:{value:"B204"}},[t._v("B204")]):t._e(),t.classrooms.some(function(t){return"B205"===t})?s("option",{attrs:{value:"B205"}},[t._v("B205")]):t._e(),t.classrooms.some(function(t){return"B206"===t})?s("option",{attrs:{value:"B206"}},[t._v("B206")]):t._e(),t.classrooms.some(function(t){return"B207"===t})?s("option",{attrs:{value:"B207"}},[t._v("B207")]):t._e(),t.classrooms.some(function(t){return"B208"===t})?s("option",{attrs:{value:"B208"}},[t._v("B208")]):t._e(),t.classrooms.some(function(t){return"B209"===t})?s("option",{attrs:{value:"B209"}},[t._v("B209")]):t._e(),t.classrooms.some(function(t){return"B210"===t})?s("option",{attrs:{value:"B210"}},[t._v("B210")]):t._e(),t.classrooms.some(function(t){return"B211"===t})?s("option",{attrs:{value:"B211"}},[t._v("B211")]):t._e(),t.classrooms.some(function(t){return"B212"===t})?s("option",{attrs:{value:"B212"}},[t._v("B212")]):t._e()]):t._e(),t.classroomFloorCondition("Piso 2")?s("optgroup",{attrs:{label:"Piso 2"}},[t.classrooms.some(function(t){return"B301"===t})?s("option",{attrs:{value:"B301"}},[t._v("B301")]):t._e(),t.classrooms.some(function(t){return"B302"===t})?s("option",{attrs:{value:"B302"}},[t._v("B302")]):t._e(),t.classrooms.some(function(t){return"B303"===t})?s("option",{attrs:{value:"B303"}},[t._v("B303")]):t._e(),t.classrooms.some(function(t){return"B304"===t})?s("option",{attrs:{value:"B304"}},[t._v("B304")]):t._e(),t.classrooms.some(function(t){return"B305"===t})?s("option",{attrs:{value:"B305"}},[t._v("B305")]):t._e(),t.classrooms.some(function(t){return"B306"===t})?s("option",{attrs:{value:"B306"}},[t._v("B306")]):t._e(),t.classrooms.some(function(t){return"B307"===t})?s("option",{attrs:{value:"B307"}},[t._v("B307")]):t._e(),t.classrooms.some(function(t){return"B308"===t})?s("option",{attrs:{value:"B308"}},[t._v("B308")]):t._e(),t.classrooms.some(function(t){return"B309"===t})?s("option",{attrs:{value:"B309"}},[t._v("B309")]):t._e(),t.classrooms.some(function(t){return"B310"===t})?s("option",{attrs:{value:"B310"}},[t._v("B310")]):t._e(),t.classrooms.some(function(t){return"B311"===t})?s("option",{attrs:{value:"B311"}},[t._v("B311")]):t._e(),t.classrooms.some(function(t){return"B312"===t})?s("option",{attrs:{value:"B312"}},[t._v("B312")]):t._e()]):t._e()]:t._e()],2)],1)],1)])],1),s("transition",{attrs:{name:"fade",mode:"in-out"}},[t.filtering?s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-atlas1 col-12",on:{click:t.clearSearch}},[t._v("Limpar pesquisa")])]):t._e()])],1)]),t.filtering?s("div",{staticClass:"mt-5"},[t.getFilteredEvents.length?s("div",[s("TitleAtlas",[t._v(t._s(1===t.getFilteredEvents.length?"Resultado":"Resultados")+" da pesquisa - "+t._s(t.getFilteredEvents.length))]),t.windowWidth>=768?t._l(t.getFilteredEventsSelectedPage,function(t){return s("EventListItem",{key:t._id,staticClass:"mb-1",attrs:{event:t}})}):t._l(t.getFilteredEventsSelectedPage,function(t){return s("EventCard",{key:t._id,staticClass:"mb-1",attrs:{event:t}})}),t.getFilteredEvents.length>t.filteredEventsPerPage?s("vs-pagination",{staticClass:"mt-3",attrs:{total:t.totalPages},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):s("div",[s("p",[t._v("Sem resultados para a sua pesquisa.")])])]):s("div",[s("div",{staticClass:"pt-5"},[s("TitleAtlas",[t._v("Próximos eventos")]),t.loading.next?s("div",{staticClass:"text-center"},[s("b-spinner",{staticStyle:{width:"8rem",height:"8rem"},attrs:{variant:"atlas",label:"A carregar..."}})],1):s("div",[t.windowWidth>=768?t._l(t.events.next,function(t){return s("EventListItem",{key:t._id,staticClass:"mb-1",attrs:{event:t}})}):[s("Carousel",{attrs:{margin:30,nav:!1,responsive:t.carouselResponsivity}},t._l(t.events.next,function(t){return s("EventCard",{key:t._id,attrs:{event:t}})}))]],2)],1),s("div",{staticClass:"pt-5"},[s("TitleAtlas",[t._v("Eventos anteriores")]),t.loading.previous?s("div",{staticClass:"text-center"},[s("b-spinner",{staticStyle:{width:"8rem",height:"8rem"},attrs:{variant:"atlas",label:"A carregar..."}})],1):s("div",[t.windowWidth>=768?t._l(t.getEndedEventsSelectedPage,function(t){return s("EventListItem",{key:t._id,staticClass:"mb-1",attrs:{event:t}})}):t._l(t.getEndedEventsSelectedPage,function(t){return s("EventCard",{key:t._id,staticClass:"mb-1",attrs:{ended:!0,event:t}})}),t.events.previous.length>t.endedEventsPerPage?s("vs-pagination",{staticClass:"mt-3",attrs:{total:t.totalPages},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2)],1)])],1)},n=[],a=(s("55dd"),s("96cf"),s("1da1")),r=(s("6762"),s("2fdb"),s("a481"),s("ac6a"),s("7f7f"),s("28a5"),s("cadf"),s("551c"),s("097d"),s("fc6e")),i=s("9c974"),l=s("7ec7"),c=s.n(l),u=s("a69d"),m=s("d85a"),d=(s("2f62"),{components:{TitleAtlas:r["a"],Panel:i["a"],Carousel:c.a,EventCard:u["a"],EventListItem:m["a"]},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.loadNext(),this.loadPrevious();var t=this.$route.query;if(t){if(t.nome&&(this.name=t.nome),t.depois_de&&(this.dateStart=t.depois_de),t.tags){var e=t.tags.split("_");this.selectedTags=e,this.searchCollapse=!0}t.curso&&(this.course=t.curso,this.searchCollapse=!0),t.sala&&(this.classroom=t.sala,this.searchCollapse=!0)}},watch:{loadingDone:function(){this.loading.next||this.loading.previous||(this.getTotalPages(),this.loadClassrooms(),this.loadTags())},getFilteredEvents:function(){this.getTotalPages()}},beforeRouteUpdate:function(t,e,s){if("events"===t.name&&t.query){if(t.query.tags){var o=t.query.tags.split("_");this.selectedTags=o,this.searchCollapse=!0}t.query.sala&&(this.classroom=t.query.sala,this.searchCollapse=!0)}s()},data:function(){return{events:{next:[],previous:[]},eventTags:[],loading:{tags:!1,next:!1,previous:!1},name:"",tags:"",dateStart:"",dateEnd:"",searchCollapse:!1,filterTags:"",selectedTags:[],course:"",classroom:"",classrooms:[],carouselResponsivity:{0:{items:1},768:{items:2},1200:{items:3}},windowWidth:0,totalPages:1,currentPage:1,endedEventsPerPage:5,totalPagesFilteredEvents:1,filteredEventsPerPage:10}},computed:{loadingDone:function(){return!this.loading.next&&!this.loading.previous},getEndedEventsSelectedPage:function(){return this.events.previous.length>this.endedEventsPerPage?this.events.previous.slice((this.currentPage-1)*this.endedEventsPerPage,(this.currentPage-1)*this.endedEventsPerPage+this.endedEventsPerPage):this.events.previous},filtering:function(){return this.currentPage=1,this.name||this.dateStart||this.dateEnd||this.selectedTags.length||this.course||this.classroom},getUrlQuery:function(){var t={};if(this.name?t.nome=this.name:delete t.nome,this.dateStart?t.depois_de=this.dateStart:delete t.depois_de,this.dateEnd?t.antes_de=this.dateEnd:delete t.antes_de,this.selectedTags.length){var e=[];this.selectedTags.forEach(function(t){return e.push(t)}),t.tags=e.join("_")}return this.course?t.curso=this.course:delete t.curso,this.classroom?t.sala=this.classroom:delete t.sala,this.$router.replace({name:"events",query:t}),!0},getFilteredEvents:function(){var t=this,e=this.events.next.filter(function(e){var s=!0;return t.name&&(s=(e.name.toLowerCase().includes(t.name.toLowerCase())||e.author.username.toLowerCase().includes(t.name.toLowerCase()))&&s),t.dateStart&&(s=t.$moment(t.dateStart)<=t.$moment(e.dateStart)&&s),t.dateEnd&&(s=t.$moment(t.dateEnd)>=t.$moment(e.dateStart)&&s),t.selectedTags.length&&(s=t.selectedTags.every(function(t){return e.tags.some(function(e){return t===e.name})})&&s),t.course&&(s=e.courses.some(function(e){return e.name.toLowerCase().includes(t.course.toLowerCase())||e.abbreviation.toLowerCase().includes(t.course.toLowerCase())})&&s),t.classroom&&(s=e.classroom.toLowerCase().includes(t.classroom.toLowerCase())&&s),s}),s=this.events.previous.filter(function(e){var s=!0;return t.name&&(s=(e.name.toLowerCase().includes(t.name.toLowerCase())||e.author.username.toLowerCase().includes(t.name.toLowerCase()))&&s),t.dateStart&&(s=t.$moment(t.dateStart)<=t.$moment(e.dateStart)&&s),t.dateEnd&&(s=t.$moment(t.dateEnd)>=t.$moment(e.dateStart)&&s),t.selectedTags.length&&(s=t.selectedTags.every(function(t){return e.tags.some(function(e){return t===e.name})})&&s),t.course&&(s=e.courses.some(function(e){return e.name.toLowerCase().includes(t.course.toLowerCase())||e.abbreviation.toLowerCase().includes(t.course.toLowerCase())})&&s),t.classroom&&(s=e.classroom.toLowerCase().includes(t.classroom.toLowerCase())&&s),s});return e.concat(s)},getFilteredEventsSelectedPage:function(){return this.getFilteredEvents.length>this.filteredEventsPerPage?this.getFilteredEvents.slice((this.currentPage-1)*this.filteredEventsPerPage,(this.currentPage-1)*this.filteredEventsPerPage+this.filteredEventsPerPage):this.getFilteredEvents},getFilteredTags:function(){var t=this;return this.filterTags?this.eventTags.filter(function(e){return e.text.toLowerCase().includes(t.filterTags.toLowerCase())}):this.eventTags}},methods:{loadNext:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading.next=!0,t.next=4,this.$http.get("/events/occasions/after");case 4:e=t.sent,200===e.status&&(this.events.next=e.data.content.events,this.loading.next=!1),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),loadPrevious:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading.previous=!0,t.next=4,this.$http.get("/events/occasions/before");case 4:e=t.sent,200===e.status&&(this.events.previous=e.data.content.events,this.loading.previous=!1),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function e(){return t.apply(this,arguments)}return e}(),loadClassrooms:function(){var t=[];this.events.next.forEach(function(e){-1===t.indexOf(e.classroom)&&t.push(e.classroom)}),this.events.previous.forEach(function(e){-1===t.indexOf(e.classroom)&&t.push(e.classroom)}),t.sort(function(t,e){return t>e?1:t<e?-1:0}),this.classrooms=t},loadTags:function(){var t=[];this.events.next.forEach(function(e){e.tags.forEach(function(e){-1===t.indexOf(e.name)&&t.push(e.name)})}),this.events.previous.forEach(function(e){e.tags.forEach(function(e){-1===t.indexOf(e.name)&&t.push(e.name)})}),t.sort(function(t,e){return t>e?1:t<e?-1:0}),this.eventTags=t},handleResize:function(){this.windowWidth=window.innerWidth},clearSearch:function(){this.name="",this.dateStart="",this.dateEnd="",this.selectedTags=[],this.course="",this.classroom="",this.searchCollapse=!1},getTotalPages:function(){this.filtering?this.totalPages=Math.ceil(this.getFilteredEvents.length/this.filteredEventsPerPage):this.totalPages=Math.ceil(this.events.previous.length/this.endedEventsPerPage)},classroomFloorCondition:function(t){switch(t){case"Piso 0":return this.classrooms.some(function(t){return"Anfiteatro Joaquim Ribeiro"===t})||this.classrooms.some(function(t){return"B102"===t})||this.classrooms.some(function(t){return"B103A"===t})||this.classrooms.some(function(t){return"B103B"===t})||this.classrooms.some(function(t){return"B104"===t})||this.classrooms.some(function(t){return"B105"===t})||this.classrooms.some(function(t){return"B106"===t})||this.classrooms.some(function(t){return"B107"===t})||this.classrooms.some(function(t){return"B108"===t})||this.classrooms.some(function(t){return"B109"===t})||this.classrooms.some(function(t){return"B110"===t})||this.classrooms.some(function(t){return"B111"===t})||this.classrooms.some(function(t){return"B112"===t});case"Piso 1":return this.classrooms.some(function(t){return"B201"===t})||this.classrooms.some(function(t){return"B202"===t})||this.classrooms.some(function(t){return"B203"===t})||this.classrooms.some(function(t){return"B204"===t})||this.classrooms.some(function(t){return"B205"===t})||this.classrooms.some(function(t){return"B206"===t})||this.classrooms.some(function(t){return"B207"===t})||this.classrooms.some(function(t){return"B208"===t})||this.classrooms.some(function(t){return"B209"===t})||this.classrooms.some(function(t){return"B210"===t})||this.classrooms.some(function(t){return"B211"===t})||this.classrooms.some(function(t){return"B212"===t});case"Piso 2":return this.classrooms.some(function(t){return"B301"===t})||this.classrooms.some(function(t){return"B302"===t})||this.classrooms.some(function(t){return"B303"===t})||this.classrooms.some(function(t){return"B304"===t})||this.classrooms.some(function(t){return"B305"===t})||this.classrooms.some(function(t){return"B306"===t})||this.classrooms.some(function(t){return"B307"===t})||this.classrooms.some(function(t){return"B308"===t})||this.classrooms.some(function(t){return"B309"===t})||this.classrooms.some(function(t){return"B310"===t})||this.classrooms.some(function(t){return"B311"===t})||this.classrooms.some(function(t){return"B312"===t})}}}}),v=d,h=s("2877"),f=Object(h["a"])(v,o,n,!1,null,null,null);e["default"]=f.exports},"9c974":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"border border-atlas rounded bg-white px-0"},[s("h4",{staticClass:"bg-atlas1 text-white pl-3 py-2 atlas-bold"},[t._v(t._s(t.title))]),s("div",{staticClass:"px-3 pb-4"},[t._t("default")],2)])},n=[],a={name:"Panel",props:["title"]},r=a,i=s("2877"),l=Object(i["a"])(r,o,n,!1,null,null,null);e["a"]=l.exports},a481:function(t,e,s){s("214f")("replace",2,function(t,e,s){return[function(o,n){"use strict";var a=t(this),r=void 0==o?void 0:o[e];return void 0!==r?r.call(o,a,n):s.call(String(a),o,n)},s]})},d2c8:function(t,e,s){var o=s("aae3"),n=s("be13");t.exports=function(t,e,s){if(o(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(n(t))}}}]);
//# sourceMappingURL=chunk-74ad7354.d44186bc.js.map
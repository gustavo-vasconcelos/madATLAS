(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2993c684"],{"3e43":function(t,e,a){},"8e8f":function(t,e,a){"use strict";var s=a("3e43"),i=a.n(s);i.a},fc6e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"bg-atlas1 text-white pl-3 py-2 atlas-bold"},[t._t("default")],2)},i=[],n=a("2877"),l={},r=Object(n["a"])(l,s,i,!1,null,null,null);e["a"]=r.exports},fda7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5"},[t.getNotifications.length?a("div",[a("TitleAtlas",[t._v("As Minhas Notificações")]),t._l(t.getNotifications,function(e){return a("NotificationCard",{key:e.eventId,staticClass:"mb-1",attrs:{event:t.getEventById(e.eventId)}})})],2):a("div",[a("TitleAtlas",[t._v("As Minhas Notificações")]),[t._v("Não Tem Notificações Novas")]],2)])},i=[],n=a("be94"),l=a("fc6e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex event-list-item"},[a("router-link",{staticClass:"p-0 col-xl-3 col-lg-4 col-6",attrs:{to:{name:"eventsInfo",params:{id:t.event.id}}}},[a("img",{staticClass:"card-img-top",staticStyle:{height:"100%","border-radius":"0"},attrs:{src:t.event.picture.thumbnail}})]),a("div",{staticClass:"bg-atlas2 py-2 col-xl-9 col-lg-8 col-6"},[a("router-link",{staticClass:"router-link",attrs:{to:{name:"eventsInfo",params:{id:t.event.id}}}},[a("h5",{staticClass:"text-white atlas-bold"},[a("b",{staticClass:"text-atlas1"},[t._v("["+t._s(t.event.category)+"]")]),a("span",{staticClass:"atlas-semi-bold ml-1"},[t._v(t._s(t.event.name))])])]),a("div",{staticClass:"text-atlas3 event-card-body"},[a("div",{staticClass:"float-left mb-3"},[t._v(t._s(t.getEventShortDescription(t.event.id)))]),a("div",[a("div",{staticClass:"float-left"},t._l(t.event.tags,function(e){return a("router-link",{key:"event_"+t.event.id+"tag_"+e,staticClass:"text-atlas3",attrs:{to:{name:"events",query:{tags:t.getTagById(e).name}}}},[t._v(t._s("#"+t.getTagById(e).name+" "))])})),a("div",{staticClass:"float-right row"},[a("div",{staticClass:"ml-3"},[a("i",{staticClass:"fa fa-map-marker-alt text-atlas1",attrs:{"aria-hidden":"true"}}),a("router-link",{staticClass:"text-atlas3 ml-1",attrs:{to:{name:"events",query:{sala:t.event.classroom}}}},[t._v(t._s(t.event.classroom))])],1),a("div",{staticClass:"ml-3"},[a("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t._f("moment")(t.event.dateStart+" "+t.event.hourStart,"from","now"))+"\n          ")]),a("div",{staticClass:"ml-3"},[a("i",{staticClass:"fa fa-microphone-alt text-atlas1",attrs:{"aria-hidden":"true"}}),a("router-link",{staticClass:"text-atlas3",attrs:{to:{name:"profile",params:{username:t.getUserById(t.event.authorId).username}}}},[t._v(" @"+t._s(t.getUserById(t.event.authorId).username))])],1),a("div",{staticClass:"mx-3"},[a("i",{staticClass:"fa fa-users text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.event.enrollments.length)+" "+t._s(t.$moment(t.event.dateEnd+" "+t.event.hourEnd).isBefore(t.$moment())?"foram":1===t.event.enrollments.length?"vai":"vão")+"\n          ")])])])])],1)],1)},o=[],c=a("2f62"),d={props:["event"],created:function(){},data:function(){return{someDate:"2019-01-13"}},computed:Object(n["a"])({},Object(c["c"])(["getUserById","getTagById","getEventShortDescription"]))},v=d,u=(a("8e8f"),a("2877")),f=Object(u["a"])(v,r,o,!1,null,"e034f6bc",null),m=f.exports,h={components:{TitleAtlas:l["a"],NotificationCard:m},data:function(){return{}},methods:{handleResize:function(){this.windowWidth=window.innerWidth}},computed:Object(n["a"])({},Object(c["c"])(["getNotificationsByUserId","getEventById","getLoggedUserId"]),{getNotifications:function(){return this.getNotificationsByUserId(this.getLoggedUserId)}}),created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},g=h,_=Object(u["a"])(g,s,i,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2993c684.4394cbfc.js.map
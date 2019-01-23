import Vue from "vue"
import Router from "vue-router"
import MainView from "@/views/Main.vue"
import HomeView from "@/views/Home.vue"
import EventsView from "@/views/Events/Events.vue"
import EventInfoView from "@/views/Events/EventInfo.vue"
import EventDiscussionView from "@/views/Events/EventDiscussion.vue"
import UsersView from "@/views/Users.vue"
import LoginView from "@/views/Login.vue"
import SignUpView from "@/views/SignUp.vue"
import ProfileView from "@/views/Profile.vue"
import BackofficeView from "@/views/Backoffice/Backoffice.vue"
import BackofficeHomeView from "@/views/Backoffice/Home.vue"
import BackofficeUsersView from "@/views/Backoffice/Users.vue"
import BackofficeTagsView from "@/views/Backoffice/Tags.vue"
import BackofficeCoursesView from "@/views/Backoffice/Courses.vue"
import BackofficeEventsView from "@/views/Backoffice/Events.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainView,
      meta: {
        title: "Início"
      },
      children: [
        {
          path: "",
          component: HomeView,
          name: "home",
          meta: {
            title: "Início"
          }
        },
        {
          path: "eventos",
          name: "events",
          component: EventsView,
          meta: {
            title: "Eventos"
          }
        },
        {
          path: "evento/:id",
          name: "eventsInfo",
          component: EventInfoView
        },
        {
          path: "evento/:id/discussao/:discussionId",
          name: "eventDiscussion",
          component: EventDiscussionView
        },
        {
          path: "utilizadores",
          name: "users",
          component: UsersView
        },
        {
          path: "iniciar-sessao",
          name: "login",
          component: LoginView,
          meta: {
            requiresNotAuth: true
          }
        },
        {
          path: "criar-conta",
          name: "signup",
          component: SignUpView,
          meta: {
            requiresNotAuth: true
          }
        },
        {
          path: "perfil/:username",
          name: "profile",
          component: ProfileView
        }
      ]
    },
    {
      path: "/painel-controlo",
      component: BackofficeView,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "",
          name: "backoffice",
          component: BackofficeHomeView,
          meta: {
            authorizedProfiles: [2, 3]
          }
        },
        {
          path: "utilizadores",
          name: "backofficeUsers",
          component: BackofficeUsersView,
          meta: {
            authorizedProfiles: [3]
          }
        },
        {
          path: "categorias-tags",
          name: "backofficeTags",
          component: BackofficeTagsView,
          meta: {
            authorizedProfiles: [3]
          }
        },
        {
          path: "cursos",
          name: "backofficeCourses",
          component: BackofficeCoursesView,
          meta: {
            authorizedProfiles: [3]
          }
        },
        {
          path: "eventos",
          name: "backofficeEvents",
          component: BackofficeEventsView,
          meta: {
            authorizedProfiles: [2, 3]
          }
        }
      ]
    },
    {
      path: "*",
      redirect: { name: 'home' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

import store from "@/store/store.js"
let loggedUserId = -1, users = [], loggedUser = null

router.beforeEach((to, from, next) => {
  if (!from.name) {
    loggedUserId = parseInt(localStorage.loggedUserId)
    users = JSON.parse(localStorage.users)
  } else {
    loggedUserId = store.state.loggedUserId
    users = store.getters.getUsers
  }

  loggedUser = users.find(user => user.id === loggedUserId)

  if (to.matched.some(m => m.meta.requiresAuth)) {
    if (loggedUserId === -1) {
      next({ name: "login" })
    } else {
      let hasAuthorization = to.matched.some(
        m => m.meta.authorizedProfiles ?
          m.meta.authorizedProfiles.some(
            authorizedProfile => authorizedProfile === loggedUser.profileId
          ) : false
      )
      if (!hasAuthorization && loggedUser.profileId === 1) {
        next({ name: "home" })
      } else if (!hasAuthorization && loggedUser.profileId === 2) {
        next({ name: "backoffice" })
      } else {
        next()
      }
    }
  } else if (to.matched.some(m => m.meta.requiresNotAuth) && loggedUserId !== -1) {
    next({ name: "home" })
  } else {
    next()
  }
})

export default router
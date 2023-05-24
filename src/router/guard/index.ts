import type {Router} from "vue-router";

export function setupRouterGurad(router: Router) {
  createGurad(router)
}

function createGurad(router: Router) {
  router.beforeEach((to, from, next) => {
    next()
  })
}


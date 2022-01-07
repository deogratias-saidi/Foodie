import createAuth0Client from "@auth0/auth0-spa-js"
import { reactive } from "vue"

export const AuthState = reactive({
  isAuthenticated: false,
  user: null,
  loading: true,
  auth0: null,
})


const config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
}
export const useAuth0 = (state) => {
    const handleStateChange = async () => {
        state.isAuthenticated = !!(await state.auth0.isAuthenticated())
        state.user = await state.auth0.getUser()
        state.loading = false
    }


  const initAuth = () => {
    state.loading = true
    createAuth0Client({
      domain: config.domain,
      client_id: config.client_id,
      redirect_uri: window.location.origin,
      cacheLocation: "localstorage",
    }).then(async (auth) => {
      state.auth0 = auth
      await handleStateChange()
    })

    const login = async () => {
        await state.auth0.loginWwithPopup()
        await handleStateChange()
    }

    const logout = async () => {
        state.auth0.logout({
            returnTo: window.location.origin,
            client_id: config.client_id,
        })
    }

    return {
      login,
      logout,
      initAuth,
    }
  }
}

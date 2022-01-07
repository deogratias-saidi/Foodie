import { ref } from "vue"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { firebaseAuth } from "./useFirebase"

const isAuthenticated = ref(false)

const user = ref("")

const useAuth = () => {

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(provider)
        if (result.user) {
            isAuthenticated.value = true
            user.value = result.user.displayName
        }
    }


  const login = async (username, password) => {
    const res = await signInWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    )

    if (res.user) {
      isAuthenticated.value = true
      user.value = res.user.email
    }
  }

  const signup = async (username, password) => {
    const res = await createUserWithEmailAndPassword(
      firebaseAuth,
      username,
      password
    )

    if (res.user) {
      isAuthenticated.value = true
      user.value = res.user.email
    }
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = ""
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    signup,
    googleLogin
  }
}

export default useAuth

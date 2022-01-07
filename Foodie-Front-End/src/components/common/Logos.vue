<template>
  <div class="flex justify-between items-center">
    <button>
      <img src="../../assets/SVG/microsoft.svg" alt="Microsofft" />
    </button>
    <button>
      <img src="../../assets/SVG/facebook.svg" alt="Facebook" />
    </button>
    <button>
      <img src="../../assets/SVG/apple.svg" alt="Apple" />
    </button>
    <button @click.prevent="google">
      <img src="../../assets/SVG/google.svg" alt="Google" />
    </button>
  </div>
</template>

<script setup>
import useAuth from "../../auth/userAuth"
const { isAuthenticated, googleLogin } = useAuth()

// sign with google
const google = async () => {
  await googleLogin()
  goToHome()
}
const goToHome = () => {
  if (isAuthenticated.value) {
    router.push("/home")
  } else {
    setError("Invalid username or password")
    start()
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-info" role="alert">
          Úspěšně jste se přihlásili. Sem přijde obsah vaší stránky, který má být schovaný za autentifikací. Projekt si můžete stáhnout  <a href="https://github.com/janfriede/vue_auth_template" class="alert-link">zde</a>.
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <button
          @click="logoutUser"
          type="button"
          class="btn btn-info"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { logout } from "@/api/auth";

export default {
  methods: {
    logoutUser() {
      logout().then(response => {
        console.log(response);
        localStorage.setItem('token', '');
        localStorage.setItem('token_type', '');
        this.$router.push('/login');
      }).catch((e) => {
        console.log(e);
      });
    }
  }
}
</script>
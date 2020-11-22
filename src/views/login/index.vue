<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12 shadow">
            <form id="login-form" class="form" action="" method="post">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="username" class="text-info">Username:</label><br>
                <input
                  v-model="email"
                  type="text"
                  name="username"
                  id="username"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <button
                  type="button"
                  class="btn btn-info btn-md"
                  @click="handleSubmit"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/auth";

export default {
  data(){
    return {
      email : "",
      password : "",
    }
  },
  methods : {
    handleSubmit(e){
      e.preventDefault()
      if (this.password.length > 0 && this.email.length > 0) {
        const data = {
          email: this.email,
          password: this.password
        };
        login(data).then(response => {
          console.log(response);
          localStorage.setItem('token', response.access_token ? response.access_token : null);
          localStorage.setItem('token_type', response.token_type ? response.token_type : null);

          if (localStorage.getItem('token') !== null || localStorage.getItem('token') !== '') {
            if (this.$route.params.nextUrl){
              this.$router.push(this.$route.params.nextUrl)
            } else {
              this.$router.push('/home');
            }
          }
        }).catch((e) => {
          console.log(e);
        });
      }
    },
  }
}
</script>

<style scoped>
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  background-color: #EAEAEA;
  border-radius: 5px;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>
<template>
   <div class="login">
    <div class="main-login">
      <div class="login-page">
        <div class="image">
          <div class="welcome-title">
            <h1 class="font-weight-bold pl-4 ml-2 mt-5 mr-3">Welcome to <span class="text-primary">Coffee IT</span><br>
            </h1>
          </div>
        </div>
        <div class="form">
          <b-form class="form-login" @submit.prevent="submit">  

            <b-form-input 
            type="text" 
            id="username"
            placeholder="Username" 
            class="form-control" 
            required v-model="loginInfo.username"
            autofocus>
            </b-form-input>
     
          
            <b-form-input 
            type="password" 
            placeholder="Password" 
            class="form-control" 
            required v-model="loginInfo.password">
            </b-form-input>
      

            <input type="submit" value="Log In" class="login-button" @click="login(loginInfo)" />
          </b-form>
          <p class="ml-4 mb-4 register-text text-center">Don't have an account? <router-link style="font-size: 15px;" class="text-primary   font-weight-bold" to="/register">Sign Up</router-link></p>
          
        </div>
        </div>
      </div>
    </div>



 
</template>

<script>
import Axios from 'axios'
import router from '../routes'
export default {
    name: "login",
    data() {
        return {
          showPassword: false,
          loginInfo: {
            username: null,
            password: null,
          },
          cacheKey:'token',
          roleKey:'role',
          userKey:'username'
        }
    },
   
    methods: {
      login(value) {
            Axios.post(`${process.env.VUE_APP_API}` + "auth", value)
            .then((res) => {
        if(res.data.result[0].msg === "Username not registered") {
          alert('Username not registered');
        }
        if(res.data.result[0].msg === "Check Password"){
          alert('Check Password');
        }
        if(res.data.result[0].msg === 'Token created'){
          localStorage.setItem(this.cacheKey, res.data.result[0].token);
          localStorage.setItem(this.roleKey, res.data.result[0].role);
          localStorage.setItem(this.userKey, res.data.result[0].username);
        alert('Login Success')
          router.push('Home');
        }
      })
      .catch((err) => {
        console.log(err)
      });
      
    },
    
  },
        
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.welcome-title {
  background-color: rgba(5, 5, 5, 0.397);
  height: 100%;
  border-radius: 17px 0 0 17px;
  display: flex;
  justify-content: flex-end;
  color: #fff;
}

.main-login {
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-page {
  width: 98%;
  border-radius: 17px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #fff;
}

.image {
  background-image: url("../assets/icon/resto(2).png");
  background-size: cover;
  height: 90vh;
  border-radius: 17px 0 0 17px;
}

.form-login {
  border-radius: 0 17px 17px 0;
  padding: 20px;
}
.form-login input {
  margin-top: 20px;
}

.login-button {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-image: linear-gradient(120deg, #07038c, #2980b9);
  padding: 7px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-size: 200%;
  transition: 0.5;
}
.login-button:hover {
  position: right;
    transition: 0.5s;
}
.register-text a {
  color: blue;
}





@media screen and (max-width: 1050px) {
  .main-login {
    height: 140vh;
  }
  .image {
    border-radius: 17px 17px 0 0;
  }
  .login-page {
    grid-template-columns: 1fr;
  }
  .form-login {
    border-radius: 0 0 17px 17px;
  }
}
@media screen and (max-width: 576px) {
  .main-login {
    height: 100%;
  }
  .image {
    border-radius: 0;
  }
  .login-page {
    width: 100%;
    box-shadow: none;
  }
  .form-login {
    border-radius: 0;
  }
  .login-page {
    border-radius: 0;
  }
}
</style>


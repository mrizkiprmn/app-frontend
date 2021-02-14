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
          <form class="form-login" @submit.prevent="submit">
            <input @blur="onBlur" @focus="onFocus"  type="text" placeholder="Username" class="form-control" required v-model="loginInfo.username"/>
            <input @blur="onBlur" @focus="onFocus"  :type="showPassword ? 'text' : 'password'" label="password" placeholder="Password" class="form-control" required v-model="loginInfo.password"/>
            <input type="submit" value="Log In" class="login-button" @click="login(loginInfo)" />
          </form>
          <p class="ml-4 register-text">Don't have an account ? <router-link to="/register">Sign Up</router-link></p>
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
            Axios.post(process.env.VUE_APP_URL + "auth", value)
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

        onFocus(event) {
            event.target.classList.add("focus")
        },
        onBlur(event) {
            if (event.target.value === "") {
                event.target.classList.remove("focus")
            }
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
  margin-top: 28px;
}
.form-login input[type = 'text'],
.form-login input[label = 'password'] {
  border: none;
  background: none;
  border-bottom: 1px solid rgb(160, 159, 159);
  border-radius: 0;
}
.login-button {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: rgba(34, 34, 34, 0.884);
  padding: 7px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-size: 200%;
  transition: 0.5;
}
.login-button:hover {
  background-image: linear-gradient(120deg, #07038c, #a829b9);
  color: #fff;
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


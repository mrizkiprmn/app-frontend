<template>
  <nav class="dropdown">
    <button
      class="btn"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
    >
      <img style="width: 2.7rem;" src="../assets/icon/menu.png" alt="" />
    </button>
    <div class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
      <router-link to="/home" class="dropdown-item my-4">
        <img src="../assets/icon/fork.png" alt="" />
      </router-link>
      <router-link to="/history" class="dropdown-item my-1">
        <img src="../assets/icon/clipboard.png" alt="" />
      </router-link>
      <div class= "v dropdown-item my-4">
        <router-link to="/products">
          <img src="../assets/icon/add.png" alt="" />
        </router-link>
      </div>
      <router-link to="/" class="dropdown-item my-4">
        <img src="../assets/logout.png" alt="" @click="exit()" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      cacheKey: 'token',
      roleKey: 'role',
      userKey: 'username',
      role: '',
    }
  },
  methods:{
    exit(){
      localStorage.setItem(this.cacheKey, '');
      localStorage.setItem(this.roleKey, '');
      localStorage.setItem(this.userKey, '');
    },
  },
  mounted(){
    this.role = localStorage.getItem(this.roleKey)
  }
};
</script>

<style scoped>

.dropdown-menu {
  border-radius: 10px;
  min-width: 4.4rem;
}

.dropdown-item {
  padding: 0;
  margin-top: 100px;
}
</style>

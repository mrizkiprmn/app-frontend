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
    <div class="dropdown-menu text-center shadow" aria-labelledby="dropdownMenuButton">
      <router-link to="/home" class="dropdown-item my-4">
        <fa-icon :icon="['fas', 'utensils']" size="3x"/>
      </router-link>
      <router-link to="/history" class="dropdown-item my-1">
        <fa-icon :icon="['fas', 'clipboard-check']" size="3x"/>
      </router-link>
      <div class= "dropdown-item my-4">
        <router-link to="/products">
          <fa-icon style="color: black;" :icon="['fas', 'list-alt']" size="3x"/>
        </router-link>
      </div>
      <router-link to="/" class="dropdown-item my-4">
        <fa-icon :icon="['fas', 'sign-out-alt']" size="3x" @click="exit()"/>
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
  color:rgba(red, green, blue, alpha);
  /* color: rgba(19, 63, 145, 0); */
  border-radius: 5px;
  min-width: 4.4rem;
}

.dropdown-item {
  padding: 0;
}
</style>

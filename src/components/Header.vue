<template>
  <header>

    <RouterLink to="/" class="branding">
      <img class="logo" alt="logo" src="../assets/logo.png">
      <h1>TigerFit</h1>
    </RouterLink>

    <nav>
      <RouterLink class="nav" to="/">Home</RouterLink>
      <RouterLink class="nav" to="/about">About</RouterLink>
      <RouterLink class="nav" v-if="user" to="/dashboard">Dashboard</RouterLink>
    </nav>
    
    <div class="user-controls">
      <p class="current-user" v-if="user">User: {{ user.email }}</p>
      <RouterLink class="nav" v-if="!user" to="/auth">Sign In</RouterLink>
      <a class="nav" v-if="user" href="/" @click.prevent="onSignOut">Sign Out</a>
    </div>

  </header>
</template>

<script>

export default {
  props: {
    user: Object,
    onSignOut: Function
  }
};
</script>

<style scoped>

.branding {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.branding a{
  text-decoration: none;
}

.current-user {
  font-weight: bolder;
  display: inline-block;
  min-width: 140px;
  font-size: 22px;
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  text-decoration: none;
  color: white;
  /* text-shadow: 1px 1px white; */
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 0.5px black;
  background-color: rgba(65,214,195,0);
  border: 4px solid #ffd90000;
}
img.logo {
  width: 50px;
  height: 50px;
  
}
.nav {
  display: inline-block;
  width: 140px;
  font-size: 22px;
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  text-decoration: none;
  color: white;
  /* text-shadow: 1px 1px white; */
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 0.5px black;
  background-color: rgba(65,214,195,0);
  border: 4px solid #ffd90000;
}

a.nav:hover {
  background-color: var(--gymred);
  box-shadow: 0.9px 0.9px 0.9px black;
  border: 2px solid #CCDDD3
}

h1 {
  font-size: 48px;
  font-weight: normal;
  display: inline-block;
  margin: auto;
  text-transform: uppercase;
  color: black;
  /* text-shadow: 2px 2px white; */
}



header {
  display: flex;
  justify-content: space-between;
  
  box-shadow: 3px 2px 2px black;
  background: var(--gymred);
}

/* header:hover {
  background: #fff8ed;
} */


@media screen and (max-width: 480px) {

    header {
    display: flex;
    flex-direction:column;
    width: 100%;
    }
}

</style>

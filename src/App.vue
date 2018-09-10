<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header :user="user"
            :onSignOut="handleSignOut">
    </Header>  
    
    <RouterView :onUser="handleUser">
    </RouterView>  
  </div>
</template>


<script>
import { checkForToken, signOut } from './services/api';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    this.user = checkForToken();
  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

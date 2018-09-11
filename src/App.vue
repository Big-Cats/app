<template>
  <div id="app">
    <Header :user="user"
    :onSignOut="handleSignOut"
    />
  
    <RouterView :onUser="handleUser">
    </RouterView> 

    <Footer/> 
  </div>
</template>


<script>
import { checkForToken, signOut } from './services/api';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
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

</style>

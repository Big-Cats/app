import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Auth from './components/Auth.vue';
import Users from './components/Users.vue';
import Logout from './components/Logout.vue';
import Dashboard from './components/Dashboard.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/dashboard', component: Dashboard },
    { path: '/auth', component: Auth },
    { path: '/users', component: Users },
    { path: '/logout', component: Logout },
    { path: '*', redirect: '/' }
  ]
});
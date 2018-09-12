<template>
  <div id="app">
    <Header :user="user"
    :onSignOut="handleSignOut"
    />
  
    <div> 
      <p> {{  }}</p>
    </div>
  
    <RouterView 
      :user="user"
      :workoutSet="workoutSet"
      :programSet="programSet"
      :movements="movements"
      :muscles="muscles"
      :muscleMovements="muscleMovements"
      :selectedMuscle="selectedMuscle"
      :onUser="handleUser">
    </RouterView> 

    <Footer/> 
  </div>
</template>


<script>
import { checkForToken, signOut, getWorkouts, getLogs, getPrograms, getMovements, getMuscles } from './services/api';
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
      user: null,
      workoutSet: [],
      programSet: [],
      movements: [],
      muscles: [],
      muscleMovements: {},

      selectedMuscle: ''
    };
  },
  computed: {

    selectedMuscleMovements() {
      return null;
    }
  },
  created() {
    this.user = checkForToken();
    
    this.updateCoreData();


  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/');
    },

    getMuscleMovements() {
      this.muscles.forEach((item) => {
        this.muscleMovements[item.name] = [];
      });
      this.movements.forEach((item) => {
        this.muscleMovements[item.muscle].push(item);
      });
      console.log('MUSCLE MOVEMENTS', this.muscleMovements);
    },


    updateCoreData() {
      this.loading = true;
      this.error = null;

      getWorkouts()
        .then(response => {
          this.workoutSet = response;
          console.log('WORKOUT SET', this.workoutSet);
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
      getPrograms()
        .then(response => {
          this.programSet = response;
          console.log('PROGRAM SET', this.programSet);
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
      getMovements()
        .then(response => {
          this.movements = response;
          console.log('MOVEMENTS', this.movements);
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
      getMuscles()
        .then(response => {
          this.muscles = response;
          console.log('MUSCLES', this.muscles);
          this.loading = false;
        })
        .then(() => {
          this.getMuscleMovements();
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    },

    handleMuscleSelect() {
      
    }
  }
};
</script>

<style>

</style>

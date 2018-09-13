<template>
  <div id="app">
    <Header 
      :user="user"
      :onSignOut="handleSignOut"
    />
  
    <div class="demo">
      <button @click.prevent="handleAddWorkout">add workout</button>
      <button @click.prevent="handleRemoveWorkout">remove workout</button>
      <button @click.prevent="handleAddLog">add log</button>
      <button @click.prevent="handleRemoveLog">remove log</button>
      <button @click.prevent="handleUpdateLog">update log</button>  
    </div>

    <RouterView 
      :workoutSet="workoutSet"
      :programSet="programSet"
      :movements="movements"
      :muscles="muscles"
      :muscleMovements="muscleMovements"
      :selectedMuscle="selectedMuscle"
      :user="user"
      :onUser="handleUser"
      :handleAddLog="handleAddLog"
      :handleAddWorkout="handleAddWorkout"
      :handleRemoveWorkout="handleRemoveWorkout"
    >
    </RouterView> 

    <Footer/> 
  </div>
</template>


<script>
import { checkForToken, signOut, 
  getWorkouts, getPrograms, getMovements, getMuscles, 
  addWorkout, removeWorkout,
  addLog, removeLog, updateLog 
}       
  from './services/api';
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

      selectedMuscle: 'abdominals'
    };
  },
  created() {

    this.user = checkForToken();
    this.updateCoreData();
  },
  computed: {

    selectedMuscleMovements() {
      return null;
    }
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
        }).then(() => {
          getMuscles()
            .then(response => {
              this.muscles = response;
              console.log('MUSCLES', this.muscles);
              this.loading = false;
            })
            .then(() => {
              this.getMuscleMovements();
            });
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
      

    },
    handleAddWorkout() {
      addWorkout()
        .then((response) => {
          console.log('getback', response);
        })
        .then(() => {
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
        });
      console.log('workout added');
    },
    handleRemoveWorkout(){
      console.log('App removing workout', this.workoutSet[x].id);
      console.log(this);

      // .then(() => {

      // })

      // if(!confirm(`Are you sure you want to remove the workout on ${this.workout.date}?`)) {
      //   return;
      // }
      // return removeWorkout(this.workout.id)
      //   .then(() => {
      //     // this.$router.push('/neighborhoods');
      //   });
    },

    handleAddLog(log) {
      addLog(log)
        .then(() => {
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
        });
    },
    handleRemoveLog() {
      if(!confirm(`Are you sure you want to remove this ${this.log.movement} log?`)) {
        return;
      }
      return removeLog(this.log.id)
        .then(() => {
          this.$router.push('/neighborhoods');
        });
    },
    handleUpdateLog(toUpdate) {
      return updateLog(toUpdate)
        .then(updated => {
          this.log = updated;
          this.editing = false;
        });
    },
    
    
    // handleMuscleSelect() {
      
    // }

  }
};
</script>

<style>

</style>

<template>
    <div>
        <h2>Workouts</h2>
        <NewWorkout/>
        <WorkoutCard :movements="movements"/>
    </div>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
import NewWorkout from './NewWorkout.vue';
import { getMovements } from '../services/api';
export default {
  data(){
    return {
      movements: null
    };
  },
  created() {
    getMovements()
      .then(movements => {
        this.movements = movements;
      })
      .catch(err => {
        this.error = err;
      });
  },
  components: {
    WorkoutCard,
    NewWorkout
  }

};
</script>

<style>

</style>

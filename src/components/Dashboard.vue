<template>
    <div>
        <h2>Workouts</h2>
        <AddWorkout/>
        <ul>
          <WorkoutCard :movements="movements"/>
        </ul>
    </div>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
import AddWorkout from './AddWorkout.vue';
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
    AddWorkout
  }

};
</script>

<style>

</style>

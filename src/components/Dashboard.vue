<template>
    <div>
        <h2>User Dashboard</h2>
        <WorkoutCard :movements="movements"/>
    </div>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
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
    WorkoutCard
  }

};
</script>

<style>

</style>

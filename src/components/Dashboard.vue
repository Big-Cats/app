<template>
    <div>
        <h2>Workouts</h2>
        <NewWorkout :programs="programs"/>
        <WorkoutCard :movements="movements"
                    :programs="programs"/>
    </div>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
import NewWorkout from './NewWorkout.vue';
import { getMovements, getPrograms } from '../services/api';
export default {
  data(){
    return {
      movements: null,
      programs: null
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
    getPrograms()
      .then(programs => {
        this.programs = programs;
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

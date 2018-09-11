<template>
    <div>
        <h2>Workouts</h2>
        <AddWorkout
          :programs="programs"
        />
        <ul>
          <WorkoutCard 
            :movements="movements"
            :programs="programs"
          />        
        </ul>
    </div>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
import AddWorkout from './AddWorkout.vue';
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
    AddWorkout
  }

};
</script>

<style>

</style>

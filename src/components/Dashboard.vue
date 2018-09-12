<template>
    <div>
        <h2>Your Workouts</h2>
        <AddWorkout/>
        <div class="workout-cards">
          <h3>Workout List</h3>
          <ul>
            <WorkoutCard 
              
              :movements="movements"
              :muscleMovements="muscleMovements"
              :selectedMuscle="selectedMuscle"
              :exercises="workoutSet[0].exercises"
            />        
          </ul>
        </div>
    </div>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
import AddWorkout from './AddWorkout.vue';

export default {
  props: {
    workoutSet: Array,
    programSet: Array,
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    selectedMuscle: String
  },
  created() {

  },
  components: {
    WorkoutCard,
    AddWorkout
  }

};
</script>

<style>
ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  border: 1px solid black;
}

.workout-cards {
  border: 1px solid black;
}

</style>

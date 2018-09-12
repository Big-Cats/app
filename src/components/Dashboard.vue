<template>
    <div>
        <h2>Your Workouts</h2>
        <AddWorkout/>
        <div class="workout-cards">
          <h3>Workout List</h3>
          <ul>
            <WorkoutCard class="workout-card"
              v-for="(workout, index) in workoutSet"
              :key="index"
              :movements="movements"
              :muscleMovements="muscleMovements"
              :selectedMuscle="selectedMuscle"
              :exercises="workoutSet[index].exercises"
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
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  border: 1px solid black;
  
}

.workout-cards {
  border: 1px solid black;
}

.workout-card {
  border-radius: 1em;
  border: 2px solid #C97560;
  padding: 1em;
  background-color: #FFE2DB;
}
</style>

<template>
    <div>
        <h2>Workouts</h2>
        <AddWorkout/>
        <ul>
          <WorkoutCard :movements="movements"
          :muscleMovements="muscleMovements"
          :selectedMuscle="selectedMuscle"
          />        
        </ul>
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

</style>

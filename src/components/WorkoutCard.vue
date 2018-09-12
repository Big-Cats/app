<template>
    <li>
      <ExerciseCounter
        v-for="(exercise, index) in exercises"
        :key="index"
        :exercise="exercise"
      > 
      </ExerciseCounter>
      <AddExercise 
        :movements="movements"
        :muscleMovements="muscleMovements"
        :selectedMuscle="selectedMuscle"
      />
    </li>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';

export default {
  props: {
    movements: Array,
    muscleMovements: Object,
    selectedMuscle: String,
    exercises: Array
  },
  components: {
    AddExercise,
    ExerciseCounter
  }

};
</script>

<style>

li {
  border: 1px solid black;
}

</style>

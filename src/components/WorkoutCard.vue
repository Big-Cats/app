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
        :muscles="muscles"
        :muscleMovements="muscleMovements"
        :selectedMuscle="selectedMuscle"
        :handleAddLog="handleAddLog"
      />
    </li>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';

export default {
  props: {
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    selectedMuscle: String,
    exercises: Array,
    handleAddLog: Function
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
